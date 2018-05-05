const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const prefix = "#";
const devs = ['380804037668241410' , '224002740647493632' , '431150885549113344' , ''];
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`:warning:️ Bot restarting... :warning:️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content ===  prefix + "help"){ 
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("─══════ {✯**Choose**✯} ══════─",' ‎ ')
  .addField(" **❧#help1 ➺      ⦁قائمة الاكواد ⦁  **",' ‎ ')
   .addField("**❧#help2 ➺      ⦁ أوامر عامة ⦁** ",' ‎ ')
     .addField("**❧#help3 ➺      ⦁ أوامر الأدارة + السبورت ⦁**",' ‎ ')
	   .addField("─══════ {✯**D.JPEI**✯} ══════─",' ‎ ')
	 
 .setFooter('Discord.JPEI')


   message.channel.send({embed});
   
      }
  });
  



 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help1") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in D.JPEI Server 💬`⦁",' ‎ ')
  .addField("❧  **#help-js  ➺      ⦁ قائمة أكواد الجافا سكربت**  ⦁",' ‎ ')
   .addField("❧  **#help-py  ➺      ⦁ قائمة أكواد البايثون**  ⦁",' ‎ ')
     .addField("❧  **#help-eris  ➺    ⦁ قائمة أكواد الإرس** ⦁",' ‎ ')
	   .addField("❧  **#help-io  ➺      ⦁ قائمة أكواد الآي أو** ⦁",' ‎ ')
	 
 .setFooter('Discord.JPEI')


   message.channel.send({embed});

    }
});
  
  
  
  
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in D.JPEI Server 💬`⦁",' ‎ ')
  .addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
   .addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
     .addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
	   .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
	 	   .addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
		   	   .addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
 .setFooter('Discord.JPEI')


   message.channel.send({embed});


    }
});
  
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in D.JPEI Server 💬`⦁",' ‎ ')
  .addField("**#help-js-source-1  ➺      ⦁ السورس الأساسي**⦁",' ‎ ')
   .addField("**#help-js-source-2  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
     .addField("**#help-js-source-3  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
	   .addField("**#help-js-source-4  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
	 
 .setFooter('Discord.JPEI')


   message.channel.send({embed});


    }
});
  
  
  
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
https://hastebin.com/xumiferaru.coffeescript

`);

    }
});  
  
  
  
  
    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الستريمنق ومعلومات البوت**
https://hastebin.com/idotifusid.coffeescript

`);

    }
});  
  
  
  
  
  
      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الواتشينق**
https://hastebin.com/jivizupafi.coffeescript

`);

    }
});  
  
  
  
        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الاساسي مع البنق**
https://hastebin.com/uxogubebif.coffeescript

`);

    }
});  
  
  
  
  
  
       client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in D.JPEI Server 💬`⦁",' ‎ ')
  .addField("**#help-js-admin-1  ➺      ⦁ كود الباند**⦁",' ‎ ')
   .addField("**#help-js-admin-2  ➺      ⦁ كود الكيك** ⦁",' ‎ ')
     .addField("**#help-js-admin-3  ➺      ⦁ كود مسح الشات مع عدد وشبيه بالبروبوت** ⦁",' ‎ ')
	   .addField("**#help-js-admin-4  ➺      ⦁ كود فتح وتقفيل الشات** ⦁",' ‎ ')
	 
 .setFooter('Discord.JPEI')


   message.channel.send({embed});


    }
});
  
  
  
          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الباند**
https://hastebin.com/hahujuwexa.php
`);

    }
});  
  
  
  
  
            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الكيك**
https://hastebin.com/bowivopose.php
`);

    }
});  
  
  

              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مسح الشات مع عدد وشبيه بالبروبوت**
https://hastebin.com/iwororamam.coffeescript
`);

    }
});  
  
  
  
  
  
                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود فتح وتقفيل الشات**
https://hastebin.com/etugawomeh.coffeescript
`);

    }
});  



         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("â¦پ`All types of codes in D.JPEI Server ًں’¬`â¦پ",' â€ژ ')
  .addField("**#help-js-general-1  â‍؛      â¦پ ظƒظˆط¯ ط§ظ„ط¨ظ†ظ‚**â¦پ",' â€ژ ')
   .addField("**#help-js-general-2  â‍؛      â¦پ ظƒظˆط¯ ط§ظ„ظ‚ط±ط¹ط©** â¦پ",' â€ژ ')
     .addField("**#help-js-general-3  â‍؛      â¦پ ظƒظˆط¯ ط§ظ„ط§ظپط§طھط§ط±** â¦پ",' â€ژ ')
	   .addField("**#help-js-general-4  â‍؛      â¦پ ظƒظˆط¯ ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط³ظٹط±ظپط±** â¦پ",' â€ژ ')
	 	   .addField("**#help-js-general-5  â‍؛      â¦پ ظƒظˆط¯ ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط´ط®طµظٹط©** â¦پ",' â€ژ ')
		   
 .setFooter('Discord.JPEI')


   message.channel.send({embed});


    }
});
  
  
  
  
  
                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-1") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ط§ظ„ط¨ظ†ظ‚**
 https://hastebin.com/udehosayej.coffeescript
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-2") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ط§ظ„ظ‚ط±ط¹ط©**
 https://hastebin.com/qunobubuji.js
`);

    }
});
  
  
  
  
  
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-3") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ط§ظ„ط§ظپط§طھط§ط±**
 https://hastebin.com/wopigecazo.js
