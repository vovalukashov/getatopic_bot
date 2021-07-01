import { bot } from '@/helpers/bot'

export const lastMessage = {
  message: null
}

export const editLastMessageReplyMarkup = async () => {
  if (lastMessage.message) {
    const message = await lastMessage.message
    await bot.telegram.editMessageReplyMarkup(message.chat.id, message.message_id, message.inline_message_id, null)
  }
}
