<script setup lang="ts">
import notes from '~/content/grammar/index.json';

const { t } = useI18n();

const practice = usePracticeStore();

// Titles are looked up now, in the current language. The title saved with a run was
// taken when it opened, which can be before the language setting applied.
const titleOf = (runId: string, saved: string) =>
  runId === 'dragon-english-basic-100'
    ? t('home.dragonEnglish')
    : (notes.find((note) => note.id === runId)?.title ?? saved);

useSeoMeta({
  title: 'Practice',
});
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">{{ t('practices.title') }}</h1>

    <!-- The records live in localStorage, so the list exists only in the browser -->
    <ClientOnly>
      <p v-if="!practice.summaries.length" class="text-muted m-0">{{ t('practices.empty') }}</p>

      <ul v-else class="m-0 list-none p-0">
        <li v-for="item in practice.summaries" :key="item.runId">
          <NuxtLink :to="item.path" class="list-row hover:text-primary flex items-start gap-6 pr-4">
            <span class="min-w-0 flex-1">
              <span class="block text-lg">{{ titleOf(item.runId, item.title) }}</span>
              <span class="text-muted mt-1 block">
                {{
                  item.finished
                    ? t('practices.finished')
                    : t('practices.progress', { done: item.done, total: item.total })
                }}
              </span>
            </span>
            <span class="text-muted shrink-0 text-lg">
              {{ t('practices.completions', { count: item.completions }) }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </ClientOnly>
  </div>
</template>
