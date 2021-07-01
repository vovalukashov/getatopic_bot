import { Context } from 'telegraf'
import { bot } from '@/helpers/bot'
import { replyMarkup } from './sendStart'
import { getRandomTopic } from '@/models'
import { editLastMessageReplyMarkup, lastMessage } from '@/utils/lastMessage'

export async function sendTopic(ctx: Context) {
  await editLastMessageReplyMarkup()
  lastMessage.message = bot.telegram.sendMessage(ctx.chat.id, await getRandomTopic(), {
    reply_markup: replyMarkup,
  })
}
