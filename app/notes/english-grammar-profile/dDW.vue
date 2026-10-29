<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-each-other, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep
// the parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="each other 當動詞的受詞" mark="see each other">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'we', role: '主詞（複數）', kind: 'key' },
          { t: 'see', role: '動詞' },
          { t: 'each other', role: '受詞', kind: 'key' },
          { t: 'every day.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們每天都會見面。</p>
    </NoteSlide>

    <NoteSlide title="動詞的受詞和介系詞的受詞" mark="each other">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞的受詞</span>
          <span
            ><NoteMark
              sentence="Tom and Anna met each other at a party."
              :marks="['met each other']"
            /><span class="translation">Tom 和 Anna 是在一場派對上認識的。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞的受詞</span>
          <span
            ><NoteMark
              sentence="My brother and I often argue with each other."
              :marks="['with each other']"
            /><span class="translation">我和我哥常常吵架。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格 each other's 後面接名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We often borrow', kind: 'dim' },
          { t: 'each other\'s', role: '所有格', kind: 'key' },
          { t: 'clothes.', role: '名詞' },
        ]"
      />
      <p class="translation">我們常常互借衣服穿。</p>
    </NoteSlide>

    <NoteSlide title="中文說「見面」，英文要寫出 each other" mark="see each other">
      <div class="rows is-labeled">
        <div>
          <span class="term">見面</span>
          <span
            ><NoteMark sentence="We see each other every day." :marks="['each other']" /><span
              class="translation"
              >我們每天都會見面。</span
            ></span
          >
        </div>
        <div>
          <span class="term">認識</span>
          <span
            ><NoteMark sentence="We met each other last year." :marks="['each other']" /><span
              class="translation"
              >我們是去年認識的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="互相做的事，不用反身代名詞" mark="each other">
      <NoteFix
        wrong="My sister and I love ourselves very much."
        right="My sister and I love each other very much."
        fix="each other"
      />
    </NoteSlide>

    <NoteSlide title="talk 後面先接 to">
      <NoteFix
        wrong="We talk each other on the phone every night."
        right="We talk to each other on the phone every night."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="marry 後面直接接受詞">
      <NoteFix
        wrong="They married with each other last summer."
        right="They married each other last summer."
        fix="married"
      />
    </NoteSlide>

    <NoteSlide title="主詞要是複數" mark="we">
      <NoteFix
        wrong="Anna phones each other every day."
        right="Anna and Jo phone each other every day."
        fix="Anna and Jo phone"
      />
    </NoteSlide>

    <NoteSlide title="other 不加 s" mark="each other">
      <NoteFix
        wrong="We help each others with our homework."
        right="We help each other with our homework."
        fix="each other"
      />
    </NoteSlide>

    <NoteSlide title="themselves 指回主詞自己">
      <div class="rows is-labeled">
        <div>
          <span class="term">themselves</span>
          <span
            ><NoteMark
              sentence="Tom and Anna looked at themselves in the mirror."
              :marks="['themselves']"
            /><span class="translation">Tom 和 Anna 看著鏡子裡的自己。</span></span
          >
        </div>
        <div>
          <span class="term">each other</span>
          <span
            ><NoteMark
              sentence="Tom and Anna looked at each other and smiled."
              :marks="['each other']"
            /><span class="translation">Tom 和 Anna 看著對方笑了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="meet 不加受詞也能表示互相見面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '主詞', kind: 'key' },
          { t: 'met', role: '動詞', kind: 'key' },
          { t: 'outside the cinema at seven.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們七點在電影院外面碰面。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
