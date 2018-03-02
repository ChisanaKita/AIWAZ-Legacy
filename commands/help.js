const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

  message.author.send(`\`\`\`md
Command List
============
              👇(This is my bot "prefix")                  (This is optional)👇
>>>[Usage](< aiwaz. > + <Command> + <SPACE> + [args / @user] + <SPACE> + <Parameter>)
                                       ☝️ (Remember to SpaceBar!) ☝️

system class commands
=====================
[:warning:][S.Y.S.T.E.M administrators use ONLY]
1.  <os        = 'Open AIwaz OS manual'>
2.  <check     = 'Optimize each channels & roles permission of the installation'> (unfinished)
3.  <delmsg    = 'Open the delete message manual'>
4.  <install   = 'Setup channels & roles in this guild using 学園都市 setting'>
5.  <manage    = 'Open up member managing panel'>  @user + <Reason>   (0.14 New Feature)
6.  <reload    = 'Reload a command'>               [Command]
7.  <restart   = 'Restart Aiwaz'>
8.  <run       = 'Run a node.js script'>           [Command]
9.  <uninstall = 'Uninstall the setup'>

Functional  commands
====================
1.  <binas     = 'Calculate 8-bit binary +/-'>     [bin num] (+/-) [bin num]
2.  <c         = 'Send a C/C#/C++ code message'>   [Script]
3.  <cal       = 'Calculate normal math'>          [normal math question]
4.  <coin      = 'Start a coin game!'>
5.  <clean     = 'clean up the BOT message'>
6.  <conver    = 'Convert some number'>             [String] + <2,8,10,16> 👈(Output num)
7.  <help      = 'Open the Help manual'>
8.  <icon      = 'Show an user icon'>              @user
9.  <info      = 'Show an user info'>              @user
10. <js        = 'Send a JavaScript code message'> [Script]
11. <math-qe   = 'Calculate the x1 and x2'>        [num1 + num2 + num3]
12. <osu       = 'Show an OSU user info'>          [OSU User Name]
13. <ping      = 'Ping AIwaz'>
14. <python    = 'Send a Python code message'>     [Script]
15. <reg       = 'Identity your class'>   (⚠️ONLY work on guild that installed my BOT setup)
\`\`\``);
  message.channel.send('The Help-List was sent to your DM');
}
