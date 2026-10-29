<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-with-of-object-pronoun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="both + of + 受格代名詞" mark="both of us,">
      <NoteWords
        :size="28"
        :parts="[
          { t: '… two tickets for', kind: 'dim' },
          { t: 'both', role: '兩個都', kind: 'key' },
          { t: 'of', role: '介系詞' },
          { t: 'us,', role: '受格', kind: 'key' },
          { t: 'so …', kind: 'dim' },
        ]"
      />
      <p class="translation">……兩張票，我們兩個一人一張……</p>
    </NoteSlide>

    <NoteSlide title="all of 和 both of" mark="both of">
      <div class="rows is-labeled">
        <div>
          <span class="term">all of</span>
          <span
            ><NoteMark
              sentence="I invited my classmates, and all of them came."
              :marks="['all of them']"
            /><span class="translation">我邀了同學，他們全都來了。</span></span
          >
        </div>
        <div>
          <span class="term">both of</span>
          <span
            ><NoteMark
              sentence="I have two sisters. Both of them are older than me."
              :marks="['Both of them']"
            /><span class="translation">我有兩個姊姊，兩個都比我大。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="當主詞和當受詞" mark="for both of us,">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="All of us were tired after the trip."
              :marks="['All of us']"
            /><span class="translation">旅行結束後，我們全都累了。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark
              sentence="My uncle took all of us to the zoo."
              :marks="['took all of us']"
            /><span class="translation">我叔叔帶我們全部的人去動物園。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面接受格" mark="us,">
      <NoteFix wrong="All of we went to the beach." right="All of us went to the beach." fix="us" />
    </NoteSlide>

    <NoteSlide title="代名詞前面加 of" mark="of">
      <NoteFix wrong="Both them are my friends." right="Both of them are my friends." fix="of" />
    </NoteSlide>

    <NoteSlide title="三個以上用 all" mark="both">
      <NoteFix
        wrong="I have three cats, and both of them are black."
        right="I have three cats, and all of them are black."
        fix="all"
      />
    </NoteSlide>

    <NoteSlide title="all + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All', kind: 'key' },
          { t: 'the students', role: '名詞，可以不加 of' },
          { t: 'passed the test.', kind: 'dim' },
        ]"
      />
      <p class="translation">全部的學生都通過考試了。</p>
    </NoteSlide>

    <NoteSlide title="代名詞 + all">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '主格' },
          { t: 'all', kind: 'key' },
          { t: 'like pizza.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們全都喜歡披薩。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
