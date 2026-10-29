<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-modal-verbs-1034, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Could you 是客氣的請求">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could', role: '情態動詞', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'meet', role: '原形動詞', kind: 'key' },
          { t: 'me', role: '受詞' },
          { t: 'at my home at 7 p.m.?', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以晚上 7 點到我家跟我碰面嗎？</p>
    </NoteSlide>

    <NoteSlide title="不同的情態動詞用在邀請、提議和問建議" mark="Could">
      <div class="rows is-labeled">
        <div>
          <span class="term">Would you like to<br /><i>邀請</i></span>
          <span
            ><NoteMark
              sentence="Would you like to go to the concert with me?"
              :marks="['Would you like to']"
            /><span class="translation">你想跟我去聽演唱會嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Shall I<br /><i>提議</i></span>
          <span
            ><NoteMark sentence="Shall I open the window?" :marks="['Shall']" /><span
              class="translation"
              >要我開窗嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Should I<br /><i>問建議</i></span>
          <span
            ><NoteMark sentence="Should I bring anything?" :marks="['Should']" /><span
              class="translation"
              >我應該帶什麼東西嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Would you like 後面接 to" mark="Could">
      <NoteFix
        wrong="Would you like go to the cinema?"
        right="Would you like to go to the cinema?"
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="meet">
      <NoteFix wrong="Could she helps me?" right="Could she help me?" fix="help" />
    </NoteSlide>

    <NoteSlide title="有情態動詞的疑問句不加 do" mark="Could">
      <NoteFix wrong="Do you would like some tea?" right="Would you like some tea?" fix="Would" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
