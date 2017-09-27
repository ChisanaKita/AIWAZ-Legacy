# DRAGON·Project エイワズ(AIwaz) Angels of Science
> Magic Side [Index-Project](https://github.com/STARLITENAMO/Index-Project)
## UPDATE VERSION TO ( 0.12.0 ) | Update To Discord.js@11.2.0 (2017/9/18)
- Add: Register Command
- Add: External Processing File : processC.js <br>
`現在可以用command /register 定義自己的身份(學生). 如不選擇進行登記, 將無法存取部分校園區.`
- Add : User Reaction Panel
- Add : processC.js For Process And Execute The Command
- Add : Experimentally Client Event Remove Function
- Add: Logic Gate To Block User Spamming The Register Command.
- Add: Clean Command To Clean The BOT Messages.
## UPDATE VERSION TO ( 0.12.8 ) | Update To Discord.js@11.2.0 (2017/9/20)
- Fix: Guild Event  `guild.defaultChannel.send();  => guild.channels.find("type", "text").send();`
- Fix: Syntax Error
- Delete: Unnecessary File(s)
## UPDATE VERSION TO ( 0.12.9 ) | Hosting On Heroku (2017/9/24)
- Change: Time Object. (Now Able To Conver Time To HK Time Zone)
## UPDATE VERSION TO ( 0.12.10 ) | Install moment-timezone@0.5.13 (2017/9/26)
- Change: All Time Object Using "moment-timezone" To Convert to HK Local Time
- Fix: Time Object Callback Stuck
- Fix: Time zone Problem. <br>
`Due to the .setMinutes method is not reliable, So use "moment-timezone" instead.`
> ## 0.12.10a Small Update (2017/9/27)
> - Fix: `client.readyAt` Function Callback Not Correct
> - Fix: Reference Error
