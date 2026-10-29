<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-after-if-clauses, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + had + 過去分詞, + 主詞 + would have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if + had + 過去分詞</span>
          <span>和過去事實相反的條件。</span>
        </div>
        <div>
          <span class="term">would have + 過去分詞</span>
          <span>想像中的結果。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="遺憾">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you had come with me, you would have been happy."
              :marks="[]"
            /><span class="translation">如果你跟我一起去，你會很開心。（可惜你沒去）</span></span
          >
        </div>
      </div>
      <p class="remark">這個句型常用來說遺憾。</p>
    </NoteSlide>
    <NoteSlide title="if 子句放在後面" mark="If">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would have stayed all night if the park hadn't closed."
              :marks="['if']"
            /><span class="translation">如果公園沒關門，我會待一整晚。</span></span
          >
        </div>
      </div>
      <p class="remark">if 子句可以放在句子後面。</p>
    </NoteSlide>
    <NoteSlide title="if 子句用 had 加過去分詞" mark="had">
      <NoteFix
        wrong="If the weather would have been better, we would have enjoyed it."
        right="If the weather had been better, we would have enjoyed it."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="說過去想像的情況用 had 加過去分詞" mark="had">
      <NoteFix
        wrong="If you came with me yesterday, you would have been happy."
        right="If you had come with me yesterday, you would have been happy."
        :fix="['had come']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="If I had went earlier, I would have seen her."
        right="If I had gone earlier, I would have seen her."
        :fix="['gone']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
