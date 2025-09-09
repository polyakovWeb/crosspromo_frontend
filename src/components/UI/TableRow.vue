<script setup>
import { platforms as platformsConst } from '@/constants'
import TableData from './TableData.vue'

defineProps({
  assetsData: Object,
})

// поиск информации для размещения в столбцах по платформам
const findPlatformData = (currentPlatformName, allPlatformsData) => {
  const foundedPlatformData = allPlatformsData.find((item) => item.name === currentPlatformName) //элемент или undefined
  return foundedPlatformData
}
</script>

<template>
  <tr v-if="assetsData === null" class="bg-white border-b-1">
    <td class="p-5">-</td>
    <template v-for="(currentPlatformName, index) in platformsConst" :key="index">
      <TableData :platformAssets="[undefined, undefined]" />
    </template>
  </tr>

  <tr v-else class="bg-white border-b-1">
    <td class="p-5">
      {{ assetsData.localizationCode[0].toUpperCase() + assetsData.localizationCode.slice(1) }}
    </td>
    <template v-for="(currentPlatformName, index) in platformsConst" :key="index">
      <TableData :platformAssets="findPlatformData(currentPlatformName, assetsData.platforms)" />
    </template>
  </tr>
</template>
