module.exports.config = {
 name: "uptime",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Mirai Team",
 description: "Kiểm tra thời gian bot đã online",
 commandCategory: "system",
 cooldowns: 5,
 dependencies: {
  "pidusage": ""
 }
};

function byte2mb(bytes) {
 const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
 let l = 0, n = parseInt(bytes, 10) || 0;
 while (n >= 1024 && ++l) n = n / 1024;
 return `${n.toFixed(n < 10> 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event, args }) => {
 const time = process.uptime(),
  hours = Math.floor(time / (60 * 60)),
  minutes = Math.floor((time % (60 * 60)) / 60),
  seconds = Math.floor(time % 60);
 const axios = global.nodemodule["axios"];
 const pidusage = await global.nodemodule["pidusage"](process.pid);
 const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
 var hour = res.data.data.time.hour;
 var minute = res.data.data.time.minute;
 var second = res.data.data.time.second;

 const timeStart = Date.now();
 return api.sendMessage("", event.threadID, () => api.sendMessage(`Bây giờ là: ${hour}:${minute}:${second} \n⚡️Bot đã hoạt động ${hours} giờ ${minutes} phút ${seconds} giây.\n\n👤Tổng người dùng: ${global.data.allUserID.length}\n👥Tổng Nhóm: ${global.data.allThreadID.length}\n❯ Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n❯ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n❯ Ping: ${Date.now() - timeStart}ms\n\n== This bot of CallmeSun ==`, event.threadID, event.messageID));
}