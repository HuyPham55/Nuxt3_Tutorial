<script setup>
const {sayHello} = useUtils();
sayHello();

const {$hello} = useNuxtApp()
$hello("World from myPlugin")
</script>

<template>
  <h1 class="text-2xl">This is homepage</h1>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="flex justify-center">
      <img src="@/assets/images/logo.jpg" alt=""/>
    </div>
  </div>
</template>

<style scoped>
</style>