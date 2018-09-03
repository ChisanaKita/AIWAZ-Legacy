const fs = require('fs');
exports.run = (client, message, args) => {
  message.delete();

  fs.readFile('./util/help_list.txt', (error, data) => {
    if (error) {
      if (error.code = 'ENOENT') console.log('path error.');
      return;
    }
    message.author.send(`${data}`, {code : 'md'});
    message.channel.send('The Help-List was sent to your DM');
  });
}
