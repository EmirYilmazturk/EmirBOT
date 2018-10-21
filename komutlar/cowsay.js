 const Discord = require("discord.js");
const { stripIndents, oneLine } = require('common-tags');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('�ne�in s�ylemesini istedi�in yaz�y� yazmal�s�n!');
  message.channel.sendCode('asciidoc',`
  < ${mesaj} >
          \   ^__^
           \  (oo)\_______
              (__)\       )/\/
                  ||----w||
                  ||     ||`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cow", "cowsay"],
  permLevel: "Yetki gerekmiyor."
};

exports.help = {
  name: 'cowsay',
  category: 'e�lence',
  description: 'Yazd���n�z yaz�y� ine�e s�yletir.',
  usage: 'cowsay <mesaj>'
}; 