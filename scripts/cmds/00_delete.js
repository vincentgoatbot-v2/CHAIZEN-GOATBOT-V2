 const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "delete",
    aliases: ["del"],
    version: "1.0",
    author: "Vincent",
    countDown: 5,
    role: 2,
    shortDescription: "Delete file and folders",
    longDescription: "Delete file",
    category: "owner",
    guide: "{pn}"
  },


  onStart: async function ({ args, message,event}) {
 const permission = ["100090775159086"];
    if (!permission.includes(event.senderID)) {
      message.reply("(⋋▂⋌) 𝗬𝗼𝘂 𝗱𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗲𝗻𝗼𝘂𝗴𝗵 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝘁𝗼 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 . 𝗼𝗻𝗹𝘆 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿 𝗰𝗮𝗻 𝗱𝗼 𝗶𝘁 😡👊.");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`✅| ᴀ ᴄᴏᴍᴍᴀɴᴅ  ғɪʟᴇ ʜᴀs ʙᴇᴇɴ 𝗗𝗘𝗟𝗘𝗧𝗘𝗗 ${commandName} .`);
      } else {
        message.reply(`command file ${commandName} unavailable.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};
