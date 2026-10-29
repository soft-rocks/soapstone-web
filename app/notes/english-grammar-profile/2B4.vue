<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-i-have-to-admit, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I + have to + admit + (that) + 子句" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">I have to admit</span>
          <span>我必須承認、老實說。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>承認的事。that 可以省略。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="承認自己的缺點">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I have to admit that I watch too much TV." :marks="[]" /><span
              class="translation"
              >我必須承認，我看太多電視了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個說法常用來承認自己的缺點或不太好意思說的事。</p>
    </NoteSlide>
    <NoteSlide title="承認別人說得對">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I have to admit, the film was better than I expected."
              :marks="[]"
            /><span class="translation">我必須承認，那部電影比我想的好看。</span></span
          >
        </div>
      </div>
      <p class="remark">也常用來承認別人比自己想的好。</p>
    </NoteSlide>
    <NoteSlide title="admit 後面直接接 that 子句" mark="admit">
      <NoteFix
        wrong="I have to admit to that I was wrong."
        right="I have to admit that I was wrong."
        :fix="['that']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="I have to admitting that I was late."
        right="I have to admit that I was late."
        :fix="['admit']"
      />
    </NoteSlide>
    <NoteSlide title="這個說法是 have to admit" mark="have to admit">
      <NoteFix
        wrong="I have admit that I forgot."
        right="I have to admit that I forgot."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
