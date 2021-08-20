const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "Chửi bot bạn sẽ bị ban ngay lập tức",
  commandCategory: "noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Dùng /callad [text] để báo lỗi cho adm hoặc report ai đó spam kèm id (/uid @tag) của họ","Chào bạn tôi là bot của anh Sun đz","Gọi tao có việc gì?","Yêu em <3","Gọi gọi cc","Sủa lẹ?","Yêu em❤","Đéooo","Đjt hônggg😼","Yêu em đi, phí thế :<<","Muốn cc gì? Lên giường nói chuyện!","Nếu là gái, ib cho Bot xin ảnh để thêm zo lệnh 'girl' nha!","Đang làm gì dạ?","Yêu nhau hông bae❤","Yêu em đi, em cho kẹo!","Dạaa bae","Làm vợ admin của bot hông :3","Sử dụng /adm để xemn thông tin admin!"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "bot lon") || (event.body.toLowerCase() == "bot óc chó")|| (event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot súc vật")) {
    data.reason = reason || null;
    data.dateAdded = time;
    global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    return api.sendMessage(`❌Nhóm ${idgr} của bạn đã bị ban, sẽ không thể sử dụng bot!\n❌Lý do: Chửi bot\n✔️Vui lòng liên hệ admin để xem xét lại. `, threadID);
  };

  if ((event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("dm con ml rác rưỡi", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó") || (event.body.toLowerCase() == "bot oc")) {
    return api.sendMessage("óc chó mới chửi bot, cmm súc vật học", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") || (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Dạ, có em đây, yêu em không mà gọi <3. hmm...", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ko biết yêu, yêu admin bot kia kìa :))", threadID);
  };

  if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "Haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("Cười cặc😏", threadID);
  };

  if ((event.body.toLowerCase() == "hihi") || (event.body.toLowerCase() == "Hihi")) {
    return api.sendMessage("haha cmn đi, hihi giả trân quá đĩ ơiii", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "Kkk")) {
    return api.sendMessage("Cười thì haha cmn đi, gửi icon cmn đi. Cứ 'kkk' là ccj hả cd? Ngoài đời m cười kakaka hộ t phát😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Hi cặc, muốn gì? Sủa!", threadID);
  };

  if ((event.body.toLowerCase() == "u là tr") || (event.body.toLowerCase() == "U là trời")) {
    return api.sendMessage("Nwng hả má?", threadID);
  };

  if ((event.body.toLowerCase() == "hic") || (event.body.toLowerCase() == "Hic")) {
    return api.sendMessage("Hic cẹc! Oan ức lắm à😏", threadID);
  };

  if ((event.body.toLowerCase() == "huhu") || (event.body.toLowerCase() == "Huhu")) {
    return api.sendMessage("Kâm😼 Khóc lóc cailon!", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }