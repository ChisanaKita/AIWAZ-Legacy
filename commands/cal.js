var math = require('math.js');
exports.run = (client, message, args) => {
  message.delete();



  try {
    var answer = math.eval(args.join(' '));
    message.channel.send(`Question : ${args.join(' ')} =  \*\*${answer}\*\*`);
  } catch (error) {
    message.channel.send(`⚠️Error : ${error.message}`);
  };

}
