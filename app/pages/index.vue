<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: 'English Notes',
});

// A category without a page yet renders as plain text, not a link
const categories = [
  { label: 'home.grammar', to: '/english-grammar-profile' },
  { label: 'home.dragonEnglish', to: '/dragon-english-basic-100' },
];
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">English Notes</h1>

    <ul class="m-0 list-none p-0">
      <li v-for="category in categories" :key="category.label">
        <NuxtLink v-if="category.to" :to="category.to" class="list-row hover:text-primary text-lg">
          {{ t(category.label) }}
        </NuxtLink>
        <p v-else class="list-row m-0 text-lg">{{ t(category.label) }}</p>
      </li>
    </ul>
  </div>
</template>
