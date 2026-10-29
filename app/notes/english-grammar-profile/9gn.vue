<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-with-to-infinitive-specifying, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="something + to + 原形動詞" mark="something to drink.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Please bring', kind: 'dim' },
          { t: 'something', role: '東西', kind: 'key' },
          { t: 'to drink.', role: '用途', kind: 'key' },
        ]"
      />
      <p class="translation">請帶點喝的東西來。</p>
    </NoteSlide>

    <NoteSlide title="常用的組合" mark="to drink.">
      <div class="rows is-labeled">
        <div>
          <span class="term">吃喝</span>
          <span
            ><NoteMark sentence="I'm hungry. Is there anything to eat?" :marks="['to eat?']" /><span
              class="translation"
              >我餓了。有什麼可以吃的嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">讀、穿</span>
          <span
            ><NoteMark
              sentence="I need something to read on the train."
              :marks="['to read']"
            /><span class="translation">我需要在火車上看的東西。</span></span
          >
        </div>
        <div>
          <span class="term">做</span>
          <span
            ><NoteMark sentence="The children want something to do." :marks="['to do.']" /><span
              class="translation"
              >孩子們想找點事做。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="something 和 anything" mark="something">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="I bought something to wear for the party."
              :marks="['something']"
            /><span class="translation">我買了一件派對要穿的衣服。</span></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="We didn't bring anything to drink." :marks="['anything']" /><span
              class="translation"
              >我們沒帶喝的東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用途用 to，不用 for" mark="to drink.">
      <NoteFix
        wrong="Can you get me something for drink?"
        right="Can you get me something to drink?"
        fix="to drink?"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="drink.">
      <NoteFix
        wrong="We bought something to eating for the trip."
        right="We bought something to eat for the trip."
        fix="eat"
      />
    </NoteSlide>

    <NoteSlide title="用筆來寫：write with">
      <NoteFix
        wrong="Can I borrow something to write?"
        right="Can I borrow something to write with?"
        fix="with?"
      />
    </NoteSlide>

    <NoteSlide title="否定句用 anything">
      <NoteFix
        wrong="I don't have something to wear to the wedding."
        right="I don't have anything to wear to the wedding."
        fix="anything"
      />
    </NoteSlide>

    <NoteSlide title="something + 形容詞 + to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do you want', kind: 'dim' },
          { t: 'something', role: '東西', kind: 'key' },
          { t: 'cold', role: '形容詞', kind: 'key' },
          { t: 'to drink?', role: '用途' },
        ]"
      />
      <p class="translation">你要喝點冰的嗎？</p>
    </NoteSlide>

    <NoteSlide title="something 也可以當不定詞的受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'d like to read', role: '動詞 + 不定詞', kind: 'key' },
          { t: 'something', role: '受詞', kind: 'key' },
          { t: 'before bed.', kind: 'dim' },
        ]"
      />
      <p class="translation">睡前我想讀點東西。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
