<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-very-adjectives, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very 修飾有程度高低的形容詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My teacher', role: '主詞', kind: 'dim' },
          { t: 'is', role: 'be' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'good.', role: '可分級形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的老師很好。</p>
    </NoteSlide>

    <NoteSlide title="very 加形容詞也可以放在名詞前面" mark="very good">
      <div class="rows is-labeled">
        <div>
          <span class="term">a + very + 形容詞 + 名詞</span>
          <span
            ><NoteMark sentence="It's a very hot day." :marks="['very hot']" /><span
              class="translation"
              >今天很熱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very + 形容詞 + 名詞</span>
          <span
            ><NoteMark sentence="She has very long hair." :marks="['very long']" /><span
              class="translation"
              >她的頭髮很長。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示是或不是的形容詞，前面不加 very">
      <NoteFix wrong="The plant is very dead." right="The plant is dead." fix="dead" />
      <p class="remark"><code>alive</code>、<code>married</code> 前面也不加 <code>very</code>。</p>
    </NoteSlide>

    <NoteSlide title="表示程度最高的形容詞，用 absolutely 或 really 加強">
      <div class="rows is-labeled">
        <div>
          <span class="term">absolutely</span>
          <span
            ><NoteMark
              sentence="The meal was absolutely perfect."
              :marks="['absolutely perfect']"
            /><span class="translation">那頓飯完美極了。</span></span
          >
        </div>
        <div>
          <span class="term">really</span>
          <span
            ><NoteMark sentence="It's really freezing today." :marks="['really freezing']" /><span
              class="translation"
              >今天真的冷死了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="已經表示程度最高的形容詞，前面不加 very" mark="very">
      <NoteFix
        wrong="The concert was very excellent."
        right="The concert was excellent."
        fix="excellent"
      />
      <p class="remark">
        <code>perfect</code>、<code>amazing</code>、<code>huge</code> 前面也不加 <code>very</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="very 修飾形容詞，不修飾名詞" mark="very good">
      <NoteFix wrong="She is very beauty." right="She is very beautiful." fix="beautiful" />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 very，不用 very much" mark="very">
      <NoteFix
        wrong="The bed is very much comfortable."
        right="The bed is very comfortable."
        fix="very"
      />
    </NoteSlide>

    <NoteSlide title="very 放在形容詞前面" mark="very good">
      <NoteFix
        wrong="The village is quiet very."
        right="The village is very quiet."
        fix="very quiet"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
