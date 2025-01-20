module.exports.config = {
  name:"album",
  category: "video"
}
module.exports.onStart = async ({api,event,args}) => {
   if (!args[0]) {
     const a6 = "♚═══ ∰𝙰𝙻𝙱𝚄𝙼 𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n∰⇨𝙰𝙻𝙱𝚄𝙼 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n\n ✇1 -  𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻   𝚅𝙸𝙳𝙴𝙾 !\n  ✇2 -  𝙼𝙴𝚂𝚂𝙸 1 !\n ✇3 -  𝙽𝙴𝚈𝙼𝙰𝚁  !\n  ✇4 -  𝚁𝙾𝙽𝙰𝙻𝙳𝙾 !\n ✇5 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚅𝙸𝙳𝙴𝙾   !\n  ✇6 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 !\n ✇7 -  𝚆𝙷𝙸𝚃𝙴 01 !\n  ✇8 -  𝙱𝙾𝙽𝙴𝚇4 𝙵𝙵 !\n\n ✇9 -  𝙼1𝙽𝚇 !\n ✇11 - 𝙷𝙰𝚉𝚈 𝙼𝙰𝙽 !\n ✇12 - 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇13 - 𝙰𝙳𝙽𝙰𝙽 𝙷𝚄𝙹𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 !\n ✇14  -  𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 !\n✇15  - 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 \n ✇16  -  18+- 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾 !\n ⚚━━━━━━━━━━━━━━━━━━━⚚\n★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n please enter a valid number of album"               
await api.sendMessage(a6,event.threadID,(error, info) => {
                         global.GoatBot.onReply.set(info.messageID, {
                           commandName: this.config.name,
                           type: "reply",
                           messageID: info.messageID,
                           author: event.senderID,
                           msg: a6,
                         });
                       },
                       event.messageID);
                   }
                 }
module.exports.onReply = async({api,event,Reply}) => {
  const axios = require("axios");
  try {
    if (event.type === 'message_reply') {
      const a6y = parseInt(event.body);
      api.unsendMessage(Reply.messageID);
     let Romim
      switch (a6y) {
        case 1:
          Romim = "https://a6-video-api-t0il.onrender.com/video/football";
          break;
        case 2:
          Romim = "https://a6-video-api-t0il.onrender.com/video/messi";
          break;
        case 3:
          Romim = "https://a6-video-api-t0il.onrender.com/video/Neymar";
          break;
        case 4:
          Romim = "https://a6-video-api-t0il.onrender.com/video/cr7";
          break;
        case 5:
          Romim = "https://a6-video-api-t0il.onrender.com/video/editff";
          break;
        case 6:
          Romim = "https://a6-video-api-t0il.onrender.com/video/sadff";
          break;
        case 7:
          Romim = "https://a6-video-api-t0il.onrender.com/video/white01";
          break;
        case 8:
          Romim = "https://a6-video-api-t0il.onrender.com/video/ff";
          break;
        case 9:
          Romim = "https://a6-video-api-t0il.onrender.com/video/m1nx";
          break;
        case 10:
          Romim = "https://a6-video-api-t0il.onrender.com/video/sakib";
          break;
        case 11:
        Romim = "https://a6-video-api-t0il.onrender.com/video/sigma";
          break;
        case 12:
          Romim = "https://a6-video-api-t0il.onrender.com/video/islamic";
          break;
        case 13:
          Romim = "https://a6-video-api-t0il.onrender.com/video/adnan";
          break;
        case 14:
          Romim = "https://a6-video-api-t0il.onrender.com/video/love";
          break;
        case 15:
          Romim = "https://a6-video-api-t0il.onrender.com/video/status";
          break;
        case 16:
          Romim = "https://a6-video-api-t0il.onrender.com/video/horny";
          break;
        default:
        api.sendMessage("nai nai ki faul number des eita nai beda",event.threadID,event.messageID);
          return;
      }  
      
      
      
      const uri = axios.get(Romim)
      const url = uri.data.data
      const a6 = (await axios.get(url,{responseType: 'stream'})).data
      api.sendMessage({body:"ne tor album video",attachment:a6},event.threadID,event.messageID)
    }
  } catch (error){        api.sendMessage(`error${error.message}`,event.threadID,event.messageID)
      }
}
