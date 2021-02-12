const translate = require("@vitalets/google-translate-api");

module.exports = {
    trad: function(message, client, Discord) {
        //if prefixOther bot = return

        //declare
        let chanName = message.channel.name;
        let messUser = message.author.username;
        let langage = null;
        let lang = null;
        let server = message.guild;
        let catLang;
        mylang = chanName.substring(chanName.length - 2, chanName.length);

        console.log(mylang);
        switch (mylang) {
            case value:
                langage = "french";
                lang = "send the message in english";
                catLang = "fr";
                catlangFrom = "en";
                break;
            case "en":
                langage = "english";
                lang = "a envoyé le message en français";
                catLang = "en";
                catlangFrom = "fr";
                break;
        }

        console.log("In: " + chanName);
        chanName = chanName.substring(0, chanName.length - 2) + catLang;

        let chanServer = server.channels.cache.find(
            (c) => c.name == chanName && c.type == "text"
        );
        if (!chanServer) { return; }
        console.log("Out: " + chanName);

        text = message.content;
        translate(text, {
            to: translate.languages.getCode(langage),
            from: catlangFrom,
        }).then((res) => {
            console.log("test : " + res.text);
            text = res.text.replace("<@! ", "<@!");
            text = text.replace("<@ ", "<@!");
            text = text.replace("<# ", "<#");
            text = text.replace(" @!>", "@!>");

            console.log("message : " + res.text);

            //embed
            let image = message.author.displayAvatarURL();
            var embed = new Discord.MessageEmbed()
                .setColor("#270327")
                .setTitle(messUser + " " + lang + ": ")
                .setAuthor(messUser, image)
                .setDescription(text);
            client.channels.cache.get(chanServer.id).send(embed);
        });
    }
}