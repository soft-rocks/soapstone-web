<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must.">
      <div class="rows is-labeled">
        <div>
          <span class="term">must</span>
          <span>後面的動詞和受詞省略。</span>
        </div>
        <div>
          <span class="term">省略的部分</span>
          <span>前面已經說過，聽的人知道是什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回答問題" mark="must!">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Do I have to go?" "Yes, you must."'
              :marks="['Do I have to', 'must.']"
            /><span class="translation">「我一定要去嗎？」「對，你一定要。」</span></span
          >
        </div>
      </div>
      <p class="remark">回答 Do I have to …？ 或 Should I …？ 這類問題時，常只說 must。</p>
    </NoteSlide>
    <NoteSlide title="must 後面不接 to，直接結束句子" mark="must!">
      <NoteFix
        wrong='"Should I call her?" "Yes, you must to."'
        right='"Should I call her?" "Yes, you must."'
        :fix="['must.']"
      />
    </NoteSlide>
    <NoteSlide title="用 must 問，就用 must 回答" mark="must!">
      <NoteFix
        wrong='"Must I wear a tie?" "Yes, you do."'
        right='"Must I wear a tie?" "Yes, you must."'
        :fix="['must.']"
      />
    </NoteSlide>
    <NoteSlide title="must 不加 -s" mark="must!">
      <NoteFix
        wrong="She doesn't want to go, but she musts."
        right="She doesn't want to go, but she must."
        :fix="['must.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
