<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-determiner-of-determiner, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量限定詞加 of 再加限定詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'because', role: '連接詞', kind: 'dim' },
          { t: 'both', role: '數量限定詞', kind: 'key' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'the', role: '限定詞' },
          { t: 'teams', role: '名詞' },
          { t: 'were good.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">因為兩隊都很強。</p>
    </NoteSlide>

    <NoteSlide title="常用的數量限定詞" mark="both of">
      <div class="rows is-labeled">
        <div>
          <span class="term">all of</span>
          <span
            ><NoteMark sentence="I spent all of my money!" :marks="['all of']" /><span
              class="translation"
              >我把錢全花光了！</span
            ></span
          >
        </div>
        <div>
          <span class="term">some of</span>
          <span
            ><NoteMark sentence="Some of my friends gave me books." :marks="['Some of']" /><span
              class="translation"
              >我有些朋友送我書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">both of</span>
          <span
            ><NoteMark sentence="Both of the teams were good." :marks="['Both of']" /><span
              class="translation"
              >兩隊都很強。</span
            ></span
          >
        </div>
        <div>
          <span class="term">any of</span>
          <span
            ><NoteMark
              sentence="You can't take any of the books with you."
              :marks="['any of']"
            /><span class="translation">你不能把任何一本書帶走。</span></span
          >
        </div>
        <div>
          <span class="term">each of</span>
          <span
            ><NoteMark sentence="Each of the players gets a medal." :marks="['Each of']" /><span
              class="translation"
              >每個球員都拿到一面獎牌。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有限定詞才加 of" mark="the teams">
      <div class="rows is-labeled">
        <div>
          <span class="term">哪一群</span>
          <span
            ><NoteMark
              sentence="Many of the people at the party were students."
              :marks="['Many of the']"
            /><span class="translation">派對上很多人是學生。</span></span
          >
        </div>
        <div>
          <span class="term">一般的人</span>
          <span
            ><NoteMark sentence="Many people like football." :marks="['Many']" /><span
              class="translation"
              >很多人喜歡足球。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面要有限定詞" mark="the teams">
      <NoteFix
        wrong="Some of friends gave me books."
        right="Some of my friends gave me books."
        fix="my"
      />
    </NoteSlide>

    <NoteSlide title="each of 動詞用單數" mark="both of">
      <NoteFix
        wrong="Each of the players get a medal."
        right="Each of the players gets a medal."
        fix="gets"
      />
    </NoteSlide>

    <NoteSlide title="both 只用在兩個" mark="both">
      <NoteFix
        wrong="I have three sisters. Both of them live in London."
        right="I have three sisters. All of them live in London."
        fix="All"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
