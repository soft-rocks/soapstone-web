<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-past-perfect-simple-negative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="had not been 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'because', role: '連接詞', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'had not been', role: 'had not been', kind: 'key' },
          { t: 'informed.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">因為沒有人通知我們。</p>
    </NoteSlide>

    <NoteSlide title="常和 yet、never、because 一起用" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="The results hadn't been announced yet." :marks="['yet']" /><span
              class="translation"
              >那時候結果還沒公布。</span
            ></span
          >
        </div>
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark sentence="The room had never been used." :marks="['never']" /><span
              class="translation"
              >那個房間從來沒有用過。</span
            ></span
          >
        </div>
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="We waited because we hadn't been informed."
              :marks="['because']"
            /><span class="translation">我們等著，因為沒有人通知我們。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定在 had 後面加 not" mark="had not">
      <NoteFix
        wrong="We waited because we didn't been informed."
        right="We waited because we hadn't been informed."
        fix="hadn't"
      />
    </NoteSlide>

    <NoteSlide title="had 後面接 been" mark="been">
      <NoteFix wrong="The car hadn't be stolen." right="The car hadn't been stolen." fix="been" />
    </NoteSlide>

    <NoteSlide title="never 不再加 not" mark="not">
      <NoteFix
        wrong="The house hadn't never been cleaned."
        right="The house had never been cleaned."
        fix="had never"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
