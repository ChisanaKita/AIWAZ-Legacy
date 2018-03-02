exports.run = (client, message, args) => {
message.delete();

/*
--------Logic gate of the user permission--------
  if the sender isn't the user you want (true), and if the user didn't have the permission (true), then send a message and end the command.
  if the sender is the user you want(false), and if the user have the permission (ignore), then do the command.
  if the sender is the user you want(false), and if the user didn't have the permission (ignore), then do the command.
  if the sender isn't the user you want(true), and if the user gave the permission (false), then do the command.
*/
if (message.author.id != "179443176279375872") {
    message.channel.send("You Don't Have The Permission To Use It.").then(response => response.delete(2000));
    return;
} else {
  client.destroy();
  setTimeout(function () {
    process.exit(666);
  },5000);
}

}
