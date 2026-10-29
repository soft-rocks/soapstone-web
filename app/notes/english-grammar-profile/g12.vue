<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-very-adverb, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very 放在程度副詞前面" mark="very much">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I like', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'my job', role: '受詞', kind: 'dim' },
          { t: 'very', role: 'very', kind: 'key' },
          { t: 'much.', role: '程度副詞' },
        ]"
      />
      <p class="translation">我很喜歡我的工作。</p>
    </NoteSlide>

    <NoteSlide title="very 放在時間副詞前面" mark="very">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I hope you will be fine', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'very', role: 'very', kind: 'key' },
          { t: 'soon.', role: '時間副詞' },
        ]"
      />
      <p class="translation">希望你很快就會好起來。</p>
    </NoteSlide>

    <NoteSlide title="常見的組合" mark="very much">
      <div class="rows is-labeled">
        <div>
          <span class="term">very much</span>
          <span>很，非常，修飾 like、love、enjoy 這類動詞</span>
        </div>
        <div>
          <span class="term">very soon</span>
          <span>很快，馬上</span>
        </div>
        <div>
          <span class="term">very often</span>
          <span>很常</span>
        </div>
        <div>
          <span class="term">very early</span>
          <span>很早</span>
        </div>
        <div>
          <span class="term">very late</span>
          <span>很晚</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句的 not very often 是不常" mark="very much">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'don\'t', role: '否定', kind: 'key' },
          { t: 'watch TV', role: '動詞 + 受詞' },
          { t: 'very often.', role: 'very + 時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我不常看電視。</p>
    </NoteSlide>

    <NoteSlide title="very 修飾動詞要加 much" mark="very much">
      <NoteFix
        wrong="I enjoyed the concert very."
        right="I enjoyed the concert very much."
        fix="very much"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾 a lot" mark="very much">
      <NoteFix wrong="Thank you very a lot." right="Thank you very much." fix="very much" />
    </NoteSlide>

    <NoteSlide title="soon 不加 -ly">
      <NoteFix
        wrong="The bus will come very soonly."
        right="The bus will come very soon."
        fix="very soon"
      />
    </NoteSlide>

    <NoteSlide title="表示馬上用 right now">
      <NoteFix wrong="Please call me very now." right="Please call me right now." fix="right now" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
