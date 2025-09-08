<script setup>
import { computed } from 'vue'

const props = defineProps({
  sizePx: Number,
})

const loaderStyle = computed(() => ({
  width: props.sizePx + 'px',
  height: props.sizePx + 'px',
  borderWidth: props.sizePx / 10 + 'px', // например, толщина рамки зависит от размера
}))
</script>

<template>
  <div class="loader" :style="loaderStyle"></div>
</template>
<style scoped>
.loader {
  border: solid #ccc; /* светло-серый фон */
  border-top-color: #888; /* темно-серый цвет верхнего сегмента */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 40px auto; /* центрирование по горизонтали и небольшое смещение сверху */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
