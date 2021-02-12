const Discord = require("discord.js");
const color = "#007fff";
const client = new Discord.Client();

module.exports.run = async(client, message, args) => {
    let = serverLink = "https://discord.com/oauth2/authorize?client_id=767673696894451722&scope=bot"

    var embed = new Discord.MessageEmbed()
        .setAuthor("Commande Du bot", message.author.displayAvatarURL)
        .setDescription("Prefix du bot $")
        .addFields({ name: "=ping", value: "Bot latency" }, { name: "=pingGoogle", value: "Ping google.com to know if is alive" }, { name: "=avatar + [mention]", value: "Show avatar in embed" }, { name: "=love + [mention]", value: "How much do you love me?" }, { name: "=quizz", value: "Play a message-type quiz" }, { name: "=quizz2", value: "Play a reaction-type quiz" }, { name: "=invite", value: "Add bot on other discord: " + serverLink }, {
            name: "just send a message",
            value: "translate in the other channel with the language different -FR / -EN",
        });
    message.channel.send(embed);
};

module.exports.help = {
    name: "help",
};