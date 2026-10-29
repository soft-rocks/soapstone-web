<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-really-really, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="really 重複一次，加強形容詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I am not keen on football, so', role: '原因', kind: 'dim' },
          { t: 'I think it is', role: '主詞 + 動詞 + 主詞 + be', kind: 'dim' },
          { t: 'really really', role: '程度副詞', kind: 'key' },
          { t: 'boring.', role: '形容詞' },
        ]"
      />
      <p class="translation">我不太喜歡足球，所以我覺得足球真的真的很無聊。</p>
    </NoteSlide>

    <NoteSlide title="really really 也可以放在一般動詞前面" mark="really really">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'really really', role: '程度副詞', kind: 'key' },
          { t: 'like', role: '一般動詞' },
          { t: 'her smile.', role: '受詞' },
        ]"
      />
      <p class="translation">我真的真的很喜歡她的笑容。</p>
    </NoteSlide>

    <NoteSlide title="very 也可以重複">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The water was', role: '主詞 + be', kind: 'dim' },
          { t: 'very very', role: '程度副詞', kind: 'key' },
          { t: 'cold.', role: '形容詞' },
        ]"
      />
      <p class="translation">水非常非常冷。</p>
    </NoteSlide>

    <NoteSlide title="重複的 really 中間不加 and" mark="really really">
      <NoteFix
        wrong="It was really and really hot."
        right="It was really really hot."
        fix="really really"
      />
    </NoteSlide>

    <NoteSlide title="really really 不放在動詞和受詞中間" mark="really really">
      <NoteFix
        wrong="I want really really a new bike."
        right="I really really want a new bike."
        fix="really really want"
      />
    </NoteSlide>

    <NoteSlide title="really 有兩個 l" mark="really really">
      <NoteFix
        wrong="I'm realy realy tired today."
        right="I'm really really tired today."
        fix="really really"
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 really，不用 real">
      <NoteFix
        wrong="The test was real real hard."
        right="The test was really really hard."
        fix="really really"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
