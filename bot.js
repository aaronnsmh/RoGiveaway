const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
});

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ activity: { name: 'RoGiveaway | !help' }, status: 'online' })
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {    
    
    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things our guild (server). Please join our server (code: https://discord.gg/MKHXv2E) to use the bot! **")
        return;
    }

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`);

        }
    })



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
