<style>
  .prose h3[id].text-highlighted {
    color: #111827 !important;
  }
  .dark .prose h3[id].text-highlighted {
    color: #ffffff !important;
  }
  .prose .text-muted,
  .prose .text-muted .iconify {
    color: oklch(0.556 0.003 264.542) !important;
  }
  .dark .prose .text-muted,
  .dark .prose .text-muted .iconify {
    color: oklch(0.967 0.003 264.542) !important;
  }
  .prose .bg-elevated {
    background-color: oklch(0.967 0.003 264.542) !important;
  }
  .dark .prose .bg-elevated {
    background-color: oklch(0.25 0.014 264.176) !important;
  }
</style>

<script setup lang="ts">
  interface DetailItem {
    title: string;
    content: string;
  }

  const props = defineProps<{
    open: boolean;
    items: DetailItem[];
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const currentIndex = ref(0);
  const contentRef = ref<HTMLElement | null>(null);

  const scrollToTop = () => {
    contentRef.value?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentItem = computed(() => props.items[currentIndex.value] || null);
  const hasNext = computed(() => currentIndex.value < props.items.length - 1);
  const hasPrev = computed(() => currentIndex.value > 0);

  watch(
    () => props.open,
    (val) => {
      if (val) currentIndex.value = 0;
    },
  );

  const next = () => {
    if (hasNext.value) {
      currentIndex.value++;
      scrollToTop();
    }
  };

  const prev = () => {
    if (hasPrev.value) {
      currentIndex.value--;
      scrollToTop();
    }
  };
</script>

<template>
  <template v-if="open && currentItem">
    <div
      class="fixed inset-y-0 right-0 z-100 flex w-96 flex-col border-l border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >
      <div
        class="flex items-center justify-between border-b-2 border-gray-200 p-4 dark:border-gray-700"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ currentItem.title }}</h2>
        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          class="text-gray-900 dark:text-white"
          @click="emit('close')"
        />
      </div>
      <div
        ref="contentRef"
        class="prose prose-sm dark:prose-invert max-w-none flex-1 overflow-y-auto p-4 text-gray-900 dark:text-white"
      >
        <MDC :value="currentItem.content" />
      </div>
      <div
        v-if="items.length > 1"
        class="flex items-center justify-center gap-5 border-t border-gray-200 p-4 dark:border-gray-700"
      >
        <UButton
          icon="i-heroicons-chevron-left"
          color="neutral"
          variant="ghost"
          :disabled="!hasPrev"
          class="disabled:opacity-50"
          @click="prev"
        />
        <span class="text-sm text-gray-500 dark:text-gray-400"
          >{{ currentIndex + 1 }} / {{ items.length }}</span
        >
        <UButton
          icon="i-heroicons-chevron-right"
          color="neutral"
          variant="ghost"
          :disabled="!hasNext"
          class="disabled:opacity-50"
          @click="next"
        />
      </div>
    </div>
  </template>
</template>
