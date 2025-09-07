<script setup>
import { inject } from 'vue'

defineProps({
  platformAssets: Object, // {AdType: {...}, name: ""}
})

const totalFileSize = (adTypeArray) => {
  const totalFileSize = adTypeArray.reduce(
    (totalSize, nextAdTypeItem) => (totalSize += nextAdTypeItem.FileSize),
    0,
  )
  return totalFileSize / 1024 / 1024
}

const toggleModalOpened = inject('toggleModalOpened')
const assetsOnClickHandler = (platformAssets, adTypeName) => {
  toggleModalOpened(platformAssets.AdType[adTypeName][0])
}
</script>

<template>
  <td v-if="!platformAssets?.AdType" class="text-center" title="Материалы отсутствуют">-</td>
  <td v-else class="p-2">
    <ul class="flex flex-wrap justify-center items-center gap-0.5">
      <li v-for="(adTypeName, index) in Object.keys(platformAssets.AdType)" :key="index">
        <p class="text-slate-500">
          <span
            class="text-cyan-600 underline hover:cursor-pointer active:text-cyan-900"
            @click="assetsOnClickHandler(platformAssets, adTypeName)"
            >{{ adTypeName }}</span
          >
          {{ totalFileSize(platformAssets.AdType[adTypeName][0]) }} Мб
        </p>
      </li>
    </ul>
  </td>
</template>
