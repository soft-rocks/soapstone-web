<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-background-events-756, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had been + -ing + (for + 時間), + so + 主詞 + 過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">had been + -&#x2060;ing</span>
          <span>背景，已經持續一段時間的事。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>主要的事，在背景之後發生。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="被打斷">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I had been watching TV for six hours when my mum switched it off."
              :marks="[]"
            /><span class="translation"
              >我已經看了六個小時的電視，這時我媽媽把它關掉了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">had been + -&#x2060;ing … when … 說一件持續的事被另一件事打斷。</p>
    </NoteSlide>
    <NoteSlide title="說結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He had been running, so he was out of breath." :marks="[]" /><span
              class="translation"
              >他一直在跑，所以喘不過氣。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">had been + -&#x2060;ing, so … 說持續的事帶來的結果。</p>
    </NoteSlide>
    <NoteSlide title="突然發生的主要的事用過去式">
      <NoteFix
        wrong="I had been reading when the phone had been ringing."
        right="I had been reading when the phone rang."
        :fix="['rang.']"
      />
    </NoteSlide>
    <NoteSlide title="been 前面要有 had" mark="been">
      <NoteFix
        wrong="She been working for hours when I arrived."
        right="She had been working for hours when I arrived."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="when 後面的主要事件用過去式">
      <NoteFix
        wrong="We had been driving for an hour when the car stopping."
        right="We had been driving for an hour when the car stopped."
        :fix="['stopped.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
