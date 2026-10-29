<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-hedging, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I + am + not + sure / certain / convinced + that + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">not sure / not certain</span>
          <span>我不確定。</span>
        </div>
        <div>
          <span class="term">not convinced</span>
          <span>我不太相信。</span>
        </div>
        <div>
          <span class="term">not likely</span>
          <span>不太可能。</span>
        </div>
        <div>
          <span class="term">not clear</span>
          <span>不清楚。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="直接和委婉的說法">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="You won't make progress." :marks="[]" /><span class="translation"
              >你不會進步。</span
            ></span
          >
        </div>
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark sentence="It's not likely that you'll make progress." :marks="[]" /><span
              class="translation"
              >你不太可能會進步。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先贊成，再提出疑問">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I like the plan, but I'm not sure that it will work."
              :marks="['but I\'m not sure that']"
            /><span class="translation">我喜歡這個計畫，可是我不確定它會成功。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的信件常先說贊成的地方，再用 but I'm not sure that 提出疑問。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 be 動詞後面，形容詞前面" mark="not">
      <NoteFix
        wrong="I'm sure not that he is right."
        right="I'm not sure that he is right."
        :fix="['not', 'that']"
      />
    </NoteSlide>
    <NoteSlide title="sure 是形容詞，否定用 be 動詞加 not" mark="sure">
      <NoteFix
        wrong="I don't sure that they understand."
        right="I'm not sure that they understand."
        :fix="['I\'m not']"
      />
    </NoteSlide>
    <NoteSlide title="that 子句要有自己的主詞" mark="that">
      <NoteFix
        wrong="It's not likely that will rain."
        right="It's not likely that it will rain."
        :fix="['it']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
