<script setup>
import { reactive } from 'vue'
const params = reactive({
  width: 120,
  height: 64,
  content: ['Cheri', '想下班...'],
  font: {
    color: '#ccc',
    fontSize: 25
  },
  gap: [100, 100],
  offset: [20, 20],
  rotate: -25,
  zIndex: 9,
  customClass: 'test',
  interlaced: true
})
</script>

<template>
  <tiny-watermark v-bind="params">
    <div class="container">
      <router-view />
    </div>
  </tiny-watermark>
</template>

<style scoped>
.container {
  min-width: 100%;
  min-height: 100%;
  height: 100%;
}
</style>
