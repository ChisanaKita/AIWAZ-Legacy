//credit NAMO
const version = require('./package.json').version;
var skill = (client, member) => {
//-----------------------------------------------------------------------------------------settting
var guild = member.guild;
let ser = client.guilds.find("name", "個人的現實");
var d = member.joinedAt.toLocaleString();
//--------------------------------------------------------------------------------console log event
console.log(`
    >Guild Event<
Member : (${member.user.username}) Joined.
At : ${d}
From : ${member.guild.name}`);
//---------------------------------------------------------------------------------for other server
if (guild.id != '191539621119655936') {
 guild.channels.find('type', 'text').send(`Welcome ${member.user.username} Joined Our Server.\nUse Command \`/help\` To Open The Help List`);
 return;
}
//------------------------------------------------------------------------------add r1 (first role)
var r1 = guild.roles.find("name", "科學");
//------------------------------------------------------------------------------random num function
 function GetRandomInt(MinInt, MaxInt) {
  var x = Math.floor((Math.random() * MaxInt) + MinInt);
  return x;
 }
//-----------------------------------------------------------------------------random gen r2 and r3
	var RandomInt = GetRandomInt(1, 38);
	var SRandomInt = GetRandomInt(1, 4);
//------------------------------------------------------------------------------------r2 role array
	var ArrayLevel = [	"Level 1 - 無能力者",
						"Level 2 - 異能力者",
						"Level 3 - 強能力者",
						"Level 4 - 大能力者"];
//------------------------------------------------------------------------------------r2 Logic Gate
	switch(SRandomInt)
	{
		case 1 : var r2 = guild.roles.find("name", ArrayLevel[0]);break;
		case 2 : var r2 = guild.roles.find("name", ArrayLevel[1]);break;
		case 3 : var r2 = guild.roles.find("name", ArrayLevel[2]);break;
		case 4 : var r2 = guild.roles.find("name", ArrayLevel[3]);break;
	}
//------------------------------------------------------------------------------------r3 role array
	var ArraySkill = [	"解析不能 - Unknown",
						"透視能力 - Clairvoyance",
						"預知能力 - Far vision",
						"視覺妨害 - Dummy Check",
						"偏光能力 - Trick Art",
						"定溫保存 - Thermal Hand",
						"火炎放出 - Fire throwe",
						"肉體再生 - Automatic Reverse",
						"肉體變化 - Metamorphose",
						"能力追蹤 - AIM Stalker",
						"多才能力 - Dual Skill",
						"擴散代理 - Diffusion Ghost",
						"真相不明 - Counter Stop",
						"空間移動 - Teleporter",
						"座標移動 - Move Point",
						"死角移動 - Kill Point",
						"電擊使 - Electro Master",
						"缺陷電氣 - Radio Noise",
						"超電磁砲 - Railgun",
						"原子崩壞 - Melt Down",
						"氮氣裝甲 - Offense Armour",
						"氮氣爆槍 - Bomber Lance",
						"空力使 - Aero Hand",
						"風力使 - Aero Shooter",
						"空氣氣球 - Air bag",
						"念動力- Telekinesis",
						"氣力絕緣 - Insulation",
						"水流操作 - Hydrohand",
						"微細構築 - Micro Tekurasu Char",
						"衝擊擴散- Finely constructed",
						"讀心能力 - Psychometry",
						"認證穿刺 - Malicious Fake",
						"意見解析 - Skill Polygraph",
						"念話能力 - Telepath",
						"心理定規 - Major Heart",
						"心理穿孔 - Mental Stinger",
						"精神感應 - Telepathy",
						"心理掌握 - Mental Out"]
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
					};
//-----------------------------------------------------------all result process and welcome message
		if(!(r2 == guild.roles.find("name", ArrayLevel[0]))){
			member.addRole(r1).then(member.addRole(r2)).then(member.addRole(r3));

			guild.channels.find('type', 'text').send(`🔊  Welcome \*\*${member.user.username}\*\* ( ${r2.name} ) Joined Our Server.\n🔸  Your Skill is : \`${r3.name}\` ${r3}
			\*\*\_\_                                                                        ⚠️Warning⚠️                                                                        \_\_\*\*
			Please Follow The \*\*NAMO Protocol (Revised) Regulations\*\* Or You Will Get Kick By <@347782166811377667>\n
			\n                                                         🔸🔹🔸\*\*\_\_   (NAMO Protocol [1.5])   \_\_\*\*🔸🔹🔸\n                                                     Use Command : /register To Register Your Identity`);
		} else {
			member.addRole(r1).then(member.addRole(r2));

			guild.channels.find('type', 'text').send(`🔊  Welcome \*\*${member.user.username}\*\* ( ${r2.name} ) Joined Our Server.\n🔸  Your Skill is : \`NULL\`
			\*\*\_\_                                                                        ⚠️Warning⚠️                                                                        \_\_\*\*
			Please Follow The \*\*NAMO Protocol (Revised) Regulations\*\* Or You Will Get Kick By <@347782166811377667>\n
			\n                                                         🔸🔹🔸\*\*\_\_   (NAMO Protocol [1.5])   \_\_\*\*🔸🔹🔸\n                                                     Use Command : /register To Register Your Identity`);
		}
//-------------------------------------------------------------------send message to MISAKA-NETWORK
	ser.channels.get('347618456335548427').send({embed: {
	color: 10158080,
	description: '\_\_' + '------ α Lyrae DownLink ' + version + ' ------' + '\_\_\n' + 'Major Event : '  + '\`' + member.user.username + '\`' + ' Joined' + '\nAt : ' + d + '\nFrom : ' + guild.name +
	'\n--- \*\*NAMO Protocol (Revised) Regulations [1.22]\*\* --- \n(ADDING AUTO ROLES)' +
	'\n\`\`\`' + r1.id + ' (' + r1.name + ')' +
	'\n' + r2.id + ' (' + r2.name + ')' +
	'\n' + r3.id + ' (' + r3.name + ')' + '\`\`\`'
	}});
	ser.channels.get('359923471029108747').send(`Guild Event (guild.mamber.join) Trigger \n${d}, ${member.user.username}`)
}
exports.skill = skill;
