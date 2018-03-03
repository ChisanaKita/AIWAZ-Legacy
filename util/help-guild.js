exports.run = (client, member) => {
let guild = member.guild;

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
3.  <clean     = 'clean up the BOT/User message'>  <@user>
4.  <delmsg    = 'Open the delete message manual'>
5.  <install   = 'Setup channels & roles in this guild using 学園都市 setting'>
6.  <manage    = 'Open up member managing panel'>  [@user] + <Reason>  (0.14 New Feature)
7.  <reload    = 'Reload a command'>               [Command]
8.  <restart   = 'Restart Aiwaz'>
9.  <run       = 'Run a node.js script'>           [Command]
10. <uninstall = 'Uninstall the setup'>

Functional  commands
====================
1.  <binas     = 'Calculate 8-bit binary +/-'>     [bin num] (+/-) [bin num]
2.  <c         = 'Send a C/C#/C++ code message'>   [Script]
3.  <cal       = 'Calculate normal math'>          [normal math question]
4.  <coin      = 'Start a coin game!'>
5.  <conver    = 'Convert some number'>            [String] + <2,8,10,16> 👈(Output num)
6.  <help      = 'Open the Help manual'>
7.  <icon      = 'Show an user icon'>              [@user]
8.  <info      = 'Show an user info'>              [@user]
9.  <js        = 'Send a JavaScript code message'> [Script]
10. <math-qe   = 'Calculate the x1 and x2'>        [num1 + num2 + num3]
11. <osu       = 'Show an OSU user info'>          [OSU User Name]
12. <ping      = 'Ping AIwaz'>
13. <python    = 'Send a Python code message'>     [Script]
14. <reg       = 'Identity your class'>   (⚠️ONLY work on guild that installed my BOT setup)
\`\`\``);
  message.channel.send('The Help-List was sent to your DM');
}
