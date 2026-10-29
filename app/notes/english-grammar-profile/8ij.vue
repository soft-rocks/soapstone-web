<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-448, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In case you need them,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'can', kind: 'key', ring: true },
          { t: 'easily', role: '副詞' },
          { t: 'provide', role: '原形動詞' },
          { t: 'references.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="直述句、問句" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">直述句</span>
          <span>副詞放在 can 後面。</span>
        </div>
        <div>
          <span class="term">問句</span>
          <span>副詞放在主詞後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="probably 在否定句的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He probably can't come." :marks="['probably', 'can\'t']" /><span
              class="translation"
              >他大概沒辦法來。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">否定句裡，probably 放在 can't 前面。</p>
    </NoteSlide>
    <NoteSlide title="hardly 已經是否定，不再加 not">
      <NoteFix wrong="I can't hardly hear you." right="I can hardly hear you." :fix="['can']" />
    </NoteSlide>
    <NoteSlide title="副詞放在 can 和動詞中間" mark="can">
      <NoteFix
        wrong="I can provide easily references."
        right="I can easily provide references."
        :fix="['easily', 'references.']"
      />
    </NoteSlide>
    <NoteSlide title="問句裡，副詞放在主詞後面">
      <NoteFix
        wrong="Can now you see the difference?"
        right="Can you now see the difference?"
        :fix="['you', 'see']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
