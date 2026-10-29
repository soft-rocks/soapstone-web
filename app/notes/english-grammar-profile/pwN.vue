<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-particle-preposition-object-1045, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="片語介系詞動詞由動詞、小品詞和介系詞組成" mark="face up to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You should', kind: 'dim' },
          { t: 'face', role: '動詞', kind: 'key' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'to', role: '介系詞', kind: 'key' },
          { t: 'the problem', role: '受詞' },
          { t: 'and tell everybody the truth.', kind: 'dim' },
        ]"
      />
      <p class="translation">你應該正視這個問題，把真相告訴大家。</p>
      <p class="remark"><code>face up to</code> 是正視難處理的事。</p>
    </NoteSlide>

    <NoteSlide title="受詞可以是名詞、代名詞或動詞-ing" mark="the problem">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="We need to cut down on costs." :marks="['costs']" /><span
              class="translation"
              >我們得減少開支。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="I always looked up to her." :marks="['her']" /><span
              class="translation"
              >我一直很尊敬她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="I'm trying to cut down on eating sugar."
              :marks="['eating']"
            /><span class="translation">我正在試著少吃糖。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個動詞，小品詞和介系詞不同，意思不同" mark="up to">
      <div class="rows is-labeled">
        <div>
          <span class="term">look up to<br /><i>尊敬</i></span>
          <span
            ><NoteMark
              sentence="The young players look up to their captain."
              :marks="['up to']"
            /><span class="translation">年輕球員很尊敬他們的隊長。</span></span
          >
        </div>
        <div>
          <span class="term">look down on<br /><i>看不起</i></span>
          <span
            ><NoteMark
              sentence="He looks down on people without a degree."
              :marks="['down on']"
            /><span class="translation">他看不起沒有學位的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="cut down 表示減少時，要加介系詞 on" mark="to">
      <NoteFix wrong="We need to cut down sugar." right="We need to cut down on sugar." fix="on" />
    </NoteSlide>

    <NoteSlide title="小品詞不能省略" mark="up">
      <NoteFix
        wrong="I can't put with his jokes any more."
        right="I can't put up with his jokes any more."
        fix="up"
      />
    </NoteSlide>

    <NoteSlide title="代名詞受詞也放在介系詞後面" mark="the problem">
      <NoteFix
        wrong="Everyone looks her up to."
        right="Everyone looks up to her."
        fix="up to her"
      />
    </NoteSlide>

    <NoteSlide title="come up 的介系詞是 with" mark="to">
      <NoteFix wrong="He came up of a plan." right="He came up with a plan." fix="with" />
    </NoteSlide>

    <NoteSlide title="make up 是片語動詞，make up for 多了介系詞" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">make up<br /><i>編造</i></span>
          <span
            ><NoteMark sentence="She made up a story." :marks="['made up']" /><span
              class="translation"
              >她編了一個故事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">make up for<br /><i>彌補</i></span>
          <span
            ><NoteMark
              sentence="Let me make up for it with dinner."
              :marks="['make up for']"
            /><span class="translation">讓我請你吃晚餐補償你。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
