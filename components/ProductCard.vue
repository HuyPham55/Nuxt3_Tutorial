<script setup lang="ts">
const {product} = defineProps(['product'])
//Tailwind - truncate: turn overflow text into esclipses
</script>

<template>
  <li class="card text-center">
    <img :src="product.image" class="thumb" alt=""/>
    <p class="font-bold text-gray m-4 truncate">
      {{ product.title }}
    </p>
    <NuxtLink :to="{path: '/products/' + product.id}" class="">
      <p class="btn my-4">View details</p>
    </NuxtLink>
  </li>
</template>

<style scoped>

.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>