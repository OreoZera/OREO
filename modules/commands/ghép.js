 module.exports.config = {
  name: "ghép",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "quên, fix by Jukie~",
  description: "Ghép đôi",
  commandCategory: "game", 
  usages: "ghép", 
  cooldowns: 10,
  dependencies: [] 
};
module.exports.run = async function({ api, event, Users, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money = 0, money >0) api.sendMessage("⚡️Nghèo quá nên tôi không biết ghép cho ai nhé!")
        else {
        var tle = Math.floor(Math.random() * 101);

        var namee = (await Users.getData(event.senderID)).name

        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        /*let data = await api.getUserInfo(id);*/
        
        var name = (await Users.getData(id)).name

        /*var sex = await data[id].gender;*/
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

        /*var gender = sex == 2 ? "Nam🧑" : sex == 1 ? "Nữ👩‍🦰" : "mèo méo meo mèo meowww";*/
        let Avatar = (await axios.get( `https://le31.glitch.me/avt?q=${id}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://le31.glitch.me/avt?q=${event.senderID}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `⚡️Ghép đôi thành công!\n⚡️Tỉ lệ hợp đôi: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
};