<script setup lang="ts">

</script>

<template>
  <header class="shadow bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">
        <h1>My Shop</h1>
      </NuxtLink>
      <ul class="header__navigation">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products" class="btn">Products</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header__navigation {
  display: flex;
  list-style: none;
  margin: 0;
  gap: 1rem;
  padding: 0;

  li {
    margin-left: 1rem;
    a {
      text-decoration: none;
      &:hover {
        color: #12b488;
      }
    }
  }
}

.router-link-exact-active {
  color: #12b488;
}
</style>