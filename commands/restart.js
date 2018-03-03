const main = require('../bot.js');
exports.run = function(client, message, args) {
	message.delete();
	main.restart(client, message);
};