import { Context } from 'telegraf'
import { bot } from '@/helpers/bot'
import { lastMessage } from '@/utils/lastMessage'

export const replyMarkup = {
  inline_keyboard: [
    [
      {
        text: 'Get a topic',
        callback_data: 'topic',
      },
    ],
  ],
}

export function sendStart(ctx: Context) {
  lastMessage.message = bot.telegram.sendMessage(
    ctx.chat.id,
    'Hi 👋. I will help you choose a topic for a small conversation in English 😉',
    {
      reply_markup: replyMarkup,
    },
  )
}
