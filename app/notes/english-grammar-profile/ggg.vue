<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-will-be-able-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will be able to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">will be able to</span>
          <span>未來能夠。</span>
        </div>
        <div>
          <span class="term">won't be able to</span>
          <span>未來沒辦法。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>能不能做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="為什麼不用 will can" mark="Will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Next year I will be able to drive."
              :marks="['will be able to', 'will']"
            /><span class="translation">明年我就會開車了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        can 是情態動詞，前面不能再加 will。說未來的能力或可能，用 will be able to。
      </p>
    </NoteSlide>
    <NoteSlide title="縮寫">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'll be able to</span>
          <span
            ><NoteMark sentence="I'll be able to help you tomorrow." :marks="[]" /><span
              class="translation"
              >我明天可以幫你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">won't be able to</span>
          <span
            ><NoteMark sentence="I won't be able to come." :marks="[]" /><span class="translation"
              >我沒辦法來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 和 can 不能連用" mark="Will">
      <NoteFix
        wrong="I will can help you tomorrow."
        right="I will be able to help you tomorrow."
        :fix="['be able to']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形 be，再接 able to" mark="able to">
      <NoteFix wrong="Will you able to come?" right="Will you be able to come?" :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="able 後面要有 to" mark="able">
      <NoteFix
        wrong="I won't be able come on Friday."
        right="I won't be able to come on Friday."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
