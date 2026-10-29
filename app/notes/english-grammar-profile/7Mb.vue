<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-too-to-infinitive, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="to 不定詞是太怎麼樣而做不到的事" mark="too busy to write">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was', kind: 'dim' },
          { t: 'too tired', role: 'too + 形容詞', kind: 'key' },
          { t: 'to cook', role: 'to 不定詞', kind: 'key', ring: true },
          { t: 'last night.', kind: 'dim' },
        ]"
      />
      <p class="translation">我昨天晚上太累了，沒辦法煮飯。</p>
      <p class="remark">句子是否定的意思，但是沒有 <code>not</code>。</p>
    </NoteSlide>

    <NoteSlide title="主詞是不定詞的受詞，後面不加 it" mark="to write">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This tea', role: 'drink 的受詞', kind: 'key', ring: true },
          { t: 'is too hot', kind: 'dim' },
          { t: 'to drink.', role: 'to 不定詞', kind: 'key' },
        ]"
      />
      <p class="translation">這茶太燙了，沒辦法喝。</p>
    </NoteSlide>

    <NoteSlide title="for + 人說明是誰做不到" mark="too busy">
      <NoteMark sentence="The suitcase was too heavy for me to lift." :marks="['for me']" />
      <p class="translation">這個行李箱太重了，我提不起來。</p>
    </NoteSlide>

    <NoteSlide title="too 後面接 to 不定詞，接子句要用 so ... that" mark="too">
      <NoteFix
        wrong="The film was too long that I fell asleep."
        right="The film was so long that I fell asleep."
        fix="so"
      />
    </NoteSlide>

    <NoteSlide title="主詞已經是受詞，不定詞後面不加 it" mark="to write">
      <NoteFix
        wrong="This soup is too hot to eat it."
        right="This soup is too hot to eat."
        fix="eat"
      />
    </NoteSlide>

    <NoteSlide title="說太怎麼樣所以不能做，用 too，不用 very" mark="too busy">
      <NoteFix wrong="He was very young to drive." right="He was too young to drive." fix="too" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
