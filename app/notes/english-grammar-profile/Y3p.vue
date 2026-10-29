<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-determiners-any-much-many, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句裡，many 放在可數名詞的複數前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t got', role: '否定的動詞' },
          { t: 'many things', role: 'many + 名詞', kind: 'key' },
          { t: 'to do', role: 'to + 原形動詞' },
          { t: 'here.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我在這裡沒有很多事要做。</p>
    </NoteSlide>

    <NoteSlide title="much 接不可數名詞，any 兩種名詞都接" mark="many">
      <div class="rows is-labeled">
        <div>
          <span class="term">any + 複數名詞</span>
          <span
            ><NoteMark
              sentence="The hotel didn't have any free rooms."
              :marks="['any free rooms']"
            /><span class="translation">飯店一間空房都沒有。</span></span
          >
        </div>
        <div>
          <span class="term">much + 不可數名詞</span>
          <span
            ><NoteMark
              sentence="Our teacher hasn't got much patience today."
              :marks="['much patience']"
            /><span class="translation">我們老師今天沒什麼耐心。</span></span
          >
        </div>
        <div>
          <span class="term">many + 複數名詞</span>
          <span
            ><NoteMark sentence="He doesn't have many shirts." :marks="['many shirts']" /><span
              class="translation"
              >他的襯衫不多。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="any 說數量是零，many 說數量很少" mark="many">
      <NoteFork
        stem="We didn't see"
        :branches="[
          { head: 'any', rest: 'replies', meaning: '零', zh: '我的電子郵件一個回覆都沒收到。' },
          {
            head: 'many',
            rest: 'birthday cards',
            meaning: '很少',
            zh: '我今年沒收到幾張生日卡片。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="without、never、hardly 後面也用 any" mark="haven't">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He passed the test', kind: 'dim' },
          { t: 'without', role: '有否定的意思', kind: 'key', ring: true },
          { t: 'any help.', role: 'any + 名詞', kind: 'key' },
        ]"
      />
      <p class="translation">他沒靠任何幫忙就通過了考試。</p>
    </NoteSlide>

    <NoteSlide title="否定句的名詞前面用 any，不用 some" mark="many">
      <NoteFix wrong="I didn't buy some bread." right="I didn't buy any bread." fix="any" />
    </NoteSlide>

    <NoteSlide title="不可數名詞前面用 much" mark="many">
      <NoteFix
        wrong="There isn't many space in the car."
        right="There isn't much space in the car."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="many 後面接可數名詞的複數" mark="things">
      <NoteFix
        wrong="There aren't many tourist in winter."
        right="There aren't many tourists in winter."
        fix="tourists"
      />
    </NoteSlide>

    <NoteSlide title="可數名詞的複數前面用 many" mark="many">
      <NoteFix
        wrong="The museum doesn't get much visitors in winter."
        right="The museum doesn't get many visitors in winter."
        fix="many"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
