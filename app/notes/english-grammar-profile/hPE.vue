<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-offers-with-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Shall I + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Shall I', kind: 'key', ring: true },
          { t: 'wait', role: '原形動詞 ...' },
          { t: 'for you?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Shall I、原形動詞" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">Shall I</span>
          <span>主動提出要幫對方做某件事。主詞是 I。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者要幫忙做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, please. / That would be great, thanks." :marks="[]" /><span
              class="translation"
              >好啊，麻煩你了。／那太好了，謝謝。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="No, thanks. I'm fine. / It's OK, I can do it." :marks="[]" /><span
              class="translation"
              >不用了，謝謝，我自己可以。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">接受幫忙。</p>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="Shall">
      <NoteFix wrong="Shall I to help you?" right="Shall I help you?" :fix="['help']" />
    </NoteSlide>
    <NoteSlide title="提出要幫忙的人是說話者，主詞用 I" mark="I">
      <NoteFix
        wrong="Shall you open the door for me?"
        right="Shall I open the door for you?"
        :fix="['I', 'you?']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="Shall">
      <NoteFix wrong="Shall I calling a doctor?" right="Shall I call a doctor?" :fix="['call']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
