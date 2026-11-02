<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-s-with-ellipted-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="'s 後面省略名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I heard', role: '主詞和動詞', kind: 'dim' },
          { t: 'a familiar voice;', role: '前面提過的名詞' },
          { t: 'it was', role: '主詞和動詞', kind: 'dim' },
          { t: 'my father\'s.', role: '名詞 + \'s', kind: 'key' },
        ]"
      />
      <p class="translation">我聽到一個熟悉的聲音，是我爸爸的。</p>
    </NoteSlide>

    <NoteSlide title="省略前面提過的東西和地方" mark="my father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面提過</span>
          <span
            ><NoteMark
              sentence="After two weeks, my bank account was empty, and so was my friend's."
              :marks="['my friend\'s']"
            /><span class="translation">兩個星期後，我的銀行帳戶空了，我朋友的也是。</span></span
          >
        </div>
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark
              sentence="I spent the weekend at my uncle's."
              :marks="['my uncle\'s']"
            /><span class="translation">我週末待在叔叔家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="店和診所" mark="father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">the dentist's</span>
          <span
            ><NoteMark
              sentence="My tooth hurts. I'm going to the dentist's after work."
              :marks="['the dentist\'s']"
            /><span class="translation">我牙齒痛。下班後要去看牙醫。</span></span
          >
        </div>
        <div>
          <span class="term">the hairdresser's</span>
          <span
            ><NoteMark
              sentence="The bride's hair looked beautiful. She went to the hairdresser's before the wedding."
              :marks="['the hairdresser\'s']"
            /><span class="translation">新娘的頭髮好漂亮。她在婚禮前去了美髮店。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞省略了，'s 還要留著" mark="father's">
      <NoteFix
        wrong="Our flat is bigger than my cousin."
        right="Our flat is bigger than my cousin's."
        fix="cousin's"
      />
    </NoteSlide>

    <NoteSlide title="人名前面不加 the" mark="my father's">
      <NoteFix
        wrong="This isn't my phone. It's the Anna's."
        right="This isn't my phone. It's Anna's."
        fix="Anna's"
      />
    </NoteSlide>

    <NoteSlide title="the dentist's 要有 the" mark="father's">
      <NoteFix
        wrong="My filling fell out, so I'm going to dentist's on Monday."
        right="My filling fell out, so I'm going to the dentist's on Monday."
        fix="the dentist's"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
