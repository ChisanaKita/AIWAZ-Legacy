exports.run = (client, message, args) => {
  message.delete();
  client.user.setStatus(args.join(' '));
}
