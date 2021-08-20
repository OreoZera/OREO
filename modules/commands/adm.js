 module.exports.config = {
   name: "adm",
     version: "1.0.0",
       hasPermssion: 0,
         credits: "CallmeSun",
           description: "Kiểm tra thông tin admin bot.",
             commandCategory: "config",
               usages: "",
                 cooldowns: 5,
                   dependencies: {
                       "request":"",
                           "fs-extra":"",
                               "axios":""
                                 }
                                 };

           module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
                const axios = global.nodemodule["axios"];
                const request = global.nodemodule["request"];
                const fs = global.nodemodule["fs-extra"];
                var link = [
"https://media0.giphy.com/media/VRwZpK1OPsiOzSci42/giphy.gif",
"https://media1.giphy.com/media/jTAkn6hKyy2esWjOOZ/giphy.gif",
"https://media3.giphy.com/media/UVYGRsrSlSlYJjZaqQ/giphy.gif",
"https://media3.giphy.com/media/J1d4nG792FrVqZPHVR/giphy.gif",
"https://media2.giphy.com/media/9PwWklO9tSELtIhBka/giphy.gif",
"https://media1.giphy.com/media/Q66dCIgxnb4uzEYDqS/giphy.gif",
"https://media4.giphy.com/media/5b5tgCP2Kja3JkcftU/giphy.gif",
"https://media1.giphy.com/media/MCEneemI5TEZmzeiZk/giphy.gif",
"https://media0.giphy.com/media/5QMKspne3I3yOk40fl/giphy.gif",
"https://media2.giphy.com/media/5eFtKFqu5D34WNno9u/giphy.gif"
];
                var callback = () => api.sendMessage({body:`\n» Info người vận hành bot «\n\n👤FB: Le Thanh Thien\n- UID: 100017608866967\n- Inbox: m.me/CallmeSun.3K\n- Giới tính: Nam ( ͡° ͜ʖ ͡°)\n- Mối quan hệ: Độc thân\n- SN: 2003\n- ID 🌽gi: 5283100420\n\n💳VCB: 9392045046\n💳VIB: 005900791\n📲MoMo: 0392045046`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
                                             return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
                                                };