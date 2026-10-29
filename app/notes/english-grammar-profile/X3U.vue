<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-plural-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="some 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Near my home', role: '地點', kind: 'dim' },
          { t: 'there are', role: 'There are' },
          { t: 'some', role: 'some', kind: 'key' },
          { t: 'shops.', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我家附近有一些商店。</p>
    </NoteSlide>

    <NoteSlide title="some、數字、a lot of 和 lots of" mark="some shops">
      <div class="rows is-labeled">
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark sentence="Near my home there are some shops." :marks="['some']" /><span
              class="translation"
              >我家附近有一些商店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">數字</span>
          <span
            ><NoteMark sentence="My house has got three rooms." :marks="['three']" /><span
              class="translation"
              >我家有三個房間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a lot of</span>
          <span
            ><NoteMark sentence="I had a lot of friends in this town." :marks="['a lot of']" /><span
              class="translation"
              >我在這個鎮上有很多朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">lots of</span>
          <span
            ><NoteMark sentence="We have to write lots of things." :marks="['lots of']" /><span
              class="translation"
              >我們要寫很多東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="some 後面用 shops，不用 shop" mark="shops">
      <NoteFix
        wrong="There are some shop near my home."
        right="There are some shops near my home."
        fix="shops"
      />
    </NoteSlide>

    <NoteSlide title="two 以上接複數名詞" mark="some">
      <NoteFix
        wrong="My house has got three room."
        right="My house has got three rooms."
        fix="rooms"
      />
    </NoteSlide>

    <NoteSlide title="a lot 要加 of" mark="some">
      <NoteFix wrong="I have a lot friends." right="I have a lot of friends." fix="a lot of" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
