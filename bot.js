const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity('over RoGiveaway | !help', { type: 'WATCHING' });
    client.user.setStatus("online");
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
