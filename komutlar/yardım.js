const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**EĞLENCE VE KULLANICI KOMUTLARI:**", `e!stresçarkı = **Stres Çarkı Çevirirsiniz** \ne!illuminati = **İlluminatiye Üye Olup Olmadığınızı İfşa Eder** \ne!komikgif = **BOT Size Komik Gifler Atar** \ne!avatar = **Avatarınınızı Gösterir.** \ne!balıktut = **Balık Tutarsınız.** \ne!emojiyazı = **Yazınızı Emoji Haline Çevirir.** \ne!öldür = **İstediğiniz Kullanıcıyı Öldürürsünüz.** \ne!surfyap = **Sörf Yaparsınız.** \ne!yaz = **Bota İstediğiniz Şeyi Yazdırırsınız.** \ne!sunucuresmi = **BOT Sunucunun Resmini Atar.** \ne!sunucubilgi = **BOT Sunucu Hakkında Bilgi Verir.** \ne!kullanıcıbilgim = **Sizin Hakkınızda Bilgi Verir.** \ne!hiyaa = **Karate Yaparsınız.** \ne!hackle = **İstediğiniz Kullanıcıyı Hacklersiniz.** \ne!osmanlıtokadı = **İstediğiniz Kullanıcıya Tokat Atarsınız.** \ne!sigarayak = **Sigara Yakarsınız.** \ne!hesapla = **Matematik İşlemi Yaparsınız.** \ne!kahveiç = **Kahve İçersiniz**`)
  .addField("**ADMİN KOMUTLARI:**", `e!ban = **İstediğiniz Kişiyi Sunucudan Banlar.** \ne!kick  = **İstediğiniz Kişiyi Sunucudan Atar.** \ne!unban = **İstediğiniz Kişinin Yasağını Açar.** \ne!uyar  = **İstediğiniz Kullanıcıyı Uyarırsınız.** \ne!sustur = **İstediğiniz Kişiyi Susturur.** \ne!duyuru = **Güzel Bir Duyuru Görünümü Sağlar.**`)
  .addField("**EFEKT KOMUTLARI:**", `e!wasted = **Fotoğrafınıza Wasted Efekti Verir.** \ne!devamedecek = **Fotoğrafınıza To Be Continued Efekti Verir.** \ne!missionpassed = **Fotoğrafınıza Mission Passed Efekti Verir.**`)
  .addField("**ANA KOMUTLAR**", "e!yardım = **BOT Komutlarını Atar.** \ne!öneri = **BOT Sahibine Öneri Bildirirsiniz.** \ne!çekiliş = **Çekiliş Yaparsınız** \ne!bilgi = **BOT Kendisi Hakkında Bilgi Verir.** \ne!ping = **BOT Gecikme Süresini Söyler.** \ne!davet = **BOT Davet Linkini Atar.** \ne!istatistik = **BOT İstatistiklerini Atar.**")
  .addField("**Yapımcım**", " **Emir** ")
  .setFooter('ßy Emir#2566')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};