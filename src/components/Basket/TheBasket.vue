<script setup lang="ts">
import BasketHead from './components/BasketHead.vue'
import BasketCardItem from '@/components/Basket/components/BasketCardItem.vue'
import BasketFooter from '@/components/Basket/components/BasketFooter.vue'
import { inject } from 'vue'
import {
  AddToBasketKey,
  BasketItemsKey,
  BasketItemsTotalKey,
  ChangeDrawerOpenKey
} from '@/injection-keys'
import snickersService from '@/services/api'

const changeDrawerOpen = inject(ChangeDrawerOpenKey)
const addToBasket = inject(AddToBasketKey)
const basketItems = inject(BasketItemsKey)
const total = inject(BasketItemsTotalKey)

const createOrder = async (event: Event) => {
  if (basketItems === undefined || total === undefined) return
  if (basketItems.value?.length > 0) {
    await snickersService.createOrder(basketItems.value, total.value, () => {
      basketItems.value = []
    })
  }
}
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
          :delete-from-basket="addToBasket?.(item)"
        />
      </div>
      <BasketFooter :create-order="createOrder" :sum="total || 0" />
    </div>
  </div>
</template>