<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-real-and-imagined-situations-after, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句說未來的事，還是用現在簡單式">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'If', role: 'if', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'wear', role: '現在簡單式', kind: 'key', ring: true },
          { t: 'white clothes,', role: '受詞', kind: 'dim' },
          { t: 'you will get paint on them.', role: '結果', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你穿白色的衣服，衣服會沾到油漆。</p>
    </NoteSlide>
    <NoteSlide title="結果可以用 will、can 或祈使句" mark="wear">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="If you leave now, you'll catch the train."
              :marks="['leave', 'you\'ll']"
            /><span class="translation">你現在出門就趕得上火車。</span></span
          >
        </div>
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="If you need a lift, I can drive you."
              :marks="['need', 'can']"
            /><span class="translation">如果你需要人載，我可以開車送你。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark sentence="If you see Tom, say hello from me." :marks="['see', 'say']" /><span
              class="translation"
              >如果你看到 Tom，幫我跟他問好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="每次都會這樣的事，兩邊都用現在簡單式" mark="wear">
      <div class="rows is-labeled">
        <div>
          <span class="term">事實</span>
          <span
            ><NoteMark
              sentence="If you leave ice in the sun, it melts."
              :marks="['leave', 'melts']"
            /><span class="translation">冰放在太陽底下就會融化。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if 子句放後面時不加逗號" mark="If">
      <div class="rows is-labeled">
        <div>
          <span class="term">在前</span>
          <span
            ><NoteMark
              sentence="If you're hungry, there's some soup in the fridge."
              :marks="['If']"
            /><span class="translation">如果你餓了，冰箱裡有湯。</span></span
          >
        </div>
        <div>
          <span class="term">在後</span>
          <span
            ><NoteMark
              sentence="There's some soup in the fridge if you're hungry."
              :marks="['if']"
            /><span class="translation">冰箱裡有湯，你餓了可以吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if 子句裡不用 will" mark="wear">
      <NoteFix
        wrong="If it will rain tomorrow, we'll stay at home."
        right="If it rains tomorrow, we'll stay at home."
        :fix="['rains']"
      />
    </NoteSlide>
    <NoteSlide title="if 子句的否定要有 don't" mark="wear">
      <NoteFix
        wrong="If you not hurry, you'll miss the bus."
        right="If you don't hurry, you'll miss the bus."
        :fix="['don\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
