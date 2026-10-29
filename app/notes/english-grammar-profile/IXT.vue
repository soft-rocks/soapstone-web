<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-567, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / We + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'free on Sunday at six o\'clock in the evening.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shall、原形動詞" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall</span>
          <span>會、將。主要跟 I 和 we 一起用。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>以後會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 和 will" mark="I shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="Thank you for the invitation to the dinner. I shall be there."
              :marks="['shall']"
            /><span class="translation">謝謝您邀請我參加晚宴。我會到。</span></span
          >
        </div>
        <div>
          <span class="term">口語</span>
          <span
            ><NoteMark
              sentence="Thanks for asking me to the party. I'll be there."
              :marks="['I\'ll']"
            /><span class="translation">謝謝你邀我參加派對。我會去。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
sentence="The train leaves at nine, and we're already at the station. We shan't miss it."
              :marks="['shan\'t']" /><span
              class="translation"
              >火車九點開，我們已經在車站了。我們不會錯過。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">否定是 shall not，縮寫是 shan't。</p>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix wrong="We shall to start at two." right="We shall start at two." :fix="['start']" />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="I'm ill today, so I can't visit Grandma. I shall coming tomorrow."
        right="I'm ill today, so I can't visit Grandma. I shall come tomorrow."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 be" mark="be">
      <NoteFix wrong="I shall free on Sunday." right="I shall be free on Sunday." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
