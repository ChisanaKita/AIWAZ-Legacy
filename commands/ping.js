const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();

  let pong = Math.ceil(client.ping);
  let emoji;

  if (pong < '250') {
    emoji = '💓';
  } else if (pong >= '250' && pong <= '499') {
    emoji = '💔';
  } else {
    emoji = '🖤';
  }

  let embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username}   Pong! ${emoji}`)
			.setColor("#e91e63")
			.setFooter(pong + ' ms delay | AIwaz - PING Module -')
		message.channel.send({embed});
}
