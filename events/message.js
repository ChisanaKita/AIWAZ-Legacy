var prefix = "/"
const version = require('../package.json').version;
module.exports = message => {
	if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
	var n = new Date().toLocaleString();
	const client = message.client;
	let args = message.content.split(' ');
	const command = args.shift().slice(prefix.length);
	const guild = client.guilds.find("name", "個人的現實");
if (!command) {
	return;
}

console.log(`
    >Message Event<
Command (${command}) Trigger.
At : ${n}
By : ${message.author.username}
From : ${message.guild.name}`);

//if (client.user.presence['status'] == 'dnd' && message.author.id !== '179443176279375872') return;
// if (message.channel.name !== 'game-center' && message.content == ("/coin")) {
// 	message.delete();
// 	message.channel.send('Please Go To <#351250503306444800> And Try Again').then(response => response.delete(5000));
// 	return;
// };

	try {
		guild.channels.find('name', 'aiw-log').send(`Command : ( ${command} ) Trigger \n${n}, ${message.author.username}`);
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (error) {
			console.log(`\n${error}`);
			message.channel.send('⚠️Error : ' + error.message).then(response => response.delete(5000));
			 client.channels.get('347618456335548427').send({embed: {
			 	color: 10158080,
			 	description: '\`' + '------ 御坂網絡  ' + version + ' ------' + '\`\n' + 'Failed Execute Command : ' + command + `\nInput By : ` + message.author.username + '\nAt : ' + n + '\nFrom : ' + message.guild  + '\n\`\`\`js\n' + error.stack + '\`\`\`'
			 }});
		}

};
