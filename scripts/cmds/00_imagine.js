 const axios = require("axios");

 module.exports = {
  config: {
    name: "imagine",
    version: "1.1",
    author: "Vincent Armenion",
    countDown: 0,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "image",
    guide: {
      en: '{pn} your prompt '
    }
  },
  onStart: async function ({ message, api, args, event }) {
    const text = args.join(' ');
    
    if (!text) {
      return message.reply("⛔ 𝗜𝗡𝗩𝗔𝗟𝗜𝗗 𝗣𝗥𝗢𝗠𝗣𝗧𝗦\n\nPlease provide a prompt with models");
    }
    
    const [prompt, model] = text.split('|').map((text) => text.trim());
    const baseURL = `https://imagine-api.replit.app/imagine?prompt=${prompt}`;

    api.setMessageReaction("⏳", event.messageID, () => {}, true);
    
    message.reply("⚙️ 𝗚𝗘𝗡𝗥𝗘𝗔𝗧𝗜𝗡𝗚 𝗠𝗝\n\nGenerating please wait.", async (err, info) => {
      message.reply({
        attachment: await global.utils.getStreamFromURL(baseURL)
      });
      let ui = info.messageID;
      message.unsend(ui);
      api.setMessageReaction("✅", event.messageID, () => {}, true);
    });
  }
};
