<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis-547, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Must have + 過去分詞 …">
      <div class="rows is-labeled">
        <div>
          <span class="term">省略的主詞</span>
          <span>常是 It、He、She、I、They。</span>
        </div>
        <div>
          <span class="term">must have</span>
          <span>過去一定。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>推論過去發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="寫心裡的想法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He looked at the empty plate. Must have been the dog."
              :marks="[]"
            /><span class="translation">他看著空盤子。一定是狗吃的。</span></span
          >
        </div>
      </div>
      <p class="remark">故事常用這種句子寫人物的想法。讀者從上下文知道省略的主詞。</p>
    </NoteSlide>
    <NoteSlide title="口語和訊息">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Sorry I didn't call. Must have fallen asleep." :marks="[]" /><span
              class="translation"
              >抱歉沒打電話。我一定是睡著了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">朋友之間的口語和訊息也常這樣說。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix wrong="Must have fell asleep." right="Must have fallen asleep." :fix="['fallen']" />
    </NoteSlide>
    <NoteSlide title="只能省略主詞，不能省略 have" mark="have">
      <NoteFix
        wrong="Must forgotten my keys."
        right="Must have forgotten my keys."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形 have" mark="Must">
      <NoteFix wrong="Must had left early." right="Must have left early." :fix="['have']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
