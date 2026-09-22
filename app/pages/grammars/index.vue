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

    <ul v-else class="border-muted m-0 list-none border-t p-0">
      <li v-for="note in notes" :key="note.id" class="border-muted border-b">
        <NuxtLink :to="`/grammars/${note.id}`" class="group block py-5">
          <p class="group-hover:text-primary m-0 text-lg transition-colors">
            {{ note.title }}
          </p>
          <p class="text-muted m-0 mt-1 text-[13px] leading-relaxed">
            {{ note.summary }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
