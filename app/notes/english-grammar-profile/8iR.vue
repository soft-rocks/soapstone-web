<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-interrogative-adverb, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在主詞後面、主要動詞前面" mark="don't you ever listen">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Why', role: '疑問詞', kind: 'dim' },
          { t: 'don\'t', role: '助動詞 + n\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'ever', role: '副詞', kind: 'key', ring: true },
          { t: 'call', role: '主要動詞', kind: 'key' },
          { t: 'me on Sundays?', kind: 'dim' },
        ]"
      />
      <p class="translation">你為什麼星期天從來都不打給我？</p>
    </NoteSlide>

    <NoteSlide title="常見的組合：抱怨、驚訝、希望對方同意、確認" mark="Why don't you ever">
      <div class="rows is-labeled">
        <div>
          <span class="term">抱怨</span>
          <span
            ><NoteMark
              sentence="Someone could walk in at night. Why don't you ever lock the back door?"
              :marks="['Why don\'t you ever']"
            /><span class="translation">晚上可能會有人走進來。你為什麼從來都不鎖後門？</span></span
          >
        </div>
        <div>
          <span class="term">驚訝</span>
          <span
            ><NoteMark
              sentence="You look nervous at the gate. Haven't you ever been on a plane?"
              :marks="['Haven\'t you ever']"
            /><span class="translation">你在登機門看起來很緊張。你從沒搭過飛機嗎？</span></span
          >
        </div>
        <div>
          <span class="term">希望對方同意</span>
          <span
            ><NoteMark
              sentence="Why is everyone talking about the new factory? Hasn't this town always been quiet?"
              :marks="['Hasn\'t this town always']"
            /><span class="translation"
              >為什麼大家都在談新工廠的事？這個小鎮不是一直都很安靜嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">確認</span>
          <span
            ><NoteMark
              sentence="You want to buy a sofa? Don't you still live with your parents?"
              :marks="['Don\'t you still']"
            /><span class="translation">你想買沙發？你不是還跟你爸媽住嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ever 不放在句尾" mark="ever listen">
      <NoteFix
        wrong="Why don't you listen to me ever?"
        right="Why don't you ever listen to me?"
        fix="ever listen"
      />
    </NoteSlide>

    <NoteSlide title="助動詞和 n't 在主詞前面，副詞在主詞後面" mark="don't you ever">
      <NoteFix
        wrong="Why do ever you not text me back?"
        right="Why don't you ever text me back?"
        fix="don't you ever"
      />
    </NoteSlide>

    <NoteSlide title="已經有 n't，用 ever，不用 never" mark="ever">
      <NoteFix
        wrong="Why don't you never help with the shopping?"
        right="Why don't you ever help with the shopping?"
        fix="ever"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
