const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  if (message.guild.member(message.author).permissions.has("ADMINISTRATOR")) return;

  eval(args.join(' '))
  .catch(e => message.channel.send('Action Rejected.\n\`\`\`e\`\`\`'))
  .then(e => {
    if (!e) {
      message.channel.send('Action Resolved.');
    }
  });

}
