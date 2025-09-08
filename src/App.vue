<script setup>
import { onMounted, provide } from 'vue'
import AssetTable from './components/AssetTable.vue'
import { ref } from 'vue'
import { getAllAssets, formatAssets } from './utils/data.service'
import AssetModal from './components/AssetModal.vue'
import LoadingAnimation from './components/UI/LoadingAnimation.vue'

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

// const queryParams = { filterBy: 'AppId', search: 'example-app' }
const getFiltredAssets = async (queryParams) => await getAllAssets(queryParams)

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
    <AssetTable v-else :assetsData @get-filtred-assets="getFiltredAssets" class="overflow-y-auto" />
  </div>
</template>

<style scoped></style>
