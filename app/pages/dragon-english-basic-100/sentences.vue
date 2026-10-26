<script setup lang="ts">
import entries from '~/content/dragon-english-basic-100/index.json';
import type { Sentence } from '~/types/sentence';

const { t } = useI18n();

const practice = usePracticeStore();
const complete = ref(false);

// Entering the practice always starts a fresh run, in a new random order
onMounted(() =>
  practice.start(
    'dragon-english-basic-100',
    entries.map((entry) => entry.sentence),
  ),
);

const current = computed(() => practice.current);

// Sentences live on the CDN under the hash of their own text
const { data: sentence, error } = await useAsyncData<Sentence | null>(
  () => `practice:${current.value}`,
  async () => {
    if (!current.value) return null;
    return $fetch<Sentence>(sentenceUrl(await sentenceHash(current.value)));
  },
  { server: false, watch: [current] },
);

// A sentence that has not been published yet is skipped rather than shown as an error
watch(error, (failed) => {
  if (!failed || !current.value) return;
  practice.markMissing(current.value);
  practice.next();
});

watch(current, () => (complete.value = false));

// A correct answer is recorded at once; the run moves on after the clear read-back
watch(complete, (done) => {
  if (done) practice.markCorrect(current.value);
});

useSeoMeta({
  title: 'Dragon English Basic English 100 · Practice',
});
</script>

<template>
  <div>
    <ClientOnly>
      <div v-if="practice.finished">
        <p class="m-0 mb-6 text-lg">
          {{ t('practice.done', { correct: practice.answered, total: practice.order.length }) }}
        </p>
        <UButton to="/dragon-english-basic-100" variant="outline">
          {{ t('practice.backToList') }}
        </UButton>
      </div>

      <SentencePractice
        v-else-if="sentence"
        v-model:complete="complete"
        :sentence="sentence"
        :track-title="t('home.dragonEnglish')"
        @answered="practice.next()"
      >
        <template #toolbar>
          <span class="text-dimmed shrink-0 text-xs tabular-nums">
            {{ practice.position + 1 }} / {{ practice.order.length }}
          </span>
        </template>
      </SentencePractice>

      <LoadingState v-else />

      <template #fallback>
        <LoadingState />
      </template>
    </ClientOnly>
  </div>
</template>
