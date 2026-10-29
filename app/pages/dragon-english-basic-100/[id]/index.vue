<script setup lang="ts">
import type { Component } from 'vue';
import entries from '~/content/dragon-english-basic-100/index.json';

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));
const entry = computed(() => entries.find((item) => item.id === id.value));

// A note written as a deck is a page in app/notes/dragon-english-basic-100/<id>.vue. The
// page shows the explanation; the 例句 list still comes from the note's markdown.
const pages = import.meta.glob<Component>('../../../notes/dragon-english-basic-100/*.vue', {
  eager: true,
  import: 'default',
});
const page = computed(() => pages[`../../../notes/dragon-english-basic-100/${id.value}.vue`]);

// Notes are vendored markdown, so each one is its own chunk and the page prerenders
// with the HTML already in place
const sources = import.meta.glob('../../../content/dragon-english-basic-100/*.md', {
  query: '?raw',
  import: 'default',
});

const { data: html } = await useAsyncData(
  () => `dragon:${id.value}`,
  async () => {
    const load = sources[`../../../content/dragon-english-basic-100/${id.value}.md`];
    if (!load || !entry.value) return null;
    const source = (await load()) as string;
    if (!page.value) return renderMarkdown(source, { subtitle: entry.value.translation });
    // A deck page keeps only the 例句 section, under a heading without its number
    const start = source.search(/^## (?:\d+\.\s*)?例句\s*$/m);
    return start === -1 ? '' : renderMarkdown(source.slice(start).replace(/^## .*$/m, '## 例句'));
  },
  { watch: [id] },
);

useSeoMeta({
  title: () => entry.value?.sentence ?? 'Dragon English Basic English 100',
});
</script>

<template>
  <NoteArticle
    :html="html"
    :sentences="entry?.sentences ?? []"
    :album="t('home.dragonEnglish')"
    :practice-to="`/dragon-english-basic-100/${id}/sentences`"
  >
    <template v-if="page && entry" #default>
      <component :is="page" :note="entry" />
      <!-- eslint-disable-next-line vue/no-v-html -- build-time markdown from this repo -->
      <div v-html="html" />
    </template>
  </NoteArticle>
</template>
