const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
message.delete();

let input1 = args[0];  //number 1
let x = args[1];       //(+ / -)
let input2 = args[2];  //number 2

let result1 = parseInt(input1, 2);    //number 1 (convert to DEC)
let result2 = parseInt(input2, 2);    //number 2 (convert to DEC)

//Logic Gate for the calculate.

switch (x) {
  case "+":
    var result = (result1 + result2);
    break;
  case "-":
    var result = (result1 - result2);
    break;
  default:
    message.channel.send({embed: {
      color: 2552550,
      description: '⚠️Operator Error : Unsupported Operator'
    }});
}

//Convert The Result To Binary
let ans = result.toString(2);

//Finish Result
let embed = new Discord.MessageEmbed()
    .setAuthor('(AIwaz - Binary A.S Module -)', `${message.author.displayAvatarURL()}`)
    .setColor("#e91e63")
    .addField(`The ans of ${input1} ${x} ${input2} is:`, `\*\*${ans}\*\*`)
    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
  message.channel.send({embed});

}
