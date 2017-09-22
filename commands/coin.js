const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

    let embed = new Discord.RichEmbed()
        .setAuthor("🔷(-Game 🎮 Panel-)🔷")
        .setTitle("COIN GAME!")
        .setColor("#e91e63")
        .addField("point up", "->Use reaction :point_up_2: to choose up.", true)
        .addField("point down", "->->Use reaction :point_down: to choose up.", true)
        .addField("Delete Game", "->Use 💰 to delete this coin game.", true)
        .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
    message.channel.send({embed}).then(function (message){
      message.react("👇");
      message.react("👆");
      message.react("💰");
      }).then(
        client.on('messageReactionAdd', (messageReaction, user) => {
          var x = Math.ceil(Math.random()*2);
          if (messageReaction.emoji == '👆' && !user.bot) {
            var c = '1';
            messageReaction.remove(user);
            if (x == c) {
              message.channel.send('You Won!!!').then(
            		response => response.delete(1000));
            } else {
              message.channel.send('Try Again...').then(
            		response => response.delete(1000));
            }
          }
          else if (messageReaction.emoji == '👇' && !user.bot) {
            var c = '2';
            messageReaction.remove(user);
            if (x == c) {
              message.channel.send('You Won!!!').then(
            		response => response.delete(1000));
            } else {
              message.channel.send('Try Again...').then(
            		response => response.delete(1000));
            }
          }
          else if (messageReaction.emoji == '💰' && !user.bot) {
            messageReaction.remove(user);  //unfin
          }
        })
      );
}
