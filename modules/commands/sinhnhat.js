module.exports.config = {
	name: "sinhnhat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược sinh nhật admin",
	commandCategory: "Admin",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("April 09, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「 Cùng đếm ngược sinh nhật của Sun nào ^^」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}