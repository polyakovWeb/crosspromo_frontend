function formatAssets(assetsObject) {
  // Создаём структуру нового объекта
  const newAssetsObject = {
    localizationCode: assetsObject._id,
    // Проходим по каждой платформе в группе по локализации
    platforms: assetsObject.platforms.map((currentPlatform) => {
      // Задаём массив с материалами рекламы
      const newAdTypeObject = {
        Rewarded: [],
        Banner: [],
        Interstitial: [],
      }

      // Возможна ситуация, когда при группировке будет собран массив данных рекламы одной локализации и платформы, но для разных appId
      // Проходим по массиву таких объектов и собираем в единый ранее инициализированный массив
      currentPlatform.AdType.forEach((adObject) => {
        // Проходим по каждому типу рекламы и добавляем в массив
        Object.keys(adObject).forEach((adTypeKey) => {
          newAdTypeObject[adTypeKey] = [
            ...newAdTypeObject[adTypeKey],
            adObject[adTypeKey][1]?.CrosspromoData?.CrosspromoFiles,
          ]
        })
      })

      const newPlatformObject = {
        ...currentPlatform,
        AdType: newAdTypeObject,
      }

      return newPlatformObject
    }),
  }

  return newAssetsObject
}

// Структура данных после форматирования
// const outputObj = {
//   localizationCode: '',
//   platforms: [
//     {
//       name: 'IOS',
//       AdType: {
//         Rewarded: [
//             {
//               "AdType": "Rewarded",
//               "AdFormat": "Video",
//               "FileSize": 0,
//               "Url": "https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4"
//             },
//             {
//               "AdType": "IconBig",
//               "AdFormat": "Image",
//               "FileSize": 0,
//               "Url": "https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png"
//             }
//           ],
//         Banner: [{...}, {...}],
//         Interstitial: [{...}],
//       },
//     },
//     {
//       name: 'Android',
//       AdType: {
//         Rewarded: [{...}],
//         Banner: [{...}, {...}],
//         Interstitial: [{...}],
//       },
//     }
//   ],
// }

export default formatAssets

// Исходный файл
// const example = {
//   _id: 'ru',
//   platforms: [
//     {
//       name: 'Android',
//       AdType: [
//         {
//           Rewarded: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_REWARDED_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_REWARDED_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Rewarded',
//                     AdFormat: 'Video',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4',
//                   },
//                   {
//                     AdType: 'IconBig',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png',
//                   },
//                 ],
//                 TextData: { Title: 'Демо-игра' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Banner: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_BANNER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_BANNER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Banner',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
//                   },
//                 ],
//                 TextData: { Title: 'Баннер демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Interstitial: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_INTER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_INTER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Interstitial',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Interstitial_1080x1920.png',
//                   },
//                 ],
//                 TextData: { Title: 'Интерстишл демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//         },
//         {
//           Rewarded: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_REWARDED_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_REWARDED_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Rewarded',
//                     AdFormat: 'Video',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4',
//                   },
//                   {
//                     AdType: 'IconBig',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png',
//                   },
//                 ],
//                 TextData: { Title: 'Демо-игра' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Banner: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_BANNER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_BANNER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Banner',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
//                   },
//                 ],
//                 TextData: { Title: 'Баннер демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Interstitial: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_INTER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_INTER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Interstitial',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Interstitial_1080x1920.png',
//                   },
//                 ],
//                 TextData: { Title: 'Интерстишл демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//         },
//         {
//           Rewarded: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_REWARDED_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_REWARDED_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Rewarded',
//                     AdFormat: 'Video',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4',
//                   },
//                   {
//                     AdType: 'IconBig',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png',
//                   },
//                 ],
//                 TextData: { Title: 'Демо-игра' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Banner: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_BANNER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_BANNER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Banner',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
//                   },
//                 ],
//                 TextData: { Title: 'Баннер демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Interstitial: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_INTER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_INTER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Interstitial',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Interstitial_1080x1920.png',
//                   },
//                 ],
//                 TextData: { Title: 'Интерстишл демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'IOS',
//       AdType: [
//         {
//           Rewarded: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_REWARDED_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_REWARDED_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Rewarded',
//                     AdFormat: 'Video',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4',
//                   },
//                   {
//                     AdType: 'IconBig',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png',
//                   },
//                 ],
//                 TextData: { Title: 'Демо-игра' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Banner: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_BANNER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_BANNER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Banner',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
//                   },
//                 ],
//                 TextData: { Title: 'Баннер демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Interstitial: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_INTER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_INTER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Interstitial',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Interstitial_1080x1920.png',
//                   },
//                 ],
//                 TextData: { Title: 'Интерстишл демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//         },
//         {
//           Rewarded: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_REWARDED_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_REWARDED_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Rewarded',
//                     AdFormat: 'Video',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Rewarded_ru.mp4',
//                   },
//                   {
//                     AdType: 'IconBig',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/IconBig.png',
//                   },
//                 ],
//                 TextData: { Title: 'Демо-игра' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Banner: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_BANNER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_BANNER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Banner',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
//                   },
//                 ],
//                 TextData: { Title: 'Баннер демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//           Interstitial: [
//             { Network: 'IronSourceMediation', ZoneId: 'REDACTED_INTER_1' },
//             {
//               Network: 'Crosspromo',
//               ZoneId: 'REDACTED_INTER_X',
//               CrosspromoData: {
//                 CrosspromoFiles: [
//                   {
//                     AdType: 'Interstitial',
//                     AdFormat: 'Image',
//                     FileSize: 0,
//                     Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Interstitial_1080x1920.png',
//                   },
//                 ],
//                 TextData: { Title: 'Интерстишл демо' },
//                 Url: 'https://play.google.com/store/apps/details?id=com.example.app',
//               },
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }
