<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-requests-with-will, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will you + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Will you', kind: 'key', ring: true },
          { t: 'send', role: '原形動詞 ...' },
          { t: 'it for me?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Will you、原形動詞" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will you</span>
          <span>請對方做某件事。主詞是 you。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者請對方做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, of course. / Sure." :marks="[]" /><span class="translation"
              >好啊。／當然。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Sorry, I can't. I'm busy." :marks="[]" /><span class="translation"
              >抱歉，我沒辦法，我在忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="Will">
      <NoteFix wrong="Will you to help me?" right="Will you help me?" :fix="['help']" />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="Will">
      <NoteFix
        wrong="Will you sending this letter?"
        right="Will you send this letter?"
        :fix="['send']"
      />
    </NoteSlide>
    <NoteSlide title="請求用疑問句，will 放在 you 前面" mark="Will">
      <NoteFix
        wrong="You will help me, please?"
        right="Will you help me, please?"
        :fix="['Will you']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
