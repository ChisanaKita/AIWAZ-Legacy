const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  var game_array = [];
  var id = [];
  let guild = message.guild;

  try {
    client.removeAllListeners('messageReactionAdd');
  } catch (e) {
    console.log('there is no listener');
  }

  let embed = new Discord.MessageEmbed()
    .setAuthor("🔷( - Game 🎮 Panel - )🔷")
    .setTitle("COIN GAME!")
    .setColor("#e91e63")
    .addField("choose up", ":point_up_2: to choose up.", true)
    .addField("choose down", ":point_down: to choose up.", true)
    .addField("End Game", "💰 to end this game.", true)
    .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
  message.channel.send({embed}).then(async message => {
    await get_msg_id(message);
    await message.react("👆");
    await message.react("👇");
    await message.react("💰");
  });

  client.on('messageReactionAdd', (messageReaction, user) => {
    var x = Math.ceil(Math.random()*2);
    if (user.id != message.author.id) return;
    if (messageReaction.emoji.name == '👆' && !user.bot) {
      var c = '1';
      messageReaction.message.reactions.deleteAll();
      //messageReaction._remove(user);    //waiting lib update
      if (x == c) {
        message.channel.send('You Won!!!').then(
          response => response.delete(2000));
          game_array.push('1');
          // console.log(game_array);    //Debug
      } else {
        message.channel.send('Try Again...').then(
          response => response.delete(2000));
          game_array.push('0');
          // console.log(game_array);    //Debug
      }
    }
    else if (messageReaction.emoji.name == '👇' && !user.bot) {
      var c = '2';
      //messageReaction.remove(user);    //waiting lib update
      if (x == c) {
        message.channel.send('You Won!!!').then(
          response => response.delete(2000));
          game_array.push('1');
          // console.log(game_array);    //Debug
      } else {
        message.channel.send('Try Again...').then(
          response => response.delete(2000));
          game_array.push('0');
          // console.log(game_array);    //Debug
      }
    }
    else if (messageReaction.emoji.name == '💰' && !user.bot) {
      endgame(user);    //Main function.
      //console.log(`end id func: ${id}`);    //Debug
      del_game_msg(message);    //Delete msg func
    }
  });

  function get_msg_id(message) {
    id = message.id;
    //console.log(`start id func: ${id}`);    //Debug
  }
  function del_game_msg(message) {
    message.channel.messages.fetch(id).then(message => message.delete());
  }
  function endgame(user) {
    let guild_nick_name;
    client.removeAllListeners('messageReactionAdd');
    guild.member(user).nickname == null ? guild_nick_name = user.username : guild_nick_name = guild.member(user).nickname;
    let win = game_array.filter(game_array => game_array == '1');
    let lose = game_array.filter(game_array => game_array == '0');
    let ratio = Math.ceil((win.length / game_array.length) * 100);
    //console.log(win);   //Debug
    //console.log(lose);  //Debug
    let embed = new Discord.MessageEmbed()
      .setAuthor("📁(AIwaz - End Game Result -)📁", `${user.displayAvatarURL()}`)
      .setColor("#e91e63")
      .addField("Player :", `${guild_nick_name}  (${user.username})`)
      .addField("Total play(s) :", `${game_array.length} time(s)`, true)
      .addField("Win(s) :", `${win.length} time(s)`, true)
      .addField("Lose(s) :", `${lose.length} time(s)`, true)
      .addField("Win ratio :", `${ratio}% (corr. to the nearest integer)`)
      .addField("Debug :", `\`\`\`js\nGame {\n _data:\n  GameData {\n   Game_ID: '${id}',\n   Game_Data: [${game_array.toString()}],\n   Game_Name: 'coin' }\n  Player:\n   User {\n    '${user.id}' => [Object] } }\`\`\``)
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
    return  message.channel.send({embed});
  }
}
