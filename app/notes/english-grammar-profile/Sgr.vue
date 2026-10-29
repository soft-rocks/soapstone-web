<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-do-not-emphasis, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Do not 不縮寫，用在正式的告示和信件" mark="Do not hesitate">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Do not', role: '不縮寫', kind: 'key', ring: true },
          { t: 'touch', role: '原形動詞', kind: 'key' },
          { t: 'the paintings in this gallery.', kind: 'dim' },
        ]"
      />
      <p class="translation">請勿觸摸這個展廳裡的畫。</p>
    </NoteSlide>

    <NoteSlide title="Do not hesitate to ... 是請儘管……" mark="Do not hesitate to contact me">
      <NoteMark
        sentence="Do not hesitate to call us if you have any questions."
        :marks="['Do not hesitate to call']"
      />
      <p class="translation">如有任何問題，請儘管打電話給我們。</p>
    </NoteSlide>

    <NoteSlide title="強調的勸告也用 Do not" mark="Do not">
      <NoteMark
        sentence="My father gave me some advice before I rented my first flat. Do not sign anything until you've read it."
        :marks="['Do not sign']"
      />
      <p class="translation">
        我租第一間公寓前，我爸爸給了我一個建議。沒讀過之前，千萬不要簽任何東西。
      </p>
    </NoteSlide>

    <NoteSlide title="Do not 後面用原形動詞" mark="hesitate">
      <NoteFix
        wrong="Do not touching the exhibits."
        right="Do not touch the exhibits."
        fix="touch"
      />
    </NoteSlide>

    <NoteSlide title="否定祈使句要有 Do" mark="Do not">
      <NoteFix
        wrong="Not hesitate to contact us."
        right="Do not hesitate to contact us."
        fix="Do not"
      />
    </NoteSlide>

    <NoteSlide title="祈使句的否定用 Do not，不用 Does not" mark="Do not">
      <NoteFix wrong="Does not park here." right="Do not park here." fix="Do not" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
