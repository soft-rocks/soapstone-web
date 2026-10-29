<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-determiners, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="所有格放在最高級前面，不加 the" mark="our latest catalogs">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'People wear', kind: 'dim' },
          { t: 'their', role: '所有格', kind: 'key', ring: true },
          { t: 'best', role: '最高級', kind: 'key' },
          { t: 'clothes', role: '名詞' },
          { t: 'to the festival.', kind: 'dim' },
        ]"
      />
      <p class="translation">大家穿上自己最好的衣服去參加節慶。</p>
    </NoteSlide>

    <NoteSlide title="名詞加 's 也可以放在最高級前面" mark="our latest">
      <NoteMark
        sentence="My grandparents ate at the town's oldest bakery every Sunday."
        :marks="['the town\'s oldest bakery']"
      />
      <p class="translation">我爺爺奶奶每個星期天都去鎮上最老的麵包店吃東西。</p>
      <p class="remark"><code>the</code> 屬於 <code>town</code>，不屬於最高級。</p>
    </NoteSlide>

    <NoteSlide title="用了 our 就不加 the" mark="our latest">
      <NoteFix
        wrong="These are the our latest products."
        right="These are our latest products."
        fix="our latest"
      />
    </NoteSlide>

    <NoteSlide title="限定詞放在最前面" mark="our latest">
      <NoteFix wrong="She wore best her dress." right="She wore her best dress." fix="her best" />
    </NoteSlide>

    <NoteSlide title="Asia's 已經是限定詞，最高級前面不加 the" mark="latest">
      <NoteFix
        wrong="It's Asia's the tallest tower."
        right="It's Asia's tallest tower."
        fix="tallest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
