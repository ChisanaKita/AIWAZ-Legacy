const fs = require('fs');
const timeout = ms => new Promise(res => setTimeout(res, ms));
exports.run = function(client, message, args) {
	message.delete();
	if (!args || args.length < 1) return message.reply("Must provide a command to reload.").then(response => response.delete({timeout: 5000}));
	let cmd = args.join(' ');
	if (cmd == 'all') {
		reload_all_commands();
		return;
	}

	try {
		delete require.cache[require.resolve('../commands/' + cmd)];
		let cmdFile = require('../commands/' + cmd);
	} catch (error) {
		message.channel.send(`Problem loading \`${cmd}\` : ${error.message}`).then(response => response.delete({timeout: 5000}));
	} finally {
		message.channel.send('- Reload End -').then(response => response.delete({timeout: 5000}));
	}

	function reload_all_commands() {
		try {
			fs.readdir("./commands", (error, files) => {
				if (error) return console.error(error);
				files.forEach(file => {
					if (!file.endsWith(".js")) return;
					delete require.cache[require.resolve('../commands/' + file)];
					let cmdFile = require('../commands/' + file);
				})
			})
		} catch (error) {
			message.channel.send(`Problem loading command. code: ${error.code}`).then(response => response.delete({timeout: 5000}));
		} finally {
			message.channel.send('\*\*------------ Reload End ------------\*\*\n Successfully reload all cmd files.').then(response => response.delete({timeout: 5000}));
		}
	}
};
