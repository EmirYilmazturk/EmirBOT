const Discord = require('discord.js')


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setImage("https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
        .setColor(0xFF0000)
        .setFooter("Gifiniz")

        message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'komikgif',
    description: 'Komik Gif Atar',
    usage: 'komikgif'
};


