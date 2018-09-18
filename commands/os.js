const Discord = require('discord.js');  //for embed
const version = require('../package.json').version; //for embed
const os = require('os'); //node.js BiF
const moment = require('moment-timezone');
exports.run = (client, message, args) => {
  message.delete();

  const ready_At = client.readyAt;         //Bot starting time
  let guild = message.guild;               //define Guild
  let me = message.author;                 //define me (message author)


if (!guild.member(me).permissions.has('ADMINISTRATOR')) return;

  let a = os.arch();          //cpu flame ware
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


  let ut = client.uptime;                   //The bot total up time.
  let time = Math.ceil((ut / 1000) / 60);   //Convert the up time to Minute(s).
  let unit;                                 //Defined the time unit.

//Changing UK Time To HK Time.
  function toTimeZone(time, zone) {
    var format = 'YYYY/MM/DD HH:mm:ss ZZ';
    return moment(time, format).tz(zone).format(format);
  }

//Logic Gate for changing the Time Unit
  if (time >= '60') {
    time = Math.ceil(((ut / 1000) / 60) / 60);
    unit = 'Hour(s)';
  } else {
    unit = 'Minute(s)';
  }


//Collect the result and send it
  let embed = new Discord.MessageEmbed()
      .setAuthor("_______________________(AIwaz STATUS)_______________________")
      .setColor("#33ccff")
      .setDescription("Start At :" +'\`'+ toTimeZone(ready_At, "Asia/Hong_Kong") +'\`')
      .addField("CPU", `${b1.model}` + '  ' + '\`' + a + '\`' + ' ' + '\`' + g + '\`', true)
      .addField("Host Name", c, true)
      .addField("Total Memory", Math.ceil(e1) + 'GB' + '  (' + Math.ceil(e3) + ' GB Free)', true)
      .addField("OS", q + '\`' + d + '\`', true)
      .addField("OS Type", f, true)
      .addField("Up Time", "Up Time : " + '\`' + time + '\`' + unit, true)
      .addField("Ping", '\`' + Math.ceil(client.ping) + '\`' + "ms", true)
      .setThumbnail("https://i.imgur.com/Fta2jMg.jpg")
      .setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
  message.channel.send({embed});
}
