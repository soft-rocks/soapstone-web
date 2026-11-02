<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-willingness-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="wouldn't 說過去不肯做的事" mark="wouldn't">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We had to leave without you because', kind: 'dim' },
          { t: 'the bus driver', role: '主詞' },
          { t: 'wouldn\'t', kind: 'key', ring: true },
          { t: 'wait.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="wouldn't let 和 would not allow 說過去不准" mark="wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">wouldn't let</span>
          <span
            ><NoteMark
              sentence="The guard wouldn't let me into the building without it."
              :marks="['wouldn\'t let']"
            /><span class="translation">沒有通行證，警衛不讓我進大樓。</span></span
          >
        </div>
        <div>
          <span class="term">would not allow</span>
          <span
            ><NoteMark
              sentence="She would not allow us to use our phones in class."
              :marks="['would not allow']"
            /><span class="translation">她不准我們上課用手機。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="wouldn't 說人過去不願意做的事" mark="wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My brother wouldn't lend me his bike."
              :marks="['wouldn\'t']"
            /><span class="translation">我哥哥不肯借我他的腳踏車。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="wouldn't 也說東西過去不能用" mark="wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The old lift wouldn't move." :marks="['wouldn\'t']" /><span
              class="translation"
              >那台舊電梯動不了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would 的否定是 wouldn't" mark="wouldn't">
      <NoteFix
        wrong="The shop didn't would change the shirt."
        right="The shop wouldn't change the shirt."
        :fix="['wouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="allow 加人後面要接 to 和原形動詞" mark="wouldn't">
      <NoteFix
        wrong="They wouldn't allow me go."
        right="They wouldn't allow me to go."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="let 加人後面直接接原形動詞" mark="wouldn't">
      <NoteFix
        wrong="My mum wouldn't let me to stay out after ten."
        right="My mum wouldn't let me stay out after ten."
        :fix="['stay']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
