const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  message.channel.send("\`\`\`md\n" + "Command List\n============\n\n>>>[Useage](<Prefix> + <Command> + <Args> + <Parameter>)\n\nsystem class commands\n=====================\n[:warning:][system admin use ONLY]\
       \n1.  <aiwaz     = 'Show AIwaz status'> \
       \n2.  <aiwaz-OS  = 'Open the AIwaz OS manual'>\
       \n3.  <delmsg    = 'Open the delete message module'>\
       \n4.  <kick      = 'kick a user from the server'>           @user + <Reason>\
       \n5.  <reload    = 'Reload a command'>                      [Command]\
       \n6.  <restart   = 'Restart Aiwaz'>\
       \n7.  <test      = 'Run the test module'>\n\nfunctionial commands\n====================\n1.  <help      = 'Open the Help manual'>\
       \n2.  <icon      = 'Show the user icon'>                    @user\
       \n3.  <info      = 'Show the user info'>                    @user\
       \n4.  <js        = 'Send a JavaScript message'>             [Script]\
       \n5.  <python    = 'Send a Python message'>                 [Script]\
       \n6.  <math-QE   = 'Calculate the x1 and x2'>               [num1 + num2 + num3]\
       \n7.  <osu       = 'Show the OSU user info'>                [OSU User]\
       \n8.  <ping      = 'Ping Aiwaz'>\
       \n9.  <send      = 'Send a embed message'>                  [message]\
       \n10. <conver    = 'Conver a string'>                       [num] + <2,8,10,16>\
       \n10. <BinAB     = 'Calculate 8-bit binary +/-'>            [bin num] (+/-) [bin num]\
       \n11. <calculate = 'Calculate normal math'>                 (normal math question)\
       \n12. <register  = 'Identity Your class'>\
       \n13. <clean     = 'clean a user messages'>                 @user + <number>\
       " + "\`\`\`").then(response => response.delete(60000));
}
