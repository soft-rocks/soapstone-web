<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-immediate-plans-with-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / we + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'After that,', kind: 'dim' },
          { t: 'I', kind: 'key', ring: true },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'to the beach.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="I / we、shall、原形動詞" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / we</span>
          <span>這個用法的 shall 只接這兩個主詞。</span>
        </div>
        <div>
          <span class="term">shall</span>
          <span>表示主詞打算做的事。意思和 will 相同，是英式英語比較正式的說法。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>打算做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="答應別人的事" mark="I shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I promise I shall finish the work and give it to you tomorrow."
              :marks="['I shall']"
            /><span class="translation">我保證會把工作做完，明天交給你。</span></span
          >
        </div>
      </div>
      <p class="remark">說話者答應別人要做某件事時，也可以用 I shall。</p>
    </NoteSlide>
    <NoteSlide title="正式場合的安排">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We shall have a meeting about this next week."
              :marks="['We']"
            /><span class="translation">我們下星期會就這件事開會。</span></span
          >
        </div>
      </div>
      <p class="remark">公司、學校的正式通知裡，主詞常是 we。</p>
    </NoteSlide>
    <NoteSlide title="shall 和 will 意思相同，只用一個" mark="shall">
      <NoteFix
        wrong="I shall will go to the beach after lunch."
        right="I shall go to the beach after lunch."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="I shall to visit my aunt tomorrow."
        right="I shall visit my aunt tomorrow."
        :fix="['visit']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="We shall went to the museum."
        right="We shall go to the museum."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
