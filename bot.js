const Discord = require('discord.js');
const client = new Discord.Client();
const version = require('./package.json').version;
require('./util/eventLoader')(client);
const Token = process.env.BOT_TOKEN;
const fs = require('fs');
const moment = require('moment-timezone');
const d = new Date();
const timeout = ms => new Promise(res => setTimeout(res, ms));

//call the skill.js
client.on("guildMemberAdd", (member) => {
	var getskill = require('./skill.js');
	getskill.skill(client, member);
});

//reload module
var reload = (message, cmd) => {
	try {
		delete require.cache[require.resolve('./commands/' + cmd)];
		let cmdFile = require('./commands/' + cmd);
	} catch (error) {
		message.channel.send(`Problem loading \`${cmd}\` : ${error.message}`).then(response => response.delete(5000));
	} finally {
		message.channel.send('- Reload End -').then(response => response.delete(1000));
	}
};
exports.reload = reload;

//restart
var restart = (client, message) => {
 restart();
async function restart() {
  let response = await message.channel.send('\`S.Y.S.T.E.M. Shutting Down.....\`');
  await response.delete(1000);
  await client.destroy();
  await timeout(3000);
  await client.login(Token);
  await client.user.setStatus('dnd');
  await client.user.setPresence( { game: {name: '御坂網絡 ' + 'Connecting', type: 2 }});
  let response1 = await message.channel.send('> \*\*[node.AI]\*\* watching: * -AIM- * \n> \*\*[node.AI]\*\* Starting AIwaz... \n> Loading.. \*\*MISAKA-NETWORK\*\* ' + '\`' + version + '\`')
  await response1.delete(5000);
  let response2 = await message.channel.send('> CORE Restart Complete..... \n> Awaiting \*\*readdir\*\* Callback...');
  await response2.delete(3000);
  await client.user.setPresence( { game: {name: '御坂網絡 ' + version, type: 3 }});
  let response3 = await message.channel.send('> \*\*MISAKA-NETWORK\*\* Connected.... Callback Sueecss..');
  await response3.delete(2000);
  await client.user.setStatus('online');
  let finreply = await message.channel.send({embed: {
    color: 15597568,
    description: `At : \`${toTimeZone(d, "Asia/Hong_Kong")}\` S.Y.S.T.E.M. Successfully Restarted..`
  }});
  await finreply.delete(5000);
};
exports.restart = restart;

  function toTimeZone(d, zone) {
    var format = 'YYYY/MM/DD HH:mm:ss';
    return moment(d, format).tz(zone).format(format);
  };

client.login(Token);
