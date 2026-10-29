<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-uncountable-nouns, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="furniture 是總稱，不加 -&#x2060;s">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do you have', kind: 'dim' },
          { t: 'any', role: '疑問句用 any' },
          { t: 'furniture', role: '不可數名詞', kind: 'key' },
          { t: 'in this room?', kind: 'dim' },
        ]"
      />
      <p class="translation">你這個房間裡有家具嗎？</p>
    </NoteSlide>

    <NoteSlide title="不可數名詞有食物、抽象的東西和總稱" mark="furniture">
      <div class="rows is-labeled">
        <div>
          <span class="term">食物和飲料</span>
          <span>water, milk, bread, rice, food</span>
        </div>
        <div>
          <span class="term">抽象的東西</span>
          <span>music, time, homework, help, fun</span>
        </div>
        <div>
          <span class="term">總稱</span>
          <span>furniture, money, luggage, weather</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞動詞用單數，問數量用 how much" mark="any furniture">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數動詞</span>
          <span
            ><NoteMark sentence="The money is on the table." :marks="['is']" /><span
              class="translation"
              >錢在桌上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">how much</span>
          <span
            ><NoteMark sentence="How much time do we have?" :marks="['How much']" /><span
              class="translation"
              >我們有多少時間？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="help 是不可數名詞，不加 a">
      <NoteFix
        wrong="I need a help with my homework."
        right="I need some help with my homework."
        fix="some help"
      />
    </NoteSlide>

    <NoteSlide title="furniture 沒有複數形" mark="furniture">
      <NoteFix
        wrong="We bought some new furnitures."
        right="We bought some new furniture."
        fix="furniture"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞問數量用 how much">
      <NoteFix wrong="How many money do you have?" right="How much money do you have?" fix="much" />
    </NoteSlide>

    <NoteSlide title="不可數名詞當主詞，動詞用單數">
      <NoteFix wrong="The weather are cold today." right="The weather is cold today." fix="is" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
