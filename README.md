# AIwaz (Support BOT for NANO<3 BOT)
## UPDATE VERSION TO ( 0.12.0 ) | Update To Discord.js@11.2.0 (2017/9/18)
- Add: Register Command
- Add: External Processing File : processC.js
> note : 現在可以用command /register 定義自己的身份(學生). 如不選擇進行登記, 將無法存取部分校園區.
- Add : User Reaction Panel
- Add : processC.js For Process And Execute The Command
- Add : Experimental Client Event Remove Function
- Add: Logic Gate To Block User Spamming The Register Command.
- Add: Clean Command To Clean The Bot Messages.
## UPDATE VERSION TO ( 0.12.8 ) | Update To Discord.js@11.2.0 (2017/9/20)
- Fix: Guild Event
> guild.defaultChannel.send();  => guild.channels.find("type", "text").send();
- Fix: Some Bug
- Change: Time Object. (Now Able To Conver Time To HK Time Zone)
- Delete: Unnecessary File(s)
## Hosting On Heroku (2017/9/24)
## UPDATE VERSION TO ( 0.12.10 ) | Install moment-timezone@0.5.13 (2017/9/26)
- Fix: Time zone Problem.
> Due to the .setMinutes method is not reliable (Will interact with other time object), So use "moment-timezone" instead.
- Change: All Time Object Using "moment-timezone" To Convert to HK Local Time
- Fix: Time Object Callback Stuck
