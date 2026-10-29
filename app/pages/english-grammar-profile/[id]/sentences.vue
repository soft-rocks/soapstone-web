<script setup lang="ts">
import notes from '~/content/english-grammar-profile/index.json';

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));
const note = computed(() => notes.find((entry) => entry.id === id.value));

useSeoMeta({
  title: () => `${note.value?.title ?? 'Grammar'} · Practice`,
});
</script>

<template>
  <div>
    <ClientOnly>
      <p v-if="!note" class="text-dimmed m-0 text-[13px]">{{ t('grammar.notFound') }}</p>

      <PracticeScreen
        v-else
        :run-id="id"
        :sentences="note.sentences"
        :track-title="note.title"
        :back-to="`/english-grammar-profile/${id}`"
        back-label="practice.backToNote"
      />

      <template #fallback>
        <LoadingState />
      </template>
    </ClientOnly>
  </div>
</template>
