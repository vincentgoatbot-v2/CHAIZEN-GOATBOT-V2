const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "wallpaper",
    aliases: ["wp"],
    version: "1.1.0",
    author: "gojokaisen",
    role: 0,
    countDown: 25,
    shortDescription: {
      en: "Search for wallpapers"
    },
    longDescription: {
      en: "Search and download wallpapers from an API with a customizable number of results"
    },
    category: "image",
    guide: {
      en: "{prefix}wallpaper <search query> -<number of wallpapers>"
    }
  },

  onStart: async function ({ api, event, args }) {
    try {
      const keySearch = args.join(" ");
      if (!keySearch.includes("-")) {
        return api.sendMessage(
          `Please enter the search query and number of wallpapers to return in the format: ${this.config.guide.en}`,
          event.threadID,
          event.messageID
        );
      }

      // Parse search query and number of wallpapers
      const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
      const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 10;

      const response = await axios.get(`https://antr4x.onrender.com/get/searchwallpaper?keyword=${encodeURIComponent(keySearchs)}`);
      const { status, code, creator, size, img } = response.data;

      if (!status || code !== 200) {
        return api.sendMessage(
          `An error occurred while fetching wallpapers for "${keySearchs}". Please try again later.`,
          event.threadID,
          event.messageID
        );
      }

      // Create cache directory if it doesn't exist
      const cacheDir = path.join(__dirname, 'cache');
      await fs.ensureDir(cacheDir);

      const imgData = [];
      const numImages = Math.min(numberSearch, size);

      // Download and process images
      for (let i = 0; i < numImages; i++) {
        try {
          const imageUrl = img[i];
          const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          const imgPath = path.join(cacheDir, `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        } catch (error) {
          console.error(`Error processing image ${i + 1}:`, error);
          continue; // Skip failed images
        }
      }

      if (imgData.length === 0) {
        return api.sendMessage(
          "Failed to process any images. Please try again.",
          event.threadID,
          event.messageID
        );
      }

      // Send images
      await api.sendMessage(
        {
          attachment: imgData,
          body: `Here are ${imgData.length} wallpapers for "${keySearchs}"\nTotal results available: ${size}\nCreator: ${creator}`
        },
        event.threadID,
        event.messageID
      );

      // Cleanup cache
      await fs.remove(cacheDir);
    } catch (error) {
      console.error("Wallpaper command error:", error);
      return api.sendMessage(
        "An error occurred while fetching wallpapers. Please try again later.",
        event.threadID,
        event.messageID
      );
    }
  }
};
