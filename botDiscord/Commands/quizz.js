const Discord = require("discord.js");
const bot = new Discord.Client(); // Use "bot", not "client" because I'm!
const quiz = require('../quizz.json');

module.exports.run = async(bot, message, args) => {
    console.table(quiz)
    let item = quiz[Math.floor(Math.random() * quiz.length)];
    let filter = response => {
        console.log(response.content.toLowerCase())
        item.answers.some(answer => console.log(answer.toLowerCase()));
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };

    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} , tu as répondues correctement !`);
            })
            .catch(collected => {
                message.channel.send("Tu n'as pas trouvé la réponse dans le temps imparti :/");
            });
    });

}

module.exports.help = {
    name: "quizz"
}