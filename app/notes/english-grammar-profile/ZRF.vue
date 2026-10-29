<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-adverb-adverb-145, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞修飾情狀副詞" mark="extremely rapidly">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The value of this game', role: '主詞', kind: 'dim' },
          { t: 'will drop', role: '動詞' },
          { t: 'extremely', role: '程度副詞', kind: 'key' },
          { t: 'rapidly.', role: '情狀副詞' },
        ]"
      />
      <p class="translation">這款遊戲的價值會跌得非常快。</p>
    </NoteSlide>

    <NoteSlide title="副詞修飾時間副詞和方向副詞" mark="extremely">
      <div class="rows is-labeled">
        <div>
          <span class="term">+ 時間副詞</span>
          <span
            ><NoteMark
              sentence="The film started, and shortly afterwards the lights went out."
              :marks="['shortly afterwards']"
            /><span class="translation">電影開始了，不久之後燈就熄了。</span></span
          >
        </div>
        <div>
          <span class="term">+ 方向副詞</span>
          <span
            ><NoteMark
              sentence="After the party, we went straight home."
              :marks="['straight home']"
            /><span class="translation">派對結束後，我們直接回家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各組副詞的意思" mark="extremely">
      <div class="rows is-labeled">
        <div>
          <span class="term">extremely、exceptionally</span>
          <span>極度、格外</span>
        </div>
        <div>
          <span class="term">relatively、comparatively</span>
          <span>和別的比起來還算</span>
        </div>
        <div>
          <span class="term">shortly、soon + afterwards</span>
          <span>不久之後</span>
        </div>
        <div>
          <span class="term">long + ago、before、after</span>
          <span>很久以前、很久之前、很久以後</span>
        </div>
        <div>
          <span class="term">well + in advance</span>
          <span>遠遠提前</span>
        </div>
        <div>
          <span class="term">straight、right、far</span>
          <span>直接、馬上、遠遠地</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="long ago 不加 a，a long time ago 加 a">
      <div class="rows is-labeled">
        <div>
          <span class="term">long ago</span>
          <span
            ><NoteMark sentence="My grandparents met long ago." :marks="['long ago']" /><span
              class="translation"
              >我爺爺奶奶很久以前就認識了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a long time ago</span>
          <span
            ><NoteMark
              sentence="My grandparents met a long time ago."
              :marks="['a long time ago']"
            /><span class="translation">我爺爺奶奶在很久以前認識。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="long time 前面要加 a">
      <NoteFix
        wrong="This castle was built long time ago."
        right="This castle was built a long time ago."
        fix="a long time ago"
      />
    </NoteSlide>

    <NoteSlide title="不久之後用 shortly">
      <NoteFix
        wrong="She called me short after the meeting."
        right="She called me shortly after the meeting."
        fix="shortly after"
      />
    </NoteSlide>

    <NoteSlide title="遠遠提前用 well in advance">
      <NoteFix
        wrong="Book your tickets very in advance."
        right="Book your tickets well in advance."
        fix="well in advance"
      />
    </NoteSlide>

    <NoteSlide title="straight 不加 -ly">
      <NoteFix
        wrong="Go straightly home after school."
        right="Go straight home after school."
        fix="straight home"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
