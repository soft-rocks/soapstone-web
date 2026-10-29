<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-singular-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="every 加單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'go', role: '動詞' },
          { t: 'to India', role: '地點', kind: 'dim' },
          { t: 'every', role: 'every', kind: 'key' },
          { t: 'year', role: '單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我每年都去印度</p>
    </NoteSlide>

    <NoteSlide title="a 和 every" mark="every year">
      <div class="rows is-labeled">
        <div>
          <span class="term">a</span>
          <span
            ><NoteMark sentence="I have a big kitchen." :marks="['a']" /><span class="translation"
              >我有一間大廚房。</span
            ></span
          >
        </div>
        <div>
          <span class="term">every</span>
          <span
            ><NoteMark sentence="I take the train every morning." :marks="['every']" /><span
              class="translation"
              >我每天早上都搭火車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="every 加時間說多久一次" mark="every year">
      <div class="rows is-labeled">
        <div>
          <span class="term">every Tuesday</span>
          <span
            ><NoteMark
              sentence="We have English lessons every Tuesday."
              :marks="['every Tuesday']"
            /><span class="translation">我們每個星期二都有英文課。</span></span
          >
        </div>
        <div>
          <span class="term">every summer</span>
          <span
            ><NoteMark
              sentence="My cousins come to stay with us every summer."
              :marks="['every summer']"
            /><span class="translation">我的表兄弟姊妹每年夏天都來我們家住。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="every 後面用 morning，不用 mornings" mark="year">
      <NoteFix
        wrong="I take the train every mornings."
        right="I take the train every morning."
        fix="morning"
      />
    </NoteSlide>

    <NoteSlide title="單數名詞前面要有 a" mark="every">
      <NoteFix wrong="I have big kitchen." right="I have a big kitchen." fix="a big" />
    </NoteSlide>

    <NoteSlide title="every 前面不加介系詞" mark="every year">
      <NoteFix
        wrong="We play football in every Saturday."
        right="We play football every Saturday."
        fix="every Saturday"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
