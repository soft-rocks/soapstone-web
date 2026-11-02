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
    <NoteSlide title="won't 後面接原形動詞，說以後不會發生的事" mark="won't">
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
      <p class="translation">別擔心，你除了幾支鉛筆和你的美術本，什麼都不需要。</p>
    </NoteSlide>
    <NoteSlide title="won't 說話時常用，will not 比較正式" mark="won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">won't</span>
          <span
            ><NoteMark
              sentence="Don't worry about the dog. He won't bite you."
              :marks="['won\'t']"
            /><span class="translation">別擔心那隻狗。牠不會咬你。</span></span
          >
        </div>
        <div>
          <span class="term">will not</span>
          <span
            ><NoteMark
              sentence="The library will not lend books to people without a card."
              :marks="['will not']"
            /><span class="translation">圖書館不會把書借給沒有借書證的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Don't worry 加 won't 讓對方放心" mark="won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Don't worry, the bus ride won't take long."
              :marks="['Don\'t worry,', 'won\'t']"
            /><span class="translation">別擔心，坐公車不會花很久。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I hope 加 won't 說希望不會發生的事" mark="won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I hope it won't rain tomorrow."
              :marks="['I hope', 'won\'t']"
            /><span class="translation">我希望明天不會下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 的否定是 will not 或 won't" mark="won't">
      <NoteFix
        wrong="You don't will need your winter boots in Spain."
        right="You won't need your winter boots in Spain."
        :fix="['won\'t']"
      />
    </NoteSlide>
    <NoteSlide title="will not 的縮寫是 won't" mark="won't">
      <NoteFix wrong="It willn't be cold." right="It won't be cold." :fix="['won\'t']" />
    </NoteSlide>
    <NoteSlide title="won't 後面直接接原形動詞" mark="won't">
      <NoteFix
        wrong="We won't to be late for the wedding."
        right="We won't be late for the wedding."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
