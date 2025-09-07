<script setup>
import { platforms } from '@/constants'
import TableRow from './UI/TableRow.vue'

defineProps({
  assetsData: Array,
})
</script>

<template>
  <div class="bg-sky-100 rounded-2xl p-2.5 pb-5">
    <h1 class="text-center mb-7 sm:text-xl">Crosspromo Assets</h1>

    <table class="w-full">
      <thead class="border-b-1 text-xs text-center sm:text-base">
        <tr>
          <th>Localization</th>
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
