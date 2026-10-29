<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-606, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + won't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Don\'t worry,', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'won\'t', kind: 'key', ring: true },
          { t: 'need', role: '原形動詞' },
          { t: 'anything apart from some pencils and your art book.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="won't、will not、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">won't</span>
          <span>will not 的縮寫。口語常用。</span>
        </div>
        <div>
          <span class="term">will not</span>
          <span>比較正式，或要強調的時候用。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="讓對方放心">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Don't worry, it won't take long." :marks="[]" /><span
              class="translation"
              >別擔心，不會花很久。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Don't worry, … won't … 常用來讓對方放心。</p>
    </NoteSlide>
    <NoteSlide title="I hope it will not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I hope it won't rain tomorrow."
              :marks="['I hope it won\'t']"
            /><span class="translation">我希望明天不會下雨。</span></span
          >
        </div>
      </div>
      <p class="remark">I hope it will not 或 I hope it won't 說希望某件事不會發生。</p>
    </NoteSlide>
    <NoteSlide title="will 的否定是 will not 或 won't" mark="won't">
      <NoteFix
        wrong="You don't will need a coat."
        right="You won't need a coat."
        :fix="['won\'t']"
      />
    </NoteSlide>
    <NoteSlide title="will not 的縮寫是 won't" mark="won't">
      <NoteFix wrong="It willn't be cold." right="It won't be cold." :fix="['won\'t']" />
    </NoteSlide>
    <NoteSlide title="won't 後面直接接原形動詞" mark="won't">
      <NoteFix wrong="We won't to be late." right="We won't be late." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
