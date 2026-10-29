<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-this-with-singular-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + 單數名詞" mark="this Saturday.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'If you like,', role: '條件', kind: 'dim' },
          { t: 'we can go', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'this', role: '這個', kind: 'key' },
          { t: 'Saturday.', role: '單數名詞' },
        ]"
      />
      <p class="translation">你願意的話，我們可以這個星期六去。</p>
    </NoteSlide>

    <NoteSlide title="this 指近的東西和正在說的地方" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">近的東西</span>
          <span
            ><NoteMark sentence="This suitcase has a broken wheel." :marks="['This suitcase']" /><span
              class="translation"
              >這個行李箱有一個輪子壞了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">正在說的地方</span>
          <span
            ><NoteMark sentence="This town has a good market." :marks="['This town']" /><span
              class="translation"
              >這個小鎮有一個很好的市場。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 加時間的名詞" mark="this Saturday.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this morning</span>
          <span>今天早上</span>
        </div>
        <div>
          <span class="term">this evening</span>
          <span>今天晚上</span>
        </div>
        <div>
          <span class="term">this week</span>
          <span>這個星期</span>
        </div>
        <div>
          <span class="term">this year</span>
          <span>今年</span>
        </div>
        <div>
          <span class="term">this Saturday</span>
          <span>這個星期六</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 加單數，these 加複數" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span>this shoe、this room</span>
        </div>
        <div>
          <span class="term">these</span>
          <span>these shoes、these rooms</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 these">
      <NoteFix wrong="I like this shoes." right="I like these shoes." fix="these" />
    </NoteSlide>

    <NoteSlide title="this 和 a 不一起用" mark="this">
      <NoteFix
        wrong="I want to buy this a bag."
        right="I want to buy this bag."
        fix="this bag."
      />
    </NoteSlide>

    <NoteSlide title="this Saturday 前面不加 on" mark="go this Saturday.">
      <NoteFix wrong="We can go on this Saturday." right="We can go this Saturday." fix="go this" />
    </NoteSlide>

    <NoteSlide title="this 放在名詞前面" mark="this">
      <NoteFix wrong="I like place this." right="I like this place." fix="this place." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
