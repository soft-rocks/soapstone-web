<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-the-premodifier-thing-fact-etc, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞先說出性質，that 子句再說出那件事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The', role: 'The' },
          { t: 'only', role: '修飾語', kind: 'key' },
          { t: 'problem', role: '名詞', kind: 'key' },
          { t: 'is', role: 'is' },
          { t: 'that they are a little too noisy at night.', role: 'that 子句' },
        ]"
      />
      <p class="translation">唯一的問題是，他們晚上有點太吵了。</p>
    </NoteSlide>

    <NoteSlide title="名詞說出那件事是什麼：事實、重點、麻煩或原因" mark="problem">
      <div class="rows is-labeled">
        <div>
          <span class="term">fact<br /><i>事實</i></span>
          <span
            ><NoteMark
              sentence="The simple fact is that we can't afford it."
              :marks="['fact']"
            /><span class="translation">事實很簡單，我們負擔不起。</span></span
          >
        </div>
        <div>
          <span class="term">point<br /><i>重點</i></span>
          <span
            ><NoteMark
              sentence="The important point is that the test is free."
              :marks="['point']"
            /><span class="translation">重點是這個檢查是免費的。</span></span
          >
        </div>
        <div>
          <span class="term">problem<br /><i>麻煩</i></span>
          <span
            ><NoteMark
              sentence="The biggest problem is that the bus only comes once an hour."
              :marks="['problem']"
            /><span class="translation">最大的問題是公車一小時才來一班。</span></span
          >
        </div>
        <div>
          <span class="term">reason<br /><i>原因</i></span>
          <span
            ><NoteMark
              sentence="The main reason is that the rent is cheaper there."
              :marks="['reason']"
            /><span class="translation">主要的原因是那裡的房租比較便宜。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>thing</code> 最常用，可以接任何事。</p>
    </NoteSlide>

    <NoteSlide title="口語可以省略 that，is 後面常加逗號" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark
              sentence="The funny thing is that he doesn't even like coffee."
              :marks="['is that']"
            /><span class="translation">好笑的是，他根本不喜歡咖啡。</span></span
          >
        </div>
        <div>
          <span class="term">省略 that</span>
          <span
            ><NoteMark
              sentence="The funny thing is, he doesn't even drink tea."
              :marks="['is,']"
            /><span class="translation">好笑的是，他連茶都不喝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="事情發生在過去，is 改成 was" mark="is">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The strange thing', kind: 'dim' },
          { t: 'was', role: '過去式', kind: 'key', ring: true },
          { t: 'that the door', kind: 'dim' },
          { t: 'was', role: '過去式', kind: 'key' },
          { t: 'already open.', kind: 'dim' },
        ]"
      />
      <p class="translation">奇怪的是，門已經開著了。</p>
    </NoteSlide>

    <NoteSlide title="名詞前面要有 The" mark="The">
      <NoteFix
        wrong="Only problem is that the car is too small."
        right="The only problem is that the car is too small."
        fix="The"
      />
    </NoteSlide>

    <NoteSlide title="主詞後面要有動詞 is" mark="is">
      <NoteFix
        wrong="The main reason that the flat is closer to work."
        right="The main reason is that the flat is closer to work."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="is 後面的完整子句用 that 帶出來" mark="that">
      <NoteFix
        wrong="The strange thing is what nobody noticed the noise."
        right="The strange thing is that nobody noticed the noise."
        fix="that"
      >
        <code>what</code> 子句裡要少一個成分，像 What I need is time。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="後面只說一件事，名詞用單數" mark="problem">
      <NoteFix
        wrong="The good things is that the hotel has a pool."
        right="The good thing is that the hotel has a pool."
        fix="thing"
      />
    </NoteSlide>

    <NoteSlide title="The thing is 沒有修飾語，用來說出麻煩或藉口" mark="only">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The thing is,', role: '沒有修飾語', kind: 'key' },
          { t: 'I don\'t have enough time.', role: '麻煩或藉口' },
        ]"
      />
      <p class="translation">問題是，我時間不夠。</p>
    </NoteSlide>

    <NoteSlide title="What 分裂句用 What 子句當主詞" mark="The only problem">
      <div class="rows is-labeled">
        <div>
          <span class="term">The + 修飾語 + 名詞</span>
          <span
            ><NoteMark
              sentence="The only problem is that they are a little too noisy at night."
              :marks="['The only problem']"
            /><span class="translation">唯一的問題是，他們晚上有點太吵了。</span></span
          >
        </div>
        <div>
          <span class="term">What 子句</span>
          <span
            ><NoteMark sentence="What worries me is the cost." :marks="['What worries me']" /><span
              class="translation"
              >讓我擔心的是費用。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
