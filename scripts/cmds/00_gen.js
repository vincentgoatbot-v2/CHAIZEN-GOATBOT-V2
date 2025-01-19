const axios = require('axios');

module.exports = {
  config: {
    name: "gen",
    version: "1.1",
    author: "armemion",
    countDown: 0,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "𝗔𝗜-𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗",
    guide: {
      en: "{prefix}imaggen <prompt> | <model>\n\nModels:\n" +
          "1: Watercolor\n" +
          "2: Abstract\n" +
          "3: OPE\n" +
          "4: SIGBIALL\n" +
          "5: Advertisement Style\n" +
          "6: Alien Landscape\n" +
          "7: Anime\n" +
          "8: Architectural\n" +
          "9: Art Deco\n" +
          "10: Art Nouveau\n" +
          "11: Biomechanical\n" +
          "12: Collage\n" +
          "13: Comic Book\n" +
          "14: Crafted Clay\n" +
          "15: Cybernetic\n" +
          "16: Default Style\n" +
          "17: Disco\n" +
          "18: Expressionist\n" +
          "19: Fantasy Art\n" +
          "20: Fighting Game Style\n" +
          "21: Film Noir\n" +
          "22: Flat\n" +
          "23: Gothic\n" +
          "24: Graffiti\n" +
          "25: Grunge\n" +
          "26: GTA Style\n" +
          "27: Horror\n" +
          "28: Hyperrealism\n" +
          "29: Impressionist\n" +
          "30: Kawaii (Cute)\n" +
          "31: Long Exposure\n" +
          "32: Lovecraftian\n" +
          "33: Macabre\n" +
          "34: Manga\n" +
          "35: Mario Style\n" +
          "36: Metropolis\n" +
          "37: Minecraft Style\n" +
          "38: Minimalist\n" +
          "39: Monochrome\n" +
          "40: Origami\n" +
          "41: Paper Mache\n" +
          "42: Paper Quilling\n" +
          "43: Pixel Art\n"
    }
  },

  onStart: async function({ message, args }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("Please provide a prompt.");
    }

    let prompt, model;
    if (text.includes("|")) {
      const [promptText, modelText] = text.split("|").map((str) => str.trim());
      prompt = promptText;
      model = modelText;
    } else {
      prompt = text;
      model = 1; 
    }

    message.reply("✅| Creating your Imagination...").then((info) => { id = info.messageID });
    try {
      const API = `https://aryan-apis.onrender.com/api/gen?prompt=${encodeURIComponent(prompt)}&model=${model}`;
      const imageStream = await global.utils.getStreamFromURL(API);

      return message.reply({
        attachment: imageStream
      });
    } catch (error) {
      console.log(error);
      message.reply("Failed to generate your imagination.").then(() => {
        message.delete(id);
      });
    }
  }
};
