module.exports = {
 config: {
	 name: "angas",
	 version: "1.0",
	 author: "armenion",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "angas") {
 return message.reply({
 body: "𝗞𝗮𝗹𝗺𝗮 𝗸𝗮 𝗹𝗮𝗻𝗴 𝗹𝗼𝗱𝘀 𝗮𝗸𝗼 𝗹𝗮𝗻𝗴 𝘁𝗼 𝗨𝘄𝗼 𝗨𝘄𝗼 🔥",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Ye1P63Y.mp4")
 });
 }
 }
}
