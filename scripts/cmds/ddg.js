const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "ddg",
    version: "1.0",
    author: "armenion",
    role: 0,
    countDown: 10,
    shortDescription: {
      en: "Search images"
    },
    category: "image",
    guide: {
      en: "{prefix}ddg <search query> -<number of images>"
    }
  },

  onStart: async function ({ api, event, args, usersData }) {
    try {
      const searchQuery = args.join(" ");

      if (!searchQuery.includes("-")) {
        return api.sendMessage(`Invalid format. Example: {prefix}ddg cats -5`, event.threadID, event.messageID);
      }

      const [query, numImages] = searchQuery.split("-").map(str => str.trim());
      const numberOfImages = parseInt(numImages);

      if (isNaN(numberOfImages) || numberOfImages <= 0 || numberOfImages > 50) {
        return api.sendMessage("Please specify a number between 1 and 50.", event.threadID, event.messageID);
      }

      const apiUrl = `https://ddg-pi.vercel.app/image?search=${encodeURIComponent(query)}`;
      const response = await axios.get(apiUrl);
      const imageData = response.data.images;

      if (!imageData || !Array.isArray(imageData) || imageData.length === 0) {
        return api.sendMessage(`No images found for "${query}".`, event.threadID, event.messageID);
      }

      const imgData = [];
      for (let i = 0; i < Math.min(numberOfImages, imageData.length); i++) {
        const imageUrl = imageData[i];
        try {
          const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        } catch (error) {
          console.error(error);
        }
      }

      await api.sendMessage({
        attachment: imgData,
        body: ``
      }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage(`An error occurred.`, event.threadID, event.messageID);
    }
  }
};
