<script setup>
import { onMounted, provide } from 'vue'
import AssetTable from './components/AssetTable.vue'
import { ref } from 'vue'
import axios from 'axios'
import formatAssets from './utils/formatAssets.service'
import AssetModal from './components/AssetModal.vue'
import LoadingAnimation from './components/LoadingAnimation.vue'

const assetsData = ref([])
const isLoading = ref(true)
const isModalOpened = ref(false)
const modalWindowData = ref([])

const toggleModalOpened = (modalData) => {
  if (isModalOpened.value) {
    modalWindowData.value = []
  } else {
    modalWindowData.value = modalData
  }
  isModalOpened.value = !isModalOpened.value
}

const getAllAssets = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/assets/getAssets`) //в будущем добавить query params
  return data
}

onMounted(async () => {
  const data = await getAllAssets()
  assetsData.value = data.map((assetsItem) => formatAssets(assetsItem))
  isLoading.value = false
})

provide('toggleModalOpened', toggleModalOpened)
</script>

<template>
  <AssetModal :assets="modalWindowData" v-if="isModalOpened" />
  <div class="h-full flex justify-center items-center">
    <LoadingAnimation v-if="isLoading" :sizePx="60" />
    <AssetTable v-else :assetsData class="overflow-y-auto" />
  </div>
</template>

<style scoped></style>
