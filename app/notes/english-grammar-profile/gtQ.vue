<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-focus-101, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="particularly 放在要指出的部分前面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I usually read in my free time,', role: '子句', kind: 'dim' },
          { t: 'particularly', role: '焦點副詞', kind: 'key' },
          { t: 'in the evenings before I go to bed.', role: '被指出的部分' },
        ]"
      />
      <p class="translation">我有空的時候通常會看書，特別是晚上睡覺前。</p>
    </NoteSlide>

    <NoteSlide
      title="especially 和 particularly 可以修飾名詞片語、動詞和形容詞"
      mark="particularly"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語前面</span>
          <span
            ><NoteMark
              sentence="I love nature programmes, especially ones about dolphins."
              :marks="['especially ones about dolphins']"
            /><span class="translation">我很愛看自然節目，特別是關於海豚的。</span></span
          >
        </div>
        <div>
          <span class="term">一般動詞前面</span>
          <span
            ><NoteMark
              sentence="I especially enjoyed the last song."
              :marks="['especially enjoyed']"
            /><span class="translation">我特別喜歡最後一首歌。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞前面</span>
          <span
            ><NoteMark
              sentence="The fish soup was particularly good."
              :marks="['particularly good']"
            /><span class="translation">魚湯特別好喝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面也可以接 when、if 子句" mark="particularly">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="I hate driving, especially when it's dark."
              :marks="['especially when it\'s dark']"
            /><span class="translation">我討厭開車，尤其是天黑的時候。</span></span
          >
        </div>
        <div>
          <span class="term">if</span>
          <span
            ><NoteMark
              sentence="The beach is busy, particularly if the weather is good."
              :marks="['particularly if the weather is good']"
            /><span class="translation">海灘人很多，特別是天氣好的時候。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="especially 不放在主詞前面">
      <NoteFix
        wrong="Especially I like Italian food."
        right="I especially like Italian food."
        fix="especially like"
      />
    </NoteSlide>

    <NoteSlide title="especially 有兩個 l">
      <NoteFix
        wrong="I like all sports, especialy tennis."
        right="I like all sports, especially tennis."
        fix="especially"
      />
    </NoteSlide>

    <NoteSlide title="指出名詞片語用副詞 especially">
      <NoteFix
        wrong="I love animals, especial cats."
        right="I love animals, especially cats."
        fix="especially"
      />
    </NoteSlide>

    <NoteSlide title="particularly 中間有 ar" mark="particularly">
      <NoteFix
        wrong="I enjoyed the trip, particulary the boat ride."
        right="I enjoyed the trip, particularly the boat ride."
        fix="particularly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
