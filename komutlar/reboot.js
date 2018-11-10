const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`:white_check_mark: Yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
    message.channel.send(`Bot Yeniden Başlatıldı. :white_check_mark:`)    
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
