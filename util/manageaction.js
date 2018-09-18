const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, user, message, id, z, reason) => {
var message_id;

switch (id) {
  case 1:
    deaf(user, z, message, client, reason);
    break;
  case 2:
    kick(user, z, message, client, reason);
    break;
  case 3:
    ban(user, z, message, client, reason);
    break;
  default:
    message.channel.send('Ha?!');
}

/*
* Deaf function.
*
*/

function deaf(user, z, message, client) {
  message.guild.member(z).deaf ? message.guild.member(z).setDeaf(false, `${reason}`) : message.guild.member(z).setDeaf(true, `${reason}`)
  message.guild.member(z).deaf ? message.channel.send(`Guild Manager : ${user.username} undeaf user : ${z.username}.`) : message.channel.send(`Guild Manager : ${user.username} deafen user : ${z.username}.`)
}

/*
* Kick function.
*
*/

function kick(user, z, message, client, reason) {
  let permission1 = message.guild.member(z).kickable;
  let permission2 = message.guild.member(user).permissions.has('KICK_MEMBERS');

  message.channel.send(`\`\`\`md\n[You\'re going to kick the user:](${z.username}).\n< Please notice that this action cannot be able to undo. >\`\`\`Are you suer? ( \`y\` / \`n\` )`)
  .then(message => {
    message_id = message.id;
  }).then(() => {
    message.channel.awaitMessages(response => (response.content === 'y') || 'n', {
      max: 1,
      time: 10000,
      errors: ['time'],
    }).then(collected => {
      if (collected.first().author.id != user.id) return;
      if (collected.first().content === 'y') {
        collected.first().delete();
        if (permission1) {
          if (!permission2) {
            message.channel.send("Missing Permission.").then(response => response.delete({timeout: 5000}));
            del_msg();
            return;
          } else {
            message.guild.member(z).kick(reason)
            .catch(e => {message.channel.send(e, {code: 'js'}); return;})
            .then(() => {
                let d = new Date;
                let embed = new Discord.MessageEmbed()
                    .setAuthor(`____________________( α Lyrae DownLink ${version} )____________________`)
                    .setColor("#e91e63")
                    .setDescription(`\`\`\`css\n#Incoming_msg (${message_id})\nAt: [${d.toLocaleString()}]\nManager: [${user.username}] kicked user: [${z.username}]\n{Reason: '${reason}'}\`\`\``)
                    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
                message.channel.send({embed});
          })
            del_msg();
          }   //end of permission2.
        } else {
          del_msg();
          message.channel.send({embed: {
           color: 10158080,
           description: 'My current permission can\'t kick that user.\nPlease contact the server owners.'
         }}).then(response => response.delete({timeout: 5000}));
        }   //end of permission1.

      } else if (collected.first().content === 'n') {
        message.channel.send('Action cancelled.');
        del_msg();
      }
    }).catch(e => {message.channel.send(e.message); del_msg();});   //End of collected.
  }).catch(e => {message.channel.send(e.message); del_msg();});    //End of awaitMessages.
}   //End of function.

/*
* Ban function.
*
*/
function ban(user, z, message, client) {
  let permission1 = message.guild.member(z).bannable;
  let permission2 = message.guild.member(user).permissions.has('BAN_MEMBERS');

  message.channel.send(`\`\`\`md\n[You\'re going to ban the user:](${z.username}).\n< Please notice that this action cannot be able to undo. >\`\`\`Are you suer? ( \`y\` / \`n\` )`)
  .then(message => {
    message_id = message.id;
  }).then(() => {
    message.channel.awaitMessages(response => (response.content === 'y') || 'n', {
      max: 1,
      time: 10000,
      errors: ['time'],
    }).then(collected => {
      if (collected.first().author.id != user.id) return;
      if (collected.first().content === 'y') {
        collected.first().delete();
        if (permission1) {
          if (!permission2) {
            message.channel.send("Missing Permission.").then(response => response.delete({timeout: 5000}));
            del_msg();
            return;
          } else {
            message.guild.member(z).ban(reason)
            .catch(e => {message.channel.send(e, {code: 'js'}); return;})
            .then(() => {
                let d = new Date;
                let embed = new Discord.MessageEmbed()
                    .setAuthor(`____________________( α Lyrae DownLink ${version} )____________________`)
                    .setColor("#e91e63")
                    .setDescription(`\`\`\`css\n#Incoming_msg (${message_id})\nAt: [${d.toLocaleString()}]\nManager: [${user.username}] banned user: [${z.username}]\n{Reason: '${reason}'}\`\`\``)
                    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
                message.channel.send({embed});
          })
            del_msg();
          }   //end of permission2.
        } else {
          del_msg();
          message.channel.send({embed: {
           color: 10158080,
           description: 'My current permission can\'t ban that user.\nPlease contact the server owners.'
         }}).then(response => response.delete({timeout: 5000}));
        }   //end of permission1.

      } else if (collected.first().content === 'n') {
        message.channel.send('Action cancelled.');
        del_msg();
      }
    }).catch(e => {message.channel.send(e.message); del_msg();});   //End of collected.
  }).catch(e => {message.channel.send(e.message); del_msg();});    //End of awaitMessages.
}

function del_msg() {
  message.channel.messages.fetch(message_id).then(message => message.delete());
}

setTimeout(function () {
  try {
    client.removeAllListeners('messageReactionAdd');
  } catch (e) {
    console.log('there is no listener');
  }
},30000);

}
