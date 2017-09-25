const version = require('../package.json').version;
const fs = require('fs');
let d = new Date();
var HK_Offset = 8 * 60;
d.setMinutes(d.getMinutes() + HK_Offset);

module.exports = client => {
  let ser = client.guilds.find("name", "個人的現實");

  console.log('\n I\`m Online \n AIwaz 御坂網絡 : ' + version);
  client.user.setPresence( { game: {name: 'AIW' + ' 御坂網絡 ' + version, type: 0 }});
  ser.channels.find('name', 'aiw-log').send(`Client Online at : ${d.toLocaleString()}`);

  fs.readdir('./commands/', (error, files) => {
    if (error) console.error(error);

    console.log(`Loading a total of ${files.length} commands.`);
    files.forEach(f => {
      delete require.cache[require.resolve(`../commands/${f}`)];
      let props = require(`../commands/${f}`);
    });
  });
}
