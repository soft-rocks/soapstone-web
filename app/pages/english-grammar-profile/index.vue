<script setup lang="ts">
import catalog from '~/content/english-grammar-profile/catalog.json';
import notes from '~/content/english-grammar-profile/index.json';

const { t } = useI18n();

// Every EGP entry, in the same row form as the Dragon index: the English sentence with its
// translation under it. A written note links to its page; play-all and practice read only
// those sentences.
const bySlug = new Map(notes.map((note) => [note.slug, note]));
const items = computed(() =>
  catalog.map((entry) => {
    const note = bySlug.get(entry.slug);
    return {
      key: entry.slug,
      label: entry.sentence,
      detail: entry.translation || undefined,
      to: note && `/english-grammar-profile/${note.id}`,
      sentence: note?.title,
    };
  }),
);

useSeoMeta({
  title: 'English Grammar Profile',
});
</script>

<template>
  <SentenceIndex
    :title="t('grammar.title')"
    :items="items"
    practice-to="/english-grammar-profile/sentences"
    storage-key="soapstone:order:english-grammar-profile"
  />
</template>
