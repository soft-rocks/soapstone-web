<script setup lang="ts">
/**
 * The numbered 例句 list of a grammar note. It comes from the note's content.md through
 * the sync, so the page, the practice run and the CDN use the same sentences. Each item
 * plays its sentence on click; the heading gets play-all from NoteArticle.
 */
export interface ExampleGroup {
  heading: string;
  items: { en: string; zh: string }[];
}

const props = defineProps<{ heading: string; groups: ExampleGroup[] }>();

// A heading from content.md can hold `code` spans: odd pieces of the split are code
function pieces(text: string) {
  return text.split('`').map((piece, index) => ({ piece, code: index % 2 === 1 }));
}

// Numbering runs on across the groups, as in content.md
const starts = computed(() => {
  let next = 1;
  return props.groups.map((group) => {
    const start = next;
    next += group.items.length;
    return start;
  });
});
</script>

<template>
  <h2 id="examples-heading">{{ heading }}</h2>
  <template v-for="(group, index) in groups" :key="group.heading">
    <h4 v-if="group.heading">
      <template v-for="(part, at) in pieces(group.heading)" :key="at"
        ><code v-if="part.code">{{ part.piece }}</code
        ><template v-else>{{ part.piece }}</template></template
      >
    </h4>
    <ol :start="starts[index]">
      <li v-for="item in group.items" :key="item.en" class="sentence" :data-audio="item.en">
        {{ item.en }}<br /><span class="translation">{{ item.zh }}</span>
      </li>
    </ol>
  </template>
</template>
