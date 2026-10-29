<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-reporting-verbs-direct-object-that-clause, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 子句是動詞的直接受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'hope', role: '動詞', kind: 'key' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'you\'ll come.', role: '子句' },
        ]"
      />
      <p class="translation">我希望你會來。</p>
      <p class="remark">子句說的是希望的內容。</p>
    </NoteSlide>

    <NoteSlide title="動詞和子句各自用需要的時態" mark="hope">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="I know that you are busy." :marks="['know']" /><span
              class="translation"
              >我知道你很忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="I heard that you got a new job." :marks="['heard']" /><span
              class="translation"
              >我聽說你找到新工作了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">以後的事</span>
          <span
            ><NoteMark sentence="I think that it will rain tomorrow." :marks="['will rain']" /><span
              class="translation"
              >我想明天會下雨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="said that 說的事現在還是真的，子句可以用現在式">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My mum', kind: 'dim' },
          { t: 'said', role: '過去式', kind: 'key' },
          { t: 'that', kind: 'dim' },
          { t: 'she can help us.', role: '現在式', kind: 'key' },
        ]"
      />
      <p class="translation">我媽說她可以幫我們。</p>
    </NoteSlide>

    <NoteSlide title="think 的否定常放在 think 前面" mark="hope">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'don\'t think', role: '否定', kind: 'key', ring: true },
          { t: 'that he\'s at home.', role: 'that 子句' },
        ]"
      />
      <p class="translation">我想他不在家。</p>
      <p class="remark">比 <code>I think that he isn't at home.</code> 常用，意思一樣。</p>
    </NoteSlide>

    <NoteSlide title="that 後面的子句要有主詞" mark="you'll">
      <NoteFix wrong="I hope that will come." right="I hope that you will come." fix="you" />
    </NoteSlide>

    <NoteSlide title="動詞後面接子句時，用 that，不用 to" mark="that">
      <NoteFix
        wrong="I think to it is a good idea."
        right="I think that it is a good idea."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="say 後面直接接 that 子句">
      <NoteFix
        wrong="She said me that she was tired."
        right="She said that she was tired."
        fix="said that"
      >
        要說對誰說，用 <code>tell</code>：<code>She told me that she was tired.</code>
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="hope 後面接子句或 to 不定詞" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">子句<br /><i>省略 that</i></span>
          <span
            ><NoteMark sentence="I hope you'll come." :marks="['hope']" /><span class="translation"
              >我希望你會來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hope to</span>
          <span
            ><NoteMark sentence="I hope to see you soon." :marks="['to see']" /><span
              class="translation"
              >我希望很快見到你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
