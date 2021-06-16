import { Context } from 'telegraf'
import { bot } from '@/helpers/bot'
import { replyMarkup } from './sendStart'
import { getRandomTopic } from '@/models'

export async function sendTopic(ctx: Context) {
  bot.telegram.sendMessage(ctx.chat.id, await getRandomTopic(), {
    reply_markup: replyMarkup,
  })
}
