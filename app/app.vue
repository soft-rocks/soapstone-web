<script setup>
  const color = useColorMode();
  onMounted(() => {
    color.preference = 'light';
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html,
  body,
  #__nuxt {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f9fafb;
  }
</style>
