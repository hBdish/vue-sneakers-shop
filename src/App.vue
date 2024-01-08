<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ListSnickers from '@/components/ListSnickers/ListSnickers.vue'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import type { Sneaker } from '@/types/sneakers'
import { Sort } from '@/types/sort'
import snickersService from './services/api'
import TheDrawer from '@/components/Drawer/TheDrawer.vue'
import TheBasket from '@/components/Basket/TheBasket.vue'
import { AddToBasketKey, BasketItemsKey, ChangeDrawerOpenKey } from '@/injection-keys'

const sneakers = ref<Sneaker[]>([])
const basketItems = ref<Sneaker[]>([])
const favoriteSneakers = ref<Sneaker[]>([])
const drawerIsOpen = ref(false)

const filters = reactive<{
  sortBy: Sort
  searchQuery: string
}>({
  sortBy: Sort.All,
  searchQuery: ''
})

watch(basketItems.value, () => {
  console.log(basketItems.value)
})

provide(ChangeDrawerOpenKey, changeDrawerOpen)
provide(AddToBasketKey, addToBasket)
provide(BasketItemsKey, basketItems.value)

function changeDrawerOpen(event: Event) {
  drawerIsOpen.value = !drawerIsOpen.value
}

function addToBasket(sneaker: Sneaker) {
  return (event: Event) => {
    if (sneaker.isAdded) {
      basketItems.value.splice(basketItems.value.indexOf(sneaker), 1)
      sneaker.isAdded = false
    } else {
      basketItems.value.push(sneaker)
      sneaker.isAdded = true
    }
    console.log(sneaker)
  }
}

const addFavFlag = () => {
  sneakers.value = sneakers.value.map((el) => {
    const favorite = favoriteSneakers.value.find((favorite) => favorite.id === el.id)

    if (favorite)
      return {
        ...el,
        isFavorite: true
      }

    return el
  })
}

onMounted(async () => {
  sneakers.value = await snickersService.getSneakers()

  favoriteSneakers.value = await snickersService.getFavoriteSneakers()
  addFavFlag()
})

watch(filters, async () => {
  sneakers.value = await snickersService.getSneakers({
    sortBy: filters.sortBy,
    search: filters.searchQuery
  })
  addFavFlag()
})

const onChangeSelect = (event: Event) => {
  filters.sortBy = (event.target as HTMLSelectElement).value as Sort
}

const onChangeSearch = (event: Event) => {
  filters.searchQuery = (event.target as HTMLInputElement).value
}
</script>

<template>
  <TheDrawer v-if="drawerIsOpen">
    <template v-slot:Basket>
      <TheBasket />
    </template>
  </TheDrawer>
  <div class="m-auto w-4/5 rounded-xl shadow-xl mt-8 bg-white">
    <TheHeader />
    <div class="flex justify-between items-center pt-8 pr-8 pl-8">
      <div class="flex gap-4">
        <select
          @change="onChangeSelect"
          class="py-2 text-3xl font-bold border border-transparent hover:border-gray-200 rounded-md outline-none"
        >
          <option :value="Sort.All">All Snickers</option>
          <option :value="Sort.TITLE">Name</option>
          <option :value="Sort.PRICE">Price</option>
        </select>
      </div>

      <div class="relative">
        <img src="/search.svg" alt="search" class="absolute left-2 top-3.5" />
        <input
          @input="onChangeSearch"
          placeholder="search"
          class="border border-gray-200 rounded-md py-2 pl-8 pr-4 outline-none focus:border-gray-400"
        />
      </div>
    </div>

    <ListSnickers :sneakers="sneakers" />
  </div>
</template>

<style scoped></style>