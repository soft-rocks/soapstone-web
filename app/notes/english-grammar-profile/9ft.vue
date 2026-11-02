<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-bound-to-certainty, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + am / is / are / was / were + (almost) bound to + 原形動詞"
      mark="are bound to"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">be bound to</span>
          <span>一定會、免不了。</span>
        </div>
        <div>
          <span class="term">almost</span>
          <span>放在 bound 前面，意思是幾乎一定。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>一定會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說好的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Her new book is bound to be a bestseller."
              :marks="['bound to']"
            /><span class="translation">她的新書一定會成為暢銷書。</span></span
          >
        </div>
      </div>
      <p class="remark">be bound to 也可以說好的結果，表示很有信心。</p>
    </NoteSlide>
    <NoteSlide title="說不好的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you don't study, you're bound to fail."
              :marks="['bound to']"
            /><span class="translation">如果你不讀書，一定會不及格。</span></span
          >
        </div>
      </div>
      <p class="remark">更常說不好但免不了的事。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be bound to">
      <NoteFix
        wrong="The children are bind to get bored."
        right="The children are bound to get bored."
        :fix="['bound']"
      />
    </NoteSlide>
    <NoteSlide title="bound 前面要有 be 動詞" mark="bound">
      <NoteFix
        wrong="It bound to rain at the weekend."
        right="It is bound to rain at the weekend."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="You're bound to making mistakes."
        right="You're bound to make mistakes."
        :fix="['make']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
