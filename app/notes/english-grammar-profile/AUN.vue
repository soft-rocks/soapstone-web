<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-sentence-adverb-front-position, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句子副詞放在子句的最前面" mark="First,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Unfortunately,', role: '句子副詞', kind: 'key' },
          { t: 'my team', role: '主詞' },
          { t: 'lost.', role: '動詞' },
        ]"
      />
      <p class="translation">可惜我們隊輸了。</p>
    </NoteSlide>

    <NoteSlide title="句子副詞連接前一句" mark="First,">
      <div class="rows is-labeled">
        <div>
          <span class="term">前一句 + Actually</span>
          <span
            ><NoteMark
              sentence="It's very nice that you're going to help me. Actually, I want you to choose the colour."
              :marks="['Actually,']"
            /><span class="translation">你要來幫我，真好。其實我想讓你來選顏色。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示順序的句子副詞" mark="First,">
      <div class="rows is-labeled">
        <div>
          <span class="term">first</span>
          <span>首先</span>
        </div>
        <div>
          <span class="term">then</span>
          <span>然後</span>
        </div>
        <div>
          <span class="term">finally</span>
          <span>最後</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示看法的句子副詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">actually</span>
          <span>其實，和前面的話或對方想的不同</span>
        </div>
        <div>
          <span class="term">unfortunately</span>
          <span>可惜，後面的事不好</span>
        </div>
        <div>
          <span class="term">luckily</span>
          <span>幸好，後面的事是好的</span>
        </div>
        <div>
          <span class="term">of course</span>
          <span>當然，後面的事很明顯</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="actually 是其實，不是現在">
      <div class="rows is-labeled">
        <div>
          <span class="term">其實</span>
          <span
            ><NoteMark sentence="Actually, I live in Paris." :marks="['Actually,']" /><span
              class="translation"
              >其實我住在巴黎。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark
              sentence="At the moment, I live in Paris."
              :marks="['At the moment,']"
            /><span class="translation">我現在住在巴黎。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示現在用 now">
      <NoteFix
        wrong="I studied in London last year. Actually I work in a bank."
        right="I studied in London last year. Now I work in a bank."
        fix="Now"
      />
    </NoteSlide>

    <NoteSlide title="說好結果用 luckily">
      <NoteFix
        wrong="I was very worried, but unfortunately I passed the exam."
        right="I was very worried, but luckily I passed the exam."
        fix="luckily"
      />
    </NoteSlide>

    <NoteSlide title="first 前面不加介系詞" mark="First,">
      <NoteFix
        wrong="In first, open the box carefully."
        right="First, open the box carefully."
        fix="First,"
      />
    </NoteSlide>

    <NoteSlide title="then 不再加 after" mark="and then">
      <NoteFix
        wrong="I bought some bread. And then after I went home."
        right="I bought some bread. Then I went home."
        fix="Then"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
