<script setup lang="ts">
defineProps<{ sum: number; createOrder: (event: Event) => void }>()
</script>

<template>
  <div class="flex justify-between">
    <span>Total:</span>
    <b>{{ sum }} rub</b>
  </div>
  <button
    @click="createOrder"
    class="bg-lime-500 w-full rounded-xl py-4 mt-4 text-white cursor-pointer active:bg-lime-700 disabled:bg-lime-300 hover:bg-lime-600"
  >
    Order
  </button>
</template>
