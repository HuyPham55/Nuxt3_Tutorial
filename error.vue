<script setup>
defineProps(['error'])
const handleClearError = () => {
  clearError({redirect: '/'})
}
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card min-w-40">
    <h1 class="text-7xl my-7 font-bold">
      {{ error.statusCode }}
    </h1>
    <p class="text-xl my-7 message">
      {{ error.message }}
    </p>
    <button class="btn my-7" @click="handleClearError">
      Back to home
    </button>
  </div>
</template>

<style scoped>
.message {
  text-wrap: balance;
}
</style>