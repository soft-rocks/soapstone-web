<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-really-mid-position, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="really 放在主詞和動詞中間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'love', role: '動詞' },
          { t: 'walking.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我真的很愛散步。</p>
    </NoteSlide>

    <NoteSlide title="有助動詞時，really 放在助動詞後面" mark="really love">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'would', role: '助動詞' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'like', role: '動詞' },
          { t: 'a cup of tea.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我真的很想喝杯茶。</p>
    </NoteSlide>

    <NoteSlide title="疑問句的 really 放在主詞後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Do', role: '助動詞', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'live', role: '動詞' },
          { t: 'here?', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你真的住在這裡嗎？</p>
    </NoteSlide>

    <NoteSlide title="don't really 是不太，really don't 是真的不">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't really</span>
          <span
            ><NoteMark sentence="I don't really like coffee." :marks="['don\'t really']" /><span
              class="translation"
              >我不太喜歡咖啡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">really don't</span>
          <span
            ><NoteMark sentence="I really don't like coffee." :marks="['really don\'t']" /><span
              class="translation"
              >我真的很不喜歡咖啡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="really 不放在動詞和受詞中間" mark="really love">
      <NoteFix
        wrong="I like really my new bike."
        right="I really like my new bike."
        fix="really like"
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用 really，不用 real">
      <NoteFix
        wrong="I real want to see that film."
        right="I really want to see that film."
        fix="really want"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾動詞">
      <NoteFix
        wrong="I very like your new haircut."
        right="I really like your new haircut."
        fix="really like"
      />
    </NoteSlide>

    <NoteSlide title="第三人稱單數的動詞照樣加 -s">
      <NoteFix
        wrong="My sister really love cats."
        right="My sister really loves cats."
        fix="really loves"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
