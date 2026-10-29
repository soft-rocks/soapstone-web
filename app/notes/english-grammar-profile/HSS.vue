<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-regret, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="wish 加過去簡單式" mark="lasted">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'wish', role: 'wish', kind: 'key' },
          { t: 'weekends', role: '子句的主詞' },
          { t: 'lasted', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'five days.', kind: 'dim' },
        ]"
      />
      <p class="translation">真希望週末有五天。</p>
      <p class="remark">說話者覺得週末太短了。</p>
    </NoteSlide>

    <NoteSlide title="子句裡常見的形式" mark="lasted">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞</span>
          <span><NoteMark sentence="I wish I knew the answer." :marks="['knew']" /></span>
        </div>
        <div>
          <span class="term">be 動詞</span>
          <span><NoteMark sentence="I wish it were Friday already." :marks="['were']" /></span>
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="I wish you didn't live so far away." :marks="['didn\'t live']"
          /></span>
        </div>
        <div>
          <span class="term">could</span>
          <span><NoteMark sentence="I wish I could swim." :marks="['could swim']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="If only 語氣比較強" mark="I wish">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If only', role: 'If only', kind: 'key', ring: true },
          { t: 'I', role: '子句的主詞' },
          { t: 'had', role: '過去簡單式', kind: 'key' },
          { t: 'a car!', kind: 'dim' },
        ]"
      />
      <p class="translation">要是我有車就好了！</p>
    </NoteSlide>

    <NoteSlide title="wish 後面用過去式" mark="lasted">
      <NoteFix
        wrong="I wish I have more free time."
        right="I wish I had more free time."
        fix="had"
      />
    </NoteSlide>

    <NoteSlide title="可能成真的希望用 hope" mark="I wish">
      <NoteFix
        wrong="I wish you pass your driving test."
        right="I hope you pass your driving test."
        fix="hope"
      />
    </NoteSlide>

    <NoteSlide title="主詞相同時不用 would" mark="lasted">
      <NoteFix wrong="I wish I would have a car." right="I wish I had a car." fix="had" />
    </NoteSlide>

    <NoteSlide title="過去的遺憾用過去完成式" mark="lasted">
      <NoteFix
        wrong="I wish I went to the party last night."
        right="I wish I had gone to the party last night."
        fix="had gone"
      />
    </NoteSlide>

    <NoteSlide title="wish 和 hope" mark="I wish">
      <div class="rows is-labeled">
        <div>
          <span class="term">不會成真</span>
          <span
            ><NoteMark sentence="I wish it was sunny today." :marks="['wish', 'was']" /><span
              class="translation"
              >真希望今天是晴天。</span
            ></span
          >
        </div>
        <div>
          <span class="term">可能成真</span>
          <span
            ><NoteMark sentence="I hope it's sunny tomorrow." :marks="['hope', 'it\'s']" /><span
              class="translation"
              >希望明天是晴天。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在和過去" mark="lasted">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="I wish I knew her phone number." :marks="['knew']" /><span
              class="translation"
              >真希望我知道她的電話號碼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="I wish I had asked her for her phone number."
              :marks="['had asked']"
            /><span class="translation">真後悔當時沒跟她要電話號碼。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
