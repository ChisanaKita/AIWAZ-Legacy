const vn = require("../util/array.json");
exports.run = (client, message, args) => {

var guild = message.guild;

//permission module
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
};

let g_channels = guild.channels.find('name', 'general');

if (g_channels) {
  g_channels.delete();
};

guild.createChannel('TextChannel', 'category');
guild.createChannel('VoiceChannel', 'category');

setTimeout(function () {
  //TextChannel
    for (let i = 0; i < vn.TextChannel.length; i++) {
      guild.createChannel(vn.TextChannel[i], 'text').then(
        textchannel => textchannel.setParent(guild.channels.find('name', 'TextChannel'))
      );
    };

  //VoiceChannel
    for (let i = 0; i < vn.VoiceChannel.length; i++) {
      guild.createChannel(vn.VoiceChannel[i], 'voice').then(
        voicechannel => voicechannel.setParent(guild.channels.find('name', 'VoiceChannel'))
      );
    };

  //Roles
    for (let i = 0; i < vn.Roles.length; i++) {
        guild.createRole({
          name: vn.Roles[i][0],
          color: vn.Roles[i][1],
        });
    };
},3000);

  setTimeout(function() {
    guild.channels.find('name', 'sound-only').send('All Done!');
  },28000);
}
