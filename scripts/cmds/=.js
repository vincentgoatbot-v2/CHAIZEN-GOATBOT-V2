module.exports = {
	config: {
			name: "=",
			version: "1.0",
			author: "Vincent Armenion",
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
	if (event.body && event.body.toLowerCase() == "=") return message.reply("⚠ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗:\n\n   ∩_∩\n （„• ֊ •„)♡\n┏━∪∪━━━━━━━━━ღ❦ღ┓\n  𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐲𝐩𝐞 =𝐡𝐞𝐥𝐩 𝐭𝐨 𝐬𝐞𝐞 \n   𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬\n\n  𝗢𝗪𝗡𝗘𝗥: 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻 \n┗ღ❦ღ━━━━━━━━━━━━┛  ");
}
};
