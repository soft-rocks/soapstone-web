<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-which-one, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="間接問句裡的 which one" mark="which one I would choose,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'you ask me', role: '主詞 + 動詞' },
          { t: 'which one', role: '哪一個', kind: 'key' },
          { t: 'I would choose,', role: '直述句語序' },
        ]"
      />
      <p class="translation">如果你問我會選哪一個……</p>
    </NoteSlide>

    <NoteSlide title="which one 當受詞、主詞" mark="which one">
      <div class="rows is-labeled">
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark
              sentence="I can't decide which one I like more."
              :marks="['which one I like']"
            /><span class="translation">我決定不了比較喜歡哪一個。</span></span
          >
        </div>
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="Nobody knows which one is the right answer."
              :marks="['which one is']"
            /><span class="translation">沒有人知道哪一個才是正確答案。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="She asked me which one to buy."
              :marks="['which one to buy.']"
            /><span class="translation">她問我該買哪一個。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的動詞" mark="ask me">
      <div class="rows is-labeled">
        <div>
          <span class="term">問</span>
          <span><NoteMark sentence="He wondered which one was his." :marks="['wondered']" /></span>
        </div>
        <div>
          <span class="term">知道</span>
          <span
            ><NoteMark sentence="Do you remember which one we ordered?" :marks="['remember']"
          /></span>
        </div>
        <div>
          <span class="term">決定</span>
          <span
            ><NoteMark sentence="We need to decide which one to take." :marks="['decide']"
          /></span>
        </div>
        <div>
          <span class="term">說</span>
          <span><NoteMark sentence="Can you show me which one you mean?" :marks="['show']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="直述句的語序" mark="I would choose,">
      <NoteFix
        wrong="I don't know which one does she want."
        right="I don't know which one she wants."
        fix="she wants."
      />
    </NoteSlide>

    <NoteSlide title="句尾用句號">
      <NoteFix
        wrong="I'm not sure which one is better?"
        right="I'm not sure which one is better."
        fix="better."
      />
    </NoteSlide>

    <NoteSlide title="複數用 which ones">
      <NoteFix
        wrong="Tell me which one you want, the red shoes or the black shoes."
        right="Tell me which ones you want, the red shoes or the black shoes."
        fix="which ones"
      />
    </NoteSlide>

    <NoteSlide title="直接問句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Which one', kind: 'key' },
          { t: 'would you', role: '問句語序' },
          { t: 'choose?', kind: 'dim' },
        ]"
      />
      <p class="translation">你會選哪一個？</p>
    </NoteSlide>

    <NoteSlide title="what：沒有範圍">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I don\'t know', kind: 'dim' },
          { t: 'what', role: '沒有範圍', kind: 'key' },
          { t: 'she wants.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不知道她想要什麼。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
