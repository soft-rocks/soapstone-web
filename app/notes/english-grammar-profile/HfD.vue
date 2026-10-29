<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-mid-position, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在主要動詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'also', role: '副詞', kind: 'key' },
          { t: 'eat', role: '主要動詞' },
          { t: 'rice every day.', role: '受詞 + 時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我們每天也吃米飯。</p>
    </NoteSlide>

    <NoteSlide title="副詞放在 be 後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'is', role: 'be' },
          { t: 'also', role: '副詞', kind: 'key' },
          { t: 'very pretty.', role: '形容詞', kind: 'dim' },
        ]"
      />
      <p class="translation">它也很漂亮。</p>
    </NoteSlide>

    <NoteSlide title="副詞放在助動詞後面" mark="have finally bought">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'have', role: '助動詞' },
          { t: 'finally', role: '副詞', kind: 'key' },
          { t: 'bought', role: '主要動詞' },
          { t: 'a mobile phone.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我終於買手機了。</p>
    </NoteSlide>

    <NoteSlide title="各個副詞的意思" mark="finally">
      <div class="rows is-labeled">
        <div>
          <span class="term">also</span>
          <span>也，加上另一件事</span>
        </div>
        <div>
          <span class="term">only</span>
          <span>只，數量少或範圍小</span>
        </div>
        <div>
          <span class="term">finally</span>
          <span>終於，等了很久以後才發生</span>
        </div>
        <div>
          <span class="term">still</span>
          <span>還，事情到現在還在繼續</span>
        </div>
        <div>
          <span class="term">already</span>
          <span>已經，比預期的早</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句的也不用 either">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister', role: '主詞', kind: 'dim' },
          { t: 'doesn\'t like', role: '否定的動詞' },
          { t: 'it', role: '受詞', kind: 'dim' },
          { t: 'either.', role: '副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我姊姊也不喜歡。</p>
    </NoteSlide>

    <NoteSlide title="副詞不放在主要動詞後面">
      <NoteFix wrong="I like also pizza." right="I also like pizza." fix="also like" />
    </NoteSlide>

    <NoteSlide title="副詞放在 be 後面">
      <NoteFix wrong="My aunt also is a nurse." right="My aunt is also a nurse." fix="is also" />
    </NoteSlide>

    <NoteSlide title="副詞放在助動詞後面" mark="have finally">
      <NoteFix
        wrong="We also can meet on Sunday."
        right="We can also meet on Sunday."
        fix="can also meet"
      />
    </NoteSlide>

    <NoteSlide title="否定句不用 also">
      <NoteFix wrong="I don't also eat meat." right="I don't eat meat either." fix="either" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
