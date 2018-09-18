exports.run = (client, message, args) => {
message.delete();

if (args == '') {
  var user = client.user;
} else {
  var user = message.mentions.users.first();
}

const limit_msg = "50";

message.channel.messages.fetch({limit: limit_msg}).then((messages) => {
  if (user) {
    const filterBy = user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, limit_msg);
  } else {
    message.channel.send('No User Find.');
    return;
  }
    message.channel.bulkDelete(messages)
    .catch(error => message.channel.send('⚠️Error : ' + error.message));
});

client.once('messageDeleteBulk', messages => {
  var n = new Date().toLocaleString();
  let msg_ary = messages.array();
  let num = msg_ary.length;
message.channel.send(`✅ | Clean Up \'${num}\' Messages | at: \"${n}\" |`, {code : 'ml'});
  });

}
