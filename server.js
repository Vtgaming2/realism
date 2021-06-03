let Discord = require("discord.js");
let Client = new Discord.Client();
let db = require("quick.db");
const { prefix } = require("./config.json");
//hello
Client.on("ready", () => {
  console.log("READY!");
  db.set(
    "money_804576394582425650",
    1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  );
  Client.user.setPresence({ activity: { name: prefix + "help" } });
});

const canvacord = require("canvacord")

Client.on("guildMemberAdd" , async member => {
  if(member.guild.id !== "847463326777999390") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarUrl({format: "png"}))
  .setColor("title", "eb3434")
  .setColor("username-box", "#1bccb1")
  .setColor("discriminator-box", "#471094")
  .setColor("message-box", "#1aad33")
  .setColor("border", "#230096")
  .setColor("avatar", "#230096")
  .setBackgroundImage("https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await
  welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("847463326777999393").send
  (member.user.toString(), attachment)
})

const getCoins = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

Client.on("message", message => {
  if (message.content === prefix + "help") {
    const e = new Discord.MessageEmbed()
      .setTitle("Realism-Help")
      .setDescription(
        "our tos https://Realism-TOS.taphere.repl.co and our updates https://Updates-For-Realism.taphere.repl.co important info-https://selfreliantevenlogins.taphere.repl.co/"
      )
      .setColor("YELLOW")
      .setTimestamp()
      .setFooter("Prefix = .");
    message.channel.send(e);
  }
  if (message.content === prefix + "websites") {
    var facts = [
      "https://www.youtube.com/",
      "https://www.mapcrunch.com/",
      "https://findtheinvisiblecow.com/",
      "http://www.shadyurl.com/",
      "https://hackertyper.com/",
      "https://theuselessweb.com/sites/",
      "https://theuselessweb.com/sites/cat-bounce/"
    ];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
  }
  if (message.content.startsWith(prefix + "kick")) {
    if (message.member.hasPermission("KICK_PERMISSIONS")) {
      let member = message.mentions.members.first();
      if (!member)
        message.channel.send("Please mention someone or i will ban you");
      else {
        member.kick().then(member => {
          message.channel.send(`Kicked ${member.user.username}!`);
        });
      }
    } else {
      message.reply("You do not have the permission to do that lol");
    }
  }
    if (message.content.startsWith(prefix + "ban")) {
    if (message.member.hasPermission("BAN_PERMISSIONS")) {
      let member = message.mentions.members.first();
      if (!member)
        message.channel.send("Please mention someone or i will ban you");
      else {
        member.kick().then(member => {
          message.channel.send(`Banned ${member.user.username}!`);
        });
      }
    } else {
      message.reply("You do not have the permission to do that lol");
    }
  }
  // it seems we use random many times, we should change get coin to get Random and use that instead of this - mei
  // the get coin function is needed to get a random amount of coins from a specific range so i would suggest making another function instead - Some Guy

  if (message.content === prefix + "cursed") {
    var facts = [
      "https://www.bing.com/images/search?view=detailV2&ccid=ARAIvVnI&id=BEE68E273B8835146869410F068E2B773435A962&thid=OIP.ARAIvVnIuP08jebhcRMaRwHaD4&mediaurl=https%3a%2f%2fi.chzbgr.com%2foriginal%2f7751941%2fh0BC031C9%2fcursed-images-funny-memes-cursed-bizarre-pics-weird-pictures&exph=420&expw=800&q=cursed+pics&simid=608020996733681715&ck=04FE49802515B619B4830B6BDE9247C5&selectedIndex=3&FORM=IRPRST",
      "https://www.bing.com/images/search?view=detailV2&ccid=kyemskQi&id=4405ED77474F787809BDAFDD5325914FC09AE6D2&thid=OIP.kyemskQi__xnEk_gnt9sLAAAAA&mediaurl=https%3a%2f%2fimg.izismile.com%2fimg%2fimg2%2f20090811%2fugly_people_19.jpg&exph=585&expw=450&q=random+pics&simid=607987332793708705&ck=2F14B82C0C06A9FD9512781FD227152E&selectedIndex=53&FORM=IRPRST",
      "https://www.bing.com/images/search?view=detailV2&ccid=EOoh9xyq&id=D60118731F77B8A1038BCD0A83B33F871B38834F&thid=OIP.EOoh9xyqZOHJrXEq1fe68wHaEU&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR10ea21f71caa64e1c9ad712ad5f7baf3%3frik%3dT4M4G4c%252fs4MKzQ%26riu%3dhttp%253a%252f%252fwww.dumpaday.com%252fwp-content%252fuploads%252f2017%252f01%252frandom-pictures-91.jpg%26ehk%3dNnATeTqd9lmWwjJHGVA68J2Bim74bjLhmmg1r6kqLAU%253d%26risl%3d%26pid%3dImgRaw&exph=437&expw=750&q=random+pics&simid=608034697676392926&ck=67C546762721D38E18B77F9723A1079A&selectedIndex=27&FORM=IRPRST",
      "https://www.bing.com/images/search?view=detailV2&ccid=hPNzgZ6L&id=90C777CDE3A5A7CB9748DA56DB41635E0901187E&thid=OIP.hPNzgZ6L0RBSbF80Rip6gAHaLH&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR84f373819e8bd110526c5f34462a7a80%3frik%3dfhgBCV5jQdtW2g%26riu%3dhttp%253a%252f%252fwww.dumpaday.com%252fwp-content%252fuploads%252f2017%252f10%252fphotos-25-20.jpg%26ehk%3diDKsDpINnCvUOja3kJIMLzN6p0lJjSS8y6Vx8QHjQCs%253d%26risl%3d%26pid%3dImgRaw&exph=1125&expw=750&q=random+pics&simid=607989695023505108&ck=8C36F88C9CA98455DE0757044F3D630F&selectedIndex=9&FORM=IRPRST"
    ];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
  }
  if (message.content === prefix + "beg") {
    const people = [
      "Karen",
      "Kid",
      "Memer",
      "Pewdiepie",
      "Old Man",
      "Clown",
      "Dog",
      "Begger"
    ];
    const coins = getCoins(500, 5000);
    const responses = [
      `You subbed to my channel damn take this ${coins}$!`,
      `Your one of my kinds here take this$ {coins}$!`,
      "No way!",
      "Leave me alone!",
      `Here, take this ${coins}$`
    ];
    const res = responses[Math.floor(Math.random() * responses.length)];
    if (
      res !== "No way!" &&
      res !== "Leave me alone!"
    )
      return db.add(`money_${message.author.id}`, coins);
    message.channel.send(
      `**${people[Math.floor(Math.random() * people.length)]}**: **${res}**`
    );
  }
  if (message.content === prefix + "bal") {
    const bal = db.get(`money_${message.author.id}`) || 0;
    message.channel.send(`Your bal: ${bal}`);
  }

  // items
  const items = [
    { name: "some random item", price: 50, id: "item_1" },
    { name: "cookie", price: 100, id: "item_2" },
    { name: "water", price: 120, id: "item_3" }
  ];

  if (message.content === prefix + "shop") {
    const len = items.length;
    const owned1 = db.get("item_item_1") || 0;
    const owned2 = db.get("item_item_2") || 0;
    const owned3 = db.get("item_item_3") || 0;
    const e = new Discord.MessageEmbed()
      .setTitle("Shop")
      .setDescription(
        `Item #1: ${
          len === 0 ? "There are no Items at the moment" : items[0].name
        }\nPrice: ${len === 0 ? "0" : items[0].price}\nID: ${
          len === 0 ? "None" : items[0].id
        }\nOwned: ${owned1}\nItem #2: ${
          len === 0 ? "There are no Items at the moment" : items[1].name
        }\nPrice: ${len === 0 ? "0" : items[1].price}\nID: ${
          len === 0 ? "None" : items[1].id
        }\nOwned: ${owned2}`
      )
      .setColor("YELLOW")
      .setTimestamp()
      .setFooter(`Total Items: ${len}`);
    message.channel.send(e);
  }
  if (message.content.startsWith(prefix + "buy")) {
    console.log(items[1].price);
    if (!items) return message.channel.send("There are no Items at the moment");
    const bal = db.get(`money_${message.author.id}`) || 0;
    const itemToBuy = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!itemToBuy)
      return message.channel.send(
        "Please specify an item name or id within the shop"
      );
    if (itemToBuy !== items[0].name && itemToBuy !== items[1].name)
      return message.channel.send("That Item does not exist in the Shop");
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // don't mind this im just adding it so i don't forget to add to this stuff when a new item comes out
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    if (itemToBuy === items[0].name || itemToBuy === items[0].id) {
      if (!bal >= items[0].price)
        return message.channel.send(
          "You don't have enough money to buy this item!"
        );
      if (bal >= items[0].price) {
        db.add(`item_${items[0].id}`, 1);
        db.subtract(`money_${message.author.id}`, items[0].price);
        message.channel.send(`You have successfully bought ${items[0].name}`);
      }
    }
    if (itemToBuy === items[1].name || itemToBuy === items[1].id) {
      if (!bal >= items[1].price)
        return message.channel.send(
          "You don't have enough money to buy this item!"
        );
      if (bal >= items[1].price) {
        db.add(`item_${items[1].id}`, 1);
        db.subtract(`money_${message.author.id}`, items[1].price);
        message.channel.send(`You have successfully bought ${items[1].name}`);
      }
    }
  }
  
  

  // i belive the following should be commented out - mei
  // alr then - some guy

  /**
  if (message.content === "Hi") {
    message.channel.send("Hello there");
  }
  if (message.content === "Ping") {
    message.channel.send("pong");
  }
  if (message.content === "Dead chat") {
    message.channel.send("Always has been");
  }
  if (message.content === "lol") {
    message.channel.send("LMao imagine using lol in 2021");
  }
  if (message.content === "wassup") {
    message.channel.send("Good Thanks for asking");
  }
  if (message.content === "How are you") {
    message.channel.send("fine wbu");
  }
  if (message.content === "Hello") {
    message.channel.send("Hi");
  }
  */

  // till here. - mei
});

Client.login(process.env.TOKEN);
