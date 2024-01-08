<script setup lang="ts">
import BasketHead from './components/BasketHead.vue'
import BasketCardItem from '@/components/Basket/components/BasketCardItem.vue'
import BasketFooter from '@/components/Basket/components/BasketFooter.vue'
import { inject } from 'vue'
import { BasketItemsKey, ChangeDrawerOpenKey } from '@/injection-keys'

const changeDrawerOpen = inject(ChangeDrawerOpenKey)
const basketItems = inject(BasketItemsKey)

const sum =
  basketItems?.reduce((prev, current) => {
    return (prev += current.price)
  }, 0) || 0
</script>

<template>
  <div class="bg-white w-80 h-full fixed right-0 top-0 z-20 p-8">
    <BasketHead :close="changeDrawerOpen" />
    <div class="flex flex-col h-full gap-4 pb-4">
      <div class="flex flex-col gap-4 mt-8 justify-start overflow-auto">
        <BasketCardItem
          v-for="item in basketItems"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :img-src="item.imageUrl"
        />
      </div>
      <BasketFooter :sum="sum" />
    </div>
  </div>
</template>