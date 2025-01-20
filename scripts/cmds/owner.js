const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Vincent",// Convert By Goatbot Armenion
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗔𝗥𝗠𝗘𝗡𝗜𝗢𝗡',
      gender: '𝗠𝗔𝗟𝗘',
      age: '𝟭𝟳',
      country: '𝗣𝗛𝗜𝗟𝗜𝗣𝗣𝗜𝗡𝗘𝗦 🇵🇭', 
      relationship: '𝗦𝗜𝗡𝗚𝗟𝗘', 
      school: '𝗟𝗜𝗖𝗘𝗢 𝗗𝗘 𝗦𝗧𝗢 𝗧𝗢𝗠𝗔𝗦 𝗗𝗘 𝗔𝗤𝗨𝗜𝗡𝗔𝗦 🏫', 
      work: '𝗙𝗨𝗖𝗞𝗜𝗡𝗚 𝗬𝗢𝗨𝗥 𝗦𝗪𝗔𝗚', 
      penis: '𝟰𝟬 𝗜𝗡𝗖𝗛𝗘𝗦 🥵', 
      sports: '𝗕𝗔𝗦𝗞𝗘𝗧𝗕𝗔𝗟𝗟 𝗣𝗟𝗔𝗬𝗘𝗥 🏀', 
      height: '𝗦𝗘𝗖𝗥𝗘𝗧',
      facebookLink: 'https://www.facebook.com/100090775159086',
      nickname: '𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘',
    };

    const bold = 'https://i.imgur.com/DDO686J.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `

╔════━━✦✾✦━━════╗   
     𝑴𝒀 𝑯𝑨𝑵𝑺𝑶𝑴𝑬 𝑶𝑾𝑵𝑬𝑹
╚════━━✦✾✦━━════╝
              
      Name: ${ownerInfo.name}
      Gender: ${ownerInfo.gender}
      Age: ${ownerInfo.age}
      Country: ${ownerInfo.country}
      Relationship: ${ownerInfo.relationship}
      School: ${ownerInfo.school}
      Work: ${ownerInfo.work}
      Penis: ${ownerInfo.penis}
      Sports: ${ownerInfo.sports}
      Height: ${ownerInfo.height}
      Facebook: ${ownerInfo.facebookLink}
      Nickname: ${ownerInfo.nickname}
                ┈╭━━━━━━━━━━━╮┈
┈┃╭━━━╮┊╭━━━╮┃┈
╭┫┃▇┈┃┊┃┈▇ ┃┣╮
┃┃╰━━━╯┊╰━━━╯┃┃
╰┫╭━╮╰━━━╯╭━╮┣╯
┈┃┃┣┳┳┳┳┳┳┳┫┃┃┈
┈┃┃╰┻┻┻┻┻┻┻╯┃┃┈
┈╰━━━━━━━━━━━╯┈
     `;
    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('😎', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
