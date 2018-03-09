const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

if  (message.author.id != '179443176279375872') return;

  eval(args.join(' '))
  .catch(err => {
  message.channel.send('Action Rejected.\n\`\`\`err\`\`\`');
  })
  .then(err => {
  if (!err) {
  message.channel.send('Action Resolved.');
  }
  });

}
