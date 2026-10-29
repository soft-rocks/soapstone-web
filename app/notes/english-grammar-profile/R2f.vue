<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-371, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will have been + 動詞-ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This summer,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'will have been', kind: 'key', ring: true },
          { t: 'working', role: '動詞-ing' },
          { t: 'for my company for three years.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、have、been" mark="for three years.">
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
          <span class="term">been</span>
          <span>be 的過去分詞。</span>
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span>一直在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="By ten, I'll have been driving for six hours." :marks="[]" /><span
              class="translation"
              >到十點，我就已經開了六個小時的車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面的 have 用原形" mark="will">
      <NoteFix
        wrong="She will has been working here for ten years."
        right="She will have been working here for ten years."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成進行式是 will have been 加動詞-ing" mark="will have been">
      <NoteFix
        wrong="By June we will have studying English for five years."
        right="By June we will have been studying English for five years."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞 been" mark="have">
      <NoteFix
        wrong="Next month I will have be living here for a year."
        right="Next month I will have been living here for a year."
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
