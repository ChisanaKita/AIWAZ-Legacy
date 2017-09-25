const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

//If the sender dosen't input any args, then send a warning message say that 'args can't be null' and do nothing.
if (args == '') {
  message.channel.send({embed: {
    color: 2552550,
    description: "⚠️args can\'t be \`null\`"
  }}).then(
		response => response.delete(5000));
    return;
}

  message.channel.send("```js\n" + args.join(' ') + "```");
}
