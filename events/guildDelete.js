const moment = require('moment-timezone');
const d = new Date();
module.exports = guild =>{
  let g = guild.name;
  let d = new Date();
  console.log(`I have left =${g}=  at : ${toTimeZone(d, "Asia/Hong_Kong")}`);
  
 function toTimeZone(d, zone) {
  var format = 'YYYY/MM/DD HH:mm:ss';
  return moment(d, format).tz(zone).format(format);
 };
};
