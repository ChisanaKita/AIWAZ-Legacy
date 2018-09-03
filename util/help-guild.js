const fs = require('fs');
exports.run = (client, member) => {
  let guild = member.guild;

  fs.readFile('./util/help_list.txt', (error, data) => {
    if (error) {
      if (error.code = 'ENOENT') console.log('path error.');
      return;
    }
    member.send(`${data}`, {code : 'md'});
    guild.channels.find('type', 'text').send('The help list has sent to your DM.');
  });
}
