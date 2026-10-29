<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-hope, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I hope (that) + 主詞 + 現在簡單式">
      <div class="rows is-labeled">
        <div>
          <span class="term">I hope</span>
          <span>說話者希望未來會發生的事。</span>
        </div>
        <div>
          <span class="term">that</span>
          <span>可以省略，口語常省略。</span>
        </div>
        <div>
          <span class="term">現在簡單式</span>
          <span>雖然說的是未來，動詞還是用現在簡單式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="寫信和道別時常用">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I hope you enjoy your holiday." :marks="[]" /><span
              class="translation"
              >祝你假期愉快。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I hope you feel better soon." :marks="[]" /><span
              class="translation"
              >希望你早日康復。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是 he、she、it 時">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I hope she likes the present." :marks="[]" /><span
              class="translation"
              >希望她喜歡這份禮物。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">動詞要加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="否定的希望" mark="hope">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I hope it doesn't rain tomorrow." :marks="['hope']" /><span
              class="translation"
              >希望明天不要下雨。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">hope 後面的動詞用否定。</p>
    </NoteSlide>
    <NoteSlide title="hope 後面接一個完整的句子時，不加 to" mark="hope">
      <NoteFix wrong="I hope to you come soon." right="I hope you come soon." :fix="['you']" />
    </NoteSlide>
    <NoteSlide title="主詞是 he，動詞加 -s">
      <NoteFix
        wrong="I hope he pass the exam."
        right="I hope he passes the exam."
        :fix="['passes']"
      />
    </NoteSlide>
    <NoteSlide title="現在簡單式的否定用 doesn't 或 don't 加原形動詞">
      <NoteFix
        wrong="I hope it rain not tomorrow."
        right="I hope it doesn't rain tomorrow."
        :fix="['doesn\'t', 'tomorrow.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
