let prefix = "aiwaz.";
const Discord = require('discord.js');
const version = require('../package.json').version;
const fs = require('fs');

module.exports = message => {
	if (!message.content.startsWith(prefix)) {
		let incoming_msg = message.content.toLowerCase().split(' ');
		if (incoming_msg.length > 3) return;
		if (incoming_msg.includes('good' && 'bot')) pet(message); return;
	}
	if (message.author.bot) return;

	var n = new Date().toLocaleString();
	const client = message.client;
	let args = message.content.split(' ');		//to ary
	const command = args.shift().slice(prefix.length).toLowerCase();
	const guild = client.guilds.find("name", "FS113341A/3A");		//logging server

	if (message.guild.iconURL()) {
		var guild_icon = message.guild.iconURL();
	} else {
		var guild_icon = "https://i.imgur.com/W6zvbx9.jpg";
	}

	fs.open(`commands/${command}.js`, "r+", (error, fd) => {
		if (error) {
			if (error.code === 'ENOENT') {
				console.log('Rejected.. (code: ENOENT)');
				return;
			}

			let embed = new Discord.MessageEmbed()
				.setAuthor(`_____________(AIwaz) α Lyrae DownLink ${version}_____________`, `${message.author.displayAvatarURL()}`)
				.setColor("#FF0000")
				.setTitle(`An unknown error was encountered.`)
				.addField("Unknown Error: ", `line: 44 (File System)`)
				.addField("Debug:", `\`\`\`js\n${error}\`\`\``)
				.setThumbnail(guild_icon)
				.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
			guild.channels.find('name', 'aiw-log').send({embed});
			console.log('Rejected.. (code: Unknown ERROR)');
		}	else {
			let embed = new Discord.MessageEmbed()
				.setAuthor(`_____________(AIwaz) α Lyrae DownLink ${version}_____________`, `${message.author.displayAvatarURL()}`)
				.setColor("#00FF88")
				.setTitle(`Command: ( ${command} ) Trigger.`)
				.addField("🔹 Time:", `${n}`, true)
				.addField("🔹 By:", `${message.guild.member(message.author).displayName} | ${message.author.tag}`, true)
				.addField("🔹 From:", `${message.guild.name} #${message.channel.name}`)
				.addField("Debug:", `\`\`\`args: ${args}\`\`\``)
				.setThumbnail(guild_icon)
				.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <ChisanaKita> ','https://i.imgur.com/Fta2jMg.jpg')
			guild.channels.find('name', 'aiw-log').send({embed});
			console.log('Resolved.. (exit code: 0)');
		}		//end log msg conditions

		try {
			let cmdFile = require(`../commands/${command}`);
			cmdFile.run(client, message, args);
		} catch (error) {
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
			console.log(`Rejected.. (code: ${error.message})`);
		}		//end try
	});		//end fs

	function pet(message) {
		message.react('💖');
		message.channel.send(`
			.░░░░░░░███████ ]▄▄▄▄▄▄▄▄
		....▂▄▅█████████▅▄▃▂	 ☻/	(Tank You~ <3)
		Il████████████████]    /▌
		◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤	 /\\ `);
		console.log('I\'ve been petted.');
		
	}
}
