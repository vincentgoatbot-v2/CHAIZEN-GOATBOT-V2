const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "no",
    aliases: ["no"],
    version: "1.0.0",
    author: "Joshua Sy",
    countDown: 5,
    role: 0,
    shortDescription: "Sends a greeting with a sticker",
    longDescription: "",
    category: "QTV BOX",
    guide: ""
  },

  onStart: async () => {
    // No specific startup logic required
  },

  onChat: async ({ event, api, Users }) => {
    try {
      const KEYWORDS = [
        "hello", "hi", "hello po", "hi po", "hiii", "helloo", "loe", "low", "lo",
        "hey", "heyy", "loe po", "low po", "hai", "chào", "chao", "hí", "híí", "hì",
        "hìì", "lô", "helo", "hê nhô", "yo", "wazzup", "wassup", "hey", "2", "hola"
      ];

      // Check if the message contains one of the keywords
      if (!event || !event.body || !KEYWORDS.includes(event.body.toLowerCase())) {
        return;
      }

      const STICKERS = [
        "422812141688367", "1775288509378520", "476426593020937", "476420733021523",
        "147663618749235", "466041158097347", "1528732074026137", "147663618749235",
        "476426753020921", "529233794205649", "1330360453820546"
      ];
      const PHRASES = [
        "have you eaten?", "what are you doing?", "how are you senpai?", 
        "I'm a chat bot nice to meet you", "I'm updating my commands, what are you doing?", 
        "Can you interact with me using sim command?", "You're so beautiful/handsome binibini/ginoo", 
        "I love you mwa */kiss your forehead.", "are you bored? talk to my admin", 
        "how are you my dear", "eat some sweets", "are you ok?", "be safe", ""
      ];

      const sticker = STICKERS[Math.floor(Math.random() * STICKERS.length)];
      const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];

      const hours = moment.tz('Asia/Manila').format('HHmm');
      let session = "error"; // Default session message in case hours do not match any condition
      if (hours > 0 && hours <= 400) {
        session = "bright morning";
      } else if (hours > 401 && hours <= 700) {
        session = "morning";
      } else if (hours > 701 && hours <= 1000) {
        session = "morning";
      } else if (hours > 1001 && hours <= 1100) {
        session = "morning";
      } else if (hours > 1100 && hours <= 1500) {
        session = "afternoon";
      } else if (hours > 1501 && hours <= 1800) {
        session = "evening";
      } else if (hours > 1801 && hours <= 2100) {
        session = "evening";
      } else if (hours > 2101 && hours <= 2400) {
        session = "late night and advance sleepwell";
      }

      // Fetch user's name
      let name = "there"; // Default name in case fetching fails
      try {
        name = await Users.getNameUser(event.senderID);
      } catch (error) {
        console.error("Error fetching user's name:", error);
      }

      // Prepare message with user's name and session greeting
      const mentions = [{
        tag: name,
        id: event.senderID
      }];
      const message = `Hi ${name}, have a good ${session} senpai, ${phrase}`;

      // Send message and sticker
      api.sendMessage({ body: message }, event.threadID, (err, info) => {
        if (err) {
          console.error("Error sending message:", err);
        } else {
          setTimeout(() => {
            api.sendMessage({ sticker: sticker }, event.threadID);
          }, 100);
        }
      }, event.messageID);

    } catch (error) {
      console.error("Error processing message:", error);
      api.sendMessage("There was an error processing your request.", event.threadID, event.messageID);
    }
  }
};
