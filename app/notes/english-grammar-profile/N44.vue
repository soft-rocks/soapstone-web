<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-reporting, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + said / told 人 / was told + (that) + 主詞 + was / were + going to + 原形動詞"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">said / told</span>
          <span>轉述用的動詞，用過去式。</span>
        </div>
        <div>
          <span class="term">was / were going to</span>
          <span>原本的 am / is / are going to 往過去移一格。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="時態怎麼變" mark="He">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark sentence='"I&apos;m going to arrive tomorrow."' :marks="[]" /><span
              class="translation"
              >我明天會到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="He said he was going to arrive the next day."
              :marks="['He']"
            /><span class="translation">他說他隔天會到。</span></span
          >
        </div>
      </div>
      <p class="remark">人稱也跟著改。I 變成 he 或 she，we 變成 they。</p>
    </NoteSlide>
    <NoteSlide title="轉述問句" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She asked me what I was going to do." :marks="['was']" /><span
              class="translation"
              >她問我要做什麼。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">原本的問句轉述時，主詞放在 was / were 前面。</p>
    </NoteSlide>
    <NoteSlide title="被動：was told" mark="was told">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We were told the shop was going to close."
              :marks="['were told']"
            /><span class="translation">有人告訴我們那家店要關了。</span></span
          >
        </div>
      </div>
      <p class="remark">不說是誰講的，用 was told 或 were told。這是被動句。</p>
    </NoteSlide>
    <NoteSlide title="轉述過去說的話，is going to 改成 was going to" mark="was going to">
      <NoteFix
        wrong="Yesterday he told me he is going to arrive tomorrow."
        right="Yesterday he told me he was going to arrive the next day."
        :fix="['was', 'the next day.']"
      />
    </NoteSlide>
    <NoteSlide title="told 後面要接聽話的人" mark="told">
      <NoteFix
        wrong="She told that she was going to leave."
        right="She told me that she was going to leave."
        :fix="['me']"
      />
    </NoteSlide>
    <NoteSlide title="轉述的問句不是疑問句，主詞放在 was 前面" mark="was">
      <NoteFix
        wrong="He asked me where was I going to stay."
        right="He asked me where I was going to stay."
        :fix="['I', 'going']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
