<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-forced-to-obligation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are / was / were + forced to + 原形動詞" mark="Due to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be forced to</span>
          <span>被迫、不得不。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>被迫做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不喜歡被強迫">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I don't like being forced to do things I don't want to do."
              :marks="[]"
            /><span class="translation">我不喜歡被強迫做我不想做的事。</span></span
          >
        </div>
      </div>
      <p class="remark">be forced to 也常說人不喜歡被強迫做事。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be forced to，用過去分詞 forced" mark="forced">
      <NoteFix
        wrong="We are force to cut the budget."
        right="We are forced to cut the budget."
        :fix="['forced']"
      />
    </NoteSlide>
    <NoteSlide title="forced 前面要有 be 動詞" mark="forced">
      <NoteFix
        wrong="The shop forced to close early."
        right="The shop was forced to close early."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="They were forced to leaving their homes."
        right="They were forced to leave their homes."
        :fix="['leave']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
