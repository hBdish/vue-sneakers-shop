<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ListSnickers from '@/components/ListSnickers/ListSnickers.vue'
</script>

<template>
  <div class="m-auto w-4/5 rounded-xl shadow-xl mt-8 bg-white">
    <TheHeader />
    <h2 class="text-3xl font-bold flex mt-8 ml-8">All Snickers</h2>
    <ListSnickers />
  </div>
</template>

<style scoped></style>