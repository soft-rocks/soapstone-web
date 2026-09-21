<script setup lang="ts">
const { setLocale } = useI18n();
const head = useLocaleHead();
const resolvedLocale = useResolvedLocale();

// <html lang> carries the BCP-47 tag of the active locale, not the internal code
useHead(head);

// Applied after hydration: the prerendered HTML is always in the default locale,
// so switching any earlier would mismatch.
onMounted(() => {
  watchEffect(() => setLocale(resolvedLocale.value));
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
