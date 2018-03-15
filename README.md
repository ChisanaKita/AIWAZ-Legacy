<body>
<div>
<a href="https://github.com/ChisanaKita/AIWAZ"><img src="https://i.imgur.com/Fta2jMg.jpg" alt="AIwaz" /></a>
</div>
</body>

#        Project·DRAGON エイワズ(AIwaz) Angel of Science
> Magic Side : [Index-Project](https://github.com/STARLITENAMO/Index-Project)
## UPDATE VERSION TO ( 0.14.0 ) | S.Y.S.T.E.M 2.0 (2018/03/11 10:32)
- Added: `manage.js`
> Integrated Deaf/Undeaf, Kick and Ban function to manage server members.
- Added: `manageaction.js` to execute the above three functions.
- Added: `help-guild.js` Similar to `help.js` but it's a guild version.
- Added: `os.js`
- Added: `run.js`
- Added: `30624700.js` to handle the guild.member.join event.
- Change: `message.js`
> Use an embed message to log down the message data, including the guild icon & the message channel<br>
Now all user input will convert to lower case, Which means case dosen't matter.
- Change: Guild.member.join Event Behavior (`skill.js`, `30624700.js`, `help-guild.js`).
- Change: `cal.js` Now using `mathjs` to calculate instead of using `eval()`.
- Change: `clean.js`
> Added event: `messageDeleteBulk` to display how many messages has been deleted.<br>
Now you can delete specified user's messages.(If no user detected, will delete the BOT messages.)
- Change: `coin.js` Finally finished this stupid game.
- Change: `help.js` Now send the command list to your DM instead of sending to the message channel.
- Change: `register.js` Renamed to 'reg.js' for easier input.
- Change: `reload.js` Now the function is back in this file.
- Delete: `Aiwaz.js` & `Aiwaz-os.js` (Integrated to `os.js`).
- Delete: `kick.js` (Integrated to `manage.js`).
- Delete: `status.js`
- Fix: Syntax Error.
- Added/Change: package.json:  `discord.js` => (Master), `mathjs` => ^4.0.0, `moment-timezone` => ^0.5.14
> I realize that I've installing the wrong `mathjs`...(The correct name is `mathjs` not `math.js`.)
- Change: Client Version To : 0.14.0
> For More Info, Please See [Version 0.14 All Commits](https://github.com/ChisanaKita/AIWAZ/commits/0.14)
