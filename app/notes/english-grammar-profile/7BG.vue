<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-summarising-evaluating-with-it, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 加被動動詞，再接 that 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '虛主詞' },
          { t: 'has been found', role: '被動動詞', kind: 'key' },
          { t: 'that some products were difficult to find.', role: 'that 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">調查發現，有些產品很難找到。</p>
    </NoteSlide>

    <NoteSlide title="研究結果、一般的看法、總結" mark="has been found">
      <div class="rows is-labeled">
        <div>
          <span class="term">研究結果</span>
          <span
            ><NoteMark
              sentence="It has been found that some products were difficult to find."
              :marks="['has been found']"
            /><span class="translation">調查發現，有些產品很難找到。</span></span
          >
        </div>
        <div>
          <span class="term">一般的看法</span>
          <span
            ><NoteMark
              sentence="It is believed that the castle was built in 1200."
              :marks="['is believed']"
            /><span class="translation">一般認為這座城堡建於 1200 年。</span></span
          >
        </div>
        <div>
          <span class="term">總結</span>
          <span
            ><NoteMark
              sentence="It was agreed that the meeting would be moved."
              :marks="['was agreed']"
            /><span class="translation">大家同意把會議改時間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句子要有虛主詞 It" mark="It">
      <NoteFix
        wrong="Has been found that some products were difficult to find."
        right="It has been found that some products were difficult to find."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="虛主詞用 It，不用 There" mark="It">
      <NoteFix
        wrong="There is believed that the castle is very old."
        right="It is believed that the castle is very old."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 be" mark="been">
      <NoteFix
        wrong="It recommended that staff take more breaks."
        right="It is recommended that staff take more breaks."
        fix="is recommended"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
