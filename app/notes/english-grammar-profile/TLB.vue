<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-extreme-adverbs, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="每個程度副詞搭配不同的形容詞" mark="absolutely sure">
      <div class="rows is-labeled">
        <div>
          <span class="term">extremely / incredibly + 一般的形容詞</span>
          <span
            ><NoteMark
              sentence="The new trains are incredibly fast."
              :marks="['incredibly fast']"
            /><span class="translation">新的火車快得不得了。</span></span
          >
        </div>
        <div>
          <span class="term">absolutely + 本身就很強的形容詞</span>
          <span
            ><NoteMark
              sentence="It's absolutely freezing outside."
              :marks="['absolutely freezing']"
            /><span class="translation">外面冷死了。</span></span
          >
        </div>
        <div>
          <span class="term">totally + 完全的</span>
          <span
            ><NoteMark sentence="We need a totally new plan." :marks="['totally new']" /><span
              class="translation"
              >我們需要一個全新的計畫。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="absolutely 常配 sure、right、true" mark="absolutely sure">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I am', kind: 'dim' },
          { t: 'absolutely', role: '程度副詞', kind: 'key', ring: true },
          { t: 'sure', role: '形容詞', kind: 'key' },
          { t: 'that the plan will work.', role: 'that 子句' },
        ]"
      />
      <p class="translation">我非常確定這個計畫會成功。</p>
    </NoteSlide>

    <NoteSlide title="可以分程度的形容詞不配 absolutely" mark="absolutely">
      <NoteFix
        wrong="The test was absolutely difficult."
        right="The test was extremely difficult."
        fix="extremely"
      />
    </NoteSlide>

    <NoteSlide title="本身就很強的形容詞不配 very" mark="absolutely">
      <NoteFix
        wrong="The concert was very amazing."
        right="The concert was absolutely amazing."
        fix="absolutely"
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞要用 -ly 副詞" mark="absolutely">
      <NoteFix
        wrong="The car was incredible fast."
        right="The car was incredibly fast."
        fix="incredibly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
