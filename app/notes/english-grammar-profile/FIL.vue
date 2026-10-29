<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-imagined-situations-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + had + 過去分詞, + 主詞 + would (not) have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if … had</span>
          <span>和過去事實相反的條件。</span>
        </div>
        <div>
          <span class="term">would have</span>
          <span>想像中過去的結果。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="If I were in your shoes">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If I were in your shoes, I would have chosen the city school."
              :marks="['If I were in your shoes,']"
            /><span class="translation">如果我是你，我會選城裡那所學校。</span></span
          >
        </div>
      </div>
      <p class="remark">
        If I were in your shoes 意思是「如果我是你」，說自己在對方的情況下會怎麼做。
      </p>
    </NoteSlide>
    <NoteSlide title="想像的經歷">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The next week I would have flown to Miami."
              :marks="['would have']"
            /><span class="translation">下個星期我本來會飛去邁阿密。</span></span
          >
        </div>
      </div>
      <p class="remark">would have 也可以說想像中原本會發生的經歷。</p>
    </NoteSlide>
    <NoteSlide title="if 子句用 had 加過去分詞" mark="had">
      <NoteFix
        wrong="If you would have helped me, I would have finished."
        right="If you had helped me, I would have finished."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="I wouldn't have knew how to do it."
        right="I wouldn't have known how to do it."
        :fix="['known']"
      />
    </NoteSlide>
    <NoteSlide title="過去分詞前面要有 had" mark="had">
      <NoteFix
        wrong="If I gone with you, I would have enjoyed it."
        right="If I had gone with you, I would have enjoyed it."
        :fix="['had']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
