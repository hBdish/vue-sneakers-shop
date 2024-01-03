<template>
  <header class="flex justify-between border-b border-slate-300 px-16 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Snickers</h2>
        <p class="text-slate-600">best shop</p>
      </div>
    </div>

    <ul class="flex items-center gap-4 text-slate-600">
      <li class="flex items-center gap-1 cursor-pointer hover:text-black hover:font-bold">
        <img src="/cart.svg" alt="Cart" />
        <span>1200 rub</span>
      </li>
      <li class="flex items-center gap-1 cursor-pointer hover:text-black hover:font-bold">
        <img src="/heart.svg" alt="Heart" />
        <span>favorites</span>
      </li>
    </ul>
  </header>
</template>
<script setup lang="ts"></script>
