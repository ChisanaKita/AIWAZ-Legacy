const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  if (!message.guild.member(message.author).permissions.has(("KICK_MEMBERS") || "BAN_MEMBERS")) return;

  let z = message.mentions.users.first();
  var message_id = {};
  let reason = args[1];
  let d = message.guild.member(z).joinedAt.toLocaleString();          //The date when the user is created.
  let y;                        //Game status

//Logic Gate of the y
  if (z.presence.activity !== null) {
    y = `${z.presence.activity.name}`;
  } else {
    y = "💤Doing Nothing..";
  }

  let embed = new Discord.MessageEmbed()
      .setAuthor(`AIwaz - Manager Panel, (Login in as: ${message.author.username})`, `${message.author.displayAvatarURL()}`)
      .setColor("#00FF88")
      .addField("🔹 Which action would you like to take?", `🔧 = deaf/undeaf  💣 = kick  🔫 = ban`)
      .setDescription(`\`\`\`js\nCollection {\n  '${z.id}' => User {\n    id: '${z.id}',\n    bot: false,\n    username: '${z.username}',\n    discriminator: '${z.discriminator}',\n    avatar: '${z.avatar}',\n    lastMessage: '[Circular]' } }  \`\`\``)
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
  message.channel.send({embed}).then( async message => {
    await log_msg_id(message);
    await message.react('🔧');
    await message.react('💣');
    await message.react('🔫');
  });

client.on('messageReactionAdd', (messageReaction, user) => {
  if (user.id != message.author.id) return;

  if (messageReaction.emoji == '🔧') {
    let id = 1;
    try {
      let cmdFile = require('../util/manageaction.js');
      cmdFile.run(client, user, message, id, z, reason);
    } catch (e) {
      client.guilds.find("id", "179445290795794432").channels.find('name', 'aiw-log').send(e, { code : 'js' });
      message.channel.send(`It seems that the system can\'t execute this action. \`\`\`${e}\`\`\``);
    }
    end_event();
    del_msg(message);

  } else if (messageReaction.emoji == '💣') {
    let id = 2;
    try {
      let cmdFile = require('../util/manageaction.js');
      cmdFile.run(client, user, message, id, z, reason);
    } catch (e) {
      client.guilds.find("id", "179445290795794432").channels.find('name', 'aiw-log').send(e, { code : 'js' });
      message.channel.send(`It seems that the system can\'t execute this action. \`\`\`${e}\`\`\``);
    }
    end_event();
    del_msg(message);
  } else if (messageReaction.emoji == '🔫') {
    let id = 3;
    try {
      let cmdFile = require('../util/manageaction.js');
      cmdFile.run(client, user, message, id, z, reason);
    } catch (e) {
      client.guilds.find("id", "179445290795794432").channels.find('name', 'aiw-log').send(e, { code : 'js' });
      message.channel.send(`It seems that the system can\'t execute this action. \`\`\`${e}\`\`\``);
    }
    end_event();
    del_msg(message);
  } else {
    return;
  }
});  //End of messageReactionAdd event.

function log_msg_id(message) {
  message_id = message.id;
}

function del_msg(message) {
  message.channel.messages.fetch(message_id).then(message => message.delete());
}

function end_event() {
  client.removeAllListeners('messageReactionAdd');
}

setTimeout(function (message) {
  try {
    end_event();
    del_msg(message);
  } catch (e) {
  }
},30000);

}  //End of command.
