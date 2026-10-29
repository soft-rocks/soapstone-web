<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-do-imperatives, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定祈使句用 Don't 開頭，沒有主詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Don\'t', role: 'Don\'t', kind: 'key' },
          { t: 'forget', role: '原形動詞', kind: 'key' },
          { t: 'your electric guitar.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">別忘了你的電吉他。</p>
    </NoteSlide>

    <NoteSlide title="形容詞前面加 be" mark="Don't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Don\'t', role: 'Don\'t' },
          { t: 'be', role: 'be', kind: 'key', ring: true },
          { t: 'late.', role: '形容詞' },
        ]"
      />
      <p class="translation">別遲到。</p>
    </NoteSlide>

    <NoteSlide title="告示和說明書用 Do not" mark="Don't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do not', role: 'Do not', kind: 'key' },
          { t: 'leave', role: '原形動詞' },
          { t: 'bags unattended.', kind: 'dim' },
        ]"
      />
      <p class="translation">請勿將行李留置無人看管。</p>
    </NoteSlide>

    <NoteSlide title="please 可以放在句首或句尾" mark="Don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="Please don't touch the paintings." :marks="['Please']" /><span
              class="translation"
              >請不要摸畫。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="Don't park here, please." :marks="['please']" /><span
              class="translation"
              >請不要在這裡停車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定祈使句不用 not 開頭" mark="Don't">
      <NoteFix wrong="Not forget your keys." right="Don't forget your keys." fix="Don't" />
    </NoteSlide>

    <NoteSlide title="Don't 後面要接動詞，形容詞前面加 be" mark="Don't">
      <NoteFix wrong="Don't nervous." right="Don't be nervous." fix="be" />
    </NoteSlide>

    <NoteSlide title="祈使句不分人稱，不用 doesn't" mark="Don't">
      <NoteFix wrong="Doesn't touch that, Tom." right="Don't touch that, Tom." fix="Don't" />
    </NoteSlide>

    <NoteSlide title="Don't 後面接原形動詞，不加 -ing" mark="forget">
      <NoteFix wrong="Don't worrying about it." right="Don't worry about it." fix="worry" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
