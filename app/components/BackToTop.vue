<script setup lang="ts">
const { t } = useI18n();

// Shows once the reader has scrolled past the first screen
const scrolledDown = ref(false);
const onScroll = () => {
  scrolledDown.value = window.scrollY > window.innerHeight;
};
onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const backToTop = () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
};
</script>

<template>
  <button
    v-show="scrolledDown"
    type="button"
    class="icon-button fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 size-12 sm:right-8 sm:bottom-8"
    :aria-label="t('grammar.backToTop')"
    :title="t('grammar.backToTop')"
    @click="backToTop"
  >
    <UIcon name="i-lucide-arrow-up" class="size-5" />
  </button>
</template>
