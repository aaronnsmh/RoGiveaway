const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const db = require('quick.db');
var randomColor = Math.floor(Math.random() * 16777215).toString(16);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setStatus("online");
});

client.on('ready', () => {
    console.log('RoGiveaway is ONLINE. No bugs found at this time.');
    client.user.setAvatar('https://lh3.googleusercontent.com/Zqr4Fjvv96ViJHj72zhDv36RWxe1myScn-g2Qx6P-2nGMVyp0PVDMK2kKF0DQz_59t2mR8hf6UbzLQ=w1920-h943')
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'message') {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("messageToSend"));
        } catch (err) {
            console.log("Could not send message to ");
        }
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

client.on('guildMemberAdd', member => {
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© RoGiveaway Bot | Made by Aaron #1742")
        .setColor(randomColor)
        .setTitle("📖 RoGiveaway Information")
        .setDescription("Welcome to the RoGiveaway server! Reflictance and Tinsel_Tay are pleased to have you join our server! Be prepared to be amazed with many more giveaways.")
        .addField("What is RoGiveaway?","RoGiveaway is a leader in robux and account giveaways on Roblox. With hundreds of members already enjoying the service we provide!")
        .addField("How do I win?","It's easy! Just check the giveaways channel for giveaways, when one is hosted, all you need to do is react to the message with a :tada:. Once a giveaway has finished, if you won the giveaway bot will ping you, simply DM the host to claim your prize! It's that easy")
     member.sendEmbed(embedinfo);
       console.log(`${member.user.username} has joined`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
