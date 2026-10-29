<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-yourselves-for-politeness, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="正式的信用 yourselves 代替 you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'training', role: '主詞', kind: 'dim' },
          { t: 'will be provided', role: '動詞', kind: 'dim' },
          { t: 'by', role: '介系詞' },
          { t: 'yourselves.', role: 'yourselves', kind: 'key' },
        ]"
      />
      <p class="translation">因為貴單位會提供訓練。</p>
    </NoteSlide>

    <NoteSlide title="反身代名詞和客氣的說法" mark="yourselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">反身代名詞</span>
          <span
            ><NoteMark sentence="Help yourselves to some cake." :marks="['yourselves']" /><span
              class="translation"
              >蛋糕請自己拿。</span
            ></span
          >
        </div>
        <div>
          <span class="term">客氣的說法</span>
          <span
            ><NoteMark
              sentence="Training will be provided by yourselves."
              :marks="['yourselves']"
            /><span class="translation">訓練由貴單位提供。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的介系詞" mark="by yourselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">from</span>
          <span
            ><NoteMark
              sentence="I look forward to hearing from yourselves soon."
              :marks="['from yourselves']"
            /><span class="translation">期待很快收到貴公司的回覆。</span></span
          >
        </div>
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="Companies like yourselves need staff who can speak several languages."
              :marks="['like yourselves']"
            /><span class="translation">像貴公司這樣的企業需要會說好幾種語言的員工。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面不接 your" mark="yourselves">
      <NoteFix
        wrong="Training will be provided by your."
        right="Training will be provided by yourselves."
        fix="yourselves"
      />
    </NoteSlide>

    <NoteSlide title="yourselves 不能當主詞" mark="yourselves">
      <NoteFix
        wrong="Yourselves published the advertisement last week."
        right="You published the advertisement last week."
        fix="You"
      />
    </NoteSlide>

    <NoteSlide title="self 的複數是 selves" mark="yourselves">
      <NoteFix
        wrong="I look forward to hearing from yourselfs."
        right="I look forward to hearing from yourselves."
        fix="yourselves"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
