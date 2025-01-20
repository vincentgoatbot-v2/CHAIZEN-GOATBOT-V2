module.exports = {
 config: {
	 name: "fuck you",
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
 if (event.body && event.body.toLowerCase() === "fuck you") {
 return message.reply({
 body: "𝗢𝗹𝗼𝗹 𝗱𝘂𝗱𝗲 𝗳𝘂𝗰𝗸 𝘆𝗼𝘂 𝘁𝗼𝗼 𝗕𝗶𝘁𝗰𝗵🖕",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9bNeakd.gif")
 });
 }
 }
}
