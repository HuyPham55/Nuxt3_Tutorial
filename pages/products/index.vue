<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";

definePageMeta({
  layout: 'products',
})
const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <div>
    <h1 class="text-2xl">This is products page</h1>
    <ul class="grid grid-cols-4 gap-5">
      <ProductCard v-for="product in products" :product="product" :key="product.id"/>
    </ul>
  </div>
</template>

<style scoped>

</style>