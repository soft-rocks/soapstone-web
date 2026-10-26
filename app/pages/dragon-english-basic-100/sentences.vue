<script setup lang="ts">
import entries from '~/content/dragon-english-basic-100/index.json';

const { t } = useI18n();

const sentences = entries.map((entry) => entry.sentence);

useSeoMeta({
  title: 'Dragon English Basic English 100 · Practice',
});
</script>

<template>
  <div>
    <ClientOnly>
      <PracticeScreen
        run-id="dragon-english-basic-100"
        :sentences="sentences"
        :track-title="t('home.dragonEnglish')"
        back-to="/dragon-english-basic-100"
        back-label="practice.backToList"
      />

      <template #fallback>
        <LoadingState />
      </template>
    </ClientOnly>
  </div>
</template>
