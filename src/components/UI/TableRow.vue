<script setup>
import { platforms as platformsConst } from '@/constants'
import TableData from './TableData.vue'

const props = defineProps({
  assetsData: Object,
})

const { localizationCode, platforms } = props.assetsData

// поиск информации для размещения в столбцах по платформам
const findPlatformData = (currentPlatformName, allPlatformsData) => {
  const foundedPlatformData = allPlatformsData.find((item) => item.name === currentPlatformName) //элемент или undefined
  return foundedPlatformData
}
</script>

<template>
  <tr class="bg-white border-b-1">
    <td class="p-5">
      {{ localizationCode[0].toUpperCase() + localizationCode.slice(1) }}
    </td>
    <template v-for="(currentPlatformName, index) in platformsConst" :key="index">
      <TableData :platformAssets="findPlatformData(currentPlatformName, platforms)" />
    </template>
  </tr>
</template>
