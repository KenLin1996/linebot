export default () => {
  return {

    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        size: 'kilo',
        direction: 'ltr',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '臺北市',
                  color: '#ffffff',
                  align: 'start',
                  size: 'xxl',
                  gravity: 'center',
                  flex: 0,
                  margin: 'none'
                },
                {
                  type: 'image',
                  url: 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg',
                  flex: 0,
                  margin: 'sm',
                  size: 'xxs'
                }
              ]
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'filler'
                    }
                  ],
                  width: '100%',
                  backgroundColor: '#0D8186',
                  height: '3px'
                }
              ],
              backgroundColor: '#9FD8E36E',
              height: '3px',
              margin: 'sm'
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '降雨率：',
                  color: '#ffffff',
                  align: 'start',
                  size: 'md',
                  gravity: 'center',
                  margin: 'none',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '60%',
                  color: '#ffffff',
                  align: 'end',
                  size: 'md',
                  gravity: 'center',
                  margin: 'lg',
                  flex: 1
                }
              ],
              paddingTop: '10px',
              margin: 'md'
            }
          ],
          backgroundColor: '#27ACB2',
          paddingTop: '12px',
          paddingAll: '12px',
          paddingBottom: '24px',
          margin: 'none'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '天氣現象：',
                      color: '#8C8C8C',
                      size: 'sm',
                      wrap: true,
                      margin: 'none',
                      flex: 0
                    },
                    {
                      type: 'text',
                      text: '多雲午後短暫雷陣雨',
                      color: '#000000',
                      size: 'sm',
                      wrap: true,
                      margin: 'md',
                      flex: 1,
                      align: 'center',
                      style: 'normal'
                    }
                  ]
                }
              ],
              flex: 1
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '最高溫度：',
                      color: '#8C8C8C',
                      size: 'sm',
                      wrap: true,
                      margin: 'none',
                      flex: 0
                    },
                    {
                      type: 'text',
                      text: '34℃',
                      color: '#000000',
                      size: 'sm',
                      wrap: true,
                      margin: 'md',
                      flex: 1,
                      align: 'center',
                      style: 'normal'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '最低溫度：',
                      color: '#8C8C8C',
                      size: 'sm',
                      wrap: true,
                      margin: 'none',
                      flex: 0
                    },
                    {
                      type: 'text',
                      text: '30℃',
                      color: '#000000',
                      size: 'sm',
                      wrap: true,
                      margin: 'md',
                      flex: 1,
                      align: 'center',
                      style: 'normal'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: '舒適度：',
                          color: '#8C8C8C',
                          size: 'sm',
                          wrap: true,
                          margin: 'none',
                          flex: 0,
                          weight: 'regular'
                        }
                      ],
                      width: '70px'
                    },
                    {
                      type: 'text',
                      text: '悶熱至易中暑',
                      color: '#000000',
                      size: 'sm',
                      wrap: true,
                      margin: 'md',
                      flex: 1,
                      align: 'center',
                      style: 'normal'
                    }
                  ]
                }
              ],
              flex: 1
            }
          ],
          spacing: 'md',
          paddingAll: '12px'
        },
        styles: {
          footer: {
            separator: false
          }
        }
      }
    ]
  }
}
