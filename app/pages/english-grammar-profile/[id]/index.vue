<script setup lang="ts">
import type { Component } from 'vue';
import notes from '~/content/english-grammar-profile/index.json';

const route = useRoute();

const id = computed(() => String(route.params.id ?? ''));
const note = computed(() => notes.find((entry) => entry.id === id.value));

// Each note is a page written by hand in app/notes/english-grammar-profile/<id>.vue
const pages = import.meta.glob<Component>('../../../notes/english-grammar-profile/*.vue', {
  eager: true,
  import: 'default',
});
const page = computed(() => pages[`../../../notes/english-grammar-profile/${id.value}.vue`]);

useSeoMeta({
  title: () => note.value?.title ?? 'Grammar',
});
</script>

<template>
  <NoteArticle
    :sentences="note?.sentences ?? []"
    :album="note?.title"
    :practice-to="`/english-grammar-profile/${id}/sentences`"
  >
    <component :is="page" v-if="page && note" :note="note" />
  </NoteArticle>
</template>
