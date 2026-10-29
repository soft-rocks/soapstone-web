<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-word-word, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="選擇疑問句用 or 連接同一種詞性的字">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Is it', role: '疑問句' },
          { t: 'cheap', role: 'A：形容詞', kind: 'key' },
          { t: 'or', role: 'or', kind: 'key', ring: true },
          { t: 'expensive', role: 'B：形容詞', kind: 'key' },
          { t: 'for you?', kind: 'dim' },
        ]"
      />
      <p class="translation">這對你來說算便宜還是貴？</p>
    </NoteSlide>

    <NoteSlide title="A 和 B 可以是形容詞、名詞、動詞或副詞" mark="cheap or expensive">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="Do you want tea or coffee?" :marks="['tea', 'coffee']" /><span
              class="translation"
              >你要茶還是咖啡？</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark sentence="Shall we walk or drive?" :marks="['walk', 'drive']" /><span
              class="translation"
              >我們要走路還是開車？</span
            ></span
          >
        </div>
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="Do you want to leave now or later?"
              :marks="['now', 'later']"
            /><span class="translation">你要現在走還是晚一點？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="語調在 A 上揚、在 B 下降，對方選一個回答" mark="or">
      <NoteWords
        :size="30"
        :parts="[
          { t: '&quot;Tea', role: 'A：上揚' },
          { t: 'or', kind: 'dim' },
          { t: 'coffee?&quot;', role: 'B：下降' },
          { t: '&quot;Coffee, please.&quot;', role: '選一個', kind: 'key' },
        ]"
      />
      <p class="translation">「茶還是咖啡？」「咖啡，謝謝。」</p>
    </NoteSlide>

    <NoteSlide title="B 的語調也上揚，就變成一般的疑問句" mark="or">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;Would you like tea or coffee?&quot;', role: '語調上揚', kind: 'dim' },
          { t: '&quot;Yes, please. Coffee.&quot;', role: '回答 yes', kind: 'key' },
        ]"
      />
      <p class="translation">「你要喝點茶或咖啡嗎？」「好，謝謝。咖啡。」</p>
    </NoteSlide>

    <NoteSlide title="or 前後用同一種字" mark="cheap or expensive">
      <NoteFix
        wrong="Do you want tea or drinking?"
        right="Do you want tea or coffee?"
        fix="coffee"
      />
    </NoteSlide>

    <NoteSlide title="選擇疑問句用 or，不用 and" mark="or">
      <NoteFix wrong="Is it cheap and expensive?" right="Is it cheap or expensive?" fix="or" />
    </NoteSlide>

    <NoteSlide title="選擇疑問句不用 yes 或 no 回答">
      <NoteFix
        wrong='"Is your new flat big or small?" "Yes."'
        right='"Is your new flat big or small?" "It&apos;s quite small."'
        fix="small"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
