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
    var mention = message.mentions.users.first();

    if (msg.includes('DOG')) {
      message.react('438006163955515392');

    }

    if (msg === prefix + 'INVITE') {
      message.channel.send('Invite friends with this link: http://discord.gg/KMXPaw7');

    }

    if (msg === prefix + 'CONGO') {
      message.channel.send('THE OFFICIAL WEBSITE GOT SEIZED BY THE FBI: http://congohub.cf').then(sentMessage => {
    sentMessage.react('410469779648806922');
  })
      message.react('41046977964
