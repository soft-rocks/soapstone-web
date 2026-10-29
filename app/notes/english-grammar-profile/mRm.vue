<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-clause-clause, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句 + , but + 子句" mark="but">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have visited a lot of places,', role: '子句' },
          { t: 'but', role: '連接詞', kind: 'key' },
          { t: 'the best place is Thailand.', role: '子句' },
        ]"
      />
      <p class="translation">我去過很多地方，但最棒的是泰國。</p>
    </NoteSlide>

    <NoteSlide title="and、but、or 連接子句" mark="but">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark sentence="He is a journalist and he likes cinema." :marks="['and']" /><span
              class="translation"
              >他是記者，而且他喜歡電影。</span
            ></span
          >
        </div>
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="My flat is small, but it has a lovely view."
              :marks="['but']"
            /><span class="translation">我的公寓很小，但是景觀很棒。</span></span
          >
        </div>
        <div>
          <span class="term">or</span>
          <span
            ><NoteMark sentence="We can eat out, or I can make pasta." :marks="['or']" /><span
              class="translation"
              >我們可以去外面吃，或者我煮義大利麵。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞不同要寫出主詞">
      <NoteMark
        sentence="My dad cooks dinner and my mum washes the dishes."
        :marks="['My dad', 'my mum']"
      />
      <p class="translation">我爸煮晚餐，我媽洗碗。</p>
    </NoteSlide>

    <NoteSlide title="主詞相同可以省略">
      <NoteMark sentence="He gets up at six and goes to the gym." :marks="['He', 'and goes']" />
      <p class="translation">他六點起床，然後去健身房。</p>
    </NoteSlide>

    <NoteSlide title="兩個子句之間要有連接詞">
      <NoteFix
        wrong="I was very tired, I went to bed early."
        right="I was very tired, and I went to bed early."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="出乎意料用 but" mark="but">
      <NoteFix
        wrong="I studied hard and I failed the test."
        right="I studied hard, but I failed the test."
        fix="but"
      />
    </NoteSlide>

    <NoteSlide title="主詞不同不能省略">
      <NoteFix
        wrong="I called Anna, but didn't answer."
        right="I called Anna, but she didn't answer."
        fix="she"
      />
    </NoteSlide>

    <NoteSlide title="兩件事都成立用 and">
      <NoteFix
        wrong="My uncle is a doctor or my aunt is a nurse."
        right="My uncle is a doctor and my aunt is a nurse."
        fix="and"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
