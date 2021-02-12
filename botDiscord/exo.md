# 1) Reply message
Vous devrez recevoir "pong" par le bot dans le salon où vous avez envoyé le message ping. 
(à faire dans le fichier Commands/pong.js)  
https://discord.js.org/#/docs/main/stable/examples/ping

# 2) Ping client bot

Votre bot doit vous envoyer le ping du bot
Utilisez le fichier /Commands/ping.js

# 3) Ping intra-epitech

Pensez à utilisez le npm ping :p
Creer votre premier fichier dans /Commands/ nommé pingGoogle.js

# 4) Ready bot

Configurer le setPresence du bot.
 --> Online
 --> Nom de l'activité
 --> Type playing


# 5) Embed help

(.addFields important !)  
Toujours dans un fichier crée dans /Commands appellé cette fois-ci help.js

# 6) Embed avatar user or mention

Pensez à console.log: message.user ;)
Pour rendre plus jolie:
    .setImage(image + "?size2048")

# 7) Welcome text
  
Indice: client.on("message")
Et si on pouvait récupérer les nouveaux membres comme pour les messages?
Pensez à cocher dans votre application Developper discord:
![Image Bot Developper](https://image.noelshack.com/fichiers/2020/49/7/1607269558-microsoftteams-image-2.png)

> Good Luck

# 8) Welcome canvas

https://discordjs.guide/popular-topics/canvas.html  
Suivez le guide discord.
Le but? Afficher le pseudo et l'avatar du new member dans l'image.
A faire dans le fichier /Commands/welcome/welcome.js


# 9) Use api Traduction

Votre but, traduire une langue tel que le français en anglais dans un autre salon et inversement.  
Sans DB, je vous recommande de gérer les messages send par le name du serveur (plus flexible)ou par un id(plus facile).

A faire dans le fichier /Commands/traduction/traduction.js


Exo Bonus: Love U 

https://discordjs.guide/popular-topics/collectors.html#basic-reaction-collector
Vous devez créer une commande qui donne un % aléatoire d'amour avec une personne.
//utiliser : message.mentions.users.first()

Exo Bonus: ParseJSON -> Create Quizz

https://discordjs.guide/popular-topics/collectors.html#basic-reaction-collector
Vous devez utilisez le fichier quizz.json à la racin du projet.

Merci d'avoir suivi ce workshop.
Si vous le souhaitez, voici un bot en développement:
https://discord.com/oauth2/authorize?client_id752812712165376083&permissions8&scopebot
