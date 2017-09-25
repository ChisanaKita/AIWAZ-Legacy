const main = require('../bot.js');
exports.run = function(client, message, args) {
	message.delete();
	let cmd = args.join(' ');
	main.reload(message, cmd);
};
