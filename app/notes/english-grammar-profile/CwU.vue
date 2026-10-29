<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-polite-request, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="(稱呼,) + may I + 原形動詞 + …？" mark="Sir,">
      <div class="rows is-labeled">
        <div>
          <span class="term">稱呼</span>
          <span>Sir、Madam、Mr Smith 這類稱呼常放在前面。</span>
        </div>
        <div>
          <span class="term">may I</span>
          <span>我可以……嗎？</span>
        </div>
        <div>
          <span class="term">please</span>
          <span>放在句尾，讓請求更有禮貌。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="打電話">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="May I speak to Miss Wright, please?"
              :marks="['May I speak to']"
            /><span class="translation">請問懷特小姐在嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">打電話找人時，常用 May I speak to。</p>
    </NoteSlide>
    <NoteSlide title="問服務和優惠">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="May I ask if the offer is still available?"
              :marks="['May I ask']"
            /><span class="translation">請問這個優惠還有效嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">寫信給商店或公司時，常用 May I ask 問問題。</p>
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix wrong="May I coming in?" right="May I come in?" :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="找人說話用 speak to">
      <NoteFix
        wrong="May I speak Miss Wright, please?"
        right="May I speak to Miss Wright, please?"
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="主詞用 I" mark="I">
      <NoteFix wrong="May me leave the room?" right="May I leave the room?" :fix="['I']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
