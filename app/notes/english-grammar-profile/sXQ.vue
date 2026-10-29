<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-deductions-and-conclusions-535, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + must be + 形容詞 + (for 人) + to + 原形動詞" mark="nervous.">
      <div class="rows is-labeled">
        <div>
          <span class="term">must be</span>
          <span>一定是。說話者很確定。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>常用 tired、hungry、nervous、boring、hard。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="推論和義務" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">義務</span>
          <span
            ><NoteMark sentence="You must wear a helmet." :marks="['must']" /><span
              class="translation"
              >你必須戴安全帽。</span
            ></span
          >
        </div>
        <div>
          <span class="term">推論</span>
          <span
            ><NoteMark sentence="You must be tired." :marks="['must']" /><span class="translation"
              >你一定累了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must 可以說義務，也可以說推論。看說話的情況判斷。</p>
    </NoteSlide>
    <NoteSlide title="推論的否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="That can't be true." :marks="['can\'t be']" /><span
              class="translation"
              >那不可能是真的。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">推論的否定用 can't be，不用 mustn't be。</p>
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 be" mark="be">
      <NoteFix
        wrong="You must tired after the trip."
        right="You must be tired after the trip."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形 be" mark="must">
      <NoteFix wrong="It must is boring." right="It must be boring." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="must be 後面直接接形容詞" mark="must be">
      <NoteFix wrong="She must be to very happy." right="She must be very happy." :fix="['very']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
