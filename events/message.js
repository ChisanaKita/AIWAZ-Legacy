const prefix = "/"
const version = require('../package.json').version;
const moment = require('moment-timezone');
module.exports = message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	let d = new Date();
	var HK_Offset = 8 * 60;
	const client = message.client;
	let args = message.content.split(' ');
	const command = args.shift().slice(prefix.length);
	const guild = client.guilds.find("name", "個人的現實");
	d.setMinutes(d.getMinutes() + HK_Offset);
	
if (!command) {
	return;
}
	
function toTimeZone(d, zone) {
 var format = 'YYYY/MM/DD HH:mm:ss';
 return moment(d, format).tz(zone).format(format);
};
	
console.log(`
    >Message Event<
Command (${command}) Trigger. At: ${toTimeZone(d, "Asia/Hong_Kong")}
By: ${message.author.username}, From: ${message.guild.name}`);

	try {
		guild.channels.find('name', 'aiw-log').send(`Command : ( ${command} ) Trigger \n${toTimeZone(d, "Asia/Hong_Kong")},\n${message.author.username}`);
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (error) {
			console.log(`\n${error}`);
			message.channel.send('⚠️Error : ' + error.message).then(response => response.delete(10000));
			 client.channels.get('347618456335548427').send({embed: {
			 	color: 10158080,
			 	description: '\`' + '------ 御坂網絡  ' + version + ' ------' + '\`\n' + 'Failed Execute Command : ' + command + `\nInput By : ` + message.author.username + '\nAt : ' + toTimeZone(d, "Asia/Hong_Kong") + '\nFrom : ' + message.guild  + '\n\`\`\`js\n' + error.stack + '\`\`\`'
			 }});
		}

};
