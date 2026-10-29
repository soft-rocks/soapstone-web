<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-place-complement, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there 當 be 的補語，表示在場">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I hope', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'you', role: '子句的主詞' },
          { t: 'will be', role: '助動詞 + be' },
          { t: 'there.', role: '補語', kind: 'key' },
        ]"
      />
      <p class="translation">我希望你到時候能去。</p>
    </NoteSlide>

    <NoteSlide title="移動動詞後面直接接 here 或 there" mark="there">
      <div class="rows is-labeled">
        <div>
          <span class="term">go there</span>
          <span
            ><NoteMark sentence="You must go there." :marks="['go there']" /><span
              class="translation"
              >你一定要去那裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">come here</span>
          <span
            ><NoteMark sentence="Come here, please." :marks="['Come here']" /><span
              class="translation"
              >請過來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="live、stay、work 後面也可以直接接 here 或 there" mark="there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My aunt', role: '主詞', kind: 'dim' },
          { t: 'lives', role: '一般動詞' },
          { t: 'there.', role: '補語', kind: 'key' },
        ]"
      />
      <p class="translation">我阿姨住在那裡。</p>
    </NoteSlide>

    <NoteSlide title="get here 和 get there 表示到達" mark="there">
      <div class="rows is-labeled">
        <div>
          <span class="term">get here</span>
          <span
            ><NoteMark sentence="How did you get here?" :marks="['get here']" /><span
              class="translation"
              >你是怎麼來的？</span
            ></span
          >
        </div>
        <div>
          <span class="term">get there</span>
          <span
            ><NoteMark sentence="We got there at midnight." :marks="['got there']" /><span
              class="translation"
              >我們半夜才到那裡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="there 前面不加 to" mark="there">
      <NoteFix
        wrong="We drove to there last weekend."
        right="We drove there last weekend."
        fix="drove there"
      />
    </NoteSlide>

    <NoteSlide title="主詞和 there 中間要有 be" mark="be there">
      <NoteFix
        wrong="My phone there on the desk."
        right="My phone is there on the desk."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="here 前面不加 at 或 in">
      <NoteFix wrong="I work at here." right="I work here." fix="work here" />
    </NoteSlide>

    <NoteSlide title="here 不當主詞">
      <NoteFix wrong="Here is very cold." right="It's very cold here." fix="It's" />
    </NoteSlide>

    <NoteSlide title="be there 的 there 指地點，There is 的 there 表示有" mark="be there">
      <div class="rows is-labeled">
        <div>
          <span class="term">be there<br /><i>地點</i></span>
          <span
            ><NoteMark sentence="She is there." :marks="['is there']" /><span class="translation"
              >她在那裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">There is<br /><i>有</i></span>
          <span
            ><NoteMark sentence="There is a cat in the garden." :marks="['There is']" /><span
              class="translation"
              >院子裡有一隻貓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
