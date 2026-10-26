<script setup lang="ts">
/**
 * The whole dictation screen, shared by every practice page: the run, the CDN loading
 * and its failover (usePracticeRun), the finished screen and the toolbar counter. The
 * counter shows the sentence being asked among the set: done ones plus this one.
 */
const props = defineProps<{
  runId: string;
  sentences: string[];
  trackTitle?: string;
  /** Where the finished screen links back to, and its label key. */
  backTo: string;
  backLabel: string;
}>();

const { t } = useI18n();

const { practice, sentence, complete } = await usePracticeRun(
  () => props.runId,
  () => props.sentences,
  () => props.trackTitle ?? props.runId,
);
</script>

<template>
  <div v-if="practice.finished">
    <p class="m-0 mb-6 text-lg">
      {{ t('practice.done', { correct: practice.answered, total: practice.order.length }) }}
    </p>
    <div class="flex flex-wrap gap-3">
      <UButton @click="practice.restart()">{{ t('practice.restart') }}</UButton>
      <UButton :to="backTo" variant="outline">{{ t(backLabel) }}</UButton>
    </div>
  </div>

  <SentencePractice
    v-else-if="sentence"
    v-model:complete="complete"
    :sentence="sentence"
    :track-title="trackTitle"
    @answered="practice.next()"
  >
    <template #toolbar>
      <span class="text-dimmed shrink-0 text-xs tabular-nums">
        {{ practice.answered + 1 }} / {{ practice.order.length }}
      </span>
    </template>
  </SentencePractice>

  <LoadingState v-else />
</template>
