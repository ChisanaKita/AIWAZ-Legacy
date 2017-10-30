const vn = require("../util/array.json");
exports.run = (client, message, args) => {
message.delete();
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
}

message.channel.send('Initializing...');

setTimeout(function () {
  //VoiceChannel
    for (let i = 0; i < vn.VoiceChannel.length; i++) {
      guild.channels.find('name', vn.VoiceChannel[i]).delete();
    };

  //ALL Roles
    for (let i = 0; i < vn.Roles.length; i++) {
      guild.roles.find('name', vn.Roles[i][0]).delete();
    };

  //TextChannel
    for (let i = 0; i < vn.TextChannel.length; i++) {
      guild.channels.find('name', vn.TextChannel[i]).delete();
      if (i == (vn.TextChannel.length - 1)) done(guild);
    };
},3000);

  function done(guild) {
    guild.createChannel('general', 'text').then(channel =>
      channel.send('DONE!')
    );
  };

}
