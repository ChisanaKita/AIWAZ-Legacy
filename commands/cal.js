exports.run = (client, message, args) => {
  message.delete();

  let question = args.join(' ');

  try {
    var answer = eval(question);
    message.channel.send(`Question : ${args.join(' ')} =  \`${answer}\``);
  } catch (error) {
    message.channel.send(`⚠️Error : ${error.message}`);
  }
}
