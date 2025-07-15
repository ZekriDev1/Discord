const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login('MTM5NDY3NzE4ODcxMTk0MDEzNg.GrJ5LN.mo_WPkvAcHSciNFzGREE_pncukYWldBdsPG1DU'); // Replace with your bot token
