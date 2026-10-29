<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-manner-modifying-verbs, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="and 連接兩個情狀副詞，兩個都修飾同一個動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I learned', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'to use my phone', role: '不定詞 + 受詞', kind: 'dim' },
          { t: 'very', role: '程度副詞' },
          { t: 'quickly', role: '情狀副詞', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'easily.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很快、很輕鬆就學會用我的手機了。</p>
    </NoteSlide>

    <NoteSlide title="-ly 的拼法看形容詞的結尾" mark="quickly and easily">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般形容詞</span>
          <span
            ><code>slow</code> → <code>slowly</code>、<code>careful</code> →
            <code>carefully</code></span
          >
        </div>
        <div>
          <span class="term">ic</span>
          <span><code>automatic</code> → <code>automatically</code></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="easy 的 y 改成 i 再加 -ly" mark="easily">
      <NoteFix
        wrong="She passed the test easyly."
        right="She passed the test easily."
        fix="easily"
      />
    </NoteSlide>

    <NoteSlide title="gentle 去掉 e，加 y">
      <NoteFix wrong="Hold the baby gentlely." right="Hold the baby gently." fix="gently" />
    </NoteSlide>

    <NoteSlide title="兩個情狀副詞中間加 and" mark="and">
      <NoteFix wrong="He spoke slowly clearly." right="He spoke slowly and clearly." fix="and" />
    </NoteSlide>

    <NoteSlide title="and 後面的字也要用副詞" mark="and easily">
      <NoteFix
        wrong="The children played happily and quiet."
        right="The children played happily and quietly."
        fix="quietly"
      />
    </NoteSlide>

    <NoteSlide title="friendly 是形容詞，修飾動詞用 in a friendly way">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'She smiled', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'in a friendly way.', role: '副詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">她友善地笑了笑。</p>
      <p class="remark"><code>lovely</code>、<code>lonely</code> 也是形容詞。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
