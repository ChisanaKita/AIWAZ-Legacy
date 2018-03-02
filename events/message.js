var prefix = "aiwaz."
const Discord = require('discord.js');
const version = require('../package.json').version;
const fs = require('fs');
module.exports = message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	var n = new Date().toLocaleString();
	const client = message.client;
	let args = message.content.split(' ');
	const command = args.shift().slice(prefix.length).toLowerCase();
	const guild = client.guilds.find("name", "FS113341A/3A");

if (message.guild.iconURL()) {
	var guild_icon = message.guild.iconURL();
} else {
	var guild_icon = "https://i.imgur.com/W6zvbx9.jpg";
}

fs.open(`commands/${command}.js`, "r+", (error, fd) => {
	if (error) {
		if (error.code === 'ENOENT') {
			return;
		}
	}	else {
		let embed = new Discord.MessageEmbed()
		.setAuthor(`_______________(AIwaz) α Lyrae DownLink ${version}_______________`, `${message.author.displayAvatarURL()}`)
		.setColor("#00FF88")
		.setTitle(`Command: ( ${command} ) Trigger.`)
		.addField("🔹 Time:", `${n}`, true)
		.addField("🔹 By:", `${message.guild.member(message.author).displayName} | ${message.author.tag}`, true)
		.addField("🔹 From:", `${message.guild.name} #${message.channel.name}`)
		.addField("Debug:", `\`\`\`args: ${args}\`\`\``)
		.setThumbnail(guild_icon)
		.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
		guild.channels.find('name', 'aiw-log').send({embed});
	}

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (error) {
		message.channel.send(`⚠️Error : ${error.message}`);
		let embed = new Discord.MessageEmbed()
		.setAuthor(`_______________(AIwaz) α Lyrae DownLink ${version}_______________`, `${message.author.displayAvatarURL()}`)
		.setColor('#FF0000')
		.setTitle('An Error Encounter.')
		.addField("🔹 Time:", `${n}`, true)
		.addField("🔹 From:", `${message.guild.name} #${message.channel.name}`,true)
		.addField(`Debug:`, `\`\`\`js\n${error}\`\`\``)
		.setThumbnail(guild_icon)
		.setFooter('Aiwaz ' + (version) + ' ©️ Copyright <2018> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
		guild.channels.find('name', 'aiw-log').send({embed});
	}
});

}
