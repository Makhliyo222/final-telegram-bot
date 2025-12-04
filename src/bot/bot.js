import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true});

bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const firstname = msg.chat.first_name;
    const text = msg.text;

    bot.sendMessage(chatId, `Assalomu aleykum, ${firstname}`);
    bot.sendMessage(chatId, `${text}`);
});

console.log(`Bot ishga tushdi..`);