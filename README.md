# AIwaz ( 0.12.0 )
- Add: register Command
- Add: external processing file : processC.js
> note : 現在可以用command /register 定義自己的身份(學生). 如不選擇進行登記, 將無法存取部分校園區.
- Add : user reaction button panel
- Add : processC.js for process and execute the command
- Add : experimental client event remove function
- Fix: Guild Event
> guild.defaultChannel.send();  => guild.channels.find("type", "text").send();
- Fix: some bug
- Add: logic gate to block user keep using command /register.
- Add: clean command to clean the bot message.
- Change: Time object. (Now Able To Conver Time To HK Time Zone)
- Delete: unnecessary File(s)
