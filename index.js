import 'dotenv/config'
import linebot from 'linebot'
import commandWeather from './commands/weather.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', 3000, () => {
  console.log('機器人已啟動！')
})

bot.on('message', async event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }
  if (event.message.type === 'text') {
    const messageText = event.message.text.trim()
    const keywords = ['天氣', '天', 'weather']

    // 先遍歷 keywords 陣列，用 keyword => messageText.startsWith(keyword) 檢查 messageText 是否以該關鍵字開頭。
    if (keywords.some(keyword => messageText.startsWith(keyword))) {
      // 使用 RegExp 建構函式來建立一個正則表達式，用來匹配訊息文字中以關鍵字開頭的部分。
      // ^ 表示匹配字串的開頭
      // (${keywords.join('|')}) 這部分會將關鍵字陣列組合成一個正則表達式的選項，表示任何一個關鍵字都是匹配的。
      // \\s* 表示零個或多個空格字符。
      // 組合後的正則表達式可能看起來像 ^(天氣|天|weather)\s*
      const cityName = messageText.replace(new RegExp(`^(${keywords.join('|')})\\s*`), '').trim()
      if (cityName) {
        await commandWeather(event, cityName)
      } else {
        await event.reply('請輸入縣市名稱，例如「天氣 臺北市」')
      }
    } else {
      await event.reply('請輸入正確的指令，例如「天氣 臺北市」')
    }
  }
})
