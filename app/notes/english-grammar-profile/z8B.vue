<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-modifying-adjectives-hedging, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is + 程度副詞 + 形容詞 + that + 子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', kind: 'key', ring: true },
          { t: 'is', kind: 'key', ring: true },
          { t: 'almost', role: '程度副詞' },
          { t: 'certain', role: '形容詞' },
          { t: 'that', kind: 'key', ring: true },
          {
            t: 'we\'ll have fights in the future, but we will probably overcome them.',
            role: '子句',
          },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="程度副詞、形容詞" mark="certain">
      <div class="rows is-labeled">
        <div>
          <span class="term">程度副詞</span>
          <span>放在形容詞前面，調整程度。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>表示可能性或把握，像 certain、probable、possible、likely、true。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在括號或補充說明裡">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If there is a strike (which is quite probable), you will have to take a taxi."
              :marks="[]"
            /><span class="translation">如果有罷工（這相當有可能），你就得搭計程車。</span></span
          >
        </div>
      </div>
      <p class="remark">程度副詞加形容詞常放在補充說明裡。</p>
    </NoteSlide>
    <NoteSlide title="程度副詞放在形容詞前面">
      <NoteFix
        wrong="It is certain almost that he will come."
        right="It is almost certain that he will come."
        :fix="['almost', 'that']"
      />
    </NoteSlide>
    <NoteSlide title="修飾形容詞要用副詞 fairly">
      <NoteFix
        wrong="It is fair likely that prices will rise."
        right="It is fairly likely that prices will rise."
        :fix="['fairly']"
      />
    </NoteSlide>
    <NoteSlide title="is 後面接形容詞 certain" mark="certain">
      <NoteFix
        wrong="It is almost certainly that we'll win."
        right="It is almost certain that we'll win."
        :fix="['certain']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
