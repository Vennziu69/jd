const Discord = require("discord.js");

const TOKEN = "NzQzMDY0NzQzODE1ODA3MDY2.XzPO-A.m0pHarx1iBUzMmwk88CcdGILGcg"

var bot = new Discord.Client();

Discord.client.commands = new Discord.Collection();

fs.readdir("./Commends/", (err, files) =>{
  if(err) console.log(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if(jsfiles.length <= 0){
    console.log("Wystąpil bląd bota! Folder ./Commends/ jest pusty :(");
  }
  
    
  });



bot.on("message", function(message) {
  console.log(message.content);
 Discord.client.user.setActivity("Serwer SmallHard.PL",{type: "WATCHING"});
})


bot.login(TOKEN);