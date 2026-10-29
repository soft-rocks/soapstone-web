<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-those-pointing, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those 指遠處的人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Who are', role: '疑問詞和動詞', kind: 'dim' },
          { t: 'those', role: 'those', kind: 'key' },
          { t: 'people', role: '複數名詞', kind: 'key' },
          { t: 'across the street?', role: '地點' },
        ]"
      />
      <p class="translation">對街那些人是誰？</p>
    </NoteSlide>

    <NoteSlide title="these 近，those 遠" mark="those people">
      <div class="rows is-labeled">
        <div>
          <span class="term">these</span>
          <span
            ><NoteMark sentence="These shoes are too small." :marks="['These']" /><span
              class="translation"
              >這雙鞋太小了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">those</span>
          <span
            ><NoteMark sentence="Can I try those shoes in the window?" :marks="['those']" /><span
              class="translation"
              >我可以試穿櫥窗裡那雙鞋嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 也指過去" mark="those">
      <div class="rows is-labeled">
        <div>
          <span class="term">those days</span>
          <span
            ><NoteMark
              sentence="In those days, we didn't have phones."
              :marks="['those days']"
            /><span class="translation">那個時候我們沒有手機。</span></span
          >
        </div>
        <div>
          <span class="term">those years</span>
          <span
            ><NoteMark sentence="I was very happy in those years." :marks="['those years']" /><span
              class="translation"
              >那幾年我很快樂。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數名詞用 that" mark="those">
      <NoteFix
        wrong="Who is those man over there?"
        right="Who is that man over there?"
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="those 前面不加 the" mark="those">
      <NoteFix
        wrong="Look at the those birds on the roof."
        right="Look at those birds on the roof."
        fix="those"
      />
    </NoteSlide>

    <NoteSlide title="those 動詞用複數" mark="are">
      <NoteFix wrong="Those flowers is beautiful." right="Those flowers are beautiful." fix="are" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
