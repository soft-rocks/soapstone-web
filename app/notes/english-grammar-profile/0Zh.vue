<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-verbs-with-modal-meaning, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there 後面可以接 had to be，推斷一定有">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I figured out that', kind: 'dim' },
          { t: 'there', role: 'there' },
          { t: 'had to', role: '有情態意義的動詞', kind: 'key' },
          { t: 'be', role: '原形 be', kind: 'key' },
          { t: 'matches', role: '名詞片語' },
          { t: 'somewhere.', kind: 'dim' },
        ]"
      />
      <p class="translation">我推斷某個地方一定有火柴。</p>
    </NoteSlide>

    <NoteSlide title="不同的動詞說一定有、需要有、將會有、以前有或好像有" mark="had to">
      <div class="rows is-labeled">
        <div>
          <span class="term">need to</span>
          <span
            ><NoteMark
              sentence="There needs to be more space for books."
              :marks="['needs to be']"
            /><span class="translation">需要有更多放書的空間。</span></span
          >
        </div>
        <div>
          <span class="term">be going to</span>
          <span
            ><NoteMark
              sentence="There's going to be a new park near the school."
              :marks="['going to be']"
            /><span class="translation">學校附近會有一座新公園。</span></span
          >
        </div>
        <div>
          <span class="term">used to</span>
          <span
            ><NoteMark
              sentence="There used to be a farm behind our house."
              :marks="['used to be']"
            /><span class="translation">我們家後面以前有一座農場。</span></span
          >
        </div>
        <div>
          <span class="term">seem to</span>
          <span
            ><NoteMark
              sentence="There seems to be something wrong with the printer."
              :marks="['seems to be']"
            /><span class="translation">印表機好像有點問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞的單複數跟著 be 後面的名詞片語" mark="had to">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark sentence="There seems to be a mistake." :marks="['seems']" /><span
              class="translation"
              >好像有一個錯誤。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="There seem to be some mistakes." :marks="['seem']" /><span
              class="translation"
              >好像有一些錯誤。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 後面用原形 be" mark="be">
      <NoteFix
        wrong="There used to is a park here."
        right="There used to be a park here."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="need 後面要有 to" mark="had to">
      <NoteFix
        wrong="There needs be more teachers."
        right="There need to be more teachers."
        fix="need to"
      />
    </NoteSlide>

    <NoteSlide title="說以前有某樣東西，用 there used to be" mark="there">
      <NoteFix
        wrong="It used to have a bakery on this corner."
        right="There used to be a bakery on this corner."
        fix="There used to be"
      />
    </NoteSlide>

    <NoteSlide title="going to 後面要接 be" mark="be">
      <NoteFix
        wrong="There is going to a meeting tomorrow."
        right="There is going to be a meeting tomorrow."
        fix="be"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
