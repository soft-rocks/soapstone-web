<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: 'English Notes',
});

// A category without a page yet renders as plain text, not a link
const categories = [
  { label: 'home.grammar', to: '/grammars' },
  { label: 'home.dragonEnglish', to: '/dragon-english-basic-100' },
];
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">English Notes</h1>

    <ul class="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
      <li v-for="category in categories" :key="category.label">
        <NuxtLink v-if="category.to" :to="category.to" class="category-card">
          {{ t(category.label) }}
          <UIcon name="i-lucide-arrow-right" class="category-card-arrow size-5 shrink-0" />
        </NuxtLink>
        <p v-else class="category-card m-0">{{ t(category.label) }}</p>
      </li>
    </ul>
  </div>
</template>
