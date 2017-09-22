const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

//If sender don't input a mention user, then z equal the sender itself.
  if (args == '') {
    var z = message.author;
  }else {
    var z = message.mentions.users.first();
  }

  let d = z.createdAt;          //The date when the user is created.
  let n = d.toLocaleString();   //conver the date to local string.
  let x;                        //Nitro
  let y;                        //Game status

//Logic Gate of the y
  if (z.presence.game !== null) {
    y = `${z.presence.game.name}`;
  } else {
    y = "💤Doing Nothing..";
  }

//Logic gate of the z
  if (z.premium) {
    x = '💎N8Tr0eD💎'
  } else {
    x = '❌Nope...'
  }

//Check the user is or isn't a bot.
  if (z.bot) {
    var w = ':regional_indicator_b: :regional_indicator_o: :regional_indicator_t: ';
  }else {
    var w = '';
  }

  let embed = new Discord.RichEmbed()
      .setAuthor("📁(AIwaz - USER INFO Module -)📁", "https://i.imgur.com/Fta2jMg.jpg")
      .setColor("#e91e63")
      .addField("🔹 User :", "➡️" + `${z.username}` + w)
      .addField("🔹 UserID :", "➡️" + `${z.id}`, true)
      .addField("🔹 Now Doing :", "➡️" + y, true)
      .addField("🔹 Created At :", "➡️" + n, true)
      .addField(" 🔹 Discord Nitro :", x, true)
      .setThumbnail(`${z.avatarURL}`)
      .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
