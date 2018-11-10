const Discord = require('discord.js')


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username + ' Kahve İçti!')
        .setImage("https://cdn.discordapp.com/attachments/475678764643385344/485805902050623509/583.png")
        .setColor(0xFF0000)

        message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kahveiç',
    description: 'Kahve İçersiniz.',
    usage: 'kahveiç'
};


