<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-intentions-406, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + not + going to + 原形動詞" mark="I'm not">
      <div class="rows is-labeled">
        <div>
          <span class="term">not going to</span>
          <span>主詞決定不做，或計畫做不成。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不打算做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說不打算做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm not going to buy a new phone this year." :marks="[]" /><span
              class="translation"
              >我今年不打算買新手機。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者已經決定不做某件事。</p>
    </NoteSlide>
    <NoteSlide title="not going to be able to：計畫做不成" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We aren't going to be able to come to the wedding."
              :marks="[]"
            /><span class="translation">我們沒辦法去參加婚禮。</span></span
          >
        </div>
      </div>
      <p class="remark">說話者想做，可是因為別的事做不成。</p>
    </NoteSlide>
    <NoteSlide title="否定用 be 動詞加 not" mark="not">
      <NoteFix
        wrong="I don't going to stay here forever."
        right="I'm not going to stay here forever."
        :fix="['I\'m not']"
      />
    </NoteSlide>
    <NoteSlide title="going to 後面接原形動詞 be，再接 able to" mark="going to">
      <NoteFix
        wrong="I'm not going to able to come."
        right="I'm not going to be able to come."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 be 動詞後面，going 前面" mark="going">
      <NoteFix
        wrong="She is going not to come."
        right="She is not going to come."
        :fix="['not', 'to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
