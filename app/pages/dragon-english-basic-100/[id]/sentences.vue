<script setup lang="ts">
import entries from '~/content/dragon-english-basic-100/index.json';

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));
const entry = computed(() => entries.find((item) => item.id === id.value));

useSeoMeta({
  title: () => `${entry.value?.sentence ?? 'Dragon English'} · Practice`,
});
</script>

<template>
  <div>
    <ClientOnly>
      <p v-if="!entry" class="text-dimmed m-0 text-[13px]">{{ t('grammar.notFound') }}</p>

      <PracticeScreen
        v-else
        :run-id="`dragon-english-basic-100/${id}`"
        :sentences="entry.sentences"
        :track-title="entry.sentence"
        :back-to="`/dragon-english-basic-100/${id}`"
        back-label="practice.backToNote"
      />

      <template #fallback>
        <LoadingState />
      </template>
    </ClientOnly>
  </div>
</template>
