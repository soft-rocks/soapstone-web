<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-complex-844, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複合介系詞放在句首說原因，後面加逗號">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Due to', role: '複合介系詞', kind: 'key' },
          { t: 'a dental appointment,', role: '名詞片語' },
          {
            t: 'I will not be able to participate in the English class tomorrow.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">因為明天要看牙醫，我沒辦法參加英文課。</p>
    </NoteSlide>

    <NoteSlide title="due to、thanks to 和 because of 說原因" mark="Due to">
      <div class="rows is-labeled">
        <div>
          <span class="term">due to<br /><i>因為，比較正式</i></span>
          <span
            ><NoteMark sentence="The train is late due to bad weather." :marks="['due to']" /><span
              class="translation"
              >火車因為天氣不好誤點了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">thanks to<br /><i>多虧，結果是好的</i></span>
          <span
            ><NoteMark
              sentence="Thanks to your help, we finished early."
              :marks="['Thanks to']"
            /><span class="translation">多虧你的幫忙，我們提早完成了。</span></span
          >
        </div>
        <div>
          <span class="term">because of<br /><i>因為，口語和書面語</i></span>
          <span>because of the rain</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="instead of、up to、out of、according to 和 apart from" mark="Due to">
      <div class="rows is-labeled">
        <div>
          <span class="term">instead of<br /><i>而不是</i></span>
          <span>tea instead of coffee</span>
        </div>
        <div>
          <span class="term">up to<br /><i>最多到</i></span>
          <span>up to 50 people</span>
        </div>
        <div>
          <span class="term">out of<br /><i>從……出來</i></span>
          <span>out of the room</span>
        </div>
        <div>
          <span class="term">according to<br /><i>根據</i></span>
          <span
            ><NoteMark
              sentence="According to the forecast, it will snow tomorrow."
              :marks="['According to']"
            /><span class="translation">根據天氣預報，明天會下雪。</span></span
          >
        </div>
        <div>
          <span class="term">apart from<br /><i>除了</i></span>
          <span>apart from Tom</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="due to 後面接名詞片語，不接子句" mark="a dental appointment,">
      <NoteFix
        wrong="The flight was late due to it was snowing."
        right="The flight was late due to the snow."
        fix="the snow"
      />
    </NoteSlide>

    <NoteSlide title="instead of 後面接動詞時用動詞-ing">
      <NoteFix
        wrong="Let's walk instead of take the bus."
        right="Let's walk instead of taking the bus."
        fix="taking"
      />
    </NoteSlide>

    <NoteSlide title="說自己的看法用 in my opinion，不用 according to me">
      <NoteFix
        wrong="According to me, the film is too long."
        right="In my opinion, the film is too long."
        fix="In my opinion,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
