module.exports.config = {
	name: "tranducbo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh Đức Bo",
	commandCategory: "Random-img,
	usages: "ducbo",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.berver.tech/duckbo').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Đức Bo 🤭🤭`,
						attachment: fs.createReadStream(__dirname + `/cache/bo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bo.${ext}`)).on("close", callback);
			})
}