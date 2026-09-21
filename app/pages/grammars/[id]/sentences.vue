<script setup lang="ts">
import notes from '~/content/grammar/index.json';
import type { Sentence } from '~/types/sentence';

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));
const note = computed(() => notes.find((entry) => entry.id === id.value));

const practice = usePracticeStore();
const complete = ref(false);

// Entering the practice always starts a fresh run, in a new random order
onMounted(() => practice.start(id.value, note.value?.sentences ?? []));

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

watch(complete, (done) => {
  if (done) practice.markCorrect(current.value);
});

const next = () => {
  practice.next();
};

useSeoMeta({
  title: () => `${note.value?.title ?? 'Grammar'} · Practice`,
});
</script>

<template>
  <div>
    <ClientOnly>
      <p v-if="!note" class="text-dimmed m-0 text-[13px]">{{ t('grammar.notFound') }}</p>

      <div v-else-if="practice.finished">
        <p class="m-0 mb-6 text-lg">
          {{
            practice.answered
              ? t('practice.done', { count: practice.answered })
              : t('practice.unavailable')
          }}
        </p>
        <UButton :to="`/grammars/${id}`" variant="outline">{{ t('practice.backToNote') }}</UButton>
      </div>

      <SentencePractice v-else-if="sentence" v-model:complete="complete" :sentence="sentence">
        <template #toolbar>
          <span class="text-dimmed font-ui text-xs">
            {{ practice.position + 1 }} / {{ practice.order.length }}
          </span>

          <UButton
            trailing-icon="i-lucide-arrow-right"
            :variant="complete ? 'solid' : 'outline'"
            size="md"
            @click="next"
          >
            {{ t('practice.next') }}
          </UButton>
        </template>
      </SentencePractice>

      <p v-else class="text-dimmed m-0 text-[13px]">{{ t('sentence.loading') }}</p>

      <template #fallback>
        <p class="text-dimmed m-0 text-[13px]">{{ t('sentence.loading') }}</p>
      </template>
    </ClientOnly>
  </div>
</template>
