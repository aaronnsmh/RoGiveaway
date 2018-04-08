var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
message.reply("check your DMs for infomation on RoGiveaway :white_check_mark:")
var embedinfo = new Discord.RichEmbed()
        .setFooter("© RoGiveaway Bot | Made by Aaron #1742")
        .setColor(randomColor)
        .setTitle("📖 RoGiveaway Information")
        .setDescription("Welcome to the RoGiveaway server! Reflictance and Tinsel_Tay are pleased to have you join our server! Be prepared to be amazed with many more giveaways.")
        .addField("What is RoGiveaway?","RoGiveaway is a leader in robux and account giveaways on Roblox. With hundreds of members already enjoying the service we provide!")
        .addField("How do I win?","It's easy! Just check the giveaways channel for giveaways, when one is hosted, all you need to do is react to the message with a :tada:. Once a giveaway has finished, if you won the giveaway bot will ping you, simply DM the host to claim your prize! It's that easy")
message.author.sendEmbed(embedinfo);

}
