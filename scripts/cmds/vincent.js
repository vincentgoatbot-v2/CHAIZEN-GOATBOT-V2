module.exports = {
 config: {
	 name: "vincent",
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
 if (event.body && event.body.toLowerCase() === "vincent") {
 return message.reply({
 body: "𝗗𝗼𝗻𝘁 𝗰𝗮𝗹𝗹 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻 𝗶𝗳 𝗵𝗲 𝗮𝗶𝗻𝘁 𝗵𝗲𝗿𝗲 𝗮𝗻𝗼𝗻𝗴 𝗸𝗮𝗶𝗹𝗮𝗻𝗴𝗮𝗻 𝗺𝗼 𝘀𝗮 𝗯𝗼𝘀𝘀 𝗸𝗼 𝘀𝗮𝗯𝗶𝗵𝗶𝗻 𝗺𝗼 𝗹𝗮𝗻𝗴 𝗮𝗻𝗴 𝗱𝗮𝗽𝗮𝘁 𝗺𝗼𝗻𝗴 𝗴𝘂𝘀𝘁𝗼𝗻𝗴 𝘀𝗮𝗯𝗶𝗵𝗶𝗻 𝗯𝗮𝘀𝘁𝗮 𝘄𝗮𝗹𝗮 𝗸𝗮 𝗹𝗮𝗻𝗴 𝗻𝗮 𝗮𝗮𝗽𝗮𝗸𝗮𝗻𝗴 𝗶𝗯𝗮 𝗻𝗮 𝗻𝗮𝗸𝗮𝗸𝗮𝘀𝗮𝗺𝗮 𝘀𝗮𝘆𝗼 𝗮𝘁 𝗻𝗮𝗸𝗮𝗸𝗮𝘀𝗮𝗺𝗮 𝘀𝗮 𝗶𝗯𝗮 𝘄𝗮𝗴 𝗺𝗼𝗻𝗴 𝗴𝗮𝘄𝗶𝗻 𝗮𝗻𝗴 𝗺𝗮𝘀𝗮𝗺𝗮 𝘀𝗮𝘆𝗼 𝗸𝘂𝗻𝗴 𝗮𝘆𝗮𝘄 𝗺𝗼𝗻𝗴 𝗴𝗮𝘄𝗶𝗻 𝗿𝗶𝗻 𝗶𝘁𝗼 𝘀𝗮𝘆𝗼 𝗻𝗴 𝗶𝗯𝗮",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Q1Zb7Fu.jpeg")
 });
 }
 }
	 }
