const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

const config = {
  name: "pinterest",
  aliases: ["pin"],
  version: "1.0",
  author: "Ayanfe",
  role: 0,
  countDown: 10,
  category: "utility",
  shortDescription: { en: "Search for images using Unsplash API." },
  longDescription: { en: "Search for images on Unsplash and display them." },
  guide: { en: "{pn} [keyword] | [number of images]\n{pn} cats | 5" },
};

const onStart = async ({ api, args, message, event, usersData }) => {
  if (!event.isGroup) return;

  const [searchQuery, numImages = 1] = args.join(" ").split("|").map(item => item.trim());
  const { senderID } = event;
  const userData = await usersData.get(senderID);

  if (numImages > userData.money) {
    return message.reply(`You don't have enough quota for ${numImages} images.\n\nUse ;daily to get more quota.`);
  }

  if (!searchQuery) {
    return message.reply("Please enter a keyword\nExample: ;pin funny cats | 5");
  }

  try {
    // Deduct quota
    await usersData.set(senderID, { money: userData.money - numImages, data: userData.data });
    message.reaction("🆗", event.messageID);

    const accessKey = "R6_-bAjOS06I89QrCoZ4zgVLEoLjjA3MdltvKuf2uD0"; // Unsplash Access Key
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=${Math.min(
      parseInt(numImages),
      15
    )}&client_id=${accessKey}`;

    const response = await axios.get(url);
    const results = response.data.results;

    if (results && results.length > 0) {
      const downloadFolder = path.join(__dirname, "tmp");

      // Ensure the folder exists
      await fs.ensureDir(downloadFolder);

      const imagePaths = [];

      for (const [index, image] of results.entries()) {
        const imagePath = path.join(downloadFolder, `image_${index + 1}.jpg`);
        const imageResponse = await axios.get(image.urls.regular, { responseType: "arraybuffer" });
        await fs.writeFile(imagePath, imageResponse.data);
        imagePaths.push(imagePath);
      }

      message.reply(
        {
          body: `Here are your ${numImages} images!`,
          attachment: imagePaths.map(imagePath => fs.createReadStream(imagePath)),
        },
        async () => {
          // Clean up files after sending
          for (const imagePath of imagePaths) {
            await fs.unlink(imagePath);
          }
        }
      );
    } else {
      message.reply("No images found 🗿");
    }
  } catch (error) {
    console.error(error);
    message.reply("An error occurred while fetching the images. Please try again later.");
  }
};

module.exports = { config, onStart };
