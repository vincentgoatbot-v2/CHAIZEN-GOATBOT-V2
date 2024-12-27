module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "Samir",
    countDown: 45,
    role: 0,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    const permission = ["61558651089120","61557606879019"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("You don't have enough permission to use this command. Only ʚɸɞ Aldéric ʚɸɞ can do it.", event.threadID, event.messageID);
    return;
  }
    api.sendMessage("Successfully Turned alamin turned off System ✅",event.threadID, () =>process.exit(0))}
};
