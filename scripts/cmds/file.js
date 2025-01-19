const fs = require('fs');
const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
	config: {
		name: "file",
		version: "1.0",
		author: "armenion",
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["100090775159086"];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage("𝗬𝗼𝘂 𝗱𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗲𝗻𝗼𝘂𝗴𝗵 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝘁𝗼 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆 𝗺𝘆 𝗯𝗼𝘀𝘀 𝗰𝗮𝗻 𝗱𝗼 𝗶𝘁 👊😡", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
