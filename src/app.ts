import { localeActions } from './handlers/language'
// Setup @/ aliases for modules
import 'module-alias/register'
// Config dotenv
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
// Dependencies
import { bot } from '@/helpers/bot'
import { ignoreOldMessageUpdates } from '@/middlewares/ignoreOldMessageUpdates'
import { sendHelp } from '@/handlers/sendHelp'
import { i18n, attachI18N } from '@/helpers/i18n'
import { setLanguage, sendLanguage } from '@/handlers/language'
import { sendStart } from '@/handlers/sendStart'
import { attachUser } from '@/middlewares/attachUser'
import { sendTopic } from '@/handlers/sendTopic'

// Middlewares
bot.use(ignoreOldMessageUpdates)
bot.use(attachUser)
bot.use(i18n.middleware(), attachI18N)
// Commands
bot.command('help', sendHelp)
bot.command('language', sendLanguage)
bot.command('start', sendStart)
// Actions
bot.action(localeActions, setLanguage)
bot.action('topic', async (ctx) => {
  await ctx.answerCbQuery()
  await sendTopic(ctx)
})

bot.on('text', sendTopic)

// Errors
bot.catch(console.error)
// Start bot
bot.launch().then(() => {
  console.info(`Bot ${bot.botInfo.username} is up and running`)
})
