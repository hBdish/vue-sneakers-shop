<script setup lang="ts">
import type { CardProps } from './card-type'

const {
  title,
  isAdded = false,
  imgSnicker,
  isFavorite = false,
  price,
  onClickFavorite,
  onClickAdd
} = defineProps<CardProps>()
</script>

<template>
  <div
    class="relative transition bg-white border border-slate-100 rounded-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="Like"
      class="absolute top-0 left-0 p-4"
      @click="onClickFavorite"
    />
    <img :src="imgSnicker" alt="Snicker" />

    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }} rub</b>
      </div>
      <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus" />
    </div>
  </div>
</template>