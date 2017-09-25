const osu = require('node-osu');
const osuApi = new osu.Api('eb6cd8915e7060a8a30f4639b18b73fb60b1a112');
const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
  message.delete();

if(args == null) return;

  osuApi.getUser({u: args}).then(User => {
    let embed = new Discord.RichEmbed()
        .setAuthor("🔴(AIwaz - OSU! API -)🔴", "https://i.imgur.com/Fta2jMg.jpg")
        .setColor("#e91e63")
        .addField("\`User :\`", `${User.name}`, true)                                           //Osu user name
        .addField("\`User Id :\`", `${User.id}`, true)                                          //Osu user ID
        .addField("\`User PP :\`", `${User.pp.raw}`, true)                                      //Osu user PP
        .addField("\`User Rank :\`", `#${User.pp.rank}`, true)                                  //Osu user Rank
        .addField("\`User CountryRank :\`", `${User.country} #${User.pp.countryRank}`, true)    //Osu user country Rank
        .addField("\`User Accuracy :\`", `${User.accuracyFormatted}`, true)                     //Osu user A.C.C.
        .addField("\`User Counts :\`", `💙50 : ${User.counts["50"]}  💚100 : ${User.counts["100"]}  💛300 : ${User.counts["300"]}`, true)
        .setThumbnail(`https://a.ppy.sh/${User.id}`)
        .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
        message.channel.send({embed})
  }).catch(error => message.channel.send('⚠️Error : ' + error.message));
}
