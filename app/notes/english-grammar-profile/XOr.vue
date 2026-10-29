<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-so-many-with-plural-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="too many 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'bought', role: '動詞' },
          { t: 'too many', role: 'too many', kind: 'key' },
          { t: 'things,', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我買了太多東西，</p>
    </NoteSlide>

    <NoteSlide title="so many 很多，too many 太多" mark="too many">
      <div class="rows is-labeled">
        <div>
          <span class="term">so many</span>
          <span
            ><NoteMark sentence="We visited so many places." :marks="['so many']" /><span
              class="translation"
              >我們去了好多地方。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too many</span>
          <span
            ><NoteMark sentence="I bought too many things." :marks="['too many']" /><span
              class="translation"
              >我買了太多東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so many 常接 that 子句" mark="too many">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark
              sentence="There were so many people that we couldn't get in."
              :marks="['so many', 'that']"
            /><span class="translation">人多到我們進不去。</span></span
          >
        </div>
        <div>
          <span class="term">沒有 that</span>
          <span
            ><NoteMark
              sentence="I had so many messages I couldn't read them all."
              :marks="['so many']"
            /><span class="translation">我的訊息多到看不完。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 too much" mark="too many">
      <NoteFix
        wrong="I spent too many money in London."
        right="I spent too much money in London."
        fix="too much"
      />
    </NoteSlide>

    <NoteSlide title="many 後面接複數名詞" mark="things">
      <NoteFix
        wrong="There are too many car in the city centre."
        right="There are too many cars in the city centre."
        fix="cars"
      />
    </NoteSlide>

    <NoteSlide title="放在名詞前面" mark="too many things">
      <NoteFix
        wrong="I bought things too many."
        right="I bought too many things."
        fix="too many things"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
