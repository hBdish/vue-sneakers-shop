<script setup lang="ts">
interface BasketIemProps {
  title: string
  price: number
  imgSrc: string
}

const { title, price, imgSrc } = defineProps<BasketIemProps>()
</script>

<template>
  <div class="w-full gap-4 items-center flex border border-slate-200 p-4 rounded-xl">
    <img :src="imgSrc" alt="sneaker" class="w-16 h-16" />

    <div class="flex flex-col">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b>{{ price }} rub</b>
        <img
          src="/close.svg"
          alt="Close"
          class="opacity-30 transition cursor-pointer hover:opacity-100"
        />
      </div>
    </div>
  </div>
</template>
