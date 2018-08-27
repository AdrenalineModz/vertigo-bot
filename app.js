const Discord = require('discord.js');
const bot = new Discord.Client();

//Bot Settings
const prefix = '!'

//Listener Event: Message recieved
bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    var mention = message.mentions.users.first();

    if (msg === prefix + 'PACKAGES') {
      message.channel.send({embed: {
    color: 3447003,
    title: "Packages",
    description: "Available Packages",
    fields: [{
        name: "Cheap",
        value: "$100,000,000 in bank account\nRank 120\nMax stats\nUnlock everything\n**Price: $1**"
      },
      {
        name: "Average",
        value: "$200,000,000 in bank account\nRank 120\nMax stats\nUnlock everything\n**Price: $2**"
      },
      {
        name: "Rich",
        value: "$500,000,000 in bank account\nRank 120\nMax stats\nUnlock everything\n**Price: $5**"
      },
      {
        name: "Mad Clout",
        value: "$1,000,000,000 in bank account\nRank 120\nMax stats\nUnlock everything\n**Price: $10**"
      }
    ],
  }
});

    }


    if (msg.startsWith(prefix + 'PURGE')) {
      async function purge() {
          message.delete();

          if (!message.member.roles.find("name", "Server Mod")) {
            message.channel.send('You Need the \`Server Mod\`role to use this command.');
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

});

//Listener Event: Bot started
bot.on('ready', () => {
  console.log('Bot online.')

  bot.user.setActivity('Grand Theft Auto V')

})

//Token
bot.login(process.env.BOT_TOKEN)
