<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-modal-verb-can, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="can't 後面接原形動詞，每個主詞都一樣">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'can\'t', role: 'can\'t', kind: 'key' },
          { t: 'find', role: '原形動詞', kind: 'key' },
          { t: 'my CD.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我找不到我的 CD。</p>
    </NoteSlide>

    <NoteSlide title="正式的文章用 cannot，寫成一個字" mark="can't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Guests', role: '主詞' },
          { t: 'cannot', role: 'cannot', kind: 'key' },
          { t: 'bring', role: '原形動詞' },
          { t: 'food into the rooms.', kind: 'dim' },
        ]"
      />
      <p class="translation">房客不可以把食物帶進房間。</p>
    </NoteSlide>

    <NoteSlide title="can't 表示不會、沒辦法或不可以" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有能力</span>
          <span
            ><NoteMark sentence="I can't swim." :marks="['can\'t swim']" /><span class="translation"
              >我不會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒辦法做</span>
          <span
            ><NoteMark sentence="I can't find my CD." :marks="['can\'t find']" /><span
              class="translation"
              >我找不到我的 CD。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可以</span>
          <span
            ><NoteMark sentence="You can't park here." :marks="['can\'t park']" /><span
              class="translation"
              >你不可以在這裡停車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't 後面直接接原形動詞，不加 to" mark="find">
      <NoteFix wrong="I can't to come tomorrow." right="I can't come tomorrow." fix="come" />
    </NoteSlide>

    <NoteSlide title="can't 後面的動詞不加 -s" mark="find">
      <NoteFix wrong="She can't speaks French." right="She can't speak French." fix="speak" />
    </NoteSlide>

    <NoteSlide title="can 的否定不用 don't" mark="can't">
      <NoteFix wrong="I don't can drive." right="I can't drive." fix="can't" />
    </NoteSlide>

    <NoteSlide title="cannot 寫成一個字" mark="can't">
      <NoteFix wrong="We can not hear you." right="We cannot hear you." fix="cannot" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
