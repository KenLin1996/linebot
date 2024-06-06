import 'dotenv/config'
import template from '../templates/weatherModel.js'
import axios from 'axios'

export default async (event, cityName) => {
  try {
    const apikey = process.env.WEATHER_API_KEY
    const dataid = 'F-C0032-001'
    const format = 'json'
    const url = `https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/${dataid}?format=${format}&Authorization=${apikey}`

    const response = await axios.get(url)

    const data = response.data
    const locations = data.cwaopendata.dataset.location

    const location = locations.find(loc => loc.locationName === cityName)

    if (!location) {
      await event.reply('找不到該城市的天氣資訊，請確認城市名稱是否正確')
      return
    }

    const weatherInfo = template()
    weatherInfo.contents[0].header.contents[0].contents[0].text = location.locationName
    weatherInfo.contents[0].header.contents[0].contents[1].url = `https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${location.weatherElement[0].time[0].parameter.parameterValue}.svg`
    weatherInfo.contents[0].header.contents[2].contents[1].text = location.weatherElement[4].time[0].parameter.parameterName + '%'
    weatherInfo.contents[0].body.contents[0].contents[0].contents[1].text = location.weatherElement[0].time[0].parameter.parameterName
    weatherInfo.contents[0].body.contents[1].contents[0].contents[1].text = location.weatherElement[1].time[0].parameter.parameterName + '℃'
    weatherInfo.contents[0].body.contents[1].contents[1].contents[1].text = location.weatherElement[2].time[0].parameter.parameterName + '℃'
    weatherInfo.contents[0].body.contents[1].contents[2].contents[1].text = location.weatherElement[3].time[0].parameter.parameterName

    const replyMessage = {
      type: 'flex',
      altText: '天氣查詢結果',
      contents: weatherInfo.contents[0]
    }

    await event.reply(replyMessage)
    console.log('Reply sent successfully')
  } catch (error) {
    console.error('Error occurred:', error)
    await event.reply('發生錯誤')
  }
}
