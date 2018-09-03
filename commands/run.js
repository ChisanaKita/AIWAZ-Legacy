const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  if (message.guild.member(message.author).permissions.has("ADMINISTRATOR")) {
    eval(args.join(' '))
    .catch(e => message.channel.send(`ERROR: Action Rejected.\n\`\`\`${e}\`\`\``))
    .then(e => {
      if (!e.content.startsWith('ERROR:')) {
        message.channel.send('Action Resolved.');
      }
    });
  } else {
    message.channel.send('ERROR: Missing Permission. Action Rejected.');
    return;
  }

}
