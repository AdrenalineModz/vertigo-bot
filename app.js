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
      let foundHook = webhook.find('name', 'Vertigo');

      if (!foundHook) {
        channel.createWebhook('Vertigo', 'https://cdn.discordapp.com/avatars/440182773316190208/2bc1948291e0481af3e553a1bb3afabe.png')
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

    if (msg === prefix + 'DOG') {
      message.channel.send('oUR dog <:angery:438006163955515392>');

    }

    if (msg === prefix + 'INVITE') {
      message.channel.send('Invite friends with this link: http://discord.gg/KMXPaw7');

    }

    if (msg === prefix + 'BOT') {
      message.channel.send('Using extensive bot commands in general will result in a ban! Use \`#bots\`');

    }

    if (msg === prefix + 'CONGO') {
      message.channel.send('THE OFFICIAL SQUAD WEBSITE MADE BY WASTEFULNICK: http://congohub.cf');

    }

    if (msg === prefix + 'GIT') {
      message.channel.send('https://github.com/WastefulNick/vertigo-bot');

    }

    if (msg === prefix + 'NINJA') {
      message.channel.send('im a pervert and i should burn in hell for soliciting minors online and blackmailing them of 18+ photos. here is my greekass face https://goo.gl/S9k7PJ');

    }

    if (msg === prefix + 'HELP') {
      message.channel.send('```The commands are:\nhelp - This list\ninvite - Invite link\nbot - Stop bot spam\ndog - oUR dog\ncongo - Best website EVER\ngit - Github link\nninja - TTNinjaGaming\npurge - Deletes messages\nhook - Webhook commands\n\nThe prefix is: &```');

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
        return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`, 'FC8469', 'https://cdn.discordapp.com/avatars/440182773316190208/2bc1948291e0481af3e553a1bb3afabe.png')

      }
      let hookArgs = message.content.slice(prefix.length + 4).split(",")

      hook (message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);

    }

});

//Listener Event: Bot started
bot.on('ready', () => {
  console.log('Bot online.')

})

//Token
bot.login(process.env.BOT_TOKEN)
