<script setup lang="ts">
import TheCard from './components/card/TheCard.vue'
import type { Sneaker } from '@/types/sneakers'
import snickersService from '@/services/api'
import { inject } from 'vue'
import { AddToBasketKey } from '@/injection-keys'

interface ListSnickersProps {
  sneakers: Sneaker[]
}

const { sneakers } = defineProps<ListSnickersProps>()

const addToBasket = inject(AddToBasketKey)

const onFavClick = (sneaker: Sneaker) => (event: MouseEvent) => {
  if (sneaker.isFavorite) {
    snickersService.deleteFavoriteSneakers(sneaker.id, () => (sneaker.isFavorite = false))
  } else {
    snickersService.postFavoriteSneakers(sneaker.id, () => (sneaker.isFavorite = true))
  }
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-8">
    <TheCard
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :title="sneaker.title"
      :price="sneaker.price"
      :img-snicker="sneaker.imageUrl"
      :on-click-add="addToBasket?.(sneaker)"
      :on-click-favorite="onFavClick(sneaker)"
      :is-favorite="sneaker.isFavorite"
      :is-added="sneaker.isAdded"
    />
  </div>
</template>