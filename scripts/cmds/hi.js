module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "Vincent",
			countDown: 1,
			role: 0,
			shortDescription: "hi",
			longDescription: "response with hi",
			category: "box chat",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "henlo") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "hii") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "hello") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "zup") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "hey") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
  if (event.body && event.body.toLowerCase() == "yo") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗖𝗵𝗮𝗶𝘇𝗲𝗻 𝗯𝗼𝘁  𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻, 𝗮 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗮𝗻𝗱 𝘁𝗮𝗹𝗲𝗻𝘁𝗲𝗱 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗹𝗶𝘃𝗶𝗻𝗴 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀");
}
};
