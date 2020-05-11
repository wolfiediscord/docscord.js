# Docscord.JS
A docs package for discord.js written in JavaScript!

**Note: This package returns discord-embed object!**

[![NPM](https://nodei.co/npm/docscord.js.png)](https://nodei.co/npm/docscord.js/)

## Installing
`npm i --save wolfiediscord/docscord.js`

# Available Branches
- Stable
- Commando
- Master
- RPC

# Starting

```js

const { Client } = require('docscord.js');
const docsClient = new Client();

```

# Example

```js

const Discord = require('discord.js');
const client = new Discord.Client();
const { Client } = require('docscord.js');
const docsClient = new Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('message', (msg) => {
    if (msg.content.toLowerCase() === "stable-client") {
        docsClient.searchStable("client").then(body => {
            msg.channel.send({ embed: body })
        });
    }
});

client.login('TOKEN');

```

# Need Help?
- **[Discord.JS](https://discord.gg/bRCvFy9)**
- **[INEX07](https://discord.gg/Wy8asfs)**
- **[GitHub](https://github.com/INEX07/docscord.js)**
