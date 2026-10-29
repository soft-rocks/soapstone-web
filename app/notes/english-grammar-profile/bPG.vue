<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-phrase-phrase, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞片語 + or + 介系詞片語" mark="to the cinema or to the theater.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She likes to go', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'to the cinema', role: '介系詞片語' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'to the theater.', role: '介系詞片語' },
        ]"
      />
      <p class="translation">她喜歡去電影院或劇院。</p>
    </NoteSlide>

    <NoteSlide title="名詞片語、形容詞片語" mark="or">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="I live with my mother and her boyfriend."
              :marks="['my mother and her boyfriend.']"
            /><span class="translation">我和我媽媽還有她男朋友住在一起。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞片語</span>
          <span
            ><NoteMark
              sentence="My home is very light and very comfortable."
              :marks="['very light and very comfortable.']"
            /><span class="translation">我家採光很好，也很舒服。</span></span
          >
        </div>
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="My house is small but very nice."
              :marks="['small but very nice.']"
            /><span class="translation">我家很小，但是很不錯。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的片語種類" mark="to the cinema">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span>my mother、a big garden</span>
        </div>
        <div>
          <span class="term">形容詞片語</span>
          <span>very light、really nice</span>
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span>to the cinema、in the park</span>
        </div>
        <div>
          <span class="term">動詞片語</span>
          <span>cook dinner、watch TV</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞相同可以省略第二個" mark="or to">
      <NoteMark
        sentence="She likes to go to the cinema or the theater."
        :marks="['or the theater.']"
      />
      <p class="translation">她喜歡去電影院或劇院。</p>
    </NoteSlide>

    <NoteSlide title="連接兩個結構相同的片語">
      <NoteFix
        wrong="She likes going to the park and to swim in the lake."
        right="She likes going to the park and swimming in the lake."
        fix="swimming"
      />
    </NoteSlide>

    <NoteSlide title="意思相反用 but">
      <NoteFix
        wrong="The car is very old and really reliable."
        right="The car is very old but really reliable."
        fix="but"
      />
    </NoteSlide>

    <NoteSlide title="每個名詞片語都要有冠詞">
      <NoteFix
        wrong="I'd like a cup of tea and slice of cake."
        right="I'd like a cup of tea and a slice of cake."
        fix="a slice"
      />
    </NoteSlide>

    <NoteSlide title="連接兩個片語不加逗號">
      <NoteFix
        wrong="I live with my aunt, and my two cousins."
        right="I live with my aunt and my two cousins."
        fix="aunt and"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
