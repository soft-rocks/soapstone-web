<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-stranding, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞放在句首，介系詞留在句尾">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'What', role: '疑問詞', kind: 'key' },
          { t: 'are you waiting', role: '助動詞 + 主詞 + 動詞' },
          { t: 'for?', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">你在等什麼？</p>
    </NoteSlide>

    <NoteSlide title="句尾的介系詞來自固定的組合" mark="for?">
      <div class="rows is-labeled">
        <div>
          <span class="term">talk about</span>
          <span
            ><NoteMark sentence="What are you talking about?" :marks="['about']" /><span
              class="translation"
              >你在說什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">come from</span>
          <span
            ><NoteMark sentence="Where does your teacher come from?" :marks="['from']" /><span
              class="translation"
              >你的老師是哪裡人？</span
            ></span
          >
        </div>
        <div>
          <span class="term">go with</span>
          <span
            ><NoteMark sentence="Who did you go to the cinema with?" :marks="['with']" /><span
              class="translation"
              >你跟誰去看電影？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問句把受詞換成疑問詞，介系詞留在原來的位置" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">直述句</span>
          <span
            ><NoteMark sentence="I'm waiting for the bus." :marks="['the bus']" /><span
              class="translation"
              >我在等公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="What are you waiting for?" :marks="['What']" /><span
              class="translation"
              >你在等什麼？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="look at 的 at 要留在句尾" mark="for?">
      <NoteFix wrong="What are you looking?" right="What are you looking at?" fix="at" />
    </NoteSlide>

    <NoteSlide title="疑問詞已經是介系詞的受詞，句尾不再加受詞" mark="What">
      <NoteFix wrong="Who are you talking to him?" right="Who are you talking to?" fix="to?" />
    </NoteSlide>

    <NoteSlide title="疑問句要有助動詞，放在主詞前面" mark="are you">
      <NoteFix wrong="Who you went with?" right="Who did you go with?" fix="did you go" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
