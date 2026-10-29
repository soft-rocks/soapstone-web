<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-one, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one 泛指一般人" mark="one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'one', role: '一般人', kind: 'key' },
          { t: 'doesn\'t', role: '單數動詞' },
          { t: 'live …,', kind: 'dim' },
          { t: 'one', role: '再用 one', kind: 'key' },
          { t: 'can choose …', kind: 'dim' },
        ]"
      />
      <p class="translation">
        一個人如果住得離公司不夠近，沒辦法走路上班，可以選擇騎腳踏車或開車去。
      </p>
    </NoteSlide>

    <NoteSlide title="one 常接的動詞" mark="one">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="One can see the sea from the top of the hill."
              :marks="['One can']"
            /><span class="translation">從山頂上可以看到大海。</span></span
          >
        </div>
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="One should always read a contract before signing it."
              :marks="['One should']"
            /><span class="translation">簽合約之前，一定要先看過。</span></span
          >
        </div>
        <div>
          <span class="term">one's</span>
          <span
            ><NoteMark sentence="One must pay one's bills on time." :marks="['one\'s']" /><span
              class="translation"
              >每個人都要準時繳帳單。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one、you 和 people" mark="one">
      <div class="rows is-labeled">
        <div>
          <span class="term">one：正式</span>
          <span class="translation">常用在寫作</span>
        </div>
        <div>
          <span class="term">you：口語</span>
          <span
            ><NoteMark sentence="You never know what might happen." :marks="['You']" /><span
              class="translation"
              >誰也不知道會發生什麼事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">people</span>
          <span class="translation">語氣比 one 自然</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one 和 you 不混用" mark="one">
      <NoteFix
        wrong="If one wants to succeed, you must work hard."
        right="If one wants to succeed, one must work hard."
        fix="one must"
      />
    </NoteSlide>

    <NoteSlide title="one 接單數動詞" mark="doesn't">
      <NoteFix
        wrong="One never know what tomorrow will bring."
        right="One never knows what tomorrow will bring."
        fix="knows"
      />
    </NoteSlide>

    <NoteSlide title="所有格是 one's" mark="one">
      <NoteFix
        wrong="One should respect ones neighbours."
        right="One should respect one's neighbours."
        fix="one's"
      />
    </NoteSlide>

    <NoteSlide title="代替名詞的 one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I lost my umbrella,', role: '前面的名詞' },
          { t: 'so I bought a new', kind: 'dim' },
          { t: 'one.', role: '= umbrella', kind: 'key' },
        ]"
      />
      <p class="translation">我的傘弄丟了，所以買了一把新的。</p>
    </NoteSlide>

    <NoteSlide title="數字 one">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Only', kind: 'dim' },
          { t: 'one', role: '數字「一」', kind: 'key' },
          { t: 'of the students passed …', kind: 'dim' },
        ]"
      />
      <p class="translation">只有一個學生通過考試。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
