const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports = {
  config: {
    name: "fluxpro",
    aliases: ["fxpro"],
    author: "Mahi--",
    version: "2.0",
    cooldowns: 15,
    role: 0,
    shortDescription: "Generate beautiful artwork from your ideas.",
    longDescription: "Bring your imaginative prompts to life with visually stunning images using the FluxPro AI system.",
    category: "AI Tools",
    guide: "{p}fluxpro <your prompt>",
  },

  onStart: async function ({ message, args, api, event }) {
    const prompt = args.join(" ");
    if (!prompt) {
      return api.sendMessage("⚠ Please provide a prompt to create an image. Try something vivid or descriptive!", event.threadID);
    }

    const startTime = Date.now();
    api.sendMessage("🎨 Crafting your image masterpiece... This may take a few moments!", event.threadID, event.messageID);

    try {
      const apiUrl = `https://mahi-apis.onrender.com/api/fluxpro?prompt=${encodeURIComponent(prompt)}`;
      const response = await axios.get(apiUrl);

      const imageUrl = response.data.imageUrl;
      if (!imageUrl) {
        return api.sendMessage("❌ Sorry, the image couldn’t be retrieved at this time. Please try again later.", event.threadID);
      }

      const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
      const cacheFolderPath = path.join(__dirname, "cache");
      if (!fs.existsSync(cacheFolderPath)) fs.mkdirSync(cacheFolderPath);

      const imagePath = path.join(cacheFolderPath, `generated_image_${Date.now()}.png`);
      fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, "binary"));

      const generationTime = ((Date.now() - startTime) / 1000).toFixed(2);
      const stream = fs.createReadStream(imagePath);

      message.reply({
        body: `✨ Your image is ready! Based on your prompt:\n*${prompt}*\n\n🕒 Generated in ${generationTime} seconds.`,
        attachment: stream
      });

    } catch (error) {
      console.error("Image Generation Error:", error);
      return api.sendMessage("❌ An error occurred while creating your image. Please try a different prompt or try again later.", event.threadID);
    }
  }
};
