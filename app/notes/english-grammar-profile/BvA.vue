<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-non-finite-after-although-though, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="though 後面直接接過去分詞，省略了主詞和 be">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Jack,', role: '主詞' },
          { t: 'though disappointed,', role: 'though + 過去分詞', kind: 'key' },
          { t: 'respects the result.', role: '動詞' },
        ]"
      />
      <p class="translation">Jack 雖然很失望，還是尊重這個結果。</p>
      <p class="remark">
        <code>though disappointed</code> 等於 <code>though he is disappointed</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="子句可以放在句首，也可以放在主詞後面" mark="though disappointed,">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Although tired, she kept working until midnight."
              :marks="['Although tired,']"
            /><span class="translation">雖然很累，她還是工作到半夜。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="My grandfather, though ninety, still walks to the market every day."
              :marks="['though ninety,']"
            /><span class="translation">我爺爺雖然九十歲了，還是每天走路去市場。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="although 後面也可以接動詞-ing" mark="though">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="Although living abroad, he follows the news from home every day."
              :marks="['Although living']"
            /><span class="translation">雖然住在國外，他每天都關注家鄉的新聞。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="省略主詞和 be 的 although 子句不直接接名詞" mark="disappointed,">
      <NoteFix
        wrong="Although a busy week, I finished everything."
        right="Although busy all week, I finished everything."
        fix="busy all week,"
      />
    </NoteSlide>

    <NoteSlide title="省略的主詞要是主要子句的主詞" mark="Jack,">
      <NoteFix
        wrong="Though very expensive, I bought the coat."
        right="Though very expensive, the coat was worth it."
        fix="the coat"
      >
        很貴的是外套，不是 <code>I</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="一句話只用 though 或 but 其中一個">
      <NoteFix
        wrong="Though nervous, but he gave a great speech."
        right="Though nervous, he gave a great speech."
        fix="he gave"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
