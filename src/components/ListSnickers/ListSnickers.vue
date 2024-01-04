<script setup lang="ts">
import TheCard from './components/card/TheCard.vue'
import type { Sneaker } from '@/types/sneakers'

interface ListSnickersProps {
  sneakers: Sneaker[]
}

const { sneakers } = defineProps<ListSnickersProps>()

const onAddClick = () => {}
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
      :on-click-favorite="onAddClick"
    />
  </div>
</template>