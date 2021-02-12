'use strict';
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
//const trad = require("./Utils/traduction/traduction.js");
//const welcome = require("./Utils/welcome/welcome");

//const OwnerID = process.env.OwnerID;
const prefix = process.env.PREFIX;
const fs = require("fs");

client.login(process.env.BOT_TOKEN)
client.commands = new Discord.Collection();


//call commandes
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

//recupère les messages
client.on("message", (message) => {
    if (message.author.bot) return;
});