const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmak ��in Bir�ey Yazmal�s�n!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'G�zel Bir Duyuru G�r�n�m� Sa�lar.',
  usage: 'duyuru [Duyuruda Yaz�cak �ey]'
};