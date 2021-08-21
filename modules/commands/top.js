module.exports.config = {
	name: "top",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "CatalizCS fix by CallmeSun & Jukie",
	description: "Xem thread/user/money lắm mồm/level cao/giàu nhất server",
	commandCategory: "Nhóm",
	usages: "[thread/user/money]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;


	///////////////////////////////////////////
	//===== Kiểm tra có limit hay không =====//
var _0x6e9a=["\x74\x68\xF4\x6E\x67\x20\x74\x69\x6E\x20\u0111\u1ED9\x20\x64\xE0\x69\x20\x6C\x69\x73\x74\x20\x70\x68\u1EA3\x69\x20\x6C\xE0\x20\x6D\u1ED9\x74\x20\x63\x6F\x6E\x20\x73\u1ED1\x20\x76\xE0\x20\x6B\x68\xF4\x6E\x67\x20\x64\u01B0\u1EDB\x69\x20\x30","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65",""];if(args[1]&& isNaN(args[1])|| parseInt(args[1])<= 0){return api[_0x6e9a[3]](_0x6e9a[0],event[_0x6e9a[1]],event[_0x6e9a[2]])};var option=parseInt(args[1]|| 10);var data,msg=_0x6e9a[4]

	///////////////////////////////////////
	//===== Kiểm tra các trường hợp =====//
var _0x1253=["\x66\x73\x2D\x65\x78\x74\x72\x61","\x72\x65\x71\x75\x65\x73\x74","\x73\x71\x72\x74","\x66\x6C\x6F\x6F\x72"];var fs=require(_0x1253[0]);var request=require(_0x1253[1]);function expToLevel(_0x8ec5x4){if(_0x8ec5x4< 0){return 0};return Math[_0x1253[3]]((Math[_0x1253[2]](1+ (4* _0x8ec5x4)/ 3)+ 1)/ 2)}
    //level	
var _0xf78e=["\x75\x73\x65\x72","\x75\x73\x65\x72\x49\x44","\x65\x78\x70","\x67\x65\x74\x41\x6C\x6C","\x73\x6F\x72\x74","\u26A1\uFE0F\x54\x6F\x70\x20\x31\x35\x20\x6E\x67\u01B0\u1EDD\x69\x20\x64\xF9\x6E\x67\x20\x63\xF3\x20\x6C\x65\x76\x65\x6C\x20\x63\x61\x6F\x20\x6E\x68\u1EA5\x74\x20\x73\x65\x76\x65\x72\x20\x21","\x6E\x61\x6D\x65","\x67\x65\x74\x44\x61\x74\x61","\x62\x6F\x64\x79","\x0A","\x2E\x20","\x20\x2D\x20\x63\u1EA5\x70\x20","\x6C\x6F\x67","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(args[0]== _0xf78e[0]){let all= await Currencies[_0xf78e[3]]([_0xf78e[1],_0xf78e[2]]);all[_0xf78e[4]]((_0x2250x2,_0x2250x3)=>{return _0x2250x3[_0xf78e[2]]- _0x2250x2[_0xf78e[2]]});let num=0;let msg={body:_0xf78e[5]};for(var i=0;i< 15;i++){let level=expToLevel(all[i][_0xf78e[2]]);var name=( await Users[_0xf78e[7]](all[i][_0xf78e[1]]))[_0xf78e[6]];num+= 1;msg[_0xf78e[8]]+= _0xf78e[9]+ num+ _0xf78e[10]+ name+ _0xf78e[11]+ level};console[_0xf78e[12]](msg[_0xf78e[8]]);api[_0xf78e[15]](msg,event[_0xf78e[13]],event[_0xf78e[14]])}
	if (args[0] == "thread") {
		var threadList = [];
		
		//////////////////////////////////////////////
		//===== Lấy toàn bộ nhóm và số message =====//
		try {
        	data = await api.getThreadList(option + 10, null, ["INBOX"]);
		}
		catch (e) {
			console.log(e);
		}

		for (const thread of data) {
			if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
		}
		
		/////////////////////////////////////////////////////
		//===== sắp xếp từ cao đến thấp cho từng nhóm =====//
		threadList.sort((a, b) => {
			if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
		})

		///////////////////////////////////////////////////////////////
		//===== Bắt đầu lấy danh sách push vào khuôn mẫu trả về =====//
		var i = 0;
		for(const dataThread of threadList) {
			if (i == option) break;
			msg += `⚡${i+1}/ ${(dataThread.threadName)||"Không tên"}\n⚡TID: [${dataThread.threadID}]\n⚡Số tin nhắn: ${dataThread.messageCount} tin nhắn\n\n`;
			i+=1;
		}
    
		return api.sendMessage(`⚡️Dưới đây là top ${threadList.length} các nhóm lắm mồm nhất quả đất:\n≻───── ⋆✩⋆ ─────≺\n${msg}\n≻────END────≺`, threadID, messageID);
	}
	
var _0x79fb=["\x6D\x6F\x6E\x65\x79","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x41\x6C\x6C","\x73\x6F\x72\x74","\u26A1\uFE0F\x54\x6F\x70\x20\x31\x30\x20\x6E\x67\u01B0\u1EDD\x69\x20\x64\xF9\x6E\x67\x20\x67\x69\xE0\x75\x20\x6E\x68\u1EA5\x74\x20\x73\x65\x76\x65\x72\x20\x21","\x6E\x61\x6D\x65","\x67\x65\x74\x44\x61\x74\x61","\x62\x6F\x64\x79","\x0A","\x2E\x20","\x3A\x20","\x20\u0111\xF4","\x6C\x6F\x67","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(args[0]== _0x79fb[0]){let all= await Currencies[_0x79fb[2]]([_0x79fb[1],_0x79fb[0]]);all[_0x79fb[3]]((_0x9f5fx2,_0x9f5fx3)=>{return _0x9f5fx3[_0x79fb[0]]- _0x9f5fx2[_0x79fb[0]]});let num=0;let msg={body:_0x79fb[4]};for(var i=0;i< 10;i++){let level=all[i][_0x79fb[0]];var name=( await Users[_0x79fb[6]](all[i][_0x79fb[1]]))[_0x79fb[5]];num+= 1;msg[_0x79fb[7]]+= _0x79fb[8]+ num+ _0x79fb[9]+ name+ _0x79fb[10]+ level+ _0x79fb[11]};console[_0x79fb[12]](msg[_0x79fb[7]]);api[_0x79fb[15]](msg,event[_0x79fb[13]],event[_0x79fb[14]])}

}