const timeout = ms => new Promise(res => setTimeout(res, ms));
const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
message.delete();

let guild = message.guild;
if (guild.id != '191539621119655936') {
  return;
}

if (guild.member(message.author).roles.find("name", "小学生 - Elementary school student" || "name", "中学生 - Middle school student" || "name", "高校生 - High school student" || "name", "大学生 - University student")) {
  message.channel.send('you already log your Identity');
  return;
}

var message_id;

let embed = new Discord.MessageEmbed()
    .setAuthor("🔷(-Register Panel-)🔷")
    .setColor("#ff6666")
    .addField("💮Please Confirm Your id💮", "💓 = 小学生 ,💗 = 中学生 ,💙 = 高校生 ,💚 = 大学生")
    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
message.channel.send({embed}).then(async function (message){
  message_id = message.id;
  await message.react('💓');
  await message.react('💗');
  await message.react('💙');
  await message.react('💚');
});

  client.on('messageReactionAdd', (messageReaction, user) => {
    var getprocessC = require('../util/processC.js');

    if (messageReaction.emoji.name == '💓' && !user.bot) {
       let num = 1;
       getprocessC.processC(client, message, num);
       delmsg();
       end_event();
   }  else if (messageReaction.emoji.name == '💗' && !user.bot) {
      let num = 2;
      getprocessC.processC(client, message, num);
      delmsg();
      end_event();
    } else if (messageReaction.emoji.name == '💙' && !user.bot) {
        let num = 3;
        getprocessC.processC(client, message, num);
        delmsg();
        end_event();
    } else if (messageReaction.emoji.name == '💚' && !user.bot) {
        let num = 4;
        getprocessC.processC(client, message, num);
        delmsg();
        end_event();
    }
  })

  function delmsg() {
    message.channel.messages.fetch(message_id).then(message => message.delete());
  }
  function end_event() {
    client.removeAllListeners('messageReactionAdd');
  }

}
