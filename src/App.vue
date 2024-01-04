<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ListSnickers from '@/components/ListSnickers/ListSnickers.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { Sneaker } from '@/types/sneakers'

let sneakers = ref<Sneaker[]>([])

onMounted(async () => {
  try {
    const { data } = await axios.get<Sneaker[]>('http://localhost:1234/items')
    sneakers.value = data
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <!--  <TheDrawer>-->
  <!--    <template v-slot:Basket>-->
  <!--      <TheBasket />-->
  <!--    </template>-->
  <!--  </TheDrawer>-->
  <div class="m-auto w-4/5 rounded-xl shadow-xl mt-8 bg-white">
    <TheHeader />
    <div class="flex justify-between items-center pt-8 pr-8 pl-8">
      <div class="flex gap-4">
        <select
          class="py-2 text-3xl fixed font-bold border border-transparent hover:border-gray-200 rounded-md outline-none"
        >
          <option>All Snickers</option>
          <option>Name</option>
          <option>Price</option>
        </select>
      </div>

      <div class="relative">
        <img src="/search.svg" alt="search" class="absolute left-2 top-3.5" />
        <input
          placeholder="search"
          class="border border-gray-200 rounded-md py-2 pl-8 pr-4 outline-none focus:border-gray-400"
        />
      </div>
    </div>

    <ListSnickers :sneakers="sneakers" />
  </div>
</template>

<style scoped></style>