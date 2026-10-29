<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-with-determiners-quantity, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不可數名詞用數量詞說數量">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'m going to find', kind: 'dim' },
          { t: 'more', role: '數量詞', kind: 'key' },
          { t: 'information', role: '不可數名詞' },
          { t: 'about the new art class.', kind: 'dim' },
        ]"
      />
      <p class="translation">我要去多找一些新美術課的資料。</p>
    </NoteSlide>

    <NoteSlide title="some 用在肯定句，any 用在否定句，a lot of 和 more 說量多" mark="more">
      <div class="rows is-labeled">
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark sentence="I need to do some homework." :marks="['some']" /><span
              class="translation"
              >我得寫一些功課。</span
            ></span
          >
        </div>
        <div>
          <span class="term">any</span>
          <span
            ><NoteMark sentence="I haven't got any money." :marks="['any']" /><span
              class="translation"
              >我一毛錢都沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a lot of</span>
          <span
            ><NoteMark sentence="We've had a lot of fun." :marks="['a lot of']" /><span
              class="translation"
              >我們玩得很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">more</span>
          <span
            ><NoteMark sentence="Can I have more rice?" :marks="['more']" /><span
              class="translation"
              >我可以再多吃點飯嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 much，不用 many" mark="more">
      <NoteFix wrong="I don't have many time." right="I don't have much time." fix="much" />
    </NoteSlide>

    <NoteSlide title="否定句用 any" mark="more">
      <NoteFix wrong="I haven't got some money." right="I haven't got any money." fix="any" />
    </NoteSlide>

    <NoteSlide title="a lot 放在名詞前面要加 of">
      <NoteFix wrong="We had a lot fun." right="We had a lot of fun." fix="of" />
    </NoteSlide>

    <NoteSlide title="advice 不能用數字數，也不加 -&#x2060;s" mark="information">
      <NoteFix
        wrong="She gave me two advices."
        right="She gave me some advice."
        fix="some advice"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
