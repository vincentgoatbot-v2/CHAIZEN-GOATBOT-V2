const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "movie",
        aliases: ["mi"],
        author: "Hassan",
        version: "1.0",
        shortDescription: "Get information about a movie",
        longDescription: "Fetch detailed information about a specified movie.",
        category: "utility",
        guide: {
            vi: "",
            en: ""
        }
    },

    onStart: async function ({ args, message, api, event, getLang }) {
        try {
            const movieTitle = args.join(' ');
            if (!movieTitle) {
                return api.sendMessage("Please provide a movie title.", event.threadID);
            }

            await api.sendMessage("⛔ 𝗠𝗮𝘀𝘁𝗲𝗿 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...⏳", event.threadID);

            // Wait for 3 seconds
            await new Promise(resolve => setTimeout(resolve, 3000));

            const movieInfoUrl = `https://hassan-mofin-1.onrender.com/movieinfo?title=${encodeURIComponent(movieTitle)}`;
            console.log(`Fetching movie info from: ${movieInfoUrl}`);

            const response = await axios.get(movieInfoUrl);
            console.log('Movie info response:', response.data);

            if (response.data && response.data.Response === "True") {
                const movieData = response.data;
                const { Title, Year, Runtime, Genre, Director, Actors, Plot, Poster, imdbRating, BoxOffice, Awards } = movieData;

                // Construct message body
                const messageBody = `🎬 **Movie:** ${Title} (${Year})\n` +
                                    `⏱ **Runtime:** ${Runtime}\n` +
                                    `🎭 **Genres:** ${Genre}\n` +
                                    `🎬 **Director:** ${Director}\n` +
                                    `🤼 **Actors:** ${Actors}\n` +
                                    `⭐ **movie Rating:** ${imdbRating}\n` +
                                    `📖 **Plot:** ${Plot}\n` +
                                    `🏅 **Awards:** ${Awards}\n` +
                                    `📊 **BoxOffice:** ${BoxOffice}`;

                await api.sendMessage(messageBody, event.threadID);

                if (Poster && Poster !== 'N/A') {
                    console.log(`Fetching poster from: ${Poster}`);
                    const posterResponse = await axios.get(Poster, { responseType: 'arraybuffer' });
                    const buffer = Buffer.from(posterResponse.data, 'binary');
                    const imagePath = path.join(__dirname, 'movie_poster.jpg');
                    fs.writeFileSync(imagePath, buffer);
                    console.log('Poster saved to:', imagePath);

                    await api.sendMessage({
                        body: '',
                        attachment: fs.createReadStream(imagePath)
                    }, event.threadID);
                } else {
                    console.log('No poster available for this movie.');
                }
            } else {
                console.log('No movie information found for:', movieTitle);
                return api.sendMessage("Sorry, no information was found for the movie.", event.threadID);
            }
        } catch (error) {
            console.error('Error fetching movie information:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
            return api.sendMessage("Sorry, there was an error fetching movie information.", event.threadID);
        }
    }
};
