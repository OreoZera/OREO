module.exports.config = {
    name: "callad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "manhIT",
    description: "Thông báo lỗi của bot đến admin hoặc góp ý",
    commandCategory: "general",
    usages: "[lỗi gặp phải hoặc ý kiến]",
    cooldowns: 5,
    dependencies: ""
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = (await Users.getData(event.senderID)).name;
	const listAdmin = global.config.ADMINBOT;
	
	for (var idad of listAdmin){
		if(idad == event.senderID || Users == event.senderID){
		
    switch (handleReply.type) {

        case "reply":
            {
                api.sendMessage({
                    body: "📄Phản hồi từ " + name + ":\n" + event.body,
                    mentions: [{
                        id: event.senderID,
                        tag: name
                    }]
                }, idad, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    messageID: data.messageID,
                    messID: event.messageID,
                    author: event.senderID,
                    id: event.threadID,
                    type: "calladmin"
                }))

                break;
            }

        case "calladmin":
            {
                api.sendMessage({
                    body: `📌Phản hồi từ admin ${name} đến bạn:\n»------\n${event.body}\n------«\n»💬Phản hồi tin nhắn này để tiếp tục gửi báo cáo về admin`,
                    mentions: [{ tag: name, id: event.senderID }]
                }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
		}
    }
	}

};

module.exports.run = async function({ api, event, args }) {
    if (!args[0])
        return api.sendMessage(
            "Bạn chưa nhập nội dung cần báo cáo",
            event.threadID,
            event.messageID
        );
    var data = await api.getUserInfo(event.senderID);
    var name = data[event.senderID].name;
    var idbox = event.threadID;
    var url = data[event.senderID].profileUrl;
    var datathread = await api.getThreadInfo(event.threadID);
    var namethread = datathread.name;

    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    const listAdmin = global.config.ADMINBOT;
    api.sendMessage(
        "Đã gửi báo cáo của bạn đến các admin bot",
        event.threadID,
        () => {
            var idad = listAdmin;
			for (var idad of listAdmin) {
            api.sendMessage(
                `👤Báo cáo từ: ${name}\n${url}\n👥Box: ${namethread}\nID box: ${idbox}\n»-------------------------\n⚠️Lỗi: ${args.join(
            " "
          )}\n--------------------------«\nTime: ${gio}`,
                idad,
                (error, info) =>
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    messID: event.messageID,
                    id: idbox,
                    type: "calladmin"
                })
            );
		}
        }
    );
};