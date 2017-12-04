exports.run = (client, message, args) => {
  message.delete();
  
  regex = new RegExp("^\d");
  let question = args.join(' ');

  if(question.test(regex)){
    try {
      var answer = eval(question);
      message.channel.send(`Question : ${args.join(' ')} =  \`${answer}\``);
    } catch (error) {
      message.channel.send(`⚠️Error : ${error.message}`);
    }
  }else{
    message.channel.send("Please Don't Input String, I Know You See Me Using Eval()", {code: 'js'});
  }
  

}
