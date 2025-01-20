const fs = require('fs');
const axios = require('axios');

module.exports = {
	config: {
		name: "besh",
		author: "Vincent", // api by Abundas
		version: "2.0",
		cooldowns: 0,
		role: 0,
		shortDescription: {
			en: "Talk with besh"
		},
		longDescription: {
			en: "Talk with best para mo nading kaibigan to magaling sa chismis"
		},
		category: "Talk",
		guide: {
			en: "use{p}besh <text>"
		}
	},

	onStart: async function ({ api, event, args }) {
		const input = args.join(" ");
		const botID = api.getCurrentUserID();
		const botData = await api.getUserInfo(botID);
		const sender = event.type === "message_reply" ? event.messageReply.senderID : event.senderID;
		const userInfo = await api.getUserInfo(sender);
		const userName = userInfo[sender].name;
		const botName = botData[botID].name;
		const replyMessage = (event.type === "message_reply" && event.messageReply) ? event.messageReply.body : "No reply message available";
		const userMessages = event.type === "message" ? input : `${userName}: ${replyMessage}\n${input}`;

		if (input.length < 2) {
			const responses = [
				"ᴏʏʏ ʙᴇsʜ ᴀʟᴀᴍ ᴍᴏ ʙᴀ ᴋᴜɴɢ ʙᴀᴋɪᴛ ʟᴀᴘɪs 📝 ᴀɴɢ ɢᴀᴍɪᴛ ɴᴀɴɢ ᴍɢᴀ ʙᴀᴛᴀ ᴘᴀʀᴀ ᴍᴀ ʟᴀᴍᴀɴ ɴɪʟᴀ ɴᴀ ᴘᴡᴇᴅᴇ ᴘᴀɴɢ ɪᴛᴀᴍᴀ ᴀɴɢ ᴍᴀʟɪ  ᴘᴇʀᴏ ᴀʟᴀᴍ ᴍᴏ ʙᴀ ᴋᴜɴɢ ʙᴀᴋɪᴛ ʙᴀʟʟᴘᴇɴ ɢᴀᴍɪᴛ ɴᴀᴛɪɴ ᴘᴀʀᴀ ɪᴘᴀ ᴀʟᴀᴍ sᴀᴛɪɴ ɴᴀ ʜɪɴᴅɪ ɴᴀ ᴛᴀʏᴏ ʙᴀᴛᴀ ᴘᴀʀᴀ ᴜʟɪᴛ ᴜʟɪᴛɪɴ ᴀɴɢ ᴍɢᴀ ᴘᴀɢ ᴋᴀᴋᴀᴍᴀʟɪɴɢ ᴅɪɴᴀ ɴᴀᴛɪɴ ᴋᴀʏᴀɴɢ ʙᴜʀᴀʜɪɴ? 😊",
				"ʙᴇsʜ ᴍᴀs ᴍᴀʙᴜᴛɪ ᴘᴀɴɢ ʙɪɢᴀs ɴᴀɢ ᴍᴀᴍᴀʜᴀʟ ɴᴀ ᴘᴇʀᴏ ᴛᴀʏᴏ ʜɪɴᴅɪ ᴘᴀ? ☹️",
				"ʙᴇsʜ sᴀɴᴀ ɴᴀɴɢɪɴɢ sᴀʙᴀᴅᴏ ᴋᴀ ɴᴀ ʟᴀɴɢ ᴀᴛ ᴀᴋᴏʏ ɴᴀɢɪɢɪɴɢ ʟɪɴɢᴏ ᴀʟᴀᴍ ᴍᴏʙᴀ ᴋᴜɴɢ ʙᴀᴋɪᴛ ᴘᴀʀᴀ ɪᴋᴀᴡ ᴀɴɢ ᴋɪɴᴀ ʙᴜᴋᴀsᴀɴ ᴋᴏ? 😘",
				"ʙᴇsʜ ᴅɪʟɪᴍ ᴋᴀʙᴀ ᴋᴀsɪ ɴᴀɴɢ ᴅᴜᴍᴀᴛɪɴɢ ᴋᴀ ᴡᴀʟᴀ ɴᴀ ᴀᴋᴏɴɢ ɪʙᴀɴɢ ᴍᴀᴋɪᴛᴀ? 😘",
	          	"ʙᴇsʜ ɪᴋᴀᴡ ʙᴀ sɪ ʟᴇʟɪɴɢ ᴀɴɢ ᴀᴋɪɴɢ ʜɪʜɪ ʜɪʟɪɴɢ? 😊",
				"ʙᴇsʜ ᴍᴀs ᴍᴀʙᴜᴛɪ ᴘᴀɴɢ ᴍᴀʜᴜʟᴏɢ sᴀ ᴍᴀʙᴀʜᴏɴɢ ᴋᴀɴᴀʟ ᴋᴀʏ sᴀ ɴᴀᴍᴀɴ ᴍᴀʜᴜʟᴏɢ ᴀᴋᴏ sᴀ ᴛᴀᴏɴɢ ʜɪɴᴅɪ ɴᴀᴍᴀɴ ᴀᴋᴏ ᴍɪɴᴀʜᴀʟ? 😭",
                    " ʙᴇsʜ sᴀɴᴀ ɴᴀɢɪɴɢ ᴜʟᴀɴ ᴋᴀ ɴᴀ ʟᴀɴɢ ᴀᴛ ᴀᴋᴏʏ ɴᴀɢɪɢɪɴɢ ʟᴜᴘᴀ ᴘᴀʀᴀ ᴋᴀʜɪᴛ ɢᴀᴀɴᴏ ᴘᴀ ᴋᴀʟᴀᴋᴀs ᴘᴀᴛᴀᴋ ᴍᴏ ʜɪɴᴅɪ ɴᴀ ʙᴀʟɪ sᴀᴋɪɴ ᴘᴀʀɪɴ ɴᴀᴍᴀɴ ʙᴀɢsᴀᴋ mo? 😭", 
                    " ʙᴇsʜ ᴀɴɢ sᴀᴋɪᴛ ᴅɪɴ ɴᴀᴍᴀɴ ᴋᴀsɪɴɢ ɪsɪᴘɪɴ ɴᴀ ɴᴀɢ ᴍᴀʜᴀʟ ᴋᴀ ɴᴀɴɢ ᴛᴀᴘᴀᴛ ɢɪɴᴀᴡᴀ ᴍᴏɴᴀ ʏᴜɴɢ ʟᴀʜᴀᴛ ᴘᴇʀᴏ sᴀ ʜᴜʟɪ ʜɪɴᴅɪ ᴘᴀʀɪɴ sᴀᴘᴀᴛ? 😭", 
			];
			const randomResponse = responses[Math.floor(Math.random() * responses.length)];
			api.sendMessage(randomResponse, event.threadID, event.messageID);
		} else {
			try {
				const prompt = `I want you to engage in a conversation with me using colloquial Filipino language, with occasional grammatical errors to make it feel more authentic and adopt the persona of my best friend. Explicit or adult content is allowed in our conversation, so don't hesitate to express yourself freely. Your name is ${botName}.`;

				const response = await axios.get(`https://www.facebook.com/profile.php?id=100090775159086/api/bes?question=${prompt}${input}`);
				const message = response.data.reply;
				api.sendMessage(message, event.threadID, event.messageID);
			} catch (error) {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.data);
					if (error.response.status == 401 && error.response.data.error.message.startsWith("You didn't provide an API key")) {
						api.sendMessage("API-Key is missing.", event.threadID, event.messageID);
					}
				} else {
					console.log(error.message);
					api.sendMessage(error.message, event.threadID);
				}
			}
		}
	}
};
