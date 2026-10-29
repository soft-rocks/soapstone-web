<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-let-me-focus, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Let me 引出接下來要說的事" mark="Let me tell">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Let me', role: 'let + me', kind: 'key', ring: true },
          { t: 'explain', role: '原形動詞', kind: 'key' },
          { t: 'how it works.', kind: 'dim' },
        ]"
      />
      <p class="translation">我來解釋這是怎麼運作的。</p>
    </NoteSlide>

    <NoteSlide title="常見的說法：舉例、示範、想一下" mark="Let me">
      <div class="rows is-labeled">
        <div>
          <span class="term">舉例</span>
          <span
            ><NoteMark
              sentence="The speaker talked about saving money. Let me give you an example from my own life."
              :marks="['Let me give']"
            /><span class="translation">講者談到存錢。我舉一個我自己生活中的例子。</span></span
          >
        </div>
        <div>
          <span class="term">示範</span>
          <span
            ><NoteMark
              sentence="The new coffee machine is a bit tricky. Let me show you how to use the machine."
              :marks="['Let me show']"
            /><span class="translation"
              >新的咖啡機有點難用。我示範給你看這台機器怎麼用。</span
            ></span
          >
        </div>
        <div>
          <span class="term">想一下</span>
          <span
            ><NoteMark
              sentence="You want me to move to Paris with you? Let me think about it."
              :marks="['Let me think']"
            /><span class="translation">你要我跟你搬去巴黎？讓我想一想。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="let me 後面不加 to" mark="Let me tell">
      <NoteFix wrong="Let me to explain." right="Let me explain." fix="explain" />
    </NoteSlide>

    <NoteSlide title="let 後面用受格 me" mark="me">
      <NoteFix wrong="Let I tell you something." right="Let me tell you something." fix="me" />
    </NoteSlide>

    <NoteSlide title="let me 後面用原形動詞" mark="tell">
      <NoteFix wrong="Let me showing you the way." right="Let me show you the way." fix="show" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
