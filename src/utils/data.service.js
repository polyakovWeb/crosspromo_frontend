import axios from 'axios'

export const formatAssets = (assetsObject) => {
  // Создаём структуру нового объекта
  const newAssetsObject = {
    localizationCode: assetsObject._id,
    // Проходим по каждой платформе в группе по локализации
    platforms: assetsObject.platforms.map((currentPlatform) => {
      // Задаём массив с материалами рекламы
      const newAdTypeObject = {
        Rewarded: { title: '', data: [] },
        Banner: { title: '', data: [] },
        Interstitial: { title: '', data: [] },
      }

      // Возможна ситуация, когда при группировке будет собран массив данных рекламы одной локализации и платформы, но для разных appId
      // Проходим по массиву таких объектов и собираем в единый ранее инициализированный массив
      currentPlatform.AdType.forEach((adObject) => {
        // Проходим по каждому типу рекламы и добавляем в массив
        Object.keys(adObject).forEach((adTypeKey) => {
          newAdTypeObject[adTypeKey].data = [
            ...newAdTypeObject[adTypeKey].data,
            ...(adObject[adTypeKey][1]?.CrosspromoData?.CrosspromoFiles || []),
          ]
          newAdTypeObject[adTypeKey].title = adObject[adTypeKey][1]?.CrosspromoData?.TextData.Title
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

export const getAllAssets = async (queryParam = {}) => {
  // { "filterBy": "StoreCode", "search": "rus" } => {StoreCode: "rus"}
  // { "filterBy": "AppId", "search": "examp-id" } => {AppId: "examp-id"}
  try {
    const params = {}

    if (queryParam.filterBy && queryParam.search) {
      params[queryParam.filterBy] = `${queryParam.search}`
    }

    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/assets/getAssets`, {
      params,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
