 module.exports.config = {
  name: "tagcc",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "cut",
  usages: "",
  cooldowns: 1
};
 module.exports.event = function({ api, event }) {
  if (event.senderID !== "100049098961526") {//id bot
    var aid = ["100017608866967","100049098961526"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Adm đang ẻ, đợi xíu!!!","Tag cqq, ban mày à nha😼","Tag cc gì, đấm cho giờ-.-"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
 module.exports.run = async function({}) {
  }