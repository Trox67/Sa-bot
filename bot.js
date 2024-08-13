const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Replace these with your server and channel IDs
const SERVER_ID = '1264497356330635266';
const CHANNEL_ID = '1272973045186953269';

client.on('messageCreate', message => {
    // Check if the message is in the specified server and channel
    if (message.guild.id === SERVER_ID && message.channel.id === CHANNEL_ID) {
        // Check if the message content is "sa"
        if (message.content.toLowerCase() === 'sa') {
            message.reply('as');
        }
    }
});

// Replace the token field with your bot's token
client.login('MTI3Mjk3MjQyMTkzNDM1NDUyNQ.GW7n6s.9bKkpICRgyAQYSxZUvBvwl5Omlh0wcYvHXwCK4);
