module.exports = {
	config: {
			name: "haha",
			version: "1.0",
			author: "armenion",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hahaha") return message.reply("𝗔𝗯𝗻𝗼𝗿𝗺𝗮𝗹 𝗸𝗮𝗯𝗮 𝗯𝗮𝗸𝗶𝘁 𝗸𝗮 𝗻𝗮𝘁𝗮𝘁𝗮𝘄𝗮𝗻𝗴 𝗺𝗮𝗴 𝗶𝘀𝗮 𝘀𝗮𝗿𝗶𝗹𝗶 𝗺𝗼 𝗯𝗮𝗻𝗴 𝘁𝗶𝗻𝗮𝘁𝗮𝘄𝗮𝗻𝗮𝗻 𝗺𝗼 𝗼 𝘀𝗮𝗱𝘆𝗮𝗻𝗴 𝗺𝗮𝘆 𝘀𝗮𝘆𝗮𝗱 𝗸𝗮 𝗹𝗮𝗻𝗴 𝗶𝗳 𝘆𝗲𝘀 𝗰𝗮𝗹𝗹 𝗺𝗼 𝗹𝗮𝗻𝗴 𝗗𝗼𝗰𝘁𝗼𝗿 𝗸𝗼👇https://www.facebook.com/VINCENT.CUTE.27 𝘀𝗶𝘆𝗮 𝗮𝗻𝗴 𝗴𝗮𝗴𝗮𝗺𝗼𝘁 𝘀𝗮 𝘀𝗮𝗸𝗶𝘁 𝗺𝗼 𝗽𝗮𝗴𝗮𝗴𝗮𝗹𝗶𝗻𝗴𝗶𝗻 𝗻𝗶𝘆𝗮 𝘂𝘁𝗮𝗸 𝗺𝗼 𝗽𝗮𝗽𝗮𝗹𝗶𝘁𝗮𝗻 𝗻𝗶𝘆𝗮 𝗻𝗴 𝗯𝗮𝗴𝗼 𝗻𝗮 𝗺𝗮𝗴𝗶𝗻𝗴 𝗸𝗮𝘆𝗼 𝗰𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀🎉🥳👏");
}
};
