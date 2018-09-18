const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, member) => {
  var id = [];
  let guild = member.guild;
  var d = member.joinedAt;

console.log(`User: ${member.displayName} \nJoined guild: ${member.guild.name} (${guild.id}) At: ${d.toLocaleString()}`);

  let embed = new Discord.MessageEmbed()
    .setAuthor(`Welcome USER : ${member.displayName} join our server!`, `${member.user.displayAvatarURL()}`)
    .setColor("#f2ff00")
    .setDescription('welcome!\nI\'m AIWAZ, A server manage BOT create by ChisanaKita.\
    \nYou can click [HERE](https://github.com/ChisanaKita/AIWAZ) to visit the source code\
    \nTo learn more about me,\nplease click the below emoji to send you a help menu.\
    \n(This message will be deleted after 30 sec. )')
    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
  guild.channels.find('type', 'text').send({embed}).then(async message => {
    await get_msg_id(message);
    await message.react('💰');
  });

  client.on('messageReactionAdd', (messageReaction, user) => {
    if (user.id != member.id) return;
    if (messageReaction.emoji.name == '💰' && !user.bot) open_help(guild);
  });

  function get_msg_id(message) {
    id = message.id;
  }
  function open_help(guild) {
    client.removeAllListeners('messageReactionAdd');
    let cmdFile = require('./help-guild.js');
    cmdFile.run(client, member);
    guild.channels.find('type', 'text').messages.fetch(id).then(message => message.delete());
    clearTimeout(auto_remove);
  }
  function remove(guild) {
    try {
      client.removeAllListeners('messageReactionAdd');
      guild.channels.find('type', 'text').messages.fetch(id).then(message => message.delete());
    } catch (e) {
      console.log('there is no listener');
    }
  }

  let auto_remove = setTimeout(function () {
    remove(guild);
  },30000);

}
