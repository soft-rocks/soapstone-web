<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-so-much-too-much-with-uncountable, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="too much 加不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My neighbors', role: '主詞' },
          { t: 'are making', role: '動詞' },
          { t: 'too much', role: 'too much', kind: 'key' },
          { t: 'noise.', role: '不可數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的鄰居實在太吵了。</p>
    </NoteSlide>

    <NoteSlide title="so much 很多，too much 太多" mark="too much">
      <div class="rows is-labeled">
        <div>
          <span class="term">so much</span>
          <span
            ><NoteMark
              sentence="I have so much work at the moment that I can't help you."
              :marks="['so much']"
            /><span class="translation">我現在工作多到沒辦法幫你。</span></span
          >
        </div>
        <div>
          <span class="term">too much</span>
          <span
            ><NoteMark
              sentence="My neighbors are making too much noise."
              :marks="['too much']"
            /><span class="translation">我的鄰居實在太吵了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so much 常接 that 子句" mark="too much">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark
              sentence="There was so much snow that the school closed."
              :marks="['so much', 'that']"
            /><span class="translation">雪多到學校停課了。</span></span
          >
        </div>
        <div>
          <span class="term">沒有 that</span>
          <span
            ><NoteMark sentence="I ate so much food I couldn't move." :marks="['so much']" /><span
              class="translation"
              >我吃了好多東西，撐到動不了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="可數名詞用 too many" mark="too much">
      <NoteFix
        wrong="There were too much people at the party."
        right="There were too many people at the party."
        fix="too many"
      />
    </NoteSlide>

    <NoteSlide title="形容詞前面只用 too" mark="too much">
      <NoteFix wrong="This bag is too much heavy." right="This bag is too heavy." fix="too" />
    </NoteSlide>

    <NoteSlide title="名詞前面不用 very much" mark="too much">
      <NoteFix
        wrong="I have very much work today."
        right="I have so much work today."
        fix="so much"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