`);

    }
});
  
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-4") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط³ظٹط±ظپط±**
 https://hastebin.com/xajaregari.js
`);

    }
});






                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-5") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط´ط®طµظٹط©**
 https://hastebin.com/vitodewesa.js
`);

    }
});


  
  
  
  
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-welcome") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("â¦پ`All types of codes in D.JPEI Server ًں’¬`â¦پ",' â€ژ ')
  .addField("**#help-js-welcome-1  â‍؛      â¦پ ظƒظˆط¯ طھط±ط­ظٹط¨ ظ…ط¹ ط°ظƒط± ط±ظ‚ظ… ط§ظ„ط¹ط¶ظˆ** â¦پ",' â€ژ ')
   .addField("**#help-js-welcome-2  â‍؛      â¦پ ظƒظˆط¯ ط§ظ„طھط±ط­ظٹط¨ ظ…ط¹ طµظˆط±ط©** â¦پ",' â€ژ ')
     .addField("**#help-js-welcome-3  â‍؛      â¦پ ظƒظˆط¯ ظ…ط؛ط§ط¯ط±ط© ط§ظ„ط¹ط¶ظˆ** â¦پ",' â€ژ ')

		   
 .setFooter('Discord.JPEI')


   message.channel.send({embed});

    }
});
  
  
  
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-1") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ طھط±ط­ظٹط¨ ظ…ط¹ ط°ظƒط± ط±ظ‚ظ… ط§ظ„ط¹ط¶ظˆ**
 https://hastebin.com/zapuyexive.js
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-2") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ط§ظ„طھط±ط­ظٹط¨ ظ…ط¹ طµظˆط±ط©**
 https://hastebin.com/tujehubuqo.php
`);

    }
});




                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-3") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ظ…ط؛ط§ط¯ط±ط© ط§ظ„ط¹ط¶ظˆ**
 https://hastebin.com/gufimedaca.js
`);

    }
});
  
  
  
  
             client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("â¦پ`All types of codes in D.JPEI Server ًں’¬`â¦پ",' â€ژ ')
  .addField("**#help-js-help-1  â‍؛      â¦پ ظƒظˆط¯ ظ‡ظ„ط¨ ظ…ط¹ ط§ظ…ط¨ط¯ ظٹط±ط³ظ„ ط¨ظ†ظپط³ ط§ظ„ط´ط§طھ** â¦پ",' â€ژ ')
   .addField("**#help-js-help-2  â‍؛      â¦پ ظƒظˆط¯ ظ‡ظ„ط¨ ظ…ط²ط®ط±ظپ ط¨ط¯ظˆظ† ط§ظ…ط¨ط¯ ظˆظٹط±ط³ظ„ ط¹ط§ظ„ط®ط§طµ** â¦پ",' â€ژ ')

		   
 .setFooter('Discord.JPEI')


   message.channel.send({embed});

    }
});
  
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-1") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ظ‡ظ„ط¨ ظ…ط¹ ط§ظ…ط¨ط¯ ظٹط±ط³ظ„ ط¨ظ†ظپط³ ط§ظ„ط´ط§طھ**
https://hastebin.com/cikeyoguqa.cs
`);

    }
});
  
  
  
                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-2") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ظƒظˆط¯ ظ‡ظ„ط¨ ظ…ط²ط®ط±ظپ ط¨ط¯ظˆظ† ط§ظ…ط¨ط¯ ظˆظٹط±ط³ظ„ ط¹ط§ظ„ط®ط§طµ**
https://hastebin.com/emawayudib.bash
`);

    }
});
  
  
  
  
  
  
  
               client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-bc") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("â¦پ`All types of codes in D.JPEI Server ًں’¬`â¦پ",' â€ژ ')
  .addField("**#help-js-bc-1  â‍؛      â¦پ ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ظ…ط·ظˆط±** â¦پ",' â€ژ ')
   .addField("**#help-js-bc-2  â‍؛      â¦پ ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ط؛ظٹط± ظ…ط·ظˆط±** â¦پ",' â€ژ ')
     .addField("**#help-js-bc-3  â‍؛      â¦پ ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ط£ظˆظ†ظ„ط§ظٹظ† + ظ…ط¹ ط§ظ„ظ…ظ†ط´ظ† + ط؛ظٹط± ظ…ط·ظˆط±** â¦پ",' â€ژ ')
	   .addField("**#help-js-bc-4  â‍؛      â¦پ ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ظ…ط¹ ط§ظ„ظ…ظ†ط´ظ† + ط؛ظٹط± ظ…ط·ظˆط±** â¦پ",' â€ژ ')

		   
 .setFooter('Discord.JPEI')


   message.channel.send({embed});

    }
});
  
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-1") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ظ…ط·ظˆط±**
 https://hastebin.com/bipanureqa.js
`);

    }
});



                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-2") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ط؛ظٹط± ظ…ط·ظˆط±**
 https://hastebin.com/kuvoruzowe.cs
