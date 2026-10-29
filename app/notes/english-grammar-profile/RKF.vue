<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-perfect-simple-negative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="hasn't been 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the necklace', role: '主詞' },
          { t: 'hasn\'t been', role: 'hasn\'t / haven\'t been', kind: 'key' },
          { t: 'found', role: '過去分詞', kind: 'key' },
          { t: 'yet.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">那條項鍊到現在還沒找到。</p>
    </NoteSlide>

    <NoteSlide title="常和 yet、for、since、never 一起用" mark="yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="The necklace hasn't been found yet." :marks="['yet']" /><span
              class="translation"
              >項鍊到現在還沒找到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">for / since</span>
          <span
            ><NoteMark
              sentence="The house hasn't been used for twenty years."
              :marks="['for twenty years']"
            /><span class="translation">那間房子已經二十年沒用了。</span></span
          >
        </div>
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark sentence="This room has never been painted." :marks="['never']" /><span
              class="translation"
              >這個房間從來沒漆過。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在完成式的否定不用 didn't" mark="hasn't">
      <NoteFix
        wrong="The necklace didn't been found yet."
        right="The necklace hasn't been found yet."
        fix="hasn't"
      />
    </NoteSlide>

    <NoteSlide title="yet 只用一次，放在句尾" mark="yet">
      <NoteFix
        wrong="The cake hasn't yet been cut yet."
        right="The cake hasn't been cut yet."
        fix="cut yet"
      />
    </NoteSlide>

    <NoteSlide title="複數主詞用 haven't" mark="hasn't">
      <NoteFix
        wrong="The windows hasn't been cleaned for months."
        right="The windows haven't been cleaned for months."
        fix="haven't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
