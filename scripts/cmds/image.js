const axios = require("axios");

module.exports = {
  config: {
    name: "image",
    version: "1.0",
    author: "Ayanfe",
    role: 0,
    shortDescription: {
      en: 'Fetch a random image from Unsplash API.'
    },
    category: "image",
    guide: {
      en: `{pn} [keyword]\nExample: ;image cats`
    }
  },
  onStart: async function ({ message, api, args, event }) {
    const text = args.join(' ');

    if (!text) {
      return message.reply("Please provide a keyword to search for a random image.");
    }

    const searchQuery = text.trim();
    const accessKey = "R6_-bAjOS06I89QrCoZ4zgVLEoLjjA3MdltvKuf2uD0"; // Unsplash Access Key
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(searchQuery)}&client_id=${accessKey}&count=1`;

    api.setMessageReaction("⏳", event.messageID, () => {}, true);

    try {
      const response = await axios.get(url);

      // Check if the API returns an array with at least one result
      if (response.data && response.data.length > 0) {
        const image = response.data[0];
        const imageUrl = image.urls.regular;

        // Fetch the image and send it as an attachment
        const attachment = await global.utils.getStreamFromURL(imageUrl);

        message.reply({
          body: `Here is your random image for "${searchQuery}"`,
          attachment
        });
      } else {
        message.reply("No images found 🗿");
      }
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while fetching the image. Please try again later.");
    }

    api.setMessageReaction("✅", event.messageID, () => {}, true);
  }
};
