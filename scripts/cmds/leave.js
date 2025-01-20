const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "leave",
		aliases: ["out"],
		version: "1.0",
		author: "Vincent", 
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('➥𝗧𝗛𝗘 𝗕𝗢𝗧 𝗜𝗦 𝗟𝗘𝗔𝗩𝗜𝗡𝗚(⋋▂⋌)', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
