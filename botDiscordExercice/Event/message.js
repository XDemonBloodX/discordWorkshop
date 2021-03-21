const Discord = require("discord.js");
require("dotenv").config();
const prefix = process.env.PREFIX;

module.exports = async(bot, message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    console.log("args" + args);
    const commande = args.shift();
    //console.log("commande :" + commande);

    const cmd = bot.commands.get(commande);
    //console.log("cmd: " + cmd);

    if (!cmd) return;

    cmd.run(bot, message, args);
};
