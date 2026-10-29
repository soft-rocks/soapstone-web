<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-many-are-the-noun-for, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Many are the + 名詞" mark="Many are the causes">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Many', role: '強調數量', kind: 'key' },
          { t: 'are', role: '倒裝' },
          { t: 'the causes', role: '主詞', kind: 'key' },
          { t: 'which have led us …', role: '關係子句' },
        ]"
      />
      <p class="translation">讓我們活得更好、更長壽的原因有很多。</p>
    </NoteSlide>

    <NoteSlide title="主詞後面的修飾語" mark="which have led us to a better and longer life.">
      <div class="rows is-labeled">
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="Many are the students who give up in the first year."
              :marks="['who give up in the first year.']"
            /><span class="translation">第一年就放棄的學生很多。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="Many are the dangers of the open sea."
              :marks="['of the open sea.']"
            /><span class="translation">大海上的危險很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="are 和 were" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="Many are the people who still believe this story."
              :marks="['are']"
            /><span class="translation">到現在還相信這個故事的人很多。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="Many were the nights when I could not sleep."
              :marks="['were']"
            /><span class="translation">我睡不著的夜晚很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞用複數" mark="the causes">
      <NoteFix
        wrong="Many are the reason why people move to cities."
        right="Many are the reasons why people move to cities."
        fix="reasons"
      />
    </NoteSlide>

    <NoteSlide title="動詞用 are" mark="are">
      <NoteFix
        wrong="Many is the problems that young people face today."
        right="Many are the problems that young people face today."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面加 the" mark="the">
      <NoteFix
        wrong="Many are benefits that come from reading."
        right="Many are the benefits that come from reading."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="are 放在 Many 後面" mark="Many are">
      <NoteFix
        wrong="Many the difficulties are that new parents face."
        right="Many are the difficulties that new parents face."
        fix="Many are"
      />
    </NoteSlide>

    <NoteSlide title="一般的說法：There are many">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There are many', role: '不倒裝', kind: 'key' },
          { t: 'reasons', role: '名詞' },
          { t: 'why people move to cities.', kind: 'dim' },
        ]"
      />
      <p class="translation">人們搬到城市的原因很多。</p>
    </NoteSlide>

    <NoteSlide title="Many + 名詞：不倒裝">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Many', role: '限定詞', kind: 'key' },
          { t: 'students', role: '名詞' },
          { t: 'give up in the first year.', kind: 'dim' },
        ]"
      />
      <p class="translation">很多學生第一年就放棄了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
