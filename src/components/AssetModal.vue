<script setup>
import { inject } from 'vue'

const props = defineProps({
  assets: Array,
})

console.log(props)

const toggleModalOpened = inject('toggleModalOpened')
</script>

<template>
  <div class="fixed inset-0 bg-black opacity-70"></div>

  <div class="fixed inset-0 flex justify-center items-center p-5">
    <div class="bg-white p-5 pt-12 sm:pt-15 max-h-[90vh] max-w-lg w-full overflow-y-auto relative">
      <img
        src="/close.svg"
        alt="Close modal"
        class="size-8 sm:size-10 absolute right-2 top-2 hover:cursor-pointer hover:opacity-80 active:opacity-100"
        @click="toggleModalOpened()"
      />
      <ul class="flex flex-col items-center gap-5">
        <li v-for="(assetsItem, index) in assets" :key="index">
          <img v-if="assetsItem.AdFormat === 'Image'" :src="assetsItem.Url" alt="Ad Image" />
          <video v-else-if="assetsItem.AdFormat === 'Video'" controls>
            <source :src="assetsItem.Url" type="video/mp4" />
          </video>
        </li>
      </ul>
    </div>
  </div>
</template>
