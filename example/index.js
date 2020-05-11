const Discord = require('discord.js');
const client = new Discord.Client();
const Docs = require('../index');
const docsclient = new Docs.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('message', (msg) => {
    if (msg.content.toLowerCase() === "stable-client") {
        docsclient.searchStable("client").then(body => {
            msg.channel.send({ embed: body })
        });
    }
});

client.login('TOKEN');