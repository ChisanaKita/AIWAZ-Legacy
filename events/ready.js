const version = require('../package.json').version;
module.exports = client => {

console.log('Online!');

client.user.setPresence( {activity: {name: `御坂網絡 ${version}`, type: 3 }} );
}
