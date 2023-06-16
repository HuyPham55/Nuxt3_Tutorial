<script setup lang="js">
const {id} = useRoute().params
definePageMeta({
  layout: 'products',
})
const uri = "https://fakestoreapi.com/products/" + id

//Telling Nuxt that each fetch is different
const {data: product} = await useFetch(uri, { key: id })

</script>

<template>
  <div>
    <ProductDetail :product="product"/>
  </div>

</template>

<style scoped>

</style>