//credit NAMO
const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  let a = args[0];  //coefficient of x square
  let b = args[1];  //coefficient of x
  let c = args[2];  //constant
  let result;

  function FindX(a, b, c, result)
  {
      var pos_x = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a *c))) / (2* a);
      var neg_x = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a *c))) / (2* a);
      return result = 'x1 = ' + pos_x + '  x2 = ' + neg_x;
  }

  //console.log(FindX(a, b, c, result));  //For debug

  let embed = new Discord.RichEmbed()
      .setAuthor('(AIwaz - Math-QE Module -)', `${message.author.avatarURL}`)
      .setColor("#e91e63")
      .setTitle(`QE ${a} ${b} ${c} ans : `) //ans
      .setDescription(FindX(a, b, c, result))
      .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
