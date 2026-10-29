<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-it-linking-verb-adjectives-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / seems + likely / possible / probable + that + 子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', kind: 'key', ring: true },
          { t: 'is', kind: 'key', ring: true },
          { t: 'likely', kind: 'key', ring: true },
          { t: 'that', kind: 'key', ring: true },
          { t: 'by reading books we will learn some new words.', role: '子句' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="likely / probable、possible、seem">
      <div class="rows is-labeled">
        <div>
          <span class="term">likely / probable</span>
          <span>很可能。</span>
        </div>
        <div>
          <span class="term">possible</span>
          <span>有可能。</span>
        </div>
        <div>
          <span class="term">seem</span>
          <span>讓判斷再委婉一點。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>說話者不想說得太肯定的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="直接和委婉的說法">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="Only one computer will do this." :marks="[]" /><span
              class="translation"
              >只有一台電腦會做這件事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark
              sentence="It is possible that only one computer will do this."
              :marks="[]"
            /><span class="translation">有可能只有一台電腦會做這件事。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定的委婉說法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It does not seem possible that we can live without any private life."
              :marks="['It does not seem possible that']"
            /><span class="translation">我們似乎不可能完全沒有私生活。</span></span
          >
        </div>
      </div>
      <p class="remark">It does not seem possible that 表示說話者覺得不太可能，但不說死。</p>
    </NoteSlide>
    <NoteSlide title="表示「很可能」的形容詞是 likely" mark="likely">
      <NoteFix
        wrong="It is like that we will win."
        right="It is likely that we will win."
        :fix="['likely']"
      />
    </NoteSlide>
    <NoteSlide title="seem 的否定用 does not seem">
      <NoteFix
        wrong="It not seems possible that he did it."
        right="It does not seem possible that he did it."
        :fix="['does', 'seem']"
      />
    </NoteSlide>
    <NoteSlide title="is 後面接形容詞 possible，不接副詞" mark="is">
      <NoteFix
        wrong="It is possibly that we will win."
        right="It is possible that we will win."
        :fix="['possible']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
