<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-determiner-uncountable-noun, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不可數名詞當主詞，動詞用單數">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The', role: '限定詞' },
          { t: 'food', role: '不可數名詞', kind: 'key' },
          { t: 'was', role: '單數動詞', kind: 'key' },
          { t: 'delicious, and', kind: 'dim' },
          { t: 'the', role: '限定詞' },
          { t: 'music', role: '不可數名詞', kind: 'key' },
          { t: 'was', role: '單數動詞', kind: 'key' },
          { t: 'great.', kind: 'dim' },
        ]"
      />
      <p class="translation">食物很好吃，音樂也很棒。</p>
      <p class="remark">不可數名詞沒有複數形，不加 <code>-&#x2060;s</code>。</p>
    </NoteSlide>

    <NoteSlide title="不可數名詞前面可以放 the、this、some 或 more" mark="The">
      <div class="rows is-labeled">
        <div>
          <span class="term">the</span>
          <span
            ><NoteMark sentence="The weather was so cold." :marks="['The weather']" /><span
              class="translation"
              >天氣好冷。</span
            ></span
          >
        </div>
        <div>
          <span class="term">this</span>
          <span
            ><NoteMark sentence="This bread is still warm." :marks="['This bread']" /><span
              class="translation"
              >這個麵包還是溫的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark sentence="Would you like some tea?" :marks="['some tea']" /><span
              class="translation"
              >你要不要來點茶？</span
            ></span
          >
        </div>
        <div>
          <span class="term">more</span>
          <span
            ><NoteMark
              sentence="I phoned for more information two days ago."
              :marks="['more information']"
            /><span class="translation">我兩天前打電話去問更多資訊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞前面不放 a 或 an" mark="The">
      <NoteFix
        wrong="Can you give me an information about the course?"
        right="Can you give me some information about the course?"
        fix="some information"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞沒有複數形" mark="food">
      <NoteFix
        wrong="We bought new furnitures for the flat."
        right="We bought new furniture for the flat."
        fix="furniture"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞前面用 this 或 that，不用 these 或 those">
      <NoteFix wrong="These luggage is mine." right="This luggage is mine." fix="This" />
    </NoteSlide>

    <NoteSlide title="news 是不可數名詞，動詞用單數" mark="was">
      <NoteFix wrong="The news are very bad today." right="The news is very bad today." fix="is" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
