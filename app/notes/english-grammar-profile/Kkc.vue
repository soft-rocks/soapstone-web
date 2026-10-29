<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-use-noun-phrases-with-superlatives, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="完成式子句說明比較的範圍是說話的人的經驗">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She\'s', kind: 'dim' },
          { t: 'the funniest person', role: 'the + 最高級 + 名詞', kind: 'key' },
          { t: 'I\'ve ever known!', role: '完成式子句' },
        ]"
      />
      <p class="translation">她是我認識的人裡面最好笑的！</p>
      <p class="remark">子句前面省略了 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="經驗算到現在用現在完成式，算到過去用過去完成式" mark="I've">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式<br /><i>算到現在</i></span>
          <span
            ><NoteMark sentence="It's the best book I've ever read." :marks="['I\'ve']" /><span
              class="translation"
              >這是我讀過最好看的書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去完成式<br /><i>算到過去</i></span>
          <span
            ><NoteMark
              sentence="It was the best decision he had ever made."
              :marks="['had']"
            /><span class="translation">那是他做過最好的決定。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 可以省略，ever 可以換成時間範圍" mark="ever">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s the worst film', kind: 'dim' },
          { t: '(that)', role: '可以省略', kind: 'gone' },
          { t: 'I\'ve seen', role: '完成式' },
          { t: 'this year.', role: '時間範圍', kind: 'key' },
        ]"
      />
      <p class="translation">這是我今年看過最爛的電影。</p>
    </NoteSlide>

    <NoteSlide title="the first 和 the only 也接完成式子句" mark="the funniest">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'the first time', role: 'the first + 名詞', kind: 'key' },
          { t: 'I\'ve been to London.', role: '完成式子句' },
        ]"
      />
      <p class="translation">這是我第一次來倫敦。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用現在式，子句用現在完成式" mark="I've">
      <NoteFix
        wrong="This is the best pizza I ever ate."
        right="This is the best pizza I've ever eaten."
        fix="I've ever eaten"
      />
    </NoteSlide>

    <NoteSlide title="最高級加名詞，前面要有 the" mark="the">
      <NoteFix
        wrong="He's kindest man I've ever met."
        right="He's the kindest man I've ever met."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="名詞已經是子句的受詞，子句裡不再加 it" mark="person">
      <NoteFix
        wrong="It's the best film I've ever seen it."
        right="It's the best film I've ever seen."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="ever 放在 have 和過去分詞中間" mark="ever">
      <NoteFix
        wrong="She's the nicest teacher I've had ever."
        right="She's the nicest teacher I've ever had."
        fix="ever"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
