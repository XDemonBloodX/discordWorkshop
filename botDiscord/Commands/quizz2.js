const Discord = require("discord.js");
const bot = new Discord.Client(); // Use "bot", not "client" because I'm!
const quiz = require('../quizz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];

module.exports.run = async(bot, message, args) => {
    const filter = (reaction, user) => {
        return reaction.emoji.name === '👍' && user.id === message.author.id;
    };

    message.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
        .then(collected => console.log(collected.size))
        .catch(collected => {
            console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        });

}

module.exports.help = {
    name: "quizz2"
}