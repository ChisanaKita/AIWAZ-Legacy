const Discord = require('discord.js');
const client = new Discord.Client();
const version = require('./package.json').version;
require('./util/eventLoader')(client);
const tokendata = require('./token.json').Token;
const Token = process.env.BOT_TOKEN;
const fs = require('fs');

var data = `{ "Token": "${Token}" }`;

if (!tokendata == null) {
	fs.writeFile('./token.json', data, (error) => {console.log(error)});
}

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


client.login(Token);
