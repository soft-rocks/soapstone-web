<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-reports-of-statements, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + said / told + 人 + (that) + 主詞 + had + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">said / told</span>
          <span>轉述的動詞，用過去式。</span>
        </div>
        <div>
          <span class="term">had + 過去分詞</span>
          <span>轉述的內容裡更早發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="直接引述和間接引述">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark
              sentence='My flatmate called me from outside. "I have lost my keys," she said.'
              :marks="['have lost']"
            /><span class="translation">我室友從外面打給我。她說：「我把鑰匙弄丟了。」</span></span
          >
        </div>
        <div>
          <span class="term">間接</span>
          <span
            ><NoteMark
              sentence="My flatmate called me from outside. She said she had lost her keys."
              :marks="['had lost']"
            /><span class="translation">我室友從外面打給我。她說她把鑰匙弄丟了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="what had happened">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The little girl was crying at the bus stop. She tried to explain what had happened."
              :marks="['what had happened.', 'explain']"
            /><span class="translation">那個小女孩在公車站哭。她試著解釋發生了什麼事。</span></span
          >
        </div>
      </div>
      <p class="remark">what had happened 常跟 explain、know、find out 一起用。</p>
    </NoteSlide>
    <NoteSlide title="轉述過去更早的事，用 had 加過去分詞" mark="had">
      <NoteFix
        wrong="My aunt said that she has lost her passport the day before."
        right="My aunt said that she had lost her passport the day before."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="told 後面要接人">
      <NoteFix
        wrong="My brother told that he had finished the painting."
        right="My brother told me that he had finished the painting."
        :fix="['me']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="My friends said they had saw the film twice."
        right="My friends said they had seen the film twice."
        :fix="['seen']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
