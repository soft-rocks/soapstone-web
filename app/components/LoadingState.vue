<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex min-h-[60vh] flex-col items-center justify-center gap-4">
    <img src="/icon.svg" alt="" class="spinner size-12" />
    <p class="text-dimmed font-ui m-0 text-xs">{{ t('sentence.loading') }}</p>
  </div>
</template>

<style scoped>
.spinner {
  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }
}
</style>
