const Discord = require('discord.js');
const bot = new Discord.Client();

//Bot Settings
const prefix = '&'

//Functions
function hook(channel, title, message, color, avatar) {
  if (!channel) return console.log('Channel not specified');
  if (!title) return console.log('Title not specified');
  if (!message) return console.log('Message not specified');
  if (!color) color = 'd9a744';
  if (!avatar) avatar = 'https://cdn.discordapp.com/avatars/440182773316190208/2bc1948291e0481af3e553a1bb3afabe.png'

  color = color.replace(/\s/g, '');
  avatar = avatar.replace(/\s/g, '');

  channel.fetchWebhooks()
    .then(webhook => {
      let foundHook = webhook.find('name', 'Slav Bot');

      if (!foundHook) {
        channel.createWebhook('Slav Bot', 'https://cdn.discordapp.com/avatars/440182773316190208/2bc1948291e0481af3e553a1bb3afabe.png')
          .then(webhook => {
            webHook.send('', {
              "username": title,
              "avatarURL": avatar,
              "embeds":  [{
                "color": parseInt(`0x${color}`),
                "description":message
              }]
            })
              .cath(error => {
                console.log(error);
                return channel.send('**Something went wrong with sending the webhook. Please check console.**');
              })

          })
      } else {
        foundHook.send('', {
          "username": title,
          "avatarURL": avatar,
          "embeds":  [{
            "color": parseInt(`0x${color}`),
            "description":message
          }]
        })
          .cath(error => {
            console.log(error);
            return channel.send('**Something went wrong with sending the webhook. Please check console.**');
          })
      }

    })

}

//Listener Event: Message recieved
bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    var mention = message.mentions.users.first();

    if (msg.includes('DOG')) {
      message.react('438006163955515392');

    }

    if (msg === prefix + 'INVITE') {
      message.channel.send('Invite friends with this link: https://discord.gg/qwcvh7v');

    }

    if (msg === prefix + 'CONGO') {
      message.channel.send('THE OFFICIAL WEBSITE GOT SEIZED BY THE FBI: http://congohub.cf')

    }

    if (msg === prefix + 'GIT') {
      message.channel.send('https://github.com/WastefulNick/vertigo-bot');

    }

    if (msg.startsWith(prefix + 'GIVEAWAY')) {
      if(!message.member.roles.has('453883564417744907')) return message.channel.send("Command only for giveaway creators");
      prize = message.content.slice(prefix.length + 8);
      message.channel.send('**GIVEAWAY**\n\nI\'ll be drawing one winner to receive' + prize + '! To participate in this giveaway all you have to do is be the Member rank or above and react to this message with :tada:!\n\n<@&453970415455305739>\n\nGood luck!').then(sentMessage => {
    sentMessage.react('454345135539486720');
  })
    }

    if (msg === prefix + 'NINJA') {
      message.channel.send('im a pervert and i should burn in hell for soliciting minors online and blackmailing them of 18+ photos. here is my greekass face https://goo.gl/S9k7PJ');

    }

    if(message.channel.id === '454020003885219840'){
      message.delete();
      if(!message.member.roles.has('410153995194073092')) return message.member.send('You need a Member rank to do this');
      message.member.addRole('453970415455305739');
      console.log(message.author.username + ' received giveaway rank');
      message.author.send('You\'ve now signed up to be pinged for giveaways, remember to go to `#giveaways` and react to the emoji for a chance to win! Good luck!');
    }

    if (msg === prefix + 'PORN') {
      message.channel.send({embed: {
        color: 3447003,
        description: "[Click here (SFW)](https://www.pornhub.com/view_video.php?viewkey=ph55b2ec08ad5b1)"
      }});

    }

    if (msg.includes('MERCH')) {
      message.channel.send({embed: {
        color: 3447003,
        description: "[Click here for merch!](https://goo.gl/J2D75Z)"
      }});
    }

    if (msg.startsWith(prefix + 'DRAW')) {
      if(!message.member.roles.has("453883564417744907")) return message.channel.send("Command only for bot developers");
      drawNumber = message.content.slice(prefix.length + 4);
      winner = Math.floor((Math.random() * drawNumber) + 1);
      message.channel.send(winner)

    }

    if (msg.includes('FORTNITE')) {
        message.react('443130306078179368');

    }

    if (msg.includes('LOL')) {
        message.react('431860374829006849');

    }

    if (msg.includes('LMAO')) {
        message.react('431860374829006849');

    }

    if (msg.includes('LMFAO')) {
        message.react('431860374829006849');

    }


    if (msg === prefix + 'HELP') {
      message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Command list",
    description: "This is a list of most commands",
    fields: [{
        name: "Fun",
        value: "dog - oUR dog\n[congo](http://congohub.cf) - Best website EVER (that got taken down)\nporn - 😏\nninja - TTNinjaGaming\nPM - PM's people\nhook - Webhook commands\n[git](https://github.com/WastefulNick/vertigo-bot) - Github for this bot"
      },
      {
        name: "Other",
        value: "invite - Posts invite link"
      },
      {
        name: "Admin",
        value: "purge - Deletes messages"
      },
      {
        name: "Giveaway",
        value: "giveaway - Creats giveaway\ndraw - Draws giveaway"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© WastefulNick"
    }
  }
});

    }

    if (msg.startsWith(prefix + 'PM')) {
      if (mention == null) { message.channel.send('You have to mention someone!'); return;}
      message.delete();
      mentionMessage = message.content.slice(prefix.length + 2);
      mention.send (mentionMessage + '\n\nSent by: ' + sender);
      message.channel.send('Message sent').then(sentMessage => {
    sentMessage.react('📬');

  })
    }


    if (msg.startsWith(prefix + 'PURGE')) {
      async function purge() {
          message.delete();

          if (!message.member.roles.find("name", "Housekeeping")) {
            message.channel.send('You Need the \`Housekeeping\`role to use this command.');
            return;
          }

          if (isNaN(args[0])) {
            message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amounts>');
            return;
          }

          const fetched = await message.channel.fetchMessages({limit: args[0]});
          console.log(fetched.size + ' messages found, deleting...');

          message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`))

      }

      purge();

    }

    if (msg.startsWith(prefix + 'HOOK')) {
      message.delete();

      if (msg === prefix + 'HOOK') {
        return hook(message.channel, 'Hook Usage', `${prefix}hook <username>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`, 'FC8469', 'https://cdn.discordapp.com/avatars/440182773316190208/2bc1948291e0481af3e553a1bb3afabe.png')

      }
      let hookArgs = message.content.slice(prefix.length + 4).split(",")

      hook (message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);

    }

});

//Listener Event: Bot started
bot.on('ready', () => {
  console.log('Bot online.')

  bot.user.setActivity('with WastefulNick')

})

//Token
bot.login(process.env.BOT_TOKEN)
