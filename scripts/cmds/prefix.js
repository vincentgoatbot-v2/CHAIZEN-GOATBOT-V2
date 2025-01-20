const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix2",
		version: "1.4",
		author: "Vincent",
		countDown: 5,
		role: 0,
		description: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		category: "config",
		guide: {
			vi: "   {pn} <new prefix>: thay đổi prefix mới trong box chat của bạn"
				+ "\n   Ví dụ:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: thay đổi prefix mới trong hệ thống bot (chỉ admin bot)"
				+ "\n   Ví dụ:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: thay đổi prefix trong box chat của bạn về mặc định",
			en: "   {pn} <new prefix>: change new prefix in your box chat"
				+ "\n   Example:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)"
				+ "\n   Example:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: change prefix in your box chat to default"
		}
	},

	langs: {
		vi: {
			reset: "Đã reset prefix của bạn về mặc định: %1",
			onlyAdmin: "Chỉ admin mới có thể thay đổi prefix hệ thống bot",
			confirmGlobal: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix của toàn bộ hệ thống bot",
			confirmThisThread: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix trong nhóm chat của bạn",
			successGlobal: "Đã thay đổi prefix hệ thống bot thành: %1",
			successThisThread: "Đã thay đổi prefix trong nhóm chat của bạn thành: %1",
			myPrefix: "🌐 Prefix của hệ thống: %1\n🛸 Prefix của nhóm bạn: %2"
		},
		en: {
			reset: "Your prefix has been reset to default: %1",
			onlyAdmin: "Only admin can change prefix of system bot",
			confirmGlobal: "Please react to this message to confirm change prefix of system bot",
			confirmThisThread: "Please react to this message to confirm change prefix in your box chat",
			successGlobal: "Changed prefix of system bot to: %1",
			successThisThread: "Changed prefix in your box chat to: %1",
			myPrefix: "  𝗛𝗘𝗟𝗟𝗢 𝗜 𝗔𝗠 𝗖𝗛𝗔𝗜𝗭𝗘𝗡 𝗕𝗢𝗧 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 𝗜𝗦???\n⚙️ System prefix: %1\n💬 Your box chat prefix: %2\n❖ ── ✦ ──『✙』── ✦  ❖\n📌𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘??\n 1: ➡︎Ai\n 2: ➡︎ʙʟᴀᴄᴋʙᴏx\n 3: ➡︎ᴘʀᴇғɪx\n 4: ➡︎ʜᴇʟᴘ\n 5: ➡︎ᴜᴘᴛɪᴍᴇ\n 6: ➡︎ᴜᴘᴛɪᴍᴇ2\n 7: ➡︎sᴘʏ\n 8: ➡︎ᴘɪɴᴛᴇʀᴇsᴛ\n 9: ➡︎ᴍᴜsɪᴄ\n10: ➡︎sɪɴɢ\n11: ➡︎ʟʏʀɪᴄs\n12: ➡︎ᴘʟᴀʏ\n13: ➡︎sɪᴍ\n14: ➡︎ᴄᴀʟʟᴀᴅ\n15: ➡︎ʙᴀʟᴀɴᴄᴇ\n16: ➡︎ɢᴇᴍɪɴɪ\n17: ➡︎ʙᴀʀᴅ\n18: ➡︎ɢᴇɴ\n19: ➡︎ᴛᴇᴍᴘʜᴀɪʟ\n20: ➡︎ᴏᴡɴᴇʀ\n❖ ── ✦ ──『✙』── ✦ ── ❖\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥:  𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗔𝗥𝗠𝗘𝗡𝗜𝗢𝗡 【 𝗔𝗜 𝗣𝗥𝗢𝗚𝗥𝗔𝗠𝗠𝗘𝗥 】"
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g")
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		else
			formSet.setGlobal = false;

		return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix")
			return () => {
				return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
			};
	}
};
