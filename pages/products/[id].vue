<script setup lang="ts">
const {id} = useRoute().params
definePageMeta({
  layout: 'products',
})
const uri = "https://fakestoreapi.com/products/" + id

//Telling Nuxt that each fetch is different
const {data: product} = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}
</script>

<template>
  <div>
    <ProductDetail :product="product"/>
  </div>

</template>

<style scoped>

</style>