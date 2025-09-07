<script setup>
import { inject } from 'vue'

defineProps({
  assets: Array,
})
const TESTassets = [
  {
    AdType: 'Banner',
    AdFormat: 'Image',
    FileSize: 0,
    Url: 'https://dms-frames.pixie-creative.ru/resources-cp/Banner_320x50.png',
  },
]

const toggleModalOpened = inject('toggleModalOpened')
</script>

<template>
  <div
    class="absolute top-0 left-0 h-full w-full bg-black opacity-70"
    @click="toggleModalOpened()"
  ></div>

  <div class="absolute ml-auto mr-auto left-0 right-0 w-3/5 bg-white h-4/5"></div>
</template>
