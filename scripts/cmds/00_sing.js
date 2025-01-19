const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');
const https = require('https');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "sing",
        aliases: ["sound","music","song"], 
        version: "1.4", // Updated version
        author: "armenion",
        countDown: 20,
        role: 0,
        shortDescription: {
            en: "Search for a song and play audio."
        },
        description: "Fetch and play audio based on the provided song name.",
        category: "🎶 Media",
        guide: {
            en: "{pn} <song name>"
        }
    },

    onStart: async function ({ message, args, api }) {
        if (!args.length) {
            return message.reply("⚠️ *Oops!* You forgot to provide a song name! 😅\nExample: {pn} <song name> 🎧");
        }

        const songName = args.join(' ');
        const searchingMessage = await message.reply(`🔍 **Searching** for "${songName}"... Please hold tight! ⏳`);

        try {
            const { data: songData } = await axios.get(`https://upol-search.onrender.com/yt-audio?name=${encodeURIComponent(songName)}`);

            if (!songData?.title || !songData?.downloadUrl) {
                await message.unsend(searchingMessage.messageID);
                return message.reply("❌ *Sorry!* I couldn’t find the song you requested. Please try another name. 🙁");
            }

            const songInfoMessage = `
🎶 *Now Playing*: ${songData.title}  
🎤 *Artist*: ${songData.artist || "Unknown"}  
⏳ *Duration*: ${songData.duration || "Unknown"}  

Enjoy the music! 🎧✨  
If you want another song, just let me know! 🎵  
`;

            const audioStream = await axios({
                url: songData.downloadUrl,
                method: 'GET',
                responseType: 'stream',
                httpsAgent: new https.Agent({ rejectUnauthorized: false })
            });

            const tempPath = path.join(__dirname, 'tempAudio.mp3');
            const writer = fs.createWriteStream(tempPath);
            audioStream.data.pipe(writer);

            writer.on('finish', async () => {
                await message.unsend(searchingMessage.messageID);

                await message.reply({
                    body: songInfoMessage,
                    attachment: fs.createReadStream(tempPath)
                });

                fs.unlinkSync(tempPath);
            });

        } catch (error) {
            console.error(error);
            await message.unsend(searchingMessage.messageID);
            return message.reply("❌ *Oops!* Something went wrong while fetching the song... Please try again later. 😕");
        }
    }
};
