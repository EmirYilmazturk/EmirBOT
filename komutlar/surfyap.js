const Discord = require('discord.js')


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
        .setTitle("Su Üzerinde Kıyak Hareketler Yapıyorsun Bu Müthiş!")
        .setImage("https://media.giphy.com/media/FlL27X97Xz3Py/giphy.gif")
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
    name: 'surfyap',
    description: 'Sörf Yaparsınız.',
    usage: 'surfyap'
};


