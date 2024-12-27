const axios = require("axios");
const fs = require("fs");
const yts = require("yt-search");
const path = require("path");
const cacheDir = path.join(__dirname, "/cache");
const tmp = path.join(__dirname, "/tmp");

module.exports = {
 config: {
 name: "video",
 version: "1.1",
 aliases: ["video"],
 author: "Team Calyx",
 countDown: 5,
 role: 0,
 description: {
 en: "Search and download video from YouTube",
 },
 category: "media",
 guide: {
 en: "{pn} <search term>: search YouTube and download selected video",
 },
 },

 onStart: async ({ api, args, event }) => {
 if (args.length < 1) {
 return api.sendMessage("❌ Please use the format '/video <search term>'.", event.threadID, event.messageID);
 }

 const searchTerm = args.join(" ");
 try {
 const searchResults = await yts(searchTerm);
 const videos = searchResults.videos.slice(0, 6);

 if (videos.length === 0) {
 return api.sendMessage(`⭕ No results found for: ${searchTerm}`, event.threadID, event.messageID);
 }

 let msg = "";
 videos.forEach((video, index) => {
 msg += `${index + 1}. ${video.title}\nDuration: ${video.timestamp}\nChannel: ${video.author.name}\n\n`;
 });

 api.sendMessage(
 {
 body: msg + "Reply with a number to select.",
 attachment: await Promise.all(videos.map(video => fahimcalyx(video.thumbnail, path.join(tmp, `thumbnail_${video.videoId}.jpg`)))),
 },
 event.threadID,
 (err, info) => {
 global.GoatBot.onReply.set(info.messageID, {
 commandName: "video",
 messageID: info.messageID,
 author: event.senderID,
 videos,
 });
 },
 event.messageID
 );
 } catch (error) {
 console.error(error);
 return api.sendMessage("❌ Failed to search YouTube.", event.threadID, event.messageID);
 }
 },

 onReply: async ({ event, api, Reply }) => {
 await api.unsendMessage(Reply.messageID);
 api.setMessageReaction("⏳", event.messageID, () => {}, true);

 const choice = parseInt(event.body);
 if (isNaN(choice) || choice <= 0 || choice > Reply.videos.length) {
 return api.sendMessage("❌ Please enter a valid number.", event.threadID, event.messageID);
 }

 const selectedVideo = Reply.videos[choice - 1];
 const videoUrl = selectedVideo.url;
 console.log(videoUrl);

 try {
 const downloadUrlEndpoint = `https://alldownloader-mj2x.onrender.com/alldl?link=${encodeURIComponent(videoUrl)}`;
 const respo = await axios.get(downloadUrlEndpoint);
 const downloadUrl = respo.data.download_url;

 if (!downloadUrl) {
 return api.sendMessage("❌ Could not retrieve a video file. Please try again with a different search.", event.threadID, event.messageID);
 }

 console.log("Download URL:", downloadUrl);
 const totalSize = await getTotalSize(downloadUrl);

 const videoPath = path.join(cacheDir, `ytb_video_${selectedVideo.videoId}.mp4`);
 await downloadFileParallel(downloadUrl, videoPath, totalSize, 5);

 api.setMessageReaction("✅", event.messageID, () => {}, true);
 await api.sendMessage(
 {
 body: `📥 Video download successful:\n• Title: ${selectedVideo.title}\n• Channel: ${selectedVideo.author.name}`,
 attachment: fs.createReadStream(videoPath),
 },
 event.threadID,
 () => fs.unlinkSync(videoPath),
 event.messageID
 );
 } catch (e) {
 console.error(e);
 return api.sendMessage("❌ Failed to download.", event.threadID, event.messageID);
 }
 },
};

async function fahimcalyx(url, pathName) {
 try {
 const response = await axios.get(url, { responseType: "stream" });
 response.data.pipe(fs.createWriteStream(pathName));
 return new Promise((resolve) => {
 response.data.on("end", () => resolve(fs.createReadStream(pathName)));
 });
 } catch (error) {
 console.error(error);
 return null;
 }
}

async function getTotalSize(url) {
 const response = await axios.head(url);
 return parseInt(response.headers["content-length"], 10);
}

async function downloadFileParallel(url, filePath, totalSize, numChunks) {
 const chunkSize = Math.ceil(totalSize / numChunks);
 const chunks = [];

 async function downloadChunk(url, start, end, index) {
 console.log(`Starting chunk ${index + 1}/${numChunks}: bytes ${start}-${end}`);
 try {
 const response = await axios.get(url, {
 headers: { Range: `bytes=${start}-${end}` },
 responseType: "arraybuffer",
 });
 console.log(`Chunk ${index + 1} downloaded.`);
 return response.data;
 } catch (error) {
 console.error(`Error downloading chunk ${index + 1}:`, error);
 throw error;
 }
 }

 for (let i = 0; i < numChunks; i++) {
 const start = i * chunkSize;
 const end = Math.min(start + chunkSize - 1, totalSize - 1);
 chunks.push(downloadChunk(url, start, end, i));
 }

 try {
 const buffers = await Promise.all(chunks);

 const fileStream = fs.createWriteStream(filePath);
 for (const buffer of buffers) {
 fileStream.write(Buffer.from(buffer));
 }

 await new Promise((resolve, reject) => {
 fileStream.on("finish", resolve);
 fileStream.on("error", reject);
 fileStream.end();
 });

 console.log("Video downloaded successfully.");
 } catch (error) {
 console.error("Error downloading or writing the video:", error);
 }
}
