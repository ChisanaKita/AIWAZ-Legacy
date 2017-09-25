const Discord = require('discord.js');
const version = require('../package.json').version;
const d = new Date().toLocaleString();
exports.run = (client, message, args) => {
message.delete();

/*
 Example by eslachance#4611
*/
const user = client.user;
const amount = "25";
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
message.channel.bulkDelete(messages).catch(error => message.channel.send('⚠️Error : ' + error.message)).then(response => response.delete(8000));
});
}
