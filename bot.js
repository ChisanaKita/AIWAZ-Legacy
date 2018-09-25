const Discord = require('discord.js');
const client = new Discord.Client();
const version = require('./package.json').version;
require('./util/eventLoader')(client);
const Token = process.env.BOT_TOKEN;
const moment = require('moment-timezone');
const d = new Date();
const timeout = ms => new Promise(res => setTimeout(res, ms));


client.on("guildMemberAdd", (member) => {
	var getskill = require('./skill.js');
	getskill.skill(client, member);
});

var restart = (client, message) => {
    message.delete();
  
    restart();
  
  async function restart() {
    let response = await message.channel.send('\`S.Y.S.T.E.M. Shutting Down.....\`');
    await response.delete({timeout: 1000});
    await client.destroy();
    await timeout(2000);
    await client.login(Token);
    await client.user.setStatus('dnd');
    await client.user.setPresence( {activity: {name: '御坂網絡 ' + 'Disconnected', type: 2 }});
    let response1 = await message.channel.send('\*\*>\*\* \*\*[noob.AI]\*\* watching: * -AIW- * \n\*\*>\*\* \*\*[noob.AI]\*\* Starting AIwaz... \n\*\*>\*\* Listening.. \*\*MISAKA-NETWORK\*\* ' + '\`' + version + '\`')
    await response1.delete({timeout: 5000});
    let response2 = await message.channel.send('\*\*>\*\* CORE Restart Complete..... \n\*\*>\*\* Awaiting \*\*readdir\*\* Callback...');
    await response2.delete({timeout: 3000});
    await client.user.setPresence( {activity: {name: '御坂網絡 ' + version, type: 3 }});
    let response3 = await message.channel.send('\*\*>\*\* \*\*MISAKA-NETWORK\*\* Connected.... Callback Success..');
    await response3.delete({timeout: 2000});
    await client.user.setStatus('online');
    let finreply = await message.channel.send({embed: {
      color: 15597568,
      description: `At : \`${toTimeZone(d, "Asia/Hong_Kong")}\` S.Y.S.T.E.M. Successfully Restarted..`
    }});
    await finreply.delete({timeout: 10000});
  };
  exports.restart = restart;
  
    function toTimeZone(d, zone) {
      var format = 'YYYY/MM/DD HH:mm:ss';
      return moment(d, format).tz(zone).format(format);
    };
  
  };

//process.env.BOT_TOKEN
client.login(Token);
