<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-non-finite-perfect-complements, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞後面接 having been 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'as a reward', role: '名詞片語', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'having been', role: 'having been', kind: 'key' },
          { t: 'invited.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">當作受到邀請的回報</p>
    </NoteSlide>

    <NoteSlide title="常見的介系詞：for、without、after、of" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark
              sentence="I'm grateful for having been given this chance."
              :marks="['for']"
            /><span class="translation">我很感激得到這個機會。</span></span
          >
        </div>
        <div>
          <span class="term">without</span>
          <span
            ><NoteMark
              sentence="She came in without having been asked."
              :marks="['without']"
            /><span class="translation">她沒被邀請就進來了。</span></span
          >
        </div>
        <div>
          <span class="term">after</span>
          <span
            ><NoteMark
              sentence="After having been delayed for hours, the plane finally left."
              :marks="['After']"
            /><span class="translation">延誤了好幾個小時之後，飛機終於起飛了。</span></span
          >
        </div>
        <div>
          <span class="term">of</span>
          <span
            ><NoteMark sentence="I had the feeling of having been cheated." :marks="['of']" /><span
              class="translation"
              >我有一種被騙的感覺。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="having been 已經發生，being 一直在發生" mark="having been invited">
      <div class="rows is-labeled">
        <div>
          <span class="term">having been</span>
          <span
            ><NoteMark
              sentence="She was upset about having been ignored."
              :marks="['having been ignored']"
            /><span class="translation">她很難過自己被忽視了。</span></span
          >
        </div>
        <div>
          <span class="term">being</span>
          <span
            ><NoteMark
              sentence="I'm tired of being asked the same question."
              :marks="['being asked']"
            /><span class="translation">我受夠了一直被問同一個問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面不接 to" mark="for having been">
      <NoteFix
        wrong="She came in without to have been asked."
        right="She came in without having been asked."
        fix="having been"
      />
    </NoteSlide>

    <NoteSlide title="介系詞後面用 having" mark="having">
      <NoteFix
        wrong="He complained about have been kept waiting."
        right="He complained about having been kept waiting."
        fix="having"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 been" mark="been">
      <NoteFix
        wrong="I'm grateful for having given this chance."
        right="I'm grateful for having been given this chance."
        fix="been"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
