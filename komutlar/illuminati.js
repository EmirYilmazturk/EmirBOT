const Discord = require('discord.js');

const cevaplar = [
    "**Evet Sen Bir İlliminati Üyesisin**",
    "**Hayır Sen Bir İlliminati Üyesi Değilsin Aferim Temiz Yoldasın :slight_smile: :ok_hand:**",
    "**Sen Sanırım İlliminati Üyesisin**",
    "**Senin İlliminati Üyesi Olup Olmadığını Araştırıyoruz**",
    "**Sen İlliminati Örgütünün Kurucususun Sormana Gerek Yoktu**",
    "**Senin İlliminati Üyesi Olman İmkansız**"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('**Doğru Kullanım**:?illiminati İlluminatiye Üyemiyim')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'illuminati', 
  description: 'İlliminati Üyesi Olup Olmadığınızı İfşa Eder',
  usage: 'illiminati İlliminatiye Üyemiyim'
};