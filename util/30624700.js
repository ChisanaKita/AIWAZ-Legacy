const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, member) => {
var id = [];
let guild = member.guild;

let embed = new Discord.MessageEmbed()
    .setAuthor(`Welcome USER : ${member.displayName} join our server!`, `${member.user.displayAvatarURL()}`)
    .setColor("#f2ff00")
    .setDescription('welcome!\nI\'m AIWAZ, A server manage BOT create by ChisanaKita.\nYou can click [HERE](https://github.com/ChisanaKita/AIWAZ) to visit the source code\
    \nTo learn more about me,\nplease click the below emoji to send you a help menu.')
    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
guild.channels.find('type', 'text').send({embed}).then(async message => {
    await get_msg_id(message);
    await message.react('💰');
});

client.on('messageReactionAdd', (messageReaction, user) => {
  if (user.id != member.id) return;
  if (messageReaction.emoji == '💰' && !user.bot) {
    open_help(guild)
    } else {
      remove(guild)
    }
});

function get_msg_id(message) {
  id = message.id;
}
function open_help(guild) {
  client.removeAllListeners('messageReactionAdd');
  let cmdFile = require('./help-guild.js');
  cmdFile.run(client, member);
  guild.channels.find('type', 'text').messages.fetch(id).then(message => message.delete());
}
function remove(guild) {
  client.removeAllListeners('messageReactionAdd');
  guild.channels.find('type', 'text').messages.fetch(id).then(message => message.delete());
}

setTimeout(function () {
  try {
    remove(guild);
  } catch (e) {
    console.log('there is no listener');
  }
},30000);

}
