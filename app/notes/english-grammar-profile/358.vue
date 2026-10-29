<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-pre-modifying, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="限定詞 + 修飾語 + one" mark="the blue one.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I love blue, so I bought', kind: 'dim' },
          { t: 'the', role: '限定詞' },
          { t: 'blue', role: '修飾語' },
          { t: 'one.', role: '代替背包', kind: 'key' },
        ]"
      />
      <p class="translation">我很愛藍色，所以我買了藍色那一個。</p>
    </NoteSlide>

    <NoteSlide title="常用的限定詞" mark="the">
      <div class="rows is-labeled">
        <div>
          <span class="term">a / an</span>
          <span
            ><NoteMark
              sentence="My phone is broken. I need a new one."
              :marks="['a new one.']"
            /><span class="translation">我的手機壞了，我需要一支新的。</span></span
          >
        </div>
        <div>
          <span class="term">the</span>
          <span
            ><NoteMark
              sentence="I don't want the big box. Give me the small one."
              :marks="['the small one.']"
            /><span class="translation">我不要大箱子，給我小的那個。</span></span
          >
        </div>
        <div>
          <span class="term">所有格</span>
          <span
            ><NoteMark
              sentence="This bike is nice, but I prefer my old one."
              :marks="['my old one.']"
            /><span class="translation">這台腳踏車不錯，可是我比較喜歡我那台舊的。</span></span
          >
        </div>
        <div>
          <span class="term">this / that</span>
          <span
            ><NoteMark sentence="I'll have this red one, please." :marks="['this red one,']" /><span
              class="translation"
              >我要這個紅色的，謝謝。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的修飾語" mark="blue one.">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span><NoteMark sentence="a cheap one" :marks="['cheap']" /></span>
        </div>
        <div>
          <span class="term">比較級、最高級</span>
          <span><NoteMark sentence="the cheapest one" :marks="['cheapest']" /></span>
        </div>
        <div>
          <span class="term">other</span>
          <span><NoteMark sentence="the other one" :marks="['other']" /></span>
        </div>
        <div>
          <span class="term">favourite</span>
          <span><NoteMark sentence="my favourite one" :marks="['favourite']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞後面接 one" mark="one.">
      <NoteFix
        wrong="My coat is too small, so I need a new."
        right="My coat is too small, so I need a new one."
        fix="one."
      />
    </NoteSlide>

    <NoteSlide title="最前面要有限定詞" mark="the">
      <NoteFix
        wrong="I don't like this hat. I want green one."
        right="I don't like this hat. I want the green one."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="母音前面用 an">
      <NoteFix
        wrong="My car is too slow. I want to buy a electric one."
        right="My car is too slow. I want to buy an electric one."
        fix="an"
      />
    </NoteSlide>

    <NoteSlide title="複數用 ones">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I don\'t like my old shoes. I want', kind: 'dim' },
          { t: 'some new ones.', role: '代替複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我不喜歡我的舊鞋，我想買新的。</p>
    </NoteSlide>

    <NoteSlide title="沒有修飾語用 mine">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This isn\'t my umbrella.', kind: 'dim' },
          { t: 'Mine', role: '不寫 my one', kind: 'key' },
          { t: 'is the black one.', kind: 'dim' },
        ]"
      />
      <p class="translation">這不是我的傘，我的是黑色那把。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
