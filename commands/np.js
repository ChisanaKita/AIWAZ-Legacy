const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();
  let guild = message.guild;
  var user;
  args == '' ? user = message.author : user = message.mentions.users.first();

  let activity = guild.member(user).presence.activity;
  let user_activity_name = activity.name;

  if (user_activity_name != "Spotify")  return;
  if (guild.member(user).presence.status != 'online') return;

  let user_now_listening = activity.details;
  let now_listening_artist = activity.state;
  let now_listening_link = activity.syncID;
  let img = activity.assets.largeImageURL();
  let album = activity.assets.largeText;
  let song_link = `https://www.google.com/search?q=${now_listening_artist.replace(/ /g, "%20").replace(/&/g, "%26")}%20-%20${user_now_listening.replace(/ /g, "%20")}`;

  let embed = new Discord.MessageEmbed()
      .setAuthor('(AIwaz - Music Module -)', `${user.displayAvatarURL()}`)
      .setColor("#26d05b")
      .addField("User:", `${user.username}`)
      .addField("Now Playing:", `[${now_listening_artist} - ${user_now_listening}](${song_link})`, true)
      .addField("Album:", `${album}`, true)
      .addField("Spotify ID:", `[spotify:track:${now_listening_link}](https://open.spotify.com/track/${now_listening_link})`)
      .setThumbnail(img)
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
