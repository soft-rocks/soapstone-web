<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-predictions-with-be, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + going to be + 形容詞 / 名詞" mark="a nice day.">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to</span>
          <span>表示預測。</span>
        </div>
        <div>
          <span class="term">be</span>
          <span>going to 後面的動詞是 be。</span>
        </div>
        <div>
          <span class="term">形容詞 / 名詞</span>
          <span>預測的情況，像 fantastic、hot、a nice day、great fun。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 後面接形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It's going to be fantastic." :marks="[]" /><span
              class="translation"
              >一定會很棒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 後面接名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It's going to be great fun." :marks="[]" /><span
              class="translation"
              >一定會很好玩。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="根據眼前的情況預測">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Look at those clouds. It's going to be a wet afternoon."
              :marks="[]"
            /><span class="translation">你看那些雲，下午會下雨。</span></span
          >
        </div>
      </div>
      <p class="remark">說話者看到眼前的情況，預測接下來會怎樣。</p>
    </NoteSlide>
    <NoteSlide title="going to 後面接形容詞時，中間要有 be" mark="going to">
      <NoteFix wrong="It's going to fantastic." right="It's going to be fantastic." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="to 後面的 be 用原形" mark="to">
      <NoteFix
        wrong="The party is going to is great."
        right="The party is going to be great."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="going to 前面要有 am、is 或 are" mark="going to">
      <NoteFix
        wrong="This film going to be boring."
        right="This film is going to be boring."
        :fix="['is']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
