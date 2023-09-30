const { Telegraf } = require("telegraf");
const TOKEN = "6632607816:AAGpwX0ky62PjWRx639QxA9qG3dRuTy7d9A";
const bot = new Telegraf(TOKEN);

const web_link = "https://6518657e90379f4ec0303469--magnificent-bombolone-9b39d8.netlify.app/";

bot.start((ctx) =>
  ctx.reply("So`rovnoma 2023 2024. So`rovnomani boshlash uchun pastdagi Boshlash ustiga bosing.", {
    reply_markup: {
      keyboard: [[{ text: "Boshlash 🚀", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();