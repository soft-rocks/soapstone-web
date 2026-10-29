<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-this-one-that-one-substitution, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this one 代替單數名詞" mark="this one">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… wear', kind: 'dim' },
          { t: 'dresses,', role: '前面的名詞', kind: 'key' },
          { t: 'but I had to buy', kind: 'dim' },
          { t: 'this one', role: '= this dress', kind: 'key' },
        ]"
      />
      <p class="translation">我平常不太穿洋裝，可是我得買這件，因為我要參加一場歌唱比賽。</p>
    </NoteSlide>

    <NoteSlide title="this one 和 that one" mark="this one">
      <div class="rows is-labeled">
        <div>
          <span class="term">近的東西</span>
          <span
            ><NoteMark
              sentence="My phone is old. I want to buy this one."
              :marks="['phone', 'this one.']"
            /><span class="translation">我的手機很舊了，我想買這支。</span></span
          >
        </div>
        <div>
          <span class="term">遠的東西</span>
          <span
            ><NoteMark
              sentence="Which car is yours? Is it that one over there?"
              :marks="['car', 'that one']"
            /><span class="translation">哪一輛車是你的？是那邊那輛嗎？</span></span
          >
        </div>
        <div>
          <span class="term">對方說過的</span>
          <span
            ><NoteMark
              sentence='"You should try the new café." "I&apos;ve been to that one."'
              :marks="['café.', 'that one.']"
            /><span class="translation"
              >「你應該去試試新開的咖啡店。」「那家我去過了。」</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面的名詞" mark="dresses,">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數的其中一個</span>
          <span
            ><NoteMark
              sentence="I don't usually eat sweets, but I'll try this one."
              :marks="['sweets,', 'this one.']"
            /><span class="translation">我平常不太吃甜食，不過這個我要嚐嚐看。</span></span
          >
        </div>
        <div>
          <span class="term">有形容詞</span>
          <span
            ><NoteMark sentence="I like that red one." :marks="['that red one.']" /><span
              class="translation"
              >我喜歡那個紅色的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="另一個東西用 that one" mark="this one">
      <NoteFix
        wrong="This bag is too small. Can I see it on the top shelf?"
        right="This bag is too small. Can I see that one on the top shelf?"
        fix="that one"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 one" mark="this one">
      <NoteFix
        wrong="I don't like this music. Can we listen to that one?"
        right="I don't like this music. Can we listen to something else?"
        fix="something else?"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞用 those" mark="this one">
      <NoteFix
        wrong="I need new shoes. I really like that one in the window."
        right="I need new shoes. I really like those in the window."
        fix="those"
      />
    </NoteSlide>

    <NoteSlide title="one：任何一個">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I need', kind: 'dim' },
          { t: 'a pen.', role: '前面的名詞', kind: 'key' },
          { t: 'Can I borrow', kind: 'dim' },
          { t: 'one?', role: '任何一支', kind: 'key' },
        ]"
      />
      <p class="translation">我需要一支筆，可以借我一支嗎？</p>
    </NoteSlide>

    <NoteSlide title="the one + 說明">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Which coat is yours?', kind: 'dim' },
          { t: 'The one', kind: 'key' },
          { t: 'with the black buttons.', role: '說明' },
        ]"
      />
      <p class="translation">哪一件外套是你的？有黑色扣子的那件。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
