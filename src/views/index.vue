<script setup>
import TouchGrassButton from '@/components/buttons/TouchGrassButton.vue'
import DeleteButtonAnimation from '../components/buttons/DeleteButtonAnimation.vue';
import PayButton from '../components/buttons/PayButton.vue';
import GalaxyButton from '../components/buttons/GalaxyButton.vue';
import CheckSwitch from '../components/buttons/CheckSwitch.vue';
</script>

<template>
  <tiny-layout :cols="24">
    <tiny-col :span="6"><TouchGrassButton></TouchGrassButton></tiny-col>
    <tiny-col :span="6"><DeleteButtonAnimation></DeleteButtonAnimation></tiny-col>
    <tiny-col :span="6"><PayButton></PayButton></tiny-col>
    <tiny-col :span="6"><GalaxyButton></GalaxyButton></tiny-col>
    <tiny-col :span="6"><CheckSwitch></CheckSwitch></tiny-col>
  </tiny-layout>
</template>

<style scoped>
</style>
