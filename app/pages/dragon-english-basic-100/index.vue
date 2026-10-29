<script setup lang="ts">
import entries from '~/content/dragon-english-basic-100/index.json';

const { t } = useI18n();

const items = entries.map((entry) => ({
  key: entry.id,
  label: entry.sentence,
  sentence: entry.sentence,
  detail: entry.translation,
  to: `/dragon-english-basic-100/${entry.id}`,
}));

useSeoMeta({
  title: 'Dragon English Basic English 100',
});
</script>

<template>
  <SentenceIndex
    :title="t('home.dragonEnglish')"
    :items="items"
    practice-to="/dragon-english-basic-100/sentences"
    storage-key="soapstone:order:dragon-english-basic-100"
  />
</template>
