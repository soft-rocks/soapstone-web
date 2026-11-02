<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-requests-613, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="please 放在 you 和原形動詞中間" mark="please">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Will you', kind: 'key' },
          { t: 'please', kind: 'key', ring: true },
          { t: 'send', role: '原形動詞' },
          { t: 'me his name, address and telephone number?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="商業信件用 Will you please 請對方提供資料" mark="please">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Will you please tell us the delivery date for our order?"
              :marks="['Will you please']"
            /><span class="translation">可以請您告訴我們訂單的交貨日期嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Will you 的句尾用驚嘆號，是生氣的命令" mark="Will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you be quiet!" :marks="['Will you', 'quiet!']" /><span
              class="translation"
              >你給我安靜！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="please 不放在 will 和 you 中間" mark="please">
      <NoteFix
        wrong="Will please you send me the invoice?"
        right="Will you please send me the invoice?"
        :fix="['you', 'send']"
      />
    </NoteSlide>
    <NoteSlide title="please 後面接原形動詞" mark="please">
      <NoteFix
        wrong="Will you please sending your bank details by Friday?"
        right="Will you please send your bank details by Friday?"
        :fix="['send']"
      />
    </NoteSlide>
    <NoteSlide title="請求用 will you please，不用 do" mark="Will">
      <NoteFix
        wrong="Do you please call me back?"
        right="Will you please call me back?"
        :fix="['Will']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
