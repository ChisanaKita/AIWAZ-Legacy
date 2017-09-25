const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  message.channel.send('\`S.Y.S.T.E.M. Shutting Down.....\`').then(response => response.delete(1000));

  setTimeout(function () {
    client.destroy();
  },2000);

	setTimeout(function () {
    client.login("MzQ3NzgyMTY2ODExMzc3NjY3.DHdZBA.UthInyT9rN38EuwCnngenJpmYz4");
    message.channel.send('\*\*[nodemon]\*\* watching: * -AIM- * \n\*\*[nodemon]\*\* starting AIwaz... \nLoading.. \*\*MISAKA-NETWORK\*\* ' + '\`' + version + '\`').then(response => response.delete(5000));
  },5000);

  setTimeout(function () {
    message.channel.send('CORE Restart Complete! ...').then(response => response.delete(1000));
  },10050);

  setTimeout(function () {
    message.channel.send('\*\*MISAKA-NETWORK\*\* Connected..').then(response => response.delete(2000));
  },11100);

  setTimeout(function () {
    var d = new Date();
    var HK_Offset = 8 * 60;
	  d.setMinutes(d.getMinutes() + HK_Offset);
    message.channel.send({embed: {
      color: 15597568,
      description: 'At : ' + '\`' + d.toLocaleString() + '\`' + ' S.Y.S.T.E.M. Successfully Restarted..'
    }});
  },13150);
}
