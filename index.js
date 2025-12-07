require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Define greetings and replies
const replies = {
    "slm": "Wa 3likom salam! 😄",
    "hello": "Hi! How are you? 😄",
    "hi": "Hi! How are you? 😄",
    "how are you": "I'm a bot, but I'm doing great! 😎",
    "good morning": "Good morning! ☀️",
    "bye": "Bye! See you later 👋",
    "bn8": "thalaw"

};

// Chatbot replies
client.on('messageCreate', message => {
    if (message.author.bot) return; // ignore bot messages

    const msg = message.content.toLowerCase().trim(); // normalize

    // Check if the message matches any key in replies
    if (replies[msg]) {
        message.channel.send(replies[msg]);
    }
    // If message doesn't match, do nothing
});

// Login to Discord
client.login(process.env.TOKEN);
