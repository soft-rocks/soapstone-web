<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reported-speech-634, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + said + (that) + 主詞 + would + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">said / told</span>
          <span>轉述的動詞，用過去式。</span>
        </div>
        <div>
          <span class="term">would</span>
          <span>原本的 will。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>轉述的內容。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 變成 would">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接引述</span>
          <span
            ><NoteMark sentence='"I will come," she said.' :marks="[]" /><span class="translation"
              >她說：「我會來。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接引述</span>
          <span
            ><NoteMark sentence="She said she would come." :marks="[]" /><span class="translation"
              >她說她會來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說話者的預測" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He told me I would like it, and he was right!"
              :marks="['would']"
            /><span class="translation">他告訴我我會喜歡，他說對了！</span></span
          >
        </div>
      </div>
      <p class="remark">轉述別人過去的預測時也用 would。</p>
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix
        wrong="She said she would comes on Friday."
        right="She said she would come on Friday."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="told 後面要接人">
      <NoteFix
        wrong="He told that he would call."
        right="He told me that he would call."
        :fix="['me']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix
        wrong="They said they would to help us."
        right="They said they would help us."
        :fix="['help']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
