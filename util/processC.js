const version = require('../package.json').version;
var processC = (client, message, num) => {
 let guild = message.guild;
 let u = guild.member(message.author);
 if (u.nickname) {
   var nick = u.nickname;
 } else {
   var nick = message.author.username;
 }

 switch(num)
 {
   case 1 : var r4 = guild.roles.find("name", "中学生");break;
   case 2 : var r4 = guild.roles.find("name", "高校生");break;
   case 3 : var r4 = guild.roles.find("name", "大学生");break;
   case 4 : var r4 = guild.roles.find("name", "小学生");break;
 }
 
  try {
    u.addRole(r4);
    guild.channels.find('type', 'text').send(`${r4.name} Added.`);
    guild.channels.get('347618456335548427').send('\`------ 御坂網絡  ' + version + ' ------\`' + `\n\`\`\`User : ${nick}'s identification logged as : ${r4.name}\`\`\``);
  } catch (error) {
    console.log(error);
    guild.channels.get('347618456335548427').send('\`------ 御坂網絡  ' + version + ' ------\`\n' + '\*\*Failed Executing\*\* : Register ' +  '\n\`\`\`js\n' + error.stack + '\`\`\`');
  }
}
exports.processC = processC;
