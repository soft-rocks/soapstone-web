<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// like-vs-as, as slides, in the order of content.md. One point per slide: the title names it,
// the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be like + 名詞，意思是像" mark="is like me">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My brother', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'like', role: '介系詞', kind: 'key', ring: true },
          { t: 'my dad.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我哥哥跟我爸爸很像。</p>
    </NoteSlide>

    <NoteSlide title="動詞 like 是喜歡，be like 是像" mark="like">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'like', role: '動詞：喜歡', kind: 'key' },
          { t: 'her because she', kind: 'dim' },
          { t: 'is like', role: 'be like：像', kind: 'key', ring: true },
          { t: 'me.', role: '受格' },
        ]"
      />
      <p class="translation">我喜歡她，因為她跟我很像。</p>
    </NoteSlide>

    <NoteSlide title="What is ... like? 問人或東西怎麼樣" mark="like">
      <NoteMark sentence="What's your new teacher like?" :marks="['like']" />
      <p class="translation">你的新老師人怎麼樣？</p>
    </NoteSlide>

    <NoteSlide title="表示像，要用 be like" mark="is like">
      <NoteFix wrong="She like her mother." right="She is like her mother." fix="is like" />
    </NoteSlide>

    <NoteSlide title="like 後面的代名詞用受格" mark="me">
      <NoteFix
        wrong="My twin brother is like I in every way."
        right="My twin brother is like me in every way."
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="說像什麼用 like，不用 as" mark="like">
      <NoteFix wrong="It's as a little train." right="It's like a little train." fix="like" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
