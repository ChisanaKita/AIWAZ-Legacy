const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  let input = args[0];  //The number
  var x = args[1];      //The number type, (2,8,10,16) bit

/*
Logic Gate
  depending on the x (args[1] or the number type), different number do different thing.
    if the x is '2', then set result equal to (The input number convert into DEX).
    if the x is '8', then set result equal to (The input number convert into DEX).
    if the x is '10', then set result equal to input number (DEX).
    if the x is '16', then set result equal to (The input number convert into DEX).
*/
  switch(x)
  {
    case '2' : var result = parseInt(input, 2);break;
    case '8' : var result = parseInt(input, 8);break;
    case '10' : var result = parseInt(input, 10);break;
    case '16' : var result = parseInt(input, 16);break;
  }

  let bin = result.toString(2);   //convert the result (DEX) to Binary.
  let oct = result.toString(8);   //convert the result (DEX) to Octet.
  let dec = result;               //The result (DEX)
  let hax = result.toString(16);  //convert the result (DEX) to Hexadecimal.

  //console.log(hax);  //For debug

  //process the result and send it
  let embed = new Discord.MessageEmbed()
      .setAuthor('(AIwaz - converter Module -)', `${message.author.displayAvatarURL()}`)
      .setColor("#e91e63")
      .setDescription(`BIN : ${bin}\nOCT : ${oct}\nDEC : ${dec}\nHAX : ${hax}`) //ans
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
