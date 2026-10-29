<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-possession-with-s-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="擁有的人加 's，屬於他的東西放在後面">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I bought a red tie because next Sunday it will be', kind: 'dim' },
          { t: 'my father\'s', role: '名詞 + \'s', kind: 'key' },
          { t: 'birthday.', role: '名詞' },
        ]"
      />
      <p class="translation">我買了一條紅色領帶，因為下星期天是我爸爸的生日。</p>
    </NoteSlide>

    <NoteSlide title="my 說的是擁有的人，後面的名詞前面不加限定詞" mark="father's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'my sister\'s', role: '擁有的人', kind: 'key' },
          { t: 'jacket.', role: '不加 the 或 a' },
        ]"
      />
      <p class="translation">那是我姊姊的夾克。</p>
    </NoteSlide>

    <NoteSlide title="人名也加 's" mark="father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">Tom's</span>
          <span
            ><NoteMark sentence="Is this Tom's bag?" :marks="['Tom\'s']" /><span class="translation"
              >這是 Tom 的包包嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Anna's</span>
          <span
            ><NoteMark sentence="We're going to Anna's party tonight." :marks="['Anna\'s']" /><span
              class="translation"
              >我們今晚要去 Anna 的派對。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="擁有的人後面加 's" mark="father's">
      <NoteFix
        wrong="This is my brother bike."
        right="This is my brother's bike."
        fix="brother's"
      />
    </NoteSlide>

    <NoteSlide title="擁有的人放在前面，屬於他的東西放在後面" mark="birthday">
      <NoteFix
        wrong="I borrowed the car's my mum."
        right="I borrowed my mum's car."
        fix="my mum's car"
      />
    </NoteSlide>

    <NoteSlide title="名詞 + 's 已經說明是哪一個，後面不加 the" mark="birthday">
      <NoteFix
        wrong="I saw two men near my neighbour's the car."
        right="I saw two men near my neighbour's car."
        fix="car"
      />
    </NoteSlide>

    <NoteSlide title="所有格的 's 要寫出撇號" mark="father's">
      <NoteFix wrong="Where is Peters coat?" right="Where is Peter's coat?" fix="Peter's">
        <code>Peters</code> 會被讀成複數。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
