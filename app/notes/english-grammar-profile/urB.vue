<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-541, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'all', role: '副詞' },
          { t: 'act', role: '原形動詞' },
          { t: 'immediately because the future of humanity may be in danger.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="must all、must never、must strongly" mark="We">
      <div class="rows is-labeled">
        <div>
          <span class="term">must all</span>
          <span>全都必須。主詞是複數，像 we、you、they。</span>
        </div>
        <div>
          <span class="term">must never</span>
          <span>絕對不可以。</span>
        </div>
        <div>
          <span class="term">must strongly</span>
          <span>強烈地。常接 recommend、advise、suggest。</span>
        </div>
        <div>
          <span class="term">must first</span>
          <span>必須先。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="must all" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You must all sign the form." :marks="['must', 'all']" /><span
              class="translation"
              >你們每個人都必須簽這張表格。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">all 放在 must 後面，指主詞裡的每一個人。</p>
    </NoteSlide>
    <NoteSlide title="must strongly recommend">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I must strongly advise you to see a lawyer."
              :marks="['I must strongly advise']"
            /><span class="translation">我必須強烈建議你去找律師。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="all 放在 must 和原形動詞中間" mark="must">
      <NoteFix
        wrong="The river is rising fast. We must go all to the hills tonight."
        right="The river is rising fast. We must all go to the hills tonight."
        :fix="['all']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="I must strongly to recommend the boat trip to the islands."
        right="I must strongly recommend the boat trip to the islands."
        :fix="['recommend']"
      />
    </NoteSlide>
    <NoteSlide title="must all 的主詞要是複數" mark="must all">
      <NoteFix
wrong="Our new teacher is strict. He must all arrive on time."
        right="Our new teacher is strict. We must all arrive on time."
        :fix="['We']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
