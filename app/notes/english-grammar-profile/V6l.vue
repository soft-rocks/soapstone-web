<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-supposed-to-hearsay, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + supposed to + be + 形容詞 / 名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be supposed to</span>
          <span>聽說、大家都說。</span>
        </div>
        <div>
          <span class="term">be / 原形動詞</span>
          <span>傳聞中現在的狀態或習慣。</span>
        </div>
        <div>
          <span class="term">have + 過去分詞</span>
          <span>傳聞中過去發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="傳聞中過去的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She is supposed to have married three times."
              :marks="['supposed to have']"
            /><span class="translation">聽說她結過三次婚。</span></span
          >
        </div>
      </div>
      <p class="remark">說過去發生的事，用 supposed to have 加過去分詞。</p>
    </NoteSlide>
    <NoteSlide title="和規定的 be supposed to 比較" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">傳聞</span>
          <span
            ><NoteMark sentence="The restaurant is supposed to be good." :marks="['be']" /><span
              class="translation"
              >聽說那家餐廳很好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">規定</span>
          <span
            ><NoteMark sentence="You're supposed to book a table." :marks="[]" /><span
              class="translation"
              >你應該先訂位。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">看上下文分辨。傳聞的說法後面常接 be 加形容詞。</p>
    </NoteSlide>
    <NoteSlide title="傳聞中過去的事，用 to have 加過去分詞">
      <NoteFix
        wrong="He is supposed to won the lottery."
        right="He is supposed to have won the lottery."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="這個片語是 be supposed to，supposed 要有 -d" mark="supposed">
      <NoteFix
        wrong="The film is suppose to be funny."
        right="The film is supposed to be funny."
        :fix="['supposed']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞，接形容詞時要用 be" mark="to">
      <NoteFix
        wrong="The lake is supposed to very beautiful."
        right="The lake is supposed to be very beautiful."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
