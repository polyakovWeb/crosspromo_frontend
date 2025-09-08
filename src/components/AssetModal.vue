<script setup>
import { inject } from 'vue'

const props = defineProps({
  assets: Object,
})

console.log(props)

const toggleModalOpened = inject('toggleModalOpened')
</script>

<template>
  <div class="fixed inset-0 bg-black opacity-70"></div>

  <div class="fixed inset-0 flex justify-center items-center p-5">
    <div
      class="bg-white p-5 pt-12 sm:pt-15 max-h-[90vh] max-w-lg w-full overflow-y-auto relative text-xs sm:text-sm"
    >
      <p class="text-center mb-4">{{ assets.title }}</p>
      <ul class="flex flex-col items-center gap-5">
        <li v-for="(assetsItem, index) in assets.data" :key="index">
          <img v-if="assetsItem.AdFormat === 'Image'" :src="assetsItem.Url" alt="Ad Image" />
          <video v-else-if="assetsItem.AdFormat === 'Video'" controls>
            <source :src="assetsItem.Url" type="video/mp4" />
          </video>
          <p class="text-slate-500">({{ assetsItem.FileSize / 1024 / 1024 }} Мб)</p>
        </li>
      </ul>
      <div class="flex justify-end">
        <button
          class="hover:cursor-pointer hover:opacity-80 active:opacity-100 uppercase bg-sky-100 p-3 py-2 rounded-2xl"
          @click="toggleModalOpened()"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
