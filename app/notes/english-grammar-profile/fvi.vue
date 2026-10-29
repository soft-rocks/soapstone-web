<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-clauses-conditions, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句說出條件，可以放在主要子句後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I will come see you on Friday', role: '主要子句' },
          { t: 'if', role: '如果', kind: 'key' },
          { t: 'it\'s OK with you.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">如果你方便的話，我星期五會去看你。</p>
    </NoteSlide>

    <NoteSlide title="if 子句在後面不加逗號，在前面要加逗號" mark="if">
      <div class="rows is-labeled">
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="We can go to the beach if the weather is nice."
              :marks="['if']"
            /><span class="translation">如果天氣好，我們可以去海邊。</span></span
          >
        </div>
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="If you're hungry, there's some pizza in the fridge."
              :marks="['If', 'hungry,']"
            /><span class="translation">如果你餓了，冰箱裡有披薩。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說未來的條件，if 子句用現在式" mark="it's">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="If it rains tomorrow, we'll stay at home."
              :marks="['rains', 'we\'ll']"
            /><span class="translation">如果明天下雨，我們就待在家。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you see Mark, say hello from me."
              :marks="['see', 'say']"
            /><span class="translation">如果你看到 Mark，幫我跟他問好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說未來的條件，if 子句不用 will" mark="it's">
      <NoteFix
        wrong="If it will rain, we'll take the bus."
        right="If it rains, we'll take the bus."
        fix="rains,"
      />
    </NoteSlide>

    <NoteSlide title="if 已經連接兩個子句，不加 so">
      <NoteFix
        wrong="If you need help, so call me."
        right="If you need help, call me."
        fix="call me."
      />
    </NoteSlide>

    <NoteSlide title="if 後面要有主詞" mark="it's">
      <NoteFix wrong="I'll buy it if is cheap." right="I'll buy it if it is cheap." fix="it#2" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
