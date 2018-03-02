const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  let x = message.mentions.users.first();  //The mention user

//If the user don't input the mention user, then y equal the sender itself.
  if (x == null) {
    var y = message.author;
  }else {
    var y = message.mentions.users.first();
  }

  let embed = new Discord.MessageEmbed()
      .setAuthor("(樹形図の設計者 - USER ICON Module -)", "https://i.imgur.com/Fta2jMg.jpg")
      .setColor("#e91e63")
      .setDescription(`\_\_${y.username}\`s  ICON\_\_`)
      .setImage(y.displayAvatarURL())
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed}).catch(error => message.channel.send('⚠️Error : ' + error.message));
}
