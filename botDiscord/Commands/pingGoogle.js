const Discord = require("discord.js");
const bot = new Discord.Client(); // Use "bot", not "client" because I'm!
var ping = require('ping');

module.exports.run = async(client, message, args) => {
    var hosts = ['google.com'];
    hosts.forEach(function(host) {
        ping.sys.probe(host, function(isAlive) {
            var msg = isAlive ? 'Le serveur de:** ' + host + '** is  :anatomical_heart: ' : 'host ' + host + ' is :skull: ';
            var embed = new Discord.MessageEmbed()
                .setTitle("Pong ! ", message.guild.iconURL)
                .setDescription(msg)
                .setColor("#007fff")
                .setTimestamp();
            message.channel.send(embed)
        });
    });
}

module.exports.help = {
    name: "pingGoogle"
}