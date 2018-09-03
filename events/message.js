const prefix = "aiwaz.";
const Discord = require('discord.js');
const version = require('../package.json').version;
const fs = require('fs');

module.exports = message => {
	if (message.author.bot) return;

	const client = message.client;
	const guild = client.guilds.find("id", "179445290795794432");		//logging server
	var n = new Date().toLocaleString();

	if (!message.content.startsWith(prefix)) {
		let incoming_msg = message.content.toLowerCase().split(' ');
		if (incoming_msg.length > 8) return;		//prevent mem overflow
		if (incoming_msg.includes('good') && incoming_msg.includes('bot')) pet(message, guild, n); return;
	}

	let args = message.content.split(' ');		//to ary
	const command = args.shift().slice(prefix.length).toLowerCase();

	console.log(`
__________________________${[n]}__________________________
|User: ${message.author.username}
|Try to execute command: "${command}" /w args: "${args}"
|From: ${message.guild.name} #${message.channel.name}
|Awaiting callback......`);

	if (message.guild.iconURL()) {
		var guild_icon = message.guild.iconURL();
	} else {
		var guild_icon = "https://i.imgur.com/W6zvbx9.jpg";
	}

	fs.open(`commands/${command}.js`, "r+", (error, fd) => {
		if (error) {
			if (error.code === 'ENOENT') console.log('|Rejected.. (code: ENOENT)\n|_______________________________________________________________________'); return;

			let embed = new Discord.MessageEmbed()
				.setAuthor(`__________(AIwaz) α Lyrae DownLink ${version}__________`, `${message.author.displayAvatarURL()}`)
				.setColor("#FF0000")
				.setTitle(`An unknown error was encountered.`)
				.addField("Unknown Error: ", `line: 35:2 (fs.open() \`File System\`)`)
				.addField("Debug:", `\`\`\`js\n${error}\`\`\``)
				.setThumbnail(guild_icon)
				.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
			guild.channels.find('name', 'aiw-log').send({embed});
			console.log('|Rejected.. (code: Unknown ERROR)\n|_______________________________________________________________________');
		}	else {
			let embed = new Discord.MessageEmbed()
				.setAuthor(`__________(AIwaz) α Lyrae DownLink ${version}__________`, `${message.author.displayAvatarURL()}`)
				.setColor("#00FF88")
				.setTitle(`Command: ( ${command} ) Trigger.`)
				.addField("🔹 Time:", `${n}`, true)
				.addField("🔹 By:", `${message.guild.member(message.author).displayName} | ${message.author.tag}`, true)
				.addField("🔹 From:", `${message.guild.name} #${message.channel.name}`)
				.addField("Debug:", `\`\`\`args: ${args}\`\`\``)
				.setThumbnail(guild_icon)
				.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
			guild.channels.find('name', 'aiw-log').send({embed});
		}		//end log msg conditions

		try {
			let cmdFile = require(`../commands/${command}`);
			cmdFile.run(client, message, args)
		} catch (error) {
			is_error(error)
			message.channel.send(`⚠️Error : ${error.message}`);
			let embed = new Discord.MessageEmbed()
				.setAuthor(`_____________(AIwaz) α Lyrae DownLink ${version}_____________`, `${message.author.displayAvatarURL()}`)
				.setColor('#FF0000')
				.setTitle(`An error was encountered while trying to run command (${command})`)
				.addField("🔹 Time:", `${n}`, true)
				.addField("🔹 From:", `${message.guild.name} #${message.channel.name}`,true)
				.addField(`Debug:`, `\`\`\`js\n${error}\`\`\``)
				.setThumbnail(guild_icon)
				.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
			guild.channels.find('name', 'aiw-log').send({embed});
			console.log(`|Rejected.. \n${error.stack}\n|_______________________________________________________________________`);
		} finally {
			is_error('NULL');
		}		//end try
	});		//end fs

	function pet(message, guild, n) {
		message.react('💖');
		message.channel.send('Tank You~!');
		guild.channels.find('name', 'aiw-log').send(`${n}: I\'ve been petted.`);
	}
	function is_error(err) {
		if (err == 'NULL') {console.log('|Resolved.. (exit code: 0)\n|_______________________________________________________________________')}
	}
}	//end of message event
