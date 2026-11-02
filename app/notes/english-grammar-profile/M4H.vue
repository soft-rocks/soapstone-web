<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-619, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I'd 是 I would，後面接 love to 和原形動詞" mark="I'd">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'d', role: 'I would', kind: 'key', ring: true },
          { t: 'love to', role: '動詞 + to', kind: 'key', alts: ['prefer to'] },
          { t: 'have', role: '原形動詞' },
          { t: 'a pen-friend in Japan.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would prefer 加名詞，常用來選時間" mark="I'd">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would prefer Sunday afternoon."
              :marks="['would prefer']"
            /><span class="translation">我比較想要星期天下午。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would 後面的動詞不加 -s" mark="I'd">
      <NoteFix
        wrong="She would loves to come to the zoo with us."
        right="She would love to come to the zoo with us."
        :fix="['love']"
      />
    </NoteSlide>
    <NoteSlide title="would love 後面接動詞時要加 to" mark="to">
      <NoteFix wrong="I'd love have a dog." right="I'd love to have a dog." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="would 後面不加 to" mark="I'd">
      <NoteFix
        wrong="I would to prefer a later flight."
        right="I would prefer a later flight."
        :fix="['prefer']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
