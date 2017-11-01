const version = require('../package.json').version;
const moment = require('moment-timezone');
const d = new Date();
const timeout = ms => new Promise(res => setTimeout(res, ms));
const token = require('../token.json').Token;
exports.run = (client, message, args) => {
  message.delete();

  restart();

async function restart() {
  let response = await message.channel.send('\`S.Y.S.T.E.M. Shutting Down.....\`');
  await response.delete(1000);
  await client.destroy();
  await timeout(3000);
  await client.login(`"${token}"`);
  await client.user.setStatus('dnd');
  await client.user.setPresence( { game: {name: 'AIW' + ' 御坂網絡 ' + 'Disconnected', type: 0 }});
  let response1 = await message.channel.send('> \*\*[node.AI]\*\* watching: * -AIM- * \n> \*\*[node.AI]\*\* Starting AIwaz... \n> Loading.. \*\*MISAKA-NETWORK\*\* ' + '\`' + version + '\`')
  await response1.delete(5000);
  let response2 = await message.channel.send('> CORE Restart Complete..... \n> Awaiting \*\*readdir\*\* Callback...');
  await response2.delete(3000);
  await client.user.setPresence( { game: {name: 'AIW' + ' 御坂網絡 ' + version, type: 0 }});
  let response3 = await message.channel.send('> \*\*MISAKA-NETWORK\*\* Connected.... Callback Sueecss..');
  await response3.delete(2000);
  await client.user.setStatus('online');
  let finreply = await message.channel.send({embed: {
    color: 15597568,
    description: `At : \`${toTimeZone(d, "Asia/Hong_Kong")}\` S.Y.S.T.E.M. Successfully Restarted..`
  }});
  await finreply.delete(5000);
};

  function toTimeZone(d, zone) {
    var format = 'YYYY/MM/DD HH:mm:ss';
    return moment(d, format).tz(zone).format(format);
  };

}
