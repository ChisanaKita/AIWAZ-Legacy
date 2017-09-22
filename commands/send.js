const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  if (args == '') {
    return;
  }

message.channel.send(args.join(' '));
}
