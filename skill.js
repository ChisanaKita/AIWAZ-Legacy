//credit NAMO
const moment = require('moment-timezone');
const version = require('./package.json').version;
var skill = (client, member) => {
//------------------------------------------------------------------------------------------setting
  var guild = member.guild;
  let ser = client.guilds.find("name", "個人的現實");
  var d = member.joinedAt;
  const logchannel = client.guilds.get("179445290795794432");
//-----------------------------------------------------------------A function converting to HK time
  function toTimeZone(d, zone) {
   var format = 'YYYY/MM/DD HH:mm:ss';
   return moment(d, format).tz(zone).format(format);
  };
//---------------------------------------------------------------------------------for other server
  if (guild.id != '191539621119655936') {
  	try {
      let cmdFile = require('./util/30624700.js');
  		cmdFile.run(client, member);
    } catch (e) {
      client.guilds.find("id", "179445290795794432").channels.find('name', 'aiw-log').send(e, { code : 'js' });
    }
  	return;
  }
//------------------------------------------------------------------------------add r1 (first role)
  var r1 = guild.roles.find("name", "科学 - Science");
//------------------------------------------------------------------------------random num function
	function GetRandomInt(MinInt, MaxInt) {
		var x = Math.floor((Math.random() * MaxInt) + MinInt);
		return x;
	};
//-----------------------------------------------------------------------------random gen r2 and r3
	var RandomInt = GetRandomInt(1, 51);
	var SRandomInt = GetRandomInt(1, 5);
//------------------------------------------------------------------------------------r2 role array
	var ArrayLevel = [	"無能力者 - Level 0",
                      "低能力者 - Level 1",
          						"異能力者 - Level 2",
          						"強能力者 - Level 3",
          						"大能力者 - Level 4"
                    ];
//------------------------------------------------------------------------------------r2 Logic Gate
	switch(SRandomInt)
	{
		case 1 : var r2 = guild.roles.find("name", ArrayLevel[0]);break;
		case 2 : var r2 = guild.roles.find("name", ArrayLevel[1]);break;
		case 3 : var r2 = guild.roles.find("name", ArrayLevel[2]);break;
		case 4 : var r2 = guild.roles.find("name", ArrayLevel[3]);break;
    case 5 : var r2 = guild.roles.find("name", ArrayLevel[4]);break;
	};
//------------------------------------------------------------------------------------r3 role array
    let ArraySkill = require("../util/array.json").Skills;
//------------------------------------------------------------------------------------r3 Logic Gate
  	switch(RandomInt)
  					{
  						case 1 :			var r3 = guild.roles.find("name", ArraySkill[0]);break;
  						case 2 :			var r3 = guild.roles.find("name", ArraySkill[1]);break;
  						case 3 :			var r3 = guild.roles.find("name", ArraySkill[2]);break;
  						case 4 :			var r3 = guild.roles.find("name", ArraySkill[3]);break;
  						case 5 :			var r3 = guild.roles.find("name", ArraySkill[4]);break;
  						case 6 :			var r3 = guild.roles.find("name", ArraySkill[5]);break;
  						case 7 :			var r3 = guild.roles.find("name", ArraySkill[6]);break;
  						case 8 :			var r3 = guild.roles.find("name", ArraySkill[7]);break;
  						case 9 :			var r3 = guild.roles.find("name", ArraySkill[8]);break;
  						case 10 :			var r3 = guild.roles.find("name", ArraySkill[9]);break;
  						case 11 :			var r3 = guild.roles.find("name", ArraySkill[10]);break;
  						case 12 :			var r3 = guild.roles.find("name", ArraySkill[11]);break;
  						case 13 :			var r3 = guild.roles.find("name", ArraySkill[12]);break;
  						case 14 :			var r3 = guild.roles.find("name", ArraySkill[13]);break;
  						case 15 :			var r3 = guild.roles.find("name", ArraySkill[14]);break;
  						case 16 :			var r3 = guild.roles.find("name", ArraySkill[15]);break;
  						case 17 :			var r3 = guild.roles.find("name", ArraySkill[16]);break;
  						case 18 :			var r3 = guild.roles.find("name", ArraySkill[17]);break;
  						case 19 :			var r3 = guild.roles.find("name", ArraySkill[18]);break;
  						case 20 :			var r3 = guild.roles.find("name", ArraySkill[19]);break;
  						case 21 :			var r3 = guild.roles.find("name", ArraySkill[20]);break;
  						case 22 :			var r3 = guild.roles.find("name", ArraySkill[21]);break;
  						case 23 :			var r3 = guild.roles.find("name", ArraySkill[22]);break;
  						case 24 :			var r3 = guild.roles.find("name", ArraySkill[23]);break;
  						case 25 :			var r3 = guild.roles.find("name", ArraySkill[24]);break;
  						case 26 :			var r3 = guild.roles.find("name", ArraySkill[25]);break;
  						case 27 :			var r3 = guild.roles.find("name", ArraySkill[26]);break;
  						case 28 :			var r3 = guild.roles.find("name", ArraySkill[27]);break;
  						case 29 :			var r3 = guild.roles.find("name", ArraySkill[28]);break;
  						case 30 :			var r3 = guild.roles.find("name", ArraySkill[29]);break;
  						case 31 :			var r3 = guild.roles.find("name", ArraySkill[30]);break;
  						case 32 :			var r3 = guild.roles.find("name", ArraySkill[31]);break;
  						case 33 :			var r3 = guild.roles.find("name", ArraySkill[32]);break;
  						case 34 :			var r3 = guild.roles.find("name", ArraySkill[33]);break;
  						case 35 :			var r3 = guild.roles.find("name", ArraySkill[34]);break;
  						case 36 :			var r3 = guild.roles.find("name", ArraySkill[35]);break;
  						case 37 :			var r3 = guild.roles.find("name", ArraySkill[36]);break;
  						case 38 :			var r3 = guild.roles.find("name", ArraySkill[37]);break;
              case 39 :			var r3 = guild.roles.find("name", ArraySkill[38]);break;
              case 40 :			var r3 = guild.roles.find("name", ArraySkill[39]);break;
              case 41 :			var r3 = guild.roles.find("name", ArraySkill[40]);break;
              case 42 :			var r3 = guild.roles.find("name", ArraySkill[41]);break;
              case 43 :			var r3 = guild.roles.find("name", ArraySkill[42]);break;
              case 44 :			var r3 = guild.roles.find("name", ArraySkill[43]);break;
              case 45 :			var r3 = guild.roles.find("name", ArraySkill[44]);break;
              case 46 :			var r3 = guild.roles.find("name", ArraySkill[45]);break;
              case 47 :			var r3 = guild.roles.find("name", ArraySkill[46]);break;
              case 48 :			var r3 = guild.roles.find("name", ArraySkill[47]);break;
              case 49 :			var r3 = guild.roles.find("name", ArraySkill[48]);break;
              case 50 :			var r3 = guild.roles.find("name", ArraySkill[49]);break;
              case 51 :			var r3 = guild.roles.find("name", ArraySkill[50]);break;
  					};
//-----------------------------------------------------------all result process and welcome message
	if(!(r2 == guild.roles.find("name", ArrayLevel[0]))){
		member.roles.add(r1).then(member.roles.add(r2)).then(member.roles.add(r3));

		guild.channels.find('name', 'sound-only').send(`🔊  Welcome \*\*${member.user.username}\*\* ( ${r2.name} ) Joined Our Server.\n🔸  Your Skill is : \`${r3.name}\` ${r3}
		\*\*\_\_                                                                              ⚠️Warning⚠️                                                                               \_\_\*\*
		Please Follow The \*\*NAMO Protocol (Revised) Regulations\*\* Or You Will Get Kick By <@347782166811377667>\n
		\n                                                        🔸🔹🔸\*\*\_\_   (NAMO Protocol [1.5])   \_\_\*\*🔸🔹🔸\n                                                           Use Command : aiwaz.reg To Register Your Identity`);
	} else {
		member.roles.add(r1).then(member.roles.add(r2));

		guild.channels.find('name', 'sound-only').send(`🔊  Welcome \*\*${member.user.username}\*\* ( ${r2.name} ) Joined Our Server.\n🔸  Your Skill is : \`NULL\`
		\*\*\_\_                                                                              ⚠️Warning⚠️                                                                               \_\_\*\*
		Please Follow The \*\*NAMO Protocol (Revised) Regulations\*\* Or You Will Get Kick By <@347782166811377667>\n
		\n                                                        🔸🔹🔸\*\*\_\_   (NAMO Protocol [1.5])   \_\_\*\*🔸🔹🔸\n                                                           Use Command : aiwaz.reg To Register Your Identity`);
	}
//-------------------------------------------------------------------send message to MISAKA-NETWORK
	ser.channels.find('name', 'misaka-network').send({embed: {
	color: 10158080,
	description: '\_\_' + '------ α Lyrae DownLink ' + version + ' ------' + '\_\_\n' + 'Major Event : '  + '\`' + member.user.username + '\`' + ' Joined' + '\nAt : ' + toTimeZone(d, "Asia/Hong_Kong") + '\nFrom : ' + guild.name +
	'\n--- \*\*NAMO Protocol (Revised) Regulations [1.22]\*\* --- \n(ADDING AUTO ROLES)' +
	'\n\`\`\`' + r1.id + ' (' + r1.name + ')' +
	'\n' + r2.id + ' (' + r2.name + ')' +
	'\n' + r3.id + ' (' + r3.name + ')' + '\`\`\`'
	}});
  logchannel.channels.find("name","aiw-log").send(`Guild Event (guildmember.join) Trigger \nAt: ${toTimeZone(d, "Asia/Hong_Kong")}, By: ${member.user.tag}`);
}
exports.skill = skill;
