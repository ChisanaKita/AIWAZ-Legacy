const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  let ser = client.guilds.find("name", "個人的現實");                            //The server that i want to send a log message.
  let resone = args.shift().slice(args[0].length);                              //The resone of why the user been kick.
  let user = message.mentions.users.first();                                    //The user that the sender want to kick.
  let x = message.author;                                                       //The sender
  let permission1 = message.guild.member(user).kickable;                        //Check is or isn't the user is kickable from the sender.
  let permission2 = message.guild.member(x).permissions.has('KICK_MEMBERS');    //ONLY have this permission can use this command.
  let servername = message.guild.name;                                          //The serve name

//If the sender not define a user to kick, then do nothing.
  if (user == null) {
    return;
  }

  /*
  --------Logic gate of the user permission--------
    if the sender isn't the user you want (true), and if the user didn't have the permission (true), then send a message and end the command.
    if the sender is the user you want(false), and if the user have the permission (ignore), then do the command.
    if the sender is the user you want(false), and if the user didn't have the permission (ignore), then do the command.
    if the sender isn't the user you want(true), and if the user gave the permission (false), then do the command.
  */
  if (message.author.id != "179443176279375872") {
    if (!permission2) {
      message.channel.send("You Don't Have The Permission To Use It.").then(response => response.delete(2000));
      return;
    }
  }

/*
If the user IS kickable from the sender, And the sender hes a permission to use this command, then kick the user and send a Log message to the log TextChannel.
Else ,Send a message say that the sender missing permission.
*/
  if (permission1) {
    message.guild.member(user).kick(resone);
    let embed = new Discord.RichEmbed()
        .setAuthor('------ α Lyrae DownLink ' + version + ' ------', "https://i.imgur.com/Fta2jMg.jpg")
        .setColor("#e91e63")
        .setDescription(`${x.username} has kicked user : ${user.username} At : ${servername}\n\`\`\`Resone : ${resone}\`\`\``)
        .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
    ser.channels.get('347618456335548427').send({embed});
  } else {
    message.channel.send('Missing Permission');
  }



}
