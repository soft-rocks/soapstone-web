<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-those-already-mentioned, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those 指前面提過的東西">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s black and pink,', role: '前一句', kind: 'dim' },
          { t: 'and I like', role: '主詞和動詞', kind: 'dim' },
          { t: 'those', role: 'those', kind: 'key' },
          { t: 'colors', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我非常喜歡那兩種顏色</p>
    </NoteSlide>

    <NoteSlide title="these 和 those" mark="those colors">
      <div class="rows is-labeled">
        <div>
          <span class="term">these</span>
          <span
            ><NoteMark
              sentence="I bought shorts and T-shirts. I'll need these things in Spain."
              :marks="['these things']"
            /><span class="translation">我買了短褲和 T 恤。我去西班牙會需要這些東西。</span></span
          >
        </div>
        <div>
          <span class="term">those</span>
          <span
            ><NoteMark
              sentence="I bought shorts and T-shirts. I bought those clothes last summer."
              :marks="['those clothes']"
            /><span class="translation">我買了短褲和 T 恤。那些衣服是去年夏天買的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 接複數名詞" mark="colors">
      <NoteFix
        wrong="I bought jumpers and trousers. I bought those clothe for Japan."
        right="I bought jumpers and trousers. I bought those clothes for Japan."
        fix="clothes"
      />
    </NoteSlide>

    <NoteSlide title="those 不接 one" mark="those colors">
      <NoteFix
        wrong="It's black and pink. I like those one."
        right="It's black and pink. I like those colors."
        fix="those colors"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 those" mark="those">
      <NoteFix
        wrong="I visited Paris and Rome. Them cities are beautiful."
        right="I visited Paris and Rome. Those cities are beautiful."
        fix="Those"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
