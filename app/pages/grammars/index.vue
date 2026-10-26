<script setup lang="ts">
import notes from '~/content/grammar/index.json';

const { t } = useI18n();

useSeoMeta({
  title: 'Grammar',
});
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">{{ t('grammar.title') }}</h1>

    <p v-if="!notes.length" class="text-dimmed m-0 text-[13px]">{{ t('grammar.empty') }}</p>

    <ul v-else class="m-0 list-none p-0">
      <li v-for="note in notes" :key="note.id">
        <NuxtLink :to="`/grammars/${note.id}`" class="list-row hover:text-primary text-lg">
          {{ note.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
