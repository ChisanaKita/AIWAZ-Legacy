<body>
<div>
<a href="https://github.com/ChisanaKita/AIWAZ"><img src="https://i.imgur.com/Fta2jMg.jpg" alt="AIwaz" /></a>
</div>
</body>

#        Project·DRAGON エイワズ(AIwaz) Angel of Science
> Magic Side : [Index-Project](https://github.com/STARLITENAMO/Index-Project)
## UPDATE VERSION TO ( Pre.0.14 ) | S.Y.S.T.E.M 2.0 (2018/03/11 10:32 - 2018/**/**)
- Added: `manage.js`
  > Integrated Deaf/Undeaf, Kick and Ban function to manage server members.
- Added: `manageaction.js` to execute the above three functions.
- Added: `help-guild.js`.
  > Similar to `help.js` but it's a guild version.
- Added: `os.js`.
- Added: `run.js`.
- Added: `30624700.js` to handle the guild.member.join event.
- Added: `pet.js`.
- Added: `update.js` to sync up the channels and roles name.
  > This feature is for my friend's guild only.<br>
  The purpose is to update those name so my bot won't get error each times he change somgthing.
- Added: `np.js`.
  > "np" stand for "Now Playing", This command will only exectue when user is listening spotify.<br>
  This command will show the following info: song name, artist, album image, album, spotify link, Google search for the song.
***
- Changed: `message.js`.
  > Use an embed message to log down incoming action, including the guild icon & the message channel.<br>
Now all user input will convert to lower case.<br>
New Function: Now type 'good bot' in a message channel can praise the BOT. (Planning to do more.)
- Changed: Guild.member.join Event Behavior (`skill.js`, `30624700.js`, `help-guild.js`).
- Changed: `cal.js`.
  > Now using `mathjs` to calculate instead of using `eval()`.
- Changed: `clean.js`.
  > Added event: `messageDeleteBulk` to display how many messages has been deleted.<br>
  Now you can delete specified user's messages. (If no user detected, will delete the BOT messages.)
- Changed: `coin.js` Finally finished this stupid game.
  > Fixed End Game Result Panel don't have a player's user nick name.
- Changed: `help.js`.
  > Now send the command list to your DM instead of sending to the message channel.
- Changed: `register.js`.
  > Renamed to 'reg.js' for easier input.
- Changed: `reload.js`.
  > Now the function is back in this file.<br>
  Also, now added a "all" parameter to reload all commands.
- Changed: `osu.js` Fix the embed msg error.
- Change: `help.txt` Added, updated and deleted a few things.
***
- Deleted: `Aiwaz.js` & `Aiwaz-os.js`. (Integrated to `os.js`).
- Deleted: `kick.js`. (Integrated to `manage.js`).
- Deleted: `status.js`.
- Fixed: Syntax Error.
- Added/Changed: package.json:  `discord.js` => (Master), `mathjs` => ^4.0.0, `moment-timezone` => ^0.5.14
  > I realize that I've installing the wrong `mathjs`... (The correct name is `mathjs` not `math.js`.)
- Changed: Client Version To : 0.14.0
  > For More Info, Please See [Version 0.14 All Commits](https://github.com/ChisanaKita/AIWAZ/commits/0.14)
