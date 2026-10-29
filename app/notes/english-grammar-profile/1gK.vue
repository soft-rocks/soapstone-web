<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-attributive-with-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞放在名詞前面" mark="a big garden">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She has', kind: 'dim' },
          { t: 'an', role: 'a / an' },
          { t: 'old', role: '形容詞', kind: 'key', ring: true },
          { t: 'bike.', role: '名詞' },
        ]"
      />
      <p class="translation">她有一台舊腳踏車。</p>
      <p class="remark"><code>old</code> 是母音開頭，前面用 <code>an</code>。</p>
    </NoteSlide>

    <NoteSlide title="前面也可以是 my、the、this" mark="a small swimming pool">
      <div class="rows is-labeled">
        <div>
          <span class="term">my</span>
          <span
            ><NoteMark sentence="This is my new phone." :marks="['my new phone']" /><span
              class="translation"
              >這是我的新手機。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the</span>
          <span
            ><NoteMark sentence="The little girl is my sister." :marks="['The little girl']" /><span
              class="translation"
              >那個小女孩是我妹妹。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞前面的形容詞不加 -s" mark="big garden">
      <NoteMark sentence="We have two big rooms upstairs." :marks="['big rooms']" />
      <p class="translation">我們樓上有兩間大房間。</p>
    </NoteSlide>

    <NoteSlide title="形容詞放在名詞前面，不放在後面" mark="big garden">
      <NoteFix wrong="I have a car red." right="I have a red car." fix="red car" />
    </NoteSlide>

    <NoteSlide title="形容詞不加 -s" mark="big">
      <NoteFix wrong="We have two bigs rooms." right="We have two big rooms." fix="big" />
    </NoteSlide>

    <NoteSlide title="母音開頭的形容詞前面用 an" mark="a big">
      <NoteFix wrong="She has a old bike." right="She has an old bike." fix="an" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
