'use strict';
require("dotenv").config();
const Discord = require("discord.js"); // DiscordJS.
const client = new Discord.Client();
//SECTION 9
const trad = require("./Utils/traduction/traduction.js");
//SECTION 8
const welcome = require("./Utils/welcome/welcome");

const OwnerID = process.env.OwnerID;

console.log(process.env.PREFIX)
const prefix = process.env.PREFIX;
const fs = require("fs");

client.login(process.env.BOT_TOKEN)

client.commands = new Discord.Collection();


//call commandes
//SECTION 3, 4, 5, 6
fs.readdir("./Commands/", (error, f) => {
    if (error) console.log(error);
    //let commandes = f.filter((f) => f.split(".").pop() === "js");
    let commandes = [];
    f.forEach((f) => {
        if (f.split(".").pop() === "js") {
            commandes.push(f);
        }
    });
    console.log(commandes);
    if (commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./Commands/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

//call Event message
fs.readdir("./Event/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Event/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

// START
client.on("ready", () => {
    //SECTION 3
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Learning | $help",
            type: "CUSTOM_STATUS",
        },
    });
    console.log("start")
});

//SECTION 7
client.on('guildMemberAdd', member => {
    console.log("k")
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
    welcome.run(client, member, "Coucou twa");
});


//AI
let count;
client.on("message", (message) => {
    if (message.author.bot) return;

    //SECTION 1
    if (message.content == "ping") {
        message.reply("pong")
    }
    // AUTO
    count++;
    if (message.content == "$lol") {
        let quiz = require('./quizz.json');
        count = 0;
        let item = quiz[Math.floor(Math.random() * quiz.length)];
        let filter = response => {
            console.log(response.content.toLowerCase())
            item.answers.some(answer => console.log(answer.toLowerCase()));
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 3, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} , tu as répondues correctement !`);
                })
                .catch(collected => {
                    message.channel.send("Tu n'as pas trouvé la réponse dans le temps imparti :/");
                });
        });

    }
    if (!message.content.startsWith(prefix))
        trad.trad(message, client, Discord);

});