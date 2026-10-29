<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-wh-questions, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="asked + wh 詞 + 子句，轉述 wh 問句">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'asked', role: '引述動詞' },
          { t: 'when', role: 'wh 詞', kind: 'key' },
          { t: 'it would be on TV.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">我問它什麼時候會在電視上播。</p>
    </NoteSlide>

    <NoteSlide title="問句的語序改成陳述句的語序，will 改成 would" mark="it would be">
      <div class="rows is-labeled">
        <div>
          <span class="term">原本的問題</span>
          <span
            ><NoteMark sentence='"When will it be on TV?"' :marks="['will it be']" /><span
              class="translation"
              >「什麼時候會在電視上播？」</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark sentence="I asked when it would be on TV." :marks="['it would be']" /><span
              class="translation"
              >我問它什麼時候會在電視上播。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞放回動詞前面" mark="it would be">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark
              sentence="He asked where the station was."
              :marks="['the station was']"
            /><span class="translation">他問車站在哪裡。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞</span>
          <span
            ><NoteMark sentence="I asked what we could play." :marks="['we could']" /><span
              class="translation"
              >我問我們可以玩什麼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">do / does / did</span>
          <span
            ><NoteMark
              sentence="She asked what time the film started."
              :marks="['the film started']"
            /><span class="translation">她問電影幾點開始。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時態後移，代名詞以轉述的人為準" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">you → I</span>
          <span
            ><NoteMark sentence="She asked me where I lived." :marks="['I lived']" /><span
              class="translation"
              >她問我住在哪裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">you → she</span>
          <span
            ><NoteMark sentence="I asked her why she was here." :marks="['she was']" /><span
              class="translation"
              >我問她為什麼在這裡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh 詞是主詞，語序不變，只換時態">
      <div class="rows is-labeled">
        <div>
          <span class="term">who</span>
          <span
            ><NoteMark sentence="He asked who had sent it." :marks="['who had sent']" /><span
              class="translation"
              >他問這是誰寄的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">what</span>
          <span
            ><NoteMark
              sentence="They asked what had happened."
              :marks="['what had happened']"
            /><span class="translation">他們問發生了什麼事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wanted to know 也可以轉述問題" mark="asked">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The customer', kind: 'dim' },
          { t: 'wanted to know', role: '引述動詞', kind: 'key' },
          { t: 'how much', role: 'wh 詞' },
          { t: 'it was.', role: '子句' },
        ]"
      />
      <p class="translation">那位客人想知道多少錢。</p>
    </NoteSlide>

    <NoteSlide title="時態不後移：引述動詞是現在式，或問的事還成立">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="She's asking when the shop opens."
              :marks="['asking', 'opens']"
            /><span class="translation">她在問那家店什麼時候開。</span></span
          >
        </div>
        <div>
          <span class="term">還成立</span>
          <span
            ><NoteMark
              sentence="He asked me what my plans are for next year."
              :marks="['are']"
            /><span class="translation">他問我明年有什麼計畫。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句用陳述句的語序" mark="it would be">
      <NoteFix
        wrong="He asked me where was the bank."
        right="He asked me where the bank was."
        fix="the bank was"
      />
    </NoteSlide>

    <NoteSlide title="子句不用 did，動詞改成過去式">
      <NoteFix
        wrong="My mum asked what did I want for dinner."
        right="My mum asked what I wanted for dinner."
        fix="I wanted"
      />
    </NoteSlide>

    <NoteSlide title="間接引述的句尾用句號" mark="TV.">
      <NoteFix
        wrong="The teacher asked how old I was?"
        right="The teacher asked how old I was."
        fix="was."
      />
    </NoteSlide>

    <NoteSlide title="原話的 your 指的是我，換成 my">
      <NoteFix
        wrong="The man asked me what your name was."
        right="The man asked me what my name was."
        fix="my"
      />
    </NoteSlide>

    <NoteSlide title="被問的人直接放在 asked 後面" mark="asked">
      <NoteFix
        wrong="She asked to me what time it was."
        right="She asked me what time it was."
        fix="asked me"
      />
    </NoteSlide>

    <NoteSlide title="直接引述保留問句的語序和問號">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;When will it be on TV?&quot;', role: '問句', kind: 'key' },
          { t: 'I asked.', kind: 'dim' },
        ]"
      />
      <p class="translation">「什麼時候會在電視上播？」我問。</p>
    </NoteSlide>

    <NoteSlide title="wh 詞加子句是問題，to + 原形動詞是請求">
      <div class="rows is-labeled">
        <div>
          <span class="term">問題</span>
          <span
            ><NoteMark sentence="I asked him where he worked." :marks="['where he worked']" /><span
              class="translation"
              >我問他在哪裡工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">請求</span>
          <span
            ><NoteMark sentence="I asked him to work late." :marks="['to work']" /><span
              class="translation"
              >我請他加班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
