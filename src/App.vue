<script setup>
import { onMounted, provide } from 'vue'
import AssetsTable from './components/AssetsTable.vue'
import { ref } from 'vue'
import axios from 'axios'
import formatAssets from './utils/formatAssets.service'
import ModalWindow from './components/ModalWindow.vue'

const assetsData = ref([])
const isModalOpened = ref(true)

const toggleModalOpened = () => (isModalOpened.value = !isModalOpened.value)

const getAllAssets = async () => {
  const { data } = await axios.get('http://localhost:5001/api/assets/getAssets') //в будущем добавить query params
  return data
}

onMounted(async () => {
  const data = await getAllAssets()
  assetsData.value = data.map((assetsItem) => formatAssets(assetsItem))
})

provide('toggleModalOpened', toggleModalOpened)
</script>

<template>
  <ModalWindow v-if="isModalOpened" />
  <div class="flex justify-center">
    <AssetsTable :assetsData />
  </div>
</template>

<style scoped></style>
