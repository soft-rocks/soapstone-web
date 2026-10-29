<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-predicative-with-be, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="英文的形容詞前面要有 be" mark="is lovely">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My kitchen', role: '主詞' },
          { t: 'is', role: 'be', kind: 'key', ring: true },
          { t: 'small.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的廚房很小。</p>
      <p class="remark">中文說「廚房很小」，英文要加 <code>is</code>。</p>
    </NoteSlide>

    <NoteSlide title="否定加 not，問句把 be 放在前面" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="Don't worry. The dog isn't dangerous."
              :marks="['isn\'t dangerous']"
            /><span class="translation">別擔心，那隻狗不兇。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Is your new room big?" :marks="['Is']" /><span class="translation"
              >你的新房間大嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去用 was 和 were" mark="is">
      <NoteMark sentence="The hotel rooms were small but clean." :marks="['were']" />
      <p class="translation">飯店的房間很小，但是很乾淨。</p>
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be" mark="is">
      <NoteFix wrong="My bedroom big." right="My bedroom is big." fix="is" />
    </NoteSlide>

    <NoteSlide title="主詞是複數，用 are" mark="is">
      <NoteFix wrong="My parents is happy." right="My parents are happy." fix="are" />
    </NoteSlide>

    <NoteSlide title="主詞是複數時，形容詞也不加 -s" mark="lovely">
      <NoteFix wrong="The rooms are bigs." right="The rooms are big." fix="big" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
