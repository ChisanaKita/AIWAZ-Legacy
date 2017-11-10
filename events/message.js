const prefix = "/"
const version = require('../package.json').version;
const moment = require('moment-timezone');
module.exports = message => {
	var d = new Date();
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	const client = message.client;
	let args = message.content.split(' ');
	const command = args.shift().slice(prefix.length);
	const guild = client.guilds.get("179445290795794432");
	
if (client.user.presence['status'] == 'dnd' && message.author.id !== '179443176279375872') return;
	
if (!command) {
	return;
}
	
function toTimeZone(d, zone) {
 var format = 'YYYY/MM/DD HH:mm:ss';
 return moment(d, format).tz(zone).format(format);
};
	
console.log(`
Command (${command}) Trigger. At: ${toTimeZone(d, "Asia/Hong_Kong")}
By: ${message.author.tag}, From: ${message.guild.name}`);

	try {
		guild.channels.find('name', 'aiw-log').send(`Command : ( ${command} ) Trigger \n${toTimeZone(d, "Asia/Hong_Kong")},\nBy: ${message.author.tag}`);
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (error) {
			console.log(`\n${error}`);
			 guild.channels.find('name', 'aiw-log').send({embed: {
			 	color: 10158080,
			 	description: '\`' + '------ 御坂網絡  ' + version + ' ------' + '\`\n' + 'Failed Execute Command : ' + command + `\nInput By : ` + message.author.tag + '\nAt : ' + toTimeZone(d, "Asia/Hong_Kong") + '\nFrom : ' + message.guild  + '\n\`\`\`js\n' + error.stack + '\`\`\`'
			 }});
		}

};
