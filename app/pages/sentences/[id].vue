<script setup lang="ts">
import type { Sentence } from '~/types/sentence';

definePageMeta({ layout: 'sentence' });

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));

// Client-only: the CDN is fetched in the browser, this route is never prerendered
const {
  data: sentence,
  status,
  error,
} = await useAsyncData<Sentence>(
  () => `sentence:${id.value}`,
  () => fetchCdn<Sentence>(sentenceUrl(id.value)),
  { server: false, watch: [id] },
);

// A sentence that is not on the CDN shows the error; a CDN that does not answer sends the
// reader back to the home page
watch(error, (failed) => {
  if (isCdnUnreachable(failed)) navigateTo('/');
});

useSeoMeta({
  title: () => sentence.value?.original ?? 'Sentence',
});
</script>

<template>
  <div>
    <LoadingState v-if="status === 'pending'" />

    <p v-else-if="error || !sentence" class="text-dimmed m-0 text-[13px]">
      {{ t('sentence.error') }}
    </p>

    <SentencePractice v-else :sentence="sentence" />
  </div>
</template>
