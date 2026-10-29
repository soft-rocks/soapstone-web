<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-undesired-events, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + always / constantly + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'constantly trying to balance my school life and was', kind: 'dim' },
          { t: 'always', kind: 'key', ring: true },
          { t: 'running', role: '-ing' },
          { t: 'out of time.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="always / constantly、-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">always / constantly</span>
          <span>總是、一直。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>一再發生、不想要的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說自己的壞習慣">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I was always getting into trouble at school." :marks="[]" /><span
              class="translation"
              >我以前在學校總是闖禍。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型常用來說自己以前的壞習慣或麻煩。</p>
    </NoteSlide>
    <NoteSlide title="說控制不了的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I was constantly losing my keys." :marks="[]" /><span
              class="translation"
              >我一直在弄丟鑰匙。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">也可以說控制不了的情況。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 was 和 -ing 中間" mark="was">
      <NoteFix
        wrong="I was running constantly out of time."
        right="I was constantly running out of time."
        :fix="['constantly', 'out']"
      />
    </NoteSlide>
    <NoteSlide title="過去進行式用 was 或 were 加 -ing" mark="was">
      <NoteFix
        wrong="I did always getting into trouble."
        right="I was always getting into trouble."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="was 後面的動詞要加 -ing" mark="was">
      <NoteFix
        wrong="She was always lose her phone."
        right="She was always losing her phone."
        :fix="['losing']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
