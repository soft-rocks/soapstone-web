<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-568, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Shall + I / we + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What time', kind: 'dim' },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'I', kind: 'key', ring: true },
          { t: 'come?', role: '原形動詞' },
          { t: 'And what shall I bring to the party?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Shall I、Shall we、疑問詞" mark="What time">
      <div class="rows is-labeled">
        <div>
          <span class="term">Shall I</span>
          <span>我要……嗎？問對方希望自己怎麼做。</span>
        </div>
        <div>
          <span class="term">Shall we</span>
          <span>我們要……嗎？建議一起做某件事。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、when、where、what time 放在句首。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 的問句不用 do" mark="shall">
      <NoteFix
        wrong="Thanks for inviting us to the barbecue. What do I shall bring?"
        right="Thanks for inviting us to the barbecue. What shall I bring?"
        :fix="['shall', 'bring?']"
      />
    </NoteSlide>
    <NoteSlide title="問句把 shall 放在主詞前面" mark="shall">
      <NoteFix
        wrong="You want me to fix your computer on Sunday. What time I shall come round?"
        right="You want me to fix your computer on Sunday. What time shall I come round?"
        :fix="['shall', 'come?']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix wrong="The museum closes at five. Shall we to meet at the entrance at three?" right="The museum closes at five. Shall we meet at the entrance at three?" :fix="['meet']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
