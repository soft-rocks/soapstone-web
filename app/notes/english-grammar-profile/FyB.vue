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
          { t: 'Can', role: '情態動詞', kind: 'key' },
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
            ><NoteMark sentence="Can your grandmother use a computer?" :marks="['Can your grandmother']" /><span
              class="translation"
              >你奶奶會用電腦嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">請對方幫忙</span>
          <span
            ><NoteMark sentence="Can you check my spelling?" :marks="['Can you']" /><span
              class="translation"
              >你可以幫我檢查拼字嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">可不可以</span>
          <span
            ><NoteMark sentence="Can I park my car in front of your garage?" :marks="['Can I']" /><span
              class="translation"
              >我可以把車停在你的車庫前面嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="簡答用 can 或 can't" mark="Can">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Can you ski?&quot;', kind: 'dim' },
          { t: '&quot;Yes, I can.&quot;', role: '肯定回答', kind: 'key' },
          { t: '&quot;No, I can\'t.&quot;', role: '否定回答', kind: 'key' },
        ]"
      />
      <p class="translation">「你會滑雪嗎？」「會。」／「不會。」</p>
    </NoteSlide>

    <NoteSlide title="有 can 的疑問句不加 do" mark="Can">
      <NoteFix wrong="Do you can whistle?" right="Can you whistle?" fix="Can" />
    </NoteSlide>

    <NoteSlide title="can 後面不加 to" mark="come">
      <NoteFix
        wrong="Can you to pick up some bread on your way home?"
        right="Can you pick up some bread on your way home?"
        fix="pick"
      />
    </NoteSlide>

    <NoteSlide title="疑問句的 can 放在主詞前面" mark="Can you">
      <NoteFix
        wrong="Your sister can babysit on Friday?"
        right="Can your sister babysit on Friday?"
        fix="Can your sister"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