`);

    }
});




                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-3") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ط£ظˆظ†ظ„ط§ظٹظ† + ظ…ط¹ ط§ظ„ظ…ظ†ط´ظ† + ط؛ظٹط± ظ…ط·ظˆط±**
 https://hastebin.com/zujuvupali.php
`);

    }
});
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-4") {
		 message.channel.send('**ظ„ظ‚ط¯ طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ظƒظˆط¯ ظپظٹ ط§ظ„ط®ط§طµ :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 â‌– **ط¨ط±ظˆط¯ظƒط§ط³طھ + ظ„ظ„ظƒظ„ + ظ…ط¹ ط§ظ„ظ…ظ†ط´ظ† + ط؛ظٹط± ظ…ط·ظˆط±**
 https://hastebin.com/zojokunayo.php
`);

    }
});


















  
  
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-py") {

    
         
message.reply(`
â‌– **` + "`All types of codes in python ًں’¬`" + `**

â‌§  **طھط­طھ ط§ظ„طµظٹط§ظ†ط©**

`);


    }
});




   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-eris") {

    
         
message.reply(`
â‌– **` + "`All types of codes in Eris ًں’¬`" + `**

â‌§  **طھط­طھ ط§ظ„طµظٹط§ظ†ط©**

`);


    }
});



   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-io") {

    
         
message.reply(`
â‌– **` + "`All types of codes in io ًں’¬`" + `**

â‌§  **طھط­طھ ط§ظ„طµظٹط§ظ†ط©**

`);


    }
});

client.on('message',message =>{
    if(message.content ==  "#top inv"){
message.guild.fetchInvites().then(i =>{
var invites = [];

i.forEach(inv =>{
    var [invs,i]=[{},null];
    
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
invites.push(`   لقد دعوت  :- (${inv.inviter}) =  (${invs[inv.code]}) \;`);

invites.push( `رابط الانفايت حق  :point_up::skin-tone-1::  ${inv.url} \;`);
});
  message.channel.send(invites.join(`\n`)+'\n\n**By @everyone:** '+message.author);
  
});

    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});
    }
  });
	
	
	
	
	

      client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`D.JPEI`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       
});
		  
		  
		  client.on('message', message => {
    if (message.content.startsWith("#av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
	client.on('message', message => {
       if (message.content.startsWith(prefix + "اقتراحي")) {
        let args = message.content.split(" ").slice(1).join(' ');
         if(!args) return message.channel.send(`**${prefix}اقتراحي <message>**`)
        let embedcontact = new Discord.RichEmbed()
        .addField('**Guild**', message.guild.name)
        .addField('**مرسل من قبل**', message.author.tag)
        .addField('اقتراحي هو', args)
        .setColor('RANDOM')
        .setThumbnail("https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-256.png")
        .setFooter(message.author.username, message.author.avatarURL)
       .setTimestamp()
        client.channels.get("437598848614006789") 
        .send(embedcontact);

         message.channel.send('``تم ارسال الاقتراح وشكرا لك``').then((message)=> {
          message.delete(50000)
      })
       }
       });
	
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

    }
  });







client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});








client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('#ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });


client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "#inv"){ 
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()
  .addField("سيرفر للمساعده والبرمجه",'https://discord.gg/PhYTXFE')
  .addField("     سيرفر لمحبين لعب اقاريو",' https://discord.gg/XJvtESh')

       .setFooter('Discord.JPEI')


   message.channel.send({embed});
      }
  });
  
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "#own"){ 
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)


       .setFooter('Discord.JPEI')


   message.channel.send({embed});
      }
  });
  
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help2") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`A╔[❖════════════❖]╗
 .addField("      اوامر عامة
 .addField("  ╚[❖════════════❖]╝💬`⦁",' ‎ ')
  .addField("❖ #roll <number> ➾ قرعة ⦁",' ‎ ')
   .addField("❖ #member ➾ معلومات الاعضاء ⦁",' ‎ ')
     .addField("❖ #av ➾ صورة حسابك ⦁",' ‎ ')
	   .addField("❖ #ser-av ➾ صورة السيرفر ⦁",' ‎ ')
	 	   .addField("❖ #uptime ➾ مدة تشغيل البوت ⦁",' ‎ ')
		   	   .addField("❖ #id ➾ اي دي ⦁",' ‎ ')
		   	   .addField("❖ #inv ➾ رابط السيرفر ⦁",' ‎ ')
.addField("❖ #own ➾ مسؤول البوت⦁",' ‎ ')
.addField("❖ #top inv ➾ اكثر شخص بالدعوات ⦁",' ‎ ')
.addField("❖ ❖ #ping ➾ عرض سرعه اتصال البوت ⦁",' ‎ ')
.addField("❖ ❖ #server ➾ معلومات عن السيرفر ⦁",' ‎ ')

 .setFooter('Discord.JPEI')


   message.channel.send({embed});


    }
});


  




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
