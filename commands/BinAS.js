const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
message.delete();

let input1 = args[0];  //number 1
let x = args[1];       //(+ / -)
let input2 = args[2];  //number 2

let result1 = parseInt(input1, 2);    //number 1 (conver to DEC)
let result2 = parseInt(input2, 2);    //number 2 (conver to DEC)

//Logic Gate for the calculate.
if (x === "+") {
  var sum = (result1 + result2);
} else {
  var sum = (result1 - result2);
}

//convering the result to Binary
let ans = sum.toString(2);

let embed = new Discord.RichEmbed()
    .setAuthor('(AIwaz - Binary A.S Module -)', `${message.author.avatarURL}`)
    .setColor("#e91e63")
    .setTitle(`The Ans of ${input1} ${x} ${input2} is:`)
    .setDescription(`\`\`\`${ans}\`\`\``) //ans
    .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
    message.channel.send({embed});

}
