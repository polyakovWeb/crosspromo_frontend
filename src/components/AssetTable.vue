<script setup>
import { platforms } from '@/constants'
import TableRow from './UI/TableRow.vue'
import FiltredBar from './UI/FiltredBar.vue'

defineProps({
  assetsData: Array,
})

const emit = defineEmits(['getFiltredAssets'])
</script>

<template>
  <div class="bg-sky-100 rounded-2xl p-2.5 pb-5">
    <div class="flex flex-col gap-2">
      <h1 class="sm:text-xl text-center">Crosspromo Assets</h1>
      <FiltredBar @get-filtred-assets="(params) => emit('getFiltredAssets', params)" class="mb-4" />
    </div>
    <table class="w-full">
      <thead class="border-b-1 text-xs text-center sm:text-base">
        <tr>
          <th class="sm:pr-8">Localization</th>
          <th>{{ platforms[0] }}</th>
          <th>{{ platforms[1] }}</th>
        </tr>
      </thead>
      <tbody class="text-xs sm:text-sm">
        <TableRow
          v-for="(curAssetsData, index) in assetsData"
          :assetsData="curAssetsData"
          :key="index"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tbody tr:nth-child(even) {
  background-color: transparent;
}
</style>
