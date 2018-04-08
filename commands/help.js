var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    var embedinfo = new Discord.RichEmbed()
        .setFooter("© RoGiveaway | Made by Aaron#1742")
        .setColor(randomColor)
        .setTitle(":exclamation: Help")
        .setDescription("Please run =info for RoGiveaway information.")
    message.channel.sendEmbed(embedinfo);
    message.delete(0)
    .then(m=>m.delete(10000))

}
