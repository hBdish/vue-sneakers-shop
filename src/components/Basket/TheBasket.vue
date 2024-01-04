<script setup lang="ts">
import BasketHead from './components/BasketHead.vue'
import BasketCardItem from '@/components/Basket/components/BasketCardItem.vue'
import BasketFooter from '@/components/Basket/components/BasketFooter.vue'
</script>

<template>
  <div class="bg-white w-80 h-full fixed right-0 top-0 z-20 p-8">
    <BasketHead />
    <div class="flex flex-col h-full gap-4 pb-4">
      <div class="flex flex-col gap-4 mt-8 justify-start overflow-auto">
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
        <BasketCardItem />
      </div>
      <BasketFooter />
    </div>
  </div>
</template>