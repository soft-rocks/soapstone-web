<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-375, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'m sure I', role: '主詞' },
          { t: 'will have', kind: 'key', ring: true },
          { t: 'learned', role: '過去分詞' },
          { t: 'today\'s lesson by the next lesson.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、have、過去分詞" mark="by the next lesson.">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>表示未來。口語常縮寫成 'll。</span>
        </div>
        <div>
          <span class="term">have</span>
          <span>用原形，每個人稱都一樣。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span
            >到那個時間已經完成的動作。規則動詞加 -&#x2060;ed，像
            learned、finished。不規則動詞要記，像 gone、written、eaten。</span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Don't worry. I'll have cleaned the kitchen before they come."
              :marks="[]"
            /><span class="translation">別擔心，他們來之前我就會把廚房打掃好。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="規則和不規則的過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span
            ><NoteMark sentence="We'll have painted the room by Friday." :marks="[]" /><span
              class="translation"
              >到星期五我們就把房間漆好了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span
            ><NoteMark
              sentence="She'll have written three chapters by the summer."
              :marks="[]"
            /><span class="translation">到夏天，她就已經寫好三章了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="By ten I will have ate dinner."
        right="By ten I will have eaten dinner."
        :fix="['eaten']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面的 have 用原形" mark="will">
      <NoteFix
        wrong="He will has finished the work by noon."
        right="He will have finished the work by noon."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成式是 will have 加過去分詞" mark="will have">
      <NoteFix
        wrong="By next week we will finished the project."
        right="By next week we will have finished the project."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成式說最晚在那個時間點完成，用 by" mark="by">
      <NoteFix
        wrong="I will have read the book until Monday."
        right="I will have read the book by Monday."
        :fix="['by']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
