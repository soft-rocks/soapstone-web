<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-modal-verbs-1032, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Can 放在主詞前面，後面接原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can', role: 'Can', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'come', role: '原形動詞', kind: 'key' },
          { t: 'to dinner at my house?', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以來我家吃晚餐嗎？</p>
    </NoteSlide>

    <NoteSlide title="Can 問能力、請對方幫忙，也問可不可以" mark="Can">
      <div class="rows is-labeled">
        <div>
          <span class="term">能力</span>
          <span
            ><NoteMark sentence="Can you swim?" :marks="['swim']" /><span class="translation"
              >你會游泳嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">請對方幫忙</span>
          <span
            ><NoteMark sentence="Can you bring some music?" :marks="['bring']" /><span
              class="translation"
              >你可以帶一些音樂來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">可不可以</span>
          <span
            ><NoteMark sentence="Can I sit here?" :marks="['I']" /><span class="translation"
              >我可以坐這裡嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="簡答用 can 或 can't" mark="Can">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Can you come?&quot;', kind: 'dim' },
          { t: '&quot;Yes, I can.&quot;', role: '可以', kind: 'key' },
          { t: '&quot;No, I can\'t.&quot;', role: '不行', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="有 can 的疑問句不加 do" mark="Can">
      <NoteFix wrong="Do you can swim?" right="Can you swim?" fix="Can" />
    </NoteSlide>

    <NoteSlide title="can 後面不加 to" mark="come">
      <NoteFix wrong="Can you to help me?" right="Can you help me?" fix="help" />
    </NoteSlide>

    <NoteSlide title="疑問句的 can 放在主詞前面" mark="Can you">
      <NoteFix wrong="You can come tomorrow?" right="Can you come tomorrow?" fix="Can you" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
