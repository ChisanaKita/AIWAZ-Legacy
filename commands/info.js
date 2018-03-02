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
  let n = d.toLocaleString();   //convert the date to local string.
  let x;                        //Nitro
  let y;                        //Game status

//Logic Gate of the y
  if (z.presence.activity !== null) {
    y = `${z.presence.activity.name}`;
  } else {
    y = "💤Doing Nothing..";
  }

//Check the user is or isn't a bot.
  if (z.bot) {
    var w = ' :regional_indicator_b: :regional_indicator_o: :regional_indicator_t: ';
  }else {
    var w = '';
  }

  let embed = new Discord.MessageEmbed()
      .setAuthor("📁(AIwaz - USER INFO Module -)📁", "https://i.imgur.com/Fta2jMg.jpg")
      .setColor("#e91e63")
      .addField("🔹 User :", "➡️ " + `${z.tag}` + w, true)
      .addField("🔹 Roles :", `\`${message.guild.member(z).roles.highest.name} - ${message.guild.member(z).roles.color.name}\``, true)
      .addField("🔹 Now Doing :", "➡️ " + y, true)
      .addField("🔹 Created At :", "➡️ " + n, true)
      .setThumbnail(`${z.displayAvatarURL()}`)
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
