const vn = require('../util/array.json')
exports.run = (client, message, args) => {
message.delete();

  for (var i = 0; i < vn.VoiceChannel.length; i++) {
    guild.channels.find('name', vn.VoiceChannel[i])
  }

}
