const axios = require("axios");

module.exports = {
  config: {
    name: "rmvbg",
    aliases: ["removebg", "rbg"],
    role: 0,
    author: "Fahim_Noob",
    countDown: 5,
    longDescription: "Remove background from images.",
    category: "image",
    guide: {
      en: "${pn} reply to an image to remove its background."
    }
  },
  onStart: async function ({ message, api, args, event }) {
    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return message.reply("Please reply to an image to remove its background.");
    }

    const imgurl = encodeURIComponent(event.messageReply.attachments[0].url);
    const puti = 'xyz';
    const rbgUrl = `https://smfahim.${puti}/rbg?url=${imgurl}`;

    api.setMessageReaction("⏰", event.messageID, () => {}, true);

    message.reply("🔄| Removing background, please wait...", async (err, info) => {
      try {
        const attachment = await global.utils.getStreamFromURL(rbgUrl);
        message.reply({ 
          body: `✅| Here is your image with the background removed:`, 
          attachment: attachment 
        });

        let ui = info.messageID;          
        message.unsend(ui);
        api.setMessageReaction("✅", event.messageID, () => {}, true);
      } catch (error) {
        message.reply("❌| There was an error removing the background from your image.");
        console.error(error);
      }
    });
  }
};
