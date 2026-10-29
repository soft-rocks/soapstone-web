<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-mental-process-verbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="think 說 Amy 現在的想法，她不確定">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'think', role: '心理動詞', kind: 'key', ring: true },
          { t: 'my bag is', role: '子句', kind: 'dim' },
          { t: 'in your kitchen.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想我的包包在你家廚房。</p>
    </NoteSlide>
    <NoteSlide title="think、hope、know 說的是不同的心理狀態" mark="think">
      <div class="rows is-labeled">
        <div>
          <span class="term">think</span>
          <span
            ><NoteMark sentence="I think it's going to rain." :marks="['think']" /><span
              class="translation"
              >我覺得會下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hope</span>
          <span
            ><NoteMark sentence="I hope it doesn't rain." :marks="['hope']" /><span
              class="translation"
              >我希望不要下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark sentence="I know it's raining." :marks="['know']" /><span class="translation"
              >我知道在下雨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="think 的否定放在 think 前面，hope 的否定放在子句裡" mark="think">
      <div class="rows is-labeled">
        <div>
          <span class="term">think</span>
          <span
            ><NoteMark sentence="I don't think he's coming." :marks="['don\'t', 'think']" /><span
              class="translation"
              >我覺得他不會來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hope</span>
          <span
            ><NoteMark sentence="I hope he isn't late." :marks="['isn\'t']" /><span
              class="translation"
              >我希望他不要遲到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="know 說狀態，不用進行式" mark="think">
      <NoteFix wrong="I'm knowing the answer." right="I know the answer." :fix="['know']" />
    </NoteSlide>
    <NoteSlide title="hope 的否定放在子句裡" mark="think">
      <NoteFix
        wrong="I don't hope it rains tomorrow."
        right="I hope it doesn't rain tomorrow."
        :fix="['doesn\'t', 'rain']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 she，think 加 -s" mark="think">
      <NoteFix
        wrong="She think the film is boring."
        right="She thinks the film is boring."
        :fix="['thinks']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
