<script setup lang="ts">
import TheCard from './components/card/TheCard.vue'

const onAddClick = () => {
  alert('click')
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-8">
    <TheCard title="Nike" img-snicker="/sneakers/sneakers-1.jpg" :on-click-add="onAddClick" />
    <TheCard />
    <TheCard />
    <TheCard />
    <TheCard />
    <TheCard />
    <TheCard />
    <TheCard />
  </div>
</template>