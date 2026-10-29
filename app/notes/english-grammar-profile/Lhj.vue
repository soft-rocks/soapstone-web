<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-emphasis-544, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I must say + (that) + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">I must say</span>
          <span>我必須說、說真的。強調自己的看法。</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>看法，常是稱讚。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的歡迎和感謝" mark="I must say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I must say that we are delighted to have you here."
              :marks="['I must say']"
            /><span class="translation">我必須說，我們非常高興您能來這裡。</span></span
          >
        </div>
      </div>
      <p class="remark">I must say 常用在正式的演講，表達歡迎或感謝。</p>
    </NoteSlide>
    <NoteSlide title="放在句尾" mark="I must say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="That's a lovely dress, I must say."
              :marks="['I must say.']"
            /><span class="translation">說真的，那件洋裝真漂亮。</span></span
          >
        </div>
      </div>
      <p class="remark">口語裡 I must say 也可以放在句尾，前面加逗號。</p>
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="I must to say the food was great."
        right="I must say the food was great."
        :fix="['say']"
      />
    </NoteSlide>
    <NoteSlide title="say 後面不直接接人" mark="say">
      <NoteFix
        wrong="I must say you that it was superb."
        right="I must say that it was superb."
        :fix="['that']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix
        wrong="I must saying, you look wonderful."
        right="I must say, you look wonderful."
        :fix="['say,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
