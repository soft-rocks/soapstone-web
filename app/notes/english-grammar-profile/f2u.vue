<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-use-possessive-s-without-noun, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="雙方都知道是什麼地方時，'s 後面的名詞可以省略">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I have to go to', kind: 'dim' },
          { t: 'the dentist\'s', role: '名詞 + \'s', kind: 'key' },
          { t: 'surgery', role: '省略的名詞', kind: 'gone' },
        ]"
      />
      <p class="translation">我得去一趟牙醫診所。</p>
    </NoteSlide>

    <NoteSlide title="省略的名詞是店、診所或住家" mark="dentist's">
      <div class="rows is-labeled">
        <div>
          <span class="term">店</span>
          <span
            ><NoteMark
              sentence="I left my clothes at the dry cleaner's."
              :marks="['cleaner\'s']"
            /><span class="translation">我把衣服留在乾洗店了。</span></span
          >
        </div>
        <div>
          <span class="term">診所</span>
          <span
            ><NoteMark sentence="I have to go to the dentist's." :marks="['dentist\'s']" /><span
              class="translation"
              >我得去一趟牙醫診所。</span
            ></span
          >
        </div>
        <div>
          <span class="term">住家</span>
          <span
            ><NoteMark sentence="We're having dinner at Tom's tonight." :marks="['Tom\'s']" /><span
              class="translation"
              >我們今晚在 Tom 家吃晚餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有些店名本來就是人名加 's" mark="dentist's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll meet you outside', kind: 'dim' },
          { t: 'McDonald\'s', role: '店名', kind: 'key' },
          { t: 'at eight.', kind: 'dim' },
        ]"
      />
      <p class="translation">我八點在麥當勞外面跟你碰面。</p>
    </NoteSlide>

    <NoteSlide title="說的是藥局，chemist 後面加 's" mark="dentist's">
      <NoteFix
        wrong="I need to go to the chemist."
        right="I need to go to the chemist's."
        fix="chemist's"
      >
        <code>the chemist</code> 是藥劑師本人。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="baker 是可數名詞，前面要有 the" mark="the">
      <NoteFix
        wrong="I bought some bread at baker's."
        right="I bought some bread at the baker's."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="人名前面不加 the">
      <NoteFix wrong="Let's meet at the Anna's." right="Let's meet at Anna's." fix="Anna's" />
    </NoteSlide>

    <NoteSlide title="以 -&#x2060;s 結尾的複數名詞只加撇號">
      <NoteFix
        wrong="We're staying at my parents's this weekend."
        right="We're staying at my parents' this weekend."
        fix="parents'"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
