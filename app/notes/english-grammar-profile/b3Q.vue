<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-direct-speech-reporting-clause-end-position, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="引號裡的話在前，主詞和引述動詞在後">
      <NoteWords
        :size="30"
        :parts="[
          { t: '&quot;What\'s your name?&quot;', role: '引號裡的話', kind: 'dim' },
          { t: 'he', role: '主詞', kind: 'key' },
          { t: 'asked.', role: '引述動詞', kind: 'key' },
        ]"
      />
      <p class="translation">「你叫什麼名字？」他問。</p>
    </NoteSlide>

    <NoteSlide title="結尾的標點依原話的句子種類決定" mark="What's your name?">
      <div class="rows is-labeled">
        <div>
          <span class="term">陳述句</span>
          <span
            ><NoteMark sentence='"I&apos;m going out," she said.' :marks="['out,']" /><span
              class="translation"
              >「我要出門了。」她說。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence='"Is it raining?" he asked.' :marks="['raining?']" /><span
              class="translation"
              >「在下雨嗎？」他問。</span
            ></span
          >
        </div>
        <div>
          <span class="term">感嘆句</span>
          <span
            ><NoteMark sentence='"Watch out!" she shouted.' :marks="['out!']" /><span
              class="translation"
              >「小心！」她大喊。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="引號後面的代名詞小寫，名字照常大寫" mark="he">
      <div class="rows is-labeled">
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence='"Is it raining?" he asked.' :marks="['he']" /><span
              class="translation"
              >「在下雨嗎？」他問。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名字</span>
          <span
            ><NoteMark
              sentence='"I&apos;ve never seen snow before," Maria said.'
              :marks="['Maria']"
            /><span class="translation">「我以前從沒看過雪。」Maria 說。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="thought / asked myself 轉述心裡的話" mark="asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">thought</span>
          <span
            ><NoteMark
              sentence='"I&apos;d better take it to the lost property office," she thought.'
              :marks="['she thought']"
            /><span class="translation">「我最好把它送去失物招領處。」她心想。</span></span
          >
        </div>
        <div>
          <span class="term">asked myself</span>
          <span
            ><NoteMark
              sentence='"Where did I put it?" I asked myself.'
              :marks="['I asked myself']"
            /><span class="translation">「我把它放到哪裡去了？」我問自己。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="陳述句的句號改成逗號" mark="What's your name?">
      <NoteFix
        wrong='"I&apos;m hungry." she said.'
        right='"I&apos;m hungry," she said.'
        fix='hungry,"'
      />
    </NoteSlide>

    <NoteSlide title="引號後面的代名詞小寫" mark="he">
      <NoteFix
        wrong='"Where&apos;s my bag?" She asked.'
        right='"Where&apos;s my bag?" she asked.'
        fix="she"
      />
    </NoteSlide>

    <NoteSlide title="問句的結尾用問號" mark="What's your name?">
      <NoteFix
        wrong='"Are you ready," he asked.'
        right='"Are you ready?" he asked.'
        fix='ready?"'
      />
    </NoteSlide>

    <NoteSlide title="逗號放在引號裡面">
      <NoteFix
        wrong='"I love this song", she said.'
        right='"I love this song," she said.'
        fix='song,"'
      />
    </NoteSlide>

    <NoteSlide title="引述子句放在前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He asked,', role: '引述子句', kind: 'key' },
          { t: '&quot;What\'s your name?&quot;', role: '引號裡的話', kind: 'dim' },
        ]"
      />
      <p class="translation">他問：「你叫什麼名字？」</p>
    </NoteSlide>

    <NoteSlide title="主詞是名詞時可以倒裝">
      <NoteWords
        :size="30"
        :parts="[
          { t: '&quot;What\'s your name?&quot;', kind: 'dim' },
          { t: 'asked', role: '引述動詞', kind: 'key' },
          { t: 'the teacher.', role: '主詞', kind: 'key' },
        ]"
      />
      <p class="translation">「你叫什麼名字？」老師問。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
