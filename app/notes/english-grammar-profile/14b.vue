<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative-376, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will not have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The best time for me to visit Scotland would be July, because', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'will not have', kind: 'key', ring: true },
          { t: 'finished', role: '過去分詞' },
          { t: 'my exams by June.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will not / won't、have + 過去分詞" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">will not / won't</span>
          <span>否定。not 放在 will 後面、have 前面。</span>
        </div>
        <div>
          <span class="term">have + 過去分詞</span>
          <span>到那個時間點還沒完成的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="還沒完成多少">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We won't have done more than forty kilometres by lunch."
              :marks="['more than']"
            /><span class="translation">到午餐時間，我們騎的路還不會超過四十公里。</span></span
          >
        </div>
      </div>
      <p class="remark">否定句也可以說到那個時間點，數量還不到多少。常接 more than。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 will 後面、have 前面" mark="will">
      <NoteFix
        wrong="I will have not finished by June."
        right="I will not have finished by June."
        :fix="['not', 'finished']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="They won't have went home by then."
        right="They won't have gone home by then."
        :fix="['gone']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成式的否定用 won't have，不用 don't have">
      <NoteFix
        wrong="By Friday I don't have finished the report."
        right="By Friday I won't have finished the report."
        :fix="['won\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
