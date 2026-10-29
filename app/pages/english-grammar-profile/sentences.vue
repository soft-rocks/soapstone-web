<script setup lang="ts">
import notes from '~/content/english-grammar-profile/index.json';

const { t } = useI18n();

// The practice of the index: the sentence each note starts from
const sentences = notes.map((note) => note.title);

useSeoMeta({
  title: 'English Grammar Profile · Practice',
});
</script>

<template>
  <div>
    <ClientOnly>
      <PracticeScreen
        run-id="english-grammar-profile"
        :sentences="sentences"
        :track-title="t('grammar.title')"
        back-to="/english-grammar-profile"
        back-label="practice.backToList"
      />

      <template #fallback>
        <LoadingState />
      </template>
    </ClientOnly>
  </div>
</template>
