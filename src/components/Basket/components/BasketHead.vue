<script setup lang="ts">
defineProps<{
  close: ((event: Event) => void) | undefined
}>()
</script>

<template>
  <div class="flex items-center gap-4">
    <img
      @click="close"
      src="/arrow-next.svg"
      alt="arrow"
      class="cursor-pointer opacity-30 transition hover:opacity-100 hover:translate-x-1"
    />
    <h2 class="text-2xl font-bold">Basket</h2>
  </div>
</template>
