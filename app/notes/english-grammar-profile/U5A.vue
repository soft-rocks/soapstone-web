<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-be-adjective-not-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Be + sure / careful + not + to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Be', kind: 'key', ring: true },
          { t: 'sure', kind: 'key', ring: true },
          { t: 'not', kind: 'key', ring: true },
          { t: 'to', kind: 'key', ring: true },
          { t: 'miss', role: '原形動詞' },
          { t: 'the alligator steak.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="be sure not to、be careful not to、be certain / bound not to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be sure not to</span>
          <span>一定不要。用在祈使句。</span>
        </div>
        <div>
          <span class="term">be careful not to</span>
          <span>小心不要。</span>
        </div>
        <div>
          <span class="term">be certain / bound not to</span>
          <span>一定不會。</span>
        </div>
        <div>
          <span class="term">be obliged not to</span>
          <span>有義務不做。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="提醒別人" mark="Be sure not to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Be careful not to wake the baby."
              :marks="['Be careful not to']"
            /><span class="translation">小心不要吵醒寶寶。</span></span
          >
        </div>
      </div>
      <p class="remark">祈使句 Be sure not to 和 Be careful not to 常用在提醒和建議。</p>
    </NoteSlide>
    <NoteSlide title="否定用 not，不用 no" mark="not">
      <NoteFix
        wrong="Be sure no to forget your keys."
        right="Be sure not to forget your keys."
        :fix="['not']"
      />
    </NoteSlide>
    <NoteSlide title="這個句型用 not to，不用 don't" mark="not to">
      <NoteFix
        wrong="Be careful don't to drop the glasses."
        right="Be careful not to drop the glasses."
        :fix="['not']"
      />
    </NoteSlide>
    <NoteSlide title="not 後面要接 to 和原形動詞" mark="not">
      <NoteFix
        wrong="They are bound not tell anyone."
        right="They are bound not to tell anyone."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
