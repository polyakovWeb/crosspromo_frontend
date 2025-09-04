<script setup>
import { onMounted } from 'vue'
import AssetsTable from './components/AssetsTable.vue'
import { ref } from 'vue'
import axios from 'axios'

const assetsData = ref([])

const getAllAssets = async () => {
  const { data } = await axios.get('http://localhost:5001/api/assets/getAssets') //в будущем добавить query params
  return data
}

onMounted(async () => {
  assetsData.value = await getAllAssets()
})
</script>

<template>
  <AssetsTable />
</template>

<style scoped></style>
