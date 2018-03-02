const main = require('../bot.js');
exports.run = function(client, message, args) {
	message.delete();
	let cmd = args.join(' ');
	
	try {
		delete require.cache[require.resolve('../commands/' + cmd)];
		let cmdFile = require('../commands/' + cmd);
	} catch (error) {
		message.channel.send(`Problem loading \`${cmd}\` : ${error.message}`).then(response => response.delete({timeout : '5000'}));
	} finally {
		message.channel.send('- Reload End -').then(response => response.delete(5000));
	}
};
