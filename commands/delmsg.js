const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  //permission module
    let guild = message.guild;  //define Guild
    let me = message.author;    //define me (message sender)
    let permission = guild.member(me).permissions.has("ADMINISTRATOR");   //check the user rither or not have the permission

  /*
  Logic gate of the user permission
    if the sender isn't the user you want (true), and if the user didn't have the permission (true), then send a message and end the command.
    if the sender is the user you want(false), and if the user have the permission (ignore), then do the command.
    if the sender is the user you want(false), and if the user didn't have the permission (ignore), then do the command.
    if the sender isn't the user you want(true), and if the user gave the permission (false), then do the command.
  */
    if (message.author.id != "179443176279375872") {
      if (!permission) {
        message.channel.send("You Don't Have The Permission To Use It.").then(response => response.delete(2000));
        return;
      }
    }

    let embed = new Discord.RichEmbed()
        .setAuthor("🔷(-Message Delete Panel-)🔷")
        .setColor("#ff6666")
        .addField("♻️Please Confirm how many messages you want to delete♻️","🔴 = 10 🔵 = 20 🔺 = 50")
        .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
    message.channel.send({embed}).then(function (message){
      message.react('🔴');
      message.react('🔵');
      message.react('🔺');
      }).then(
        client.on('messageReactionAdd', (messageReaction, user) => {
          if (messageReaction.emoji == '🔴' && !user.bot) {
            try {
              message.channel.fetchMessages({limit: 11}).then(messages => message.channel.bulkDelete(messages));
            } catch (error) {
              message.channel.send('⚠️Error : ' + error.message).then(response => response.delete(5000));
            }
          } else if (messageReaction.emoji == '🔵' && !user.bot) {
            try {
              message.channel.fetchMessages({limit: 21}).then(messages => message.channel.bulkDelete(messages));
            } catch (error) {
              message.channel.send('⚠️Error : ' + error.message).then(response => response.delete(5000));
            }
          } else if (messageReaction.emoji == '🔺' && !user.bot) {
            try {
              message.channel.fetchMessages({limit: 51}).then(messages => message.channel.bulkDelete(messages));
            } catch (error) {
              message.channel.send('⚠️Error : ' + error.message).then(response => response.delete(5000));
            }
          }
        })
      )
}
