<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-common-nouns-681, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前面有限定詞，design 和 rest 就是名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You just have to send me', kind: 'dim' },
          { t: 'your design', role: '限定詞 + 名詞', kind: 'key' },
          { t: 'and I\'ll do', kind: 'dim' },
          { t: 'the rest.', role: '限定詞 + 名詞', kind: 'key' },
        ]"
      />
      <p class="translation">你只要把你的設計寄給我，剩下的我來處理。</p>
    </NoteSlide>

    <NoteSlide title="有些名詞和動詞同形" mark="design">
      <div class="rows is-labeled">
        <div>
          <span class="term">design</span>
          <span
            ><NoteMark sentence="I like the design of your website." :marks="['the design']" /><span
              class="translation"
              >我喜歡你網站的設計。</span
            ></span
          >
        </div>
        <div>
          <span class="term">damage</span>
          <span
            ><NoteMark sentence="The storm caused a lot of damage." :marks="['damage']" /><span
              class="translation"
              >暴風雨造成很多損害。</span
            ></span
          >
        </div>
        <div>
          <span class="term">visit</span>
          <span
            ><NoteMark sentence="Thanks for your visit." :marks="['your visit']" /><span
              class="translation"
              >謝謝你來訪。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="抽象名詞指看不到的東西，有些是不可數名詞" mark="rest">
      <div class="rows is-labeled">
        <div>
          <span class="term">抽象名詞</span>
          <span>advantage, experience, opportunity, relationship</span>
        </div>
        <div>
          <span class="term">不可數</span>
          <span>advice, damage, information</span>
        </div>
      </div>
      <p class="remark">不可數名詞不加 <code>a</code>，也不加 <code>-&#x2060;s</code>。</p>
    </NoteSlide>

    <NoteSlide title="advice 是不可數名詞，不加 a">
      <NoteFix
        wrong="Can I give you an advice?"
        right="Can I give you some advice?"
        fix="some advice"
      />
    </NoteSlide>

    <NoteSlide title="說損害時，damage 不加 -&#x2060;s">
      <NoteFix
        wrong="The fire caused a lot of damages."
        right="The fire caused a lot of damage."
        fix="damage"
      />
    </NoteSlide>

    <NoteSlide title="rest 指剩下的部分時，前面要有 the" mark="the rest">
      <NoteFix
        wrong="I'll eat half now and rest later."
        right="I'll eat half now and the rest later."
        fix="the rest"
      />
    </NoteSlide>

    <NoteSlide title="your 後面接名詞 health，不接形容詞" mark="your design">
      <NoteFix
        wrong="Swimming is good for your healthy."
        right="Swimming is good for your health."
        fix="health"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
