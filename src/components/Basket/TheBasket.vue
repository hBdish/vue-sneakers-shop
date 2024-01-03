<script setup lang="ts">
import BasketHead from './components/BasketHead.vue'
import BasketCardItem from '@/components/Basket/components/BasketCardItem.vue'
</script>

<template>
  <div class="bg-white w-80 h-full fixed right-0 top-0 z-20 p-8">
    <BasketHead />
    <BasketCardItem />
  </div>
</template>