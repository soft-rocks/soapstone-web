<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-verbs-of-senses-object-ing, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞後面的動詞-ing 說正在進行的事">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Then', role: '連接副詞', kind: 'dim' },
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'heard', role: '感官動詞', kind: 'key' },
          { t: 'someone', role: '受詞' },
          { t: 'screaming.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">接著我聽到有人在尖叫。</p>
      <p class="remark">聽到的時候，尖叫正在進行。</p>
    </NoteSlide>

    <NoteSlide title="說話的人不一定看到動作的開始和結束" mark="screaming">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'saw', role: '感官動詞' },
          { t: 'my brother', role: '受詞' },
          { t: 'washing', role: '正在洗', kind: 'key', ring: true },
          { t: 'the car.', kind: 'dim' },
        ]"
      />
      <p class="translation">我看到我哥哥正在洗車。</p>
    </NoteSlide>

    <NoteSlide title="被動句的動詞-ing 留在感官動詞後面" mark="someone">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The thief', role: '原來的受詞', kind: 'key', ring: true },
          { t: 'was seen', role: 'be + 過去分詞' },
          { t: 'running', role: '動詞-ing', kind: 'key' },
          { t: 'out of the shop.', kind: 'dim' },
        ]"
      />
      <p class="translation">有人看到小偷從店裡跑出來。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞後面的代名詞用受格" mark="someone">
      <NoteFix
        wrong="I saw they playing football in the park."
        right="I saw them playing football in the park."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面直接接動詞-ing，不加 to" mark="screaming">
      <NoteFix
        wrong="We heard the baby to crying."
        right="We heard the baby crying."
        fix="crying"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面不加 is" mark="someone screaming">
      <NoteFix
        wrong="I can smell something is burning."
        right="I can smell something burning."
        fix="something burning"
      />
    </NoteSlide>

    <NoteSlide title="listen 後面接受詞時要加 to" mark="heard">
      <NoteFix
        wrong="We listened the birds singing."
        right="We listened to the birds singing."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="原形動詞說整個動作" mark="screaming">
      <NoteMark sentence="I saw the cat jump onto the table." :marks="['jump']" />
      <p class="translation">我看到貓跳上桌子。</p>
    </NoteSlide>

    <NoteSlide title="句首的動詞-ing 是主詞的動作" mark="screaming">
      <NoteMark sentence="Walking home from school, I found a wallet." :marks="['Walking', 'I']" />
      <p class="translation">我走路放學回家的時候，撿到一個錢包。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
