<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-ellipsis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 過去式 + … + and + had + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span>連接兩個子句。</span>
        </div>
        <div>
          <span class="term">省略的主詞</span>
          <span>和前面的主詞一樣。</span>
        </div>
        <div>
          <span class="term">had + 過去分詞</span>
          <span>更早發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="介紹人物的背景">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She felt stronger and had lost her fear." :marks="[]" /><span
              class="translation"
              >她覺得比較堅強了，也不再害怕了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型常用在故事裡，一次說出人物在故事裡的樣子和更早的經歷。</p>
    </NoteSlide>
    <NoteSlide title="用 and 連接過去完成式" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Her friends had come to visit and had brought a cake."
              :marks="['had', 'and', 'had#2']"
            /><span class="translation">她的朋友們來看她，還帶了一個蛋糕。</span></span
          >
        </div>
      </div>
      <p class="remark">兩個 had 加過去分詞也可以用 and 連起來，第二個主詞省略。</p>
    </NoteSlide>
    <NoteSlide title="and 後面的過去完成式要保留 had" mark="and">
      <NoteFix
        wrong="He was famous and written ten books."
        right="He was famous and had written ten books."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="She felt better and had forgot her fear."
        right="She felt better and had forgotten her fear."
        :fix="['forgotten']"
      />
    </NoteSlide>
    <NoteSlide title="write 的過去分詞是 written" mark="written">
      <NoteFix
        wrong="Simon was famous and had wrote ten books."
        right="Simon was famous and had written ten books."
        :fix="['written']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
