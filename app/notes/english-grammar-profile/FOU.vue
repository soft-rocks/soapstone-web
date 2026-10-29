<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-modal-auxiliary-verbs-1072, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="might 表示有可能，後面接原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Please wear', role: '祈使句', kind: 'dim' },
          { t: 'some of your old clothes', role: '受詞', kind: 'dim' },
          { t: 'because', role: '連接詞', kind: 'dim' },
          { t: 'they', role: '主詞' },
          { t: 'might', role: '情態動詞', kind: 'key' },
          { t: 'get', role: '原形動詞', kind: 'key' },
          { t: 'dirty.', role: '形容詞' },
        ]"
      />
      <p class="translation">請穿一些你的舊衣服，因為衣服可能會弄髒。</p>
      <p class="remark">衣服不一定會弄髒，只是有可能。</p>
    </NoteSlide>

    <NoteSlide title="情態動詞也表示建議、必須、禁止和能力" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="I think we should go somewhere else after the film."
              :marks="['should']"
            /><span class="translation">我覺得看完電影我們應該換個地方。</span></span
          >
        </div>
        <div>
          <span class="term">必須</span>
          <span
            ><NoteMark sentence="You must be home by ten." :marks="['must']" /><span
              class="translation"
              >你十點以前一定要回家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">禁止</span>
          <span
            ><NoteMark
              sentence="You mustn't touch the paint. It's still wet."
              :marks="['mustn\'t']"
            /><span class="translation">你不可以碰油漆。還沒乾。</span></span
          >
        </div>
        <div>
          <span class="term">過去的能力</span>
          <span
            ><NoteMark sentence="I could swim when I was five." :marks="['could']" /><span
              class="translation"
              >我五歲就會游泳了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Could you 用來請求別人做事" mark="might">
      <NoteMark sentence="Could you help me with this box?" :marks="['Could']" />
      <p class="translation">你可以幫我搬這個箱子嗎？</p>
    </NoteSlide>

    <NoteSlide title="Shall we 用來提議一起做一件事" mark="might">
      <NoteMark sentence="Shall we meet at the station?" :marks="['Shall']" />
      <p class="translation">我們在車站碰面好嗎？</p>
    </NoteSlide>

    <NoteSlide title="情態動詞後面直接接原形動詞，不加 to" mark="get">
      <NoteFix wrong="You should to see a doctor." right="You should see a doctor." fix="see" />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="get">
      <NoteFix wrong="It might rains later." right="It might rain later." fix="rain" />
    </NoteSlide>

    <NoteSlide title="一個動詞片語只用一個情態動詞" mark="might">
      <NoteFix
        wrong="We might can go tomorrow."
        right="We might be able to go tomorrow."
        fix="be able to"
      />
    </NoteSlide>

    <NoteSlide title="mustn't 表示禁止，不必做用 don't have to">
      <NoteFix
        wrong="You mustn't bring food. We have plenty."
        right="You don't have to bring food. We have plenty."
        fix="don't have to"
      />
    </NoteSlide>

    <NoteSlide title="might 比 may 更不確定" mark="might">
      <NoteFork
        stem="I"
        :branches="[
          { head: 'may', rest: 'be late.', meaning: '可能', zh: '我可能會遲到。' },
          { head: 'might', rest: 'be late.', meaning: '更不確定', zh: '我說不定會遲到。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="must 說自己覺得要做的事，have to 說規定">
      <div class="rows is-labeled">
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark sentence="I must call my mum tonight." :marks="['must']" /><span
              class="translation"
              >我今晚一定要打給我媽。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have to</span>
          <span
            ><NoteMark sentence="I have to wear a uniform at work." :marks="['have to']" /><span
              class="translation"
              >我上班得穿制服。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
