module.exports.config = {
	name: "help",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Help cặc! Ko chỉ cho m xem bảng lệnh đâu😎",
	commandCategory: "Study",
	usages: "[lệnh]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Con bot này thông minh hơn bạn😼","Adm của tui vẫn đang tuyển vợ ko?","Help cặc! Còn lâu mới xem đc bảng lệnh😏","Có hơn 200 người bị đóng băng, vẫn đang nằm lại trên đỉnh Everest?","Kẹo bông gòn (đường), được phát minh bởi 1 nha sĩ?","Bạn đã biết","tôi không có khả năng hiểu con gái","con bot này giúp bạn hỗ trợ trong việc học?","spam bot tôi sẽ ban bạn khỏi người dùng bot","đừng để tôi cáu nhé!","việc bạn đang làm là vô nghĩa","bạn đã làm tôi cáu😡","tôi yêu bạn vai lon","bạn có yêu tôi không ?","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?","đây chỉ là sản phẩm fake spermbot?","Tôi không có khả năng hiểu được Sun","Ngày 09 tháng 04 là ngày sinh nhật của CallmeSun ?","Con bot này giống Spermbot nhưng thật chất chỉ là mod lại ?","Đây là một bản hoàn chỉnh hơn của MiraiV2.","Đây không phải là bot C3C hay KB2A.","228922 là một con số tuyệt vời.","Đây là một lệnh vô dụng","177013 là một con số tuyệt vời","Đã từng có 600+ code JAV ở phiên bản đầu tiên của SpermBot","Ngôn ngữ của Sun là ngôn ngữ của sự thỉu năng🙉","Bạn đang bị thỉu năng?","Tiền là giấy - Thấy là lấy","Một khi tôi đã quyết, thì đừng hỏi mẹ Bạch Tuyết là ai","Đường lên Đại học thì xa, đường ra ruộng lúa thì 'A đây rồi'","Nếu bạn đếm tiếng dế kêu trong 25 giây rồi đem chia cho 3, lấy kết quả cộng thêm 4 sẽ ra nhiệt độ không khí?","Đây là con bot tự viết code cho chính nó","7749 là con số đẹp cho tình yêu","bạn có yêu tôi không ?","Bạn rất ngu","Điều gì bạn cũng nên biết, chỉ duy nhất 1 cái không nên biết là: Không biết điều","Phải biết điềm tĩnh trước gái xinh, không giật mình trước gái xấu","Học hành như cá kho tiêu, kho nhiều thì mặn học nhiều..thì ngu","Nếu ống kính máy ảnh là hình tròn, thì tại sao ảnh lại hình vuông nhỉ?","Giang hồ hiểm ác, ko bằng mạng lag thất thường"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Bạn có biết?]:\n\n ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};