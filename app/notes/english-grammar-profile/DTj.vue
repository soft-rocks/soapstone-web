<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-with-relative-clause-as-complement, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="關係子句緊接在名詞後面，說明是哪一個">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The mobile phone', role: '名詞' },
          { t: 'which', role: '關係代名詞', kind: 'key' },
          { t: 'I bought yesterday', role: '子句的其餘部分', kind: 'key' },
          { t: 'is', role: '整個句子的動詞' },
          { t: 'brilliant.', kind: 'dim' },
        ]"
      />
      <p class="translation">我昨天買的那支手機超棒的。</p>
      <p class="remark">動詞 <code>is</code> 放在整個名詞片語後面。</p>
    </NoteSlide>

    <NoteSlide title="人用 who，東西用 which，時間用 when，地方用 where" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">who</span>
          <span
            ><NoteMark
              sentence="The person who gave it to me was my father."
              :marks="['who']"
            /><span class="translation">把它給我的人是我爸爸。</span></span
          >
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="The bus that goes to the airport leaves from here."
              :marks="['that']"
            /><span class="translation">開往機場的公車從這裡發車。</span></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="The last day when we can see the film is Thursday."
              :marks="['when']"
            /><span class="translation">我們能看那部電影的最後一天是星期四。</span></span
          >
        </div>
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark sentence="This is the café where we first met." :marks="['where']" /><span
              class="translation"
              >這是我們第一次見面的咖啡店。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="關係代名詞是子句的受詞時，可以省略" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞<br /><i>不能省略</i></span>
          <span
            ><NoteMark sentence="The man who lives next door is a pilot." :marks="['who']" /><span
              class="translation"
              >住在隔壁的那個男人是機師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞<br /><i>可以省略</i></span>
          <span
            ><NoteMark
              sentence="The cake (that) my mum made was delicious."
              :marks="['(that)']"
            /><span class="translation">我媽媽做的蛋糕很好吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 已經是受詞，子句裡不再加 it" mark="which">
      <NoteFix
        wrong="The book which I lent you it is mine."
        right="The book which I lent you is mine."
        fix="you"
      />
    </NoteSlide>

    <NoteSlide title="人用 who 或 that，不用 which">
      <NoteFix
        wrong="The girl which sits next to me is from Japan."
        right="The girl who sits next to me is from Japan."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="整個句子的動詞跟著前面的名詞" mark="is">
      <NoteFix
        wrong="The shoes that I bought online is too small."
        right="The shoes that I bought online are too small."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="關係代名詞是子句的主詞時，不能省略">
      <NoteFix
        wrong="The man lives next door is a pilot."
        right="The man who lives next door is a pilot."
        fix="who"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
