<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-tags-with-there-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there 開頭的直述句，附加問句也用 there">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'There is', role: '虛主詞 + be 動詞' },
          { t: 'always', kind: 'dim' },
          { t: 'something you can improve,', role: '名詞片語' },
          { t: 'isn\'t there?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">總是有可以改進的地方，不是嗎？</p>
    </NoteSlide>

    <NoteSlide title="否定的直述句接肯定的附加問句" mark="isn't there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'There aren\'t enough chairs for everyone,', role: '否定的直述句' },
          { t: 'are there?', role: '肯定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">椅子不夠大家坐，對吧？</p>
    </NoteSlide>

    <NoteSlide title="be 和助動詞跟著直述句的時態" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">there was</span>
          <span>There was a problem, <b>wasn't there</b>?</span>
        </div>
        <div>
          <span class="term">there will be</span>
          <span>There'll be time for lunch, <b>won't there</b>?</span>
        </div>
        <div>
          <span class="term">there has been</span>
          <span>There's been an accident, <b>hasn't there</b>?</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="no、nothing、hardly 讓直述句變成否定，附加問句用肯定" mark="isn't">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'There\'s', kind: 'dim' },
          { t: 'hardly any', role: '否定詞', kind: 'key', ring: true },
          { t: 'petrol in the car,', kind: 'dim' },
          { t: 'is there?', role: '肯定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">車子裡幾乎沒油了，對吧？</p>
    </NoteSlide>

    <NoteSlide title="附加問句的主詞用 there，不用 it" mark="there">
      <NoteFix
        wrong="There's a lift in this building, isn't it?"
        right="There's a lift in this building, isn't there?"
        fix="there"
      />
    </NoteSlide>

    <NoteSlide title="There are 的附加問句用 aren't" mark="isn't">
      <NoteFix
        wrong="There are lots of shops, isn't there?"
        right="There are lots of shops, aren't there?"
        fix="aren't"
      />
    </NoteSlide>

    <NoteSlide title="no 的句子接肯定的附加問句" mark="isn't">
      <NoteFix
        wrong="There's no bread in the cupboard, isn't there?"
        right="There's no bread in the cupboard, is there?"
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
