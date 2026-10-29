<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-755, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had been + -ing" mark="I'd been">
      <div class="rows is-labeled">
        <div>
          <span class="term">had been</span>
          <span>所有主詞都用 had been。</span>
        </div>
        <div>
          <span class="term">'d been</span>
          <span>口語常用的縮寫，像 I'd been、we'd been。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>在過去某個時間點之前一直在做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常和 for 一起用" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We had been waiting for hours." :marks="['for']" /><span
              class="translation"
              >我們已經等了好幾個小時。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">for 加一段時間，說持續了多久。</p>
    </NoteSlide>
    <NoteSlide title="had 和 -ing 中間要有 been" mark="been">
      <NoteFix
        wrong="We had waiting for hours."
        right="We had been waiting for hours."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事用 had been">
      <NoteFix
        wrong="Yesterday she has been crying all morning."
        right="Yesterday she had been crying all morning."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="had been 後面的動詞要加 -ing">
      <NoteFix
        wrong="I had been work on it for a year."
        right="I had been working on it for a year."
        :fix="['working']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
