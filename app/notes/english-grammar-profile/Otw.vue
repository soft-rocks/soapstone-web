<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-plural-for-emphasis, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複數反身代名詞表示強調">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Cars', role: '名詞' },
          { t: 'themselves', role: '反身代名詞', kind: 'key' },
          { t: 'are never dangerous.', role: '動詞和補語', kind: 'dim' },
        ]"
      />
      <p class="translation">汽車本身從來都不危險。</p>
    </NoteSlide>

    <NoteSlide title="放在名詞後面或句尾" mark="themselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞後面</span>
          <span
            ><NoteMark
              sentence="Cars themselves are never dangerous."
              :marks="['themselves']"
            /><span class="translation">汽車本身從來都不危險。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="We can prepare something to eat ourselves."
              :marks="['ourselves']"
            /><span class="translation">我們可以自己準備點吃的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="拿掉還完整，就是強調" mark="themselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">強調</span>
          <span
            ><NoteMark sentence="They painted the house themselves." :marks="['themselves']" /><span
              class="translation"
              >他們自己油漆房子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="They hurt themselves." :marks="['themselves']" /><span
              class="translation"
              >他們弄傷了自己。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數用 themselves" mark="themselves">
      <NoteFix
        wrong="Cars itself are never dangerous."
        right="Cars themselves are never dangerous."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="不寫 themself" mark="themselves">
      <NoteFix
        wrong="The children made the cake themself."
        right="The children made the cake themselves."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="反身代名詞不當主詞" mark="themselves">
      <NoteFix
        wrong="Ourselves built the shed."
        right="We built the shed ourselves."
        fix="We built"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
