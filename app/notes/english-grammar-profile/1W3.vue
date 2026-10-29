<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-phrases-modifying-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞片語放在名詞後面" mark="island full of exotic species of birds">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We found a', kind: 'dim' },
          { t: 'box', role: '名詞' },
          { t: 'full', role: '形容詞', kind: 'key', ring: true },
          { t: 'of old photos.', role: '介系詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">我們找到一個裝滿舊照片的盒子。</p>
      <p class="remark">整個片語形容前面的名詞。</p>
    </NoteSlide>

    <NoteSlide title="形容詞後面接固定的介系詞" mark="full of">
      <div class="rows is-labeled">
        <div>
          <span class="term">full of</span>
          <span
            ><NoteMark sentence="He carried a bag full of books." :marks="['full of books']" /><span
              class="translation"
              >他提著一個裝滿書的袋子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">famous for</span>
          <span
            ><NoteMark
              sentence="Kyoto is a city famous for its old temples."
              :marks="['famous for its old temples']"
            /><span class="translation">京都是一座以古寺出名的城市。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單獨的形容詞放在名詞前面" mark="small island">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 名詞</span>
          <span
            ><NoteMark sentence="It was a full box." :marks="['full box']" /><span
              class="translation"
              >那是一個滿的盒子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞 + 形容詞片語</span>
          <span
            ><NoteMark
              sentence="It was a box full of old photos."
              :marks="['box full of old photos']"
            /><span class="translation">那是一個裝滿舊照片的盒子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞 + to 不定詞也可以放在名詞後面" mark="full of">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She asked a', kind: 'dim' },
          { t: 'question', role: '名詞' },
          { t: 'difficult', role: '形容詞', kind: 'key', ring: true },
          { t: 'to answer.', role: 'to 不定詞', kind: 'key' },
        ]"
      />
      <p class="translation">她問了一個很難回答的問題。</p>
      <p class="remark">這種寫法比較正式。</p>
    </NoteSlide>

    <NoteSlide title="整個形容詞片語不放在名詞前面" mark="island full of">
      <NoteFix
        wrong="We visited a full of birds island."
        right="We visited an island full of birds."
        fix="island full of birds"
      />
    </NoteSlide>

    <NoteSlide title="famous 後面接 for" mark="full of">
      <NoteFix
        wrong="Kyoto is a city famous its old temples."
        right="Kyoto is a city famous for its old temples."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="full 後面接 of" mark="of">
      <NoteFix
        wrong="He carried a bag full with books."
        right="He carried a bag full of books."
        fix="of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
