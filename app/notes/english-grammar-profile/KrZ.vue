<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-determiner-adjective-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞放在限定詞和名詞中間">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Her', role: '限定詞' },
          { t: 'favorite', role: '形容詞', kind: 'key' },
          { t: 'colors', role: '名詞' },
          { t: 'are blue and black.', kind: 'dim' },
        ]"
      />
      <p class="translation">她最喜歡的顏色是藍色和黑色。</p>
      <p class="remark">形容詞說明名詞的樣子或性質。</p>
    </NoteSlide>

    <NoteSlide title="名詞是複數，形容詞也不加 -&#x2060;s" mark="favorite">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數名詞</span>
          <span
            ><NoteMark sentence="We have a big garden." :marks="['big garden']" /><span
              class="translation"
              >我們有一個大院子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="These old photos are from my grandma."
              :marks="['old photos']"
            /><span class="translation">這些舊照片是我奶奶給的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 和 an 看緊接在後面的形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">an + old</span>
          <span
            ><NoteMark sentence="I live in an old house." :marks="['an old']" /><span
              class="translation"
              >我住在一棟老房子裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a + nice</span>
          <span
            ><NoteMark sentence="She has a nice smile." :marks="['a nice']" /><span
              class="translation"
              >她的笑容很好看。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞放在名詞前面">
      <NoteFix wrong="I have a car red." right="I have a red car." fix="red car" />
    </NoteSlide>

    <NoteSlide title="形容詞不隨名詞加 -&#x2060;s">
      <NoteFix wrong="They are news students." right="They are new students." fix="new" />
    </NoteSlide>

    <NoteSlide title="加了形容詞，單數可數名詞前面還是要有限定詞">
      <NoteFix wrong="We live in big flat." right="We live in a big flat." fix="a" />
    </NoteSlide>

    <NoteSlide title="interesting 的發音以母音開頭，前面用 an">
      <NoteFix wrong="It's a interesting book." right="It's an interesting book." fix="an" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
