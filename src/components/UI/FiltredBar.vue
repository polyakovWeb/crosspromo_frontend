<script setup>
import { filters } from '@/constants'
import { useDebouncedRef } from '@/utils/useDebounceRef'
import { reactive, ref, watch } from 'vue'

const selectedFilter = ref('')
// Кастомный реф для отложенного обновления переменной во избежания запроса на ввод каждого символа
const searchValue = useDebouncedRef('')

const queryParams = reactive({
  filterBy: selectedFilter,
  search: searchValue,
})

const emit = defineEmits(['getFiltredAssets'])

watch(queryParams, () => emit('getFiltredAssets', queryParams))
</script>

<template>
  <div class="text-xs sm:text-sm">
    <div class="flex flex-col items-center gap-1">
      <p class="text-slate-400">Фильтрация по:</p>
      <div class="flex gap-2">
        <div>
          <select
            v-model="selectedFilter"
            id="filterBy"
            class="border-1 border-slate-300 rounded-lg p-2 py-[9px] cursor-pointer"
          >
            <option disabled value="">Фильтрация...</option>
            <option
              v-for="(option, index) in filters"
              class="rounded-lg"
              :key="index"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <label for="search-field" class="border-1 border-slate-300 rounded-lg">
          <div class="relative">
            <img class="size-4 absolute left-2 top-2.5 z-0" src="/search.svg" alt="Search" />
          </div>
          <input
            v-model="searchValue"
            id="search-field"
            class="py-2.5 px-2 pl-8 flex-1"
            type="search"
            placeholder="Поиск..."
          />
        </label>
      </div>
    </div>
  </div>
</template>
