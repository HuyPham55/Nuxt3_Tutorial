<script setup lang="ts">
const {data: page} = await useFetch("/api/about", {
  method: 'post',
  body: {
    message: 'Hello from client'
  },
});

const {data} = await useFetch("/api?page=about");

const {data: dynamicRoute} = await useFetch("/api/currency/GBP");

</script>

<template>
  <h1 class="text-2xl">{{page.title}}</h1>
  <div>
    <p>
      {{ page.content }}
    </p>

  </div>
  <h1 class="text-2xl">{{data.title}}</h1>
  <p>
    {{ data.message }}
  </p>
  <h1 class="text-2xl">Client message</h1>
  <p>
    {{ page["clientMessage"] }}
  </p>
  <h1 class="text-2xl">Dynamic route</h1>
  <p>
    {{ dynamicRoute }}
  </p>

</template>

<style scoped>

</style>