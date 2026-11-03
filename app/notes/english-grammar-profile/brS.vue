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
    <NoteSlide title="there 當 be 的補語，表示在場" mark="be there">
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

    <NoteSlide title="移動動詞後面直接接 here 或 there">
      <div class="rows is-labeled">
        <div>
          <span class="term">go there</span>
          <span
            ><NoteMark
              sentence="You must go there before you leave Japan."
              :marks="['go there']"
            /><span class="translation">你離開日本前一定要去那裡。</span></span
          >
        </div>
        <div>
          <span class="term">come here</span>
          <span
            ><NoteMark sentence="Please come here and sit down." :marks="['come here']" /><span
              class="translation"
              >請過來坐下。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="live、stay、work 後面也可以直接接 here 或 there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My aunt', role: '主詞', kind: 'dim' },
          { t: 'lives', role: '一般動詞' },
          { t: 'there', role: '補語', kind: 'key' },
          { t: 'with her two cats.', kind: 'dim' },
        ]"
      />
      <p class="translation">我阿姨跟她的兩隻貓住在那裡。</p>
    </NoteSlide>

    <NoteSlide title="get here 和 get there 表示到達">
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
            ><NoteMark sentence="How long does it take to get there?" :marks="['get there']" /><span
              class="translation"
              >去那裡要多久？</span
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
      <NoteFix
        wrong="My brother studies at here."
        right="My brother studies here."
        fix="studies here"
      />
    </NoteSlide>

    <NoteSlide title="here 不當主詞">
      <NoteFix
        wrong="Here is too noisy for a meeting."
        right="It's too noisy here for a meeting."
        fix="It's"
      />
    </NoteSlide>

    <NoteSlide title="be there 的 there 指地點，There is 的 there 表示有" mark="be there">
      <div class="rows is-labeled">
        <div>
          <span class="term">be there<br /><i>地點</i></span>
          <span
            ><NoteMark sentence="My sister is there with her friends." :marks="['is there']" /><span
              class="translation"
              >我姊姊跟她朋友在那裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">There is<br /><i>有</i></span>
          <span
            ><NoteMark sentence="There is a fox in the garden." :marks="['There is']" /><span
              class="translation"
              >院子裡有一隻狐狸。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
