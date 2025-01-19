let messageCounts = {}; 
const spamThreshold = 5; 
const spamInterval = 10000; 

module.exports = {
config: {
  name: "spamleave",
  version: "1.0.0",
  role: 0,
  author: "Jonell | convert Kaizenji",
  longDescription: "Automatically detect and act on spam",
  category: "system",
  countDown: 5,
},

onChat: async function({ api, event }) {
  const { threadID, messageID, senderID } = event;
  
  if (!messageCounts[threadID]) {
    messageCounts[threadID] = {};
  }
  
  if (!messageCounts[threadID][senderID]) {
    messageCounts[threadID][senderID] = {
      count: 1,
      timer: setTimeout(() => {
        delete messageCounts[threadID][senderID];
      }, spamInterval)
    };
  } else {
    messageCounts[threadID][senderID].count++;
    if (messageCounts[threadID][senderID].count > spamThreshold) {
      api.sendMessage("🛡 | Detected spamming. The bot will be left from the group", threadID, messageID);
      api.removeUserFromGroup(api.getCurrentUserID(), threadID);
    }
  }
},

onStart: async function({ api, event, args }) {
  api.sendMessage("This command funcionablity when the user spaming on group chats", event.threadID, event.messageID);
}
};
