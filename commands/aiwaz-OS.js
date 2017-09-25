const Discord = require('discord.js');  //for embed
const version = require('../package.json').version; //for embed
const os = require('os'); //node.js BiF
exports.run = (client, message, args) => {
  message.delete();

  let guild = message.guild;                                            //define Guild
  let me = message.author;                                              //define me (message sender)
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

  let a = os.arch();          //cpu flameware
  let b = os.cpus();          //cpu detail
  let b1 = b[0];              //first cpu object
  let c = os.hostname();      //host pc name
  let d = os.release();       //host os num
  let e = os.totalmem();      //host pc total ram
  let e1 = (e / 1073741824);  //byte to GB
  let e2 = os.freemem();      //host pc free ram
  let e3 = (e2 / 1073741824); //byte to GB
  let f = os.type();          //host pc type
  let g = os.endianness();    //
  let h = os.platform();      //host pc os platform

//change the incoming info to the string you want. (in this case I change 'win32' to 'Windows 10' and 'darwin' to 'MacOS')
  if (h == 'win32') {
    var q = 'Windows 10 ';
  } else if (h == 'darwin') {
    var q = 'MacOS ';
  }

//SUM the result and send it
  let embed = new Discord.RichEmbed()
      .setAuthor("🔷(-AIwaz CORE STATUS-)🔷")
      .setColor("#33ccff")
      .addField("CPU", `${b1.model}` + '  ' + '\`' + a + '\`' + ' ' + '\`' + g + '\`', true)
      .addField("Host Name", c, true)
      .addField("Total Memory", Math.ceil(e1) + 'GB' + '  (' + Math.ceil(e3) + ' GB Free)', true)
      .addField("OS", q + '\`' + d + '\`', true)
      .addField("OS Type", f, true)
      .setThumbnail("https://i.imgur.com/Fta2jMg.jpg")
      .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
