<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-noun, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前面的名詞說明主要名詞是哪一種">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My girlfriend likes', kind: 'dim' },
          { t: 'vegetable', role: '前面的名詞', kind: 'key' },
          { t: 'pasta', role: '主要名詞' },
          { t: 'with', kind: 'dim' },
          { t: 'tomato', role: '前面的名詞', kind: 'key' },
          { t: 'sauce', role: '主要名詞' },
          { t: 'because she is vegetarian.', kind: 'dim' },
        ]"
      />
      <p class="translation">我女朋友喜歡茄汁蔬菜義大利麵，因為她吃素。</p>
      <p class="remark"><code>tomato sauce</code> 是一種醬，不是一種番茄。</p>
    </NoteSlide>

    <NoteSlide title="前面的名詞說明材料、時間、用途或地點" mark="vegetable">
      <div class="rows is-labeled">
        <div>
          <span class="term">材料</span>
          <span>vegetable soup, chocolate cake</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>Friday evening, summer holiday</span>
        </div>
        <div>
          <span class="term">用途</span>
          <span>computer games, coffee cup</span>
        </div>
        <div>
          <span class="term">地點</span>
          <span>city centre, kitchen table</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數的 -&#x2060;s 只加在主要名詞上">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We play', kind: 'dim' },
          { t: 'computer', role: '前面的名詞：單數', kind: 'key' },
          { t: 'games', role: '主要名詞：複數', kind: 'key', ring: true },
          { t: 'every Friday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們每個星期五都玩電腦遊戲。</p>
    </NoteSlide>

    <NoteSlide title="前面的名詞不加 -&#x2060;s">
      <NoteFix
        wrong="I need two shoes boxes for the move."
        right="I need two shoe boxes for the move."
        fix="shoe"
      />
    </NoteSlide>

    <NoteSlide title="說明種類的名詞放在前面" mark="vegetable pasta">
      <NoteFix
        wrong="Can I have a cake chocolate?"
        right="Can I have a chocolate cake?"
        fix="chocolate cake"
      />
    </NoteSlide>

    <NoteSlide title="名詞修飾名詞時，前面的名詞不加 's">
      <NoteFix
        wrong="I bought a new computer's bag."
        right="I bought a new computer bag."
        fix="computer"
      >
        <code>computer bag</code> 是裝電腦的包包，不是屬於電腦的東西。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
