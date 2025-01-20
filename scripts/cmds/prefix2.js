module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Vincent Armenion",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
 
━━━━━━━━━━━━━━━
ғᴜᴄᴋ ʏᴏᴜ ʙɪᴛᴄʜ ᴍʏ ᴘʀᴇғɪx ɪs 【 = 】

𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
💾 ✰help [number of page] -> see commands
💬 ✰sim [message] -> talk to bot
☎️ ✰callad [message] -> report any problem encountered 
📓 ✰help [command] -> information and usage of command

Have fun using it enjoy!❤
𝗙𝗕𝗟𝗜𝗡𝗞 ➠ https://www.facebook.com/100090775159086
\n𝗢𝘄𝗻𝗲𝗿 ➠ 𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗔𝗥𝗠𝗘𝗡𝗜𝗢𝗡 `,
 attachment: await global.utils.getStreamFromURL("https://imgur.com/7jHgVG9.gif")
 });
 }
 }
}
