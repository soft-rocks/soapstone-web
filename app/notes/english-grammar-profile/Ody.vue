<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-those, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'love to play', role: '動詞' },
          { t: 'those', role: 'those', kind: 'key' },
          { t: 'instruments.', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很喜歡演奏那些樂器。</p>
    </NoteSlide>

    <NoteSlide title="that 接單數，those 接複數" mark="those instruments">
      <div class="rows is-labeled">
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark sentence="that shoe" :marks="['that']" /><span class="translation"
              >那隻鞋</span
            ></span
          >
        </div>
        <div>
          <span class="term">those</span>
          <span
            ><NoteMark sentence="those shoes" :marks="['those']" /><span class="translation"
              >那雙鞋</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 當主詞，動詞用複數" mark="those">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="Those shoes are expensive." :marks="['are']" /><span
              class="translation"
              >那雙鞋很貴。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="Those clothes were in the sale." :marks="['were']" /><span
              class="translation"
              >那些衣服是特價的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 後面的名詞用複數" mark="instruments">
      <NoteFix
        wrong="I love those instrument."
        right="I love those instruments."
        fix="instruments"
      />
    </NoteSlide>

    <NoteSlide title="動詞用複數" mark="those">
      <NoteFix wrong="Those boots was too small." right="Those boots were too small." fix="were" />
    </NoteSlide>

    <NoteSlide title="those 不再加 s" mark="those">
      <NoteFix wrong="I want thoses books." right="I want those books." fix="those" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
