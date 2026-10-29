<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-singular-noun-s, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單數名詞加 's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'because', role: '連接詞', kind: 'dim' },
          { t: 'it\'s', role: '主詞和動詞', kind: 'dim' },
          { t: 'my sister\'s', role: '單數名詞 + \'s', kind: 'key' },
          { t: 'jacket.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">因為那是我姊姊的外套。</p>
    </NoteSlide>

    <NoteSlide title="擁有的人在前，東西在後" mark="my sister's jacket">
      <div class="rows is-labeled">
        <div>
          <span class="term">人名</span>
          <span
            ><NoteMark
              sentence="I'll wear them at Linda's party."
              :marks="['Linda\'s party']"
            /><span class="translation">我要穿去 Linda 的派對。</span></span
          >
        </div>
        <div>
          <span class="term">其他單數名詞</span>
          <span
            ><NoteMark
              sentence="Don't sit there. That's the teacher's chair."
              :marks="['the teacher\'s chair']"
            /><span class="translation">別坐那裡。那是老師的椅子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面接名詞才是所有格" mark="sister's">
      <div class="rows is-labeled">
        <div>
          <span class="term">所有格</span>
          <span
            ><NoteMark sentence="This is Tom's bike." :marks="['Tom\'s bike']" /><span
              class="translation"
              >這是 Tom 的腳踏車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">is 的縮寫</span>
          <span
            ><NoteMark sentence="Tom's at home." :marks="['Tom\'s']" /><span class="translation"
              >Tom 在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="擁有的人放在東西前面" mark="my sister's jacket">
      <NoteFix
        wrong="It's the jacket my sister."
        right="It's my sister's jacket."
        fix="my sister's jacket"
      />
    </NoteSlide>

    <NoteSlide title="表示所有要加撇號" mark="sister's">
      <NoteFix
        wrong="I'll wear them at Lindas party."
        right="I'll wear them at Linda's party."
        fix="Linda's"
      />
    </NoteSlide>

    <NoteSlide title="撇號放在名字後面再加 s" mark="sister's">
      <NoteFix wrong="This is Toms' bike." right="This is Tom's bike." fix="Tom's" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
