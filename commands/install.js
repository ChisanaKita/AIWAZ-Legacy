exports.run = (client, message, args) => {
message.delete();
var guild = message.guild;

let g_channels = guild.channels.find('name', 'general');

if (g_channels) {
  g_channels.delete();
}

if (guild.channels != null) return;

//permission module
  let me = message.author;    //define me (message sender)
  let permission = guild.member(me).permissions.has("ADMINISTRATOR");   //check the user isn't have the permission

/*
Logic gate of the user permission
  if the sender isn't the user you want (true), and if the user didn't have the permission (true), then send a message and end the command.
  if the sender is the user you want(false), and if the user have the permission (ignore), then do the command.
  if the sender is the user you want(false), and if the user didn't have the permission (ignore), then do the command.
  if the sender isn't the user you want(true), and if the user have the permission (false), then do the command.
*/
if (message.author.id != "179443176279375872") {
  if (!permission) {
    message.channel.send("You Don't Have The Permission To Use It.").then(response => response.delete(2000));
    return;
  }
}

var TextChannel = [
          "Sound-Only",
          "Judgment",
          "Misaka-Network"
        ];

var VoiceChannel = [
          "英國",
          "法國",
          "俄羅斯",
          "伊莉沙里納獨立國同盟",
          "美國",
            null,   //1,5
            null,   //2,6
            null,   //3.7
            null,   //4,8
            null,   //5,9
            null,   //6,10
            null,   //7,11
            null,   //Build
            null,   //8,13,0
            null,   //9,14,1
            null,   //10,15,2
            null,   //11,16,3
            null,   //12,17,4
            null,   //13,18,5
            null,   //14,19,6
            null,   //15,20,7
            null,   //16,21,8
            null,   //17,22,9
            null,   //18,23,10
            null,   //19,24,11
            null,   //20,25,12
            null,   //21,26,13
            null,   //22,27,14
            null,   //23,28,15
          "統括理事会",
          "虚数学区・五行機関"
        ];

var Admin_skill = [
          ["人工天使","#e91e63"],
          ["超高速平行演算處理器","DARK_GREEN"],
          ["理事 - Member Of A Council","DARK_PURPLE"]
        ];

var S_Skill = [
          ["科學","GREEN"],
          ["宗教","PURPLE"],
          ["AIM思考體","#11806a"],
          ["絕對能力者 - Level 6","DARK_PURPLE"],
          ["超能力者 - Level 5","PURPLE"],
          ["大能力者 - Level 4","GREEN"],
          ["強能力者 - Level 3","BLUE"],
          ["異能力者 - Level 2","DARK_BLUE"],
          ["低能力者 - Level 1","#546e7a"],
          ["無能力者 - Level 0","#546e7a"],
          ["暗部 - Hound Dog","#e91e63"],
          ["暗部 - Group","DARK_PURPLE"],
          ["暗部 - Member","#992d22"],
          ["暗部 - Item","#e91e63"],
          ["暗部 - School","#e67e22"],
          ["暗部 - Block","#11806a"],
          ["风纪委员 - Judgment","GREEN"],
          ["警备员 - Anti-Skill","DARK_GREEN"],
          ["武裝集團 - Skill Out","GREY"],
          ["天使","LIGHTER_GREY"],
          ["魔神","PURPLE"],
          ["聖人","DARK_GREEN"],
          ["神之右席","#992d22"],
          ["羅馬教皇","GOLD"],
          ["十字教","PURPLE"],
          ["英國清教","#e91e63"],
          ["皇室派","GOLD"],
          ["騎士派","#992d22"],
          ["清教派","TEAL"],
          ["黄金黎明","GOLD"],
          ["羅馬正教","#e67e22"],
          ["俄羅斯成教","#e91e63"],
          ["原石","GREEN"],
          ["御坂網絡","DARKER_GREY"],
          ["小学生","TEAL"],
          ["中学生","GREEN"],
          ["高校生","DARK_GREEN"],
          ["大学生","DARK_BLUE"],
          ["留学生","DARK_PURPLE"],
          ["教職員","#e91e63"],
          ["幻想殺手 - Imagine Breaker","#ffffff"],
          ["吸血殺手 - Deep Blood","#546e7a"],
          ["解析不能 - Unknown","#546e7a"],
          ["透視能力 - Clairvoyance","#607d8b"],
          ["預知能力 - Far vision","#607d8b"],
          ["視覺妨害 - Dummy Check","#95a5a6"],
          ["偏光能力 - Trick Art","#95a5a6"],
          ["定溫保存 - Thermal Hand","#e74c3c"],
          ["火炎放出 - Fire throwe","#e74c3c"],
          ["肉體再生 - Automatic Reverse","#992d22"],
          ["肉體變化 - Metamorphose","#992d22"],
          ["能力追蹤 - AIM Stalker","#e67e22"],
          ["多才能力 - Dual Skill","#e67e22"],
          ["擴散代理 - Diffusion Ghost","#e67e22"],
          ["真相不明 - Counter Stop","#e67e22"],
          ["空間移動 - Teleporter","a84300"],
          ["座標移動 - Move Point","a84300"],
          ["死角移動 - Kill Point","a84300"],
          ["電擊使 - Electro Master","GOLD"],
          ["缺陷電氣 - Radio Noise","GOLD"],
          ["超電磁砲 - Railgun","GOLD"],
          ["原子崩壞 - Melt Down","GOLD"],
          ["氮氣裝甲 - Offense Armour","DARK_GOLD"],
          ["氮氣爆槍 - Bomber Lance","DARK_GOLD"],
          ["空力使 - Aero Hand","DARK_GOLD"],
          ["風力使 - Aero Shooter","DARK_GOLD"],
          ["空氣氣球 - Air bag","DARK_GOLD"],
          ["念動力- Telekinesis","#e91e63"],
          ["氣力絕緣 - Insulation","#e91e63"],
          ["水流操作 - Hydrohand","#e91e63"],
          ["微細構築 - Micro Tekurasu Char","#e91e63"],
          ["衝擊擴散- Finely constructed","#e91e63"],
          ["讀心能力 - Psychometry","#ad1457"],
          ["認證穿刺 - Malicious Fake","#ad1457"],
          ["意見解析 - Skill Polygraph","#ad1457"],
          ["念話能力 - Telepath","#ad1457"],
          ["心理定規 - Major Heart","#ad1457"],
          ["心理穿孔 - Mental Stinger","#ad1457"],
          ["精神感應 - Telepathy","#ad1457"],
          ["心理掌握 - Mental Out","#ad1457"],
          ["矢量操作 - Accelerator","PURPLE"],
          ["不常物質 - Dark Matter","PURPLE"],
          ["暴風車軸 - Violence Doughnut","PURPLE"],
          ["流體反發 - Floatdial","PURPLE"],
          ["量子變速 - Synchrotron","PURPLE"],
          ["絕對等速 - Equal speed","PURPLE"],
          ["表層融解 - Flux Coat","PURPLE"],
          ["油性兵裝 - Military Oil","PURPLE"],
          ["稀土擴張 - Earth Palette","PURPLE"],
          ["液化人影 - Liquid Shadow","PURPLE"],
          ["鳥瞰把握 - Predator","PURPLE"]
        ];

var Admin_skill_permission = [
          'ADMINISTRATOR', //(implicitly has all permissions, and bypasses all channel overwrites)
          'CREATE_INSTANT_INVITE', //(create invitations to the guild)
          'KICK_MEMBERS',
          'BAN_MEMBERS',
          'MANAGE_CHANNELS', //(edit and reorder channels)
          'MANAGE_GUILD', //(edit the guild information, region, etc.)
          'ADD_REACTIONS', //(add new reactions to messages)
          'VIEW_AUDIT_LOG',
          'VIEW_CHANNEL',
          'READ_MESSAGES', //(deprecated)
          'SEND_MESSAGES',
          'SEND_TTS_MESSAGES',
          'MANAGE_MESSAGES', //(delete messages and reactions)
          'EMBED_LINKS', //(links posted will have a preview embedded)
          'ATTACH_FILES',
          'READ_MESSAGE_HISTORY', //(view messages that were posted prior to opening Discord)
          'MENTION_EVERYONE',
          'USE_EXTERNAL_EMOJIS', //(use emojis from different guilds)
          'EXTERNAL_EMOJIS', //(deprecated)
          'CONNECT', //(connect to a voice channel)
          'SPEAK', //(speak in a voice channel)
          'MUTE_MEMBERS', //(mute members across all voice channels)
          'DEAFEN_MEMBERS', //(deafen members across all voice channels)
          'MOVE_MEMBERS', //(move members between voice channels)
          'USE_VAD', //(use voice activity detection)
          'CHANGE_NICKNAME',
          'MANAGE_NICKNAMES', //(change other members' nicknames)
          'MANAGE_ROLES',
          'MANAGE_WEBHOOKS',
          'MANAGE_EMOJIS'
        ];

message.channel.send('Builder Initializing...');

setTimeout(function () {
  //TextChannel
    for (i = 0; i < TextChannel.length; i++) {
      guild.createChannel(TextChannel[i], 'text');
    };

  //VoiceChannel
    for (i = 0; i < 5; i++) {
      guild.createChannel(VoiceChannel[i], 'voice');
    };

    for (i = 0; i < 7; i++) {
      guild.createChannel(VoiceChannel[i + 5] = "第" + (i + 1).toString() + "学区", 'voice');
    };

    guild.createChannel("窓のないビル", 'voice');

    for (i = 0; i < 16; i++) {
        guild.createChannel(VoiceChannel[i + 13] = "第" + (i + 8).toString() + "学区", 'voice');
    };

    for (i = 0; i < 2; i++) {
      guild.createChannel(VoiceChannel[i + 29], 'voice');
    };

  //Admin Skill
    for (i = 0; i < Admin_skill.length; i++) {
        guild.createRole({
          name: Admin_skill[i][0],
          color: Admin_skill[i][1],
          permissions: Admin_skill_permission,
          hoist: true
        });
    };

  //Level Roles
    for (i = 0; i < S_Skill.length; i++) {
        guild.createRole({
          name: S_Skill[i][0],
          color: S_Skill[i][1],
        });
    };
},3000);

setTimeout(function () {
  guild.channels.find('name', 'Sound-Only').send('Installation Complete!  \*\*AIwaz\*\* Is Ready To Operate..');
},20000);

}
