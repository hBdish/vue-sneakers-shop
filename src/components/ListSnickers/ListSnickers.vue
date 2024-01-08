<script setup lang="ts">
import TheCard from './components/card/TheCard.vue'
import type { Sneaker } from '@/types/sneakers'
import snickersService from '@/services/api'

interface ListSnickersProps {
  sneakers: Sneaker[]
}

const { sneakers } = defineProps<ListSnickersProps>()

const onFavClick = (sneaker: Sneaker) => (event: MouseEvent) => {
  if (sneaker.isFavorite) {
    snickersService.deleteFavoriteSneakers(sneaker.id)
    sneaker.isFavorite = false
  } else {
    snickersService.postFavoriteSneakers(sneaker.id)
    sneaker.isFavorite = true
  }
}

const onAddClick = (event: Event) => {}
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-8">
    <TheCard
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :title="sneaker.title"
      :price="sneaker.price"
      :img-snicker="sneaker.imageUrl"
      :on-click-add="onAddClick"
      :on-click-favorite="onFavClick(sneaker)"
      :is-favorite="sneaker.isFavorite"
    />
  </div>
</template>