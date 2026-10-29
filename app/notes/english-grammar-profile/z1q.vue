<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-not-ing-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not 加動詞-ing 放在句首，說明原因">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Not', role: '否定', kind: 'key' },
          { t: 'knowing North London very well,', role: '動詞-ing 子句' },
          { t: 'I took quite a long time to get there.', role: '主要子句' },
        ]"
      />
      <p class="translation">我對北倫敦不太熟，所以花了好一段時間才到那裡。</p>
      <p class="remark"><code>I</code> 也是不熟悉北倫敦的人。</p>
    </NoteSlide>

    <NoteSlide title="Not 常接 knowing、wanting、being sure 這類動詞" mark="Not knowing">
      <div class="rows is-labeled">
        <div>
          <span class="term">wanting</span>
          <span
            ><NoteMark
              sentence="Not wanting to be late, I took a taxi."
              :marks="['Not wanting']"
            /><span class="translation">我不想遲到，所以搭了計程車。</span></span
          >
        </div>
        <div>
          <span class="term">being sure</span>
          <span
            ><NoteMark
              sentence="Not being sure of the answer, she said nothing."
              :marks="['Not being sure']"
            /><span class="translation">她不確定答案，所以什麼都沒說。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="之前沒做的事，用 Not having 加過去分詞" mark="Not knowing">
      <div class="rows is-labeled">
        <div>
          <span class="term">Not having</span>
          <span
            ><NoteMark
              sentence="Not having eaten all day, I was starving by dinner time."
              :marks="['Not having eaten']"
            /><span class="translation">我一整天都沒吃東西，到晚餐時間已經餓壞了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 子句的否定用 Not，不用 Don't" mark="Not">
      <NoteFix
        wrong="Don't knowing what to do, I called my sister."
        right="Not knowing what to do, I called my sister."
        fix="Not"
      />
    </NoteSlide>

    <NoteSlide title="Not 放在動詞-ing 前面" mark="Not knowing">
      <NoteFix
        wrong="Knowing not the way, we got lost."
        right="Not knowing the way, we got lost."
        fix="Not knowing"
      />
    </NoteSlide>

    <NoteSlide title="動詞-ing 的動作者要是主要子句的主詞" mark="I">
      <NoteFix
        wrong="Not knowing the area, the streets confused me."
        right="Not knowing the area, I soon got lost."
        fix="I"
      >
        不熟悉這一區的是 <code>I</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
