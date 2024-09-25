<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<template>
  <tiny-button @click="router.push('/HelloWorld')">TinyVue</tiny-button>
  <tiny-alert description="TinyVue"></tiny-alert>
</template>

<style scoped>
</style>
