<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// may-concession, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="however + 形容詞 + 主詞 + may + be / seem">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The price of the watch also contributes to my love of it,', kind: 'dim' },
          { t: 'however', kind: 'key', ring: true },
          { t: 'small', role: '形容詞' },
          { t: 'it', role: '主詞' },
          { t: 'may', kind: 'key', ring: true },
          { t: 'be.', kind: 'key', ring: true },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="however + 形容詞、whatever、whoever">
      <div class="rows is-labeled">
        <div>
          <span class="term">however + 形容詞</span>
          <span>不管多……。</span>
        </div>
        <div>
          <span class="term">whatever</span>
          <span>不管是什麼。</span>
        </div>
        <div>
          <span class="term">whoever</span>
          <span>不管是誰。</span>
        </div>
        <div>
          <span class="term">wherever</span>
          <span>不管在哪裡。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="子句的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="However hard it may seem, don't give up." :marks="[]" /><span
              class="translation"
              >不管看起來多難，都不要放棄。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">讓步子句可以放在句首，也可以放在句尾。放在句首時，後面加逗號。</p>
    </NoteSlide>
    <NoteSlide title="however 後面直接接形容詞" mark="however">
      <NoteFix
        wrong="However very small it may be, it matters."
        right="However small it may be, it matters."
        :fix="['small']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞放在 however 後面，主詞前面" mark="however">
      <NoteFix
        wrong="However it may be difficult, we'll try."
        right="However difficult it may be, we'll try."
        :fix="['difficult', 'be,']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面接原形 be" mark="may">
      <NoteFix
        wrong="Whatever it may is, I'll help."
        right="Whatever it may be, I'll help."
        :fix="['be,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
