<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-another, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="another + 單數名詞" mark="another great joke.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Every five minutes, he makes', role: '時間 + 主詞 + 動詞', kind: 'dim' },
          { t: 'another', role: '限定詞', kind: 'key' },
          { t: 'great', role: '形容詞' },
          { t: 'joke.', role: '單數名詞' },
        ]"
      />
      <p class="translation">他每隔五分鐘就又講一個很好笑的笑話。</p>
    </NoteSlide>

    <NoteSlide title="再一個和另一個" mark="another">
      <div class="rows is-labeled">
        <div>
          <span class="term">再一個</span>
          <span
            ><NoteMark sentence="Can I have another cup of tea?" :marks="['another cup']" /><span
              class="translation"
              >我可以再來一杯茶嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">另一個</span>
          <span
            ><NoteMark
              sentence="This glass is dirty. Can I have another glass?"
              :marks="['another glass?']"
            /><span class="translation">這個杯子髒了。可以給我另一個杯子嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="another、other、the other">
      <div class="rows is-labeled">
        <div>
          <span class="term">another</span>
          <span>接單數名詞：another book</span>
        </div>
        <div>
          <span class="term">other</span>
          <span>接複數名詞：other books</span>
        </div>
        <div>
          <span class="term">the other</span>
          <span>兩個裡面剩下的那一個：the other hand</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="another 接單數名詞" mark="another great joke.">
      <NoteFix wrong="I need another books." right="I need another book." fix="another book." />
    </NoteSlide>

    <NoteSlide title="another 寫成一個字" mark="another">
      <NoteFix
        wrong="Can I have an other piece of cake?"
        right="Can I have another piece of cake?"
        fix="another"
      />
    </NoteSlide>

    <NoteSlide title="another 前面不加冠詞">
      <NoteFix wrong="She bought the another dress." right="She bought another dress." fix="another" />
    </NoteSlide>

    <NoteSlide title="不可數名詞加 glass of">
      <NoteFix
        wrong="Can I have another water?"
        right="Can I have another glass of water?"
        fix="another glass of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
