<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-limiting-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="main 是最主要的，only 是唯一的" mark="The only thing">
      <div class="rows is-labeled">
        <div>
          <span class="term">the main + 名詞</span>
          <span
            ><NoteMark
              sentence="The main problem with this flat is the noise."
              :marks="['The main problem']"
            /><span class="translation">這間公寓最主要的問題是太吵。</span></span
          >
        </div>
        <div>
          <span class="term">the only + 名詞</span>
          <span
            ><NoteMark
              sentence="My sister was the only person at the bus stop."
              :marks="['the only person']"
            /><span class="translation">我姊姊是公車站唯一的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="main 和 only 只放在名詞前面" mark="only thing">
      <NoteMark sentence="That big door is the main entrance." :marks="['main entrance']" />
      <p class="translation">那扇大門是主要入口。</p>
      <p class="remark">不寫 <code>That entrance is main</code>。</p>
    </NoteSlide>

    <NoteSlide title="the only + 名詞後面常接子句" mark="that I didn't like">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The only thing', role: 'the only + 名詞', kind: 'key' },
          { t: 'I forgot', role: '子句', kind: 'key', ring: true },
          { t: 'was my toothbrush.', kind: 'dim' },
        ]"
      />
      <p class="translation">我唯一忘了帶的是牙刷。</p>
    </NoteSlide>

    <NoteSlide title="唯一的用 the，不用 a" mark="The only">
      <NoteFix
        wrong="She is an only person who can help us."
        right="She is the only person who can help us."
        fix="the only"
      />
    </NoteSlide>

    <NoteSlide title="main 不放在 be 後面">
      <NoteFix
        wrong="Price is main for me."
        right="Price is the main thing for me."
        fix="main thing"
      />
    </NoteSlide>

    <NoteSlide title="main 後面要接名詞">
      <NoteFix
        wrong="Swimming is my main in summer."
        right="Swimming is my main sport in summer."
        fix="main sport"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
