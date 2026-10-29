<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-my-best-friend, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="best 是 good 的最高級" mark="best">
      <div class="rows is-labeled">
        <div>
          <span class="term">原級</span>
          <span><code>good</code></span>
        </div>
        <div>
          <span class="term">比較級</span>
          <span><code>better</code></span>
        </div>
        <div>
          <span class="term">最高級</span>
          <span><code>best</code></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面有所有格，就不加 the" mark="my best friend">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Tom\'s', role: '所有格', kind: 'key', ring: true },
          { t: 'best friend', role: 'best friend', kind: 'key' },
          { t: 'is Bob.', kind: 'dim' },
        ]"
      />
      <p class="translation">Tom 最好的朋友是 Bob。</p>
    </NoteSlide>

    <NoteSlide title="兩個人以上用 best friends" mark="best friend">
      <NoteMark
        sentence="My dad and Uncle Jim go fishing every summer. They have been best friends since school."
        :marks="['best friends']"
      />
      <p class="translation">我爸爸和吉姆叔叔每年夏天都去釣魚。他們從學生時代就是最好的朋友。</p>
    </NoteSlide>

    <NoteSlide title="good 的最高級不加 -est" mark="best">
      <NoteFix
        wrong="Lucy has been my goodest friend for twenty years."
        right="Lucy has been my best friend for twenty years."
        fix="best"
      />
    </NoteSlide>

    <NoteSlide title="有 my 就不加 the" mark="my best">
      <NoteFix
        wrong="We stayed at the my best friend's flat in Paris."
        right="We stayed at my best friend's flat in Paris."
        fix="my best"
      />
    </NoteSlide>

    <NoteSlide title="兩個人用複數 friends" mark="friend">
      <NoteFix
        wrong="Tom and Ken are my best friend."
        right="Tom and Ken are my best friends."
        fix="friends"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
