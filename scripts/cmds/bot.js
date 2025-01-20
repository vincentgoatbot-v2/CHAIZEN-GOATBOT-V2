module.exports = {
 config: {
	 name: "bot",
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
 if (event.body && event.body.toLowerCase() === "bot") {
 return message.reply({
 body: "𝗦𝘁𝘂𝗽𝗽𝗶𝗱𝗱𝗼 𝗸𝗮𝗯𝗮 𝗮𝗻𝗴 𝗞𝘂𝗹𝗶𝘁 𝗻𝗴 𝗻𝗮𝗻𝗮𝘆 𝗺𝗼 𝗮𝗵 𝗢𝗼 𝗻𝗮 𝗕𝗼𝘁 𝗻𝗴𝗮 𝗮𝗸𝗼 𝗵𝗶𝗻𝗱𝗶 𝗹𝗮𝗻𝗴 𝗮𝗸𝗼 𝗯𝗮𝘀𝘁𝗮 𝗥𝗼𝗯𝗼𝘁 𝗺𝗮𝗻𝗴 𝗵𝘂𝗵𝘂𝗹𝗮 𝗱𝗶𝗻 𝗮𝗸𝗼 𝗸𝗮𝘆𝗮 𝗸𝗼 𝗻𝗴𝗮𝗻𝗴 𝗜 𝗿𝗲𝘃𝗶𝗲𝘄 𝘂𝘁𝗮𝗸 𝗺𝗼 𝗹𝗮𝗺𝗮𝗻𝗴 𝗳𝘂𝗰𝗸 𝘆𝗼𝘂! ",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Q1Zb7Fu.jpeg")
 });
 }
 }
}
