<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-by-plural, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="by ourselves 說沒有別人在場">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'A friend of mine and I', role: '主詞' },
          { t: 'are planning to spend a short holiday', kind: 'dim' },
          { t: 'by ourselves.', role: '就我們兩個', kind: 'key' },
        ]"
      />
      <p class="translation">我跟我的一個朋友打算就我們兩個去度個短假。</p>
      <p class="remark"><code>on our own</code> 意思一樣，可以互換。</p>
    </NoteSlide>

    <NoteSlide title="by 加反身代名詞說沒有別人在場，或沒有別人幫忙" mark="by ourselves.">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有別人在場</span>
          <span
            ><NoteMark
              sentence="We'd like to sit by ourselves, if that's OK."
              :marks="['by ourselves,']"
            /><span class="translation">如果可以的話，我們想自己坐一桌。</span></span
          >
        </div>
        <div>
          <span class="term">沒有別人幫忙</span>
          <span
            ><NoteMark
              sentence="Did you kids make this cake by yourselves?"
              :marks="['by yourselves?']"
            /><span class="translation">孩子們，這個蛋糕是你們自己做的嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是複數的東西，by themselves 說東西自己動起來" mark="by ourselves.">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark
              sentence="The doors open by themselves when a train arrives."
              :marks="['by themselves']"
            /><span class="translation">列車進站時，門會自己打開。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="by 後面用反身代名詞，不用受格" mark="ourselves.">
      <NoteFix wrong="We did it all by us." right="We did it all by ourselves." fix="ourselves." />
    </NoteSlide>

    <NoteSlide title="正確的形式是 themselves">
      <NoteFix
        wrong="The kids went to the park by theirselves."
        right="The kids went to the park by themselves."
        fix="themselves."
      />
    </NoteSlide>

    <NoteSlide title="對兩個人以上說話，用 yourselves">
      <NoteFix
        wrong="You two can't lift that by yourself."
        right="You two can't lift that by yourselves."
        fix="yourselves."
      />
    </NoteSlide>

    <NoteSlide title="說法是 by ourselves 或 on our own" mark="by ourselves.">
      <NoteFix
        wrong="We travelled around Japan by our own."
        right="We travelled around Japan by ourselves."
        fix="by ourselves."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
