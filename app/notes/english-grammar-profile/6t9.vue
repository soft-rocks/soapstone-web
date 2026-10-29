<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-manner, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情狀副詞放在動詞後面，說明動作怎麼做">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Both the players', role: '主詞', kind: 'dim' },
          { t: 'played', role: '動詞' },
          { t: 'well.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">兩位選手都打得很好。</p>
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，情狀副詞放在受詞後面" mark="well">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'speaks', role: '動詞' },
          { t: 'English', role: '受詞' },
          { t: 'well.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">她英文說得很好。</p>
    </NoteSlide>

    <NoteSlide title="情狀副詞多半是形容詞加 -ly，good 的情狀副詞是 well" mark="well">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + -&#x2060;ly</span>
          <span
            ><NoteMark sentence="Please speak slowly." :marks="['slowly']" /><span
              class="translation"
              >請說慢一點。</span
            ></span
          >
        </div>
        <div>
          <span class="term">和形容詞相同</span>
          <span
            ><NoteMark sentence="Don't drive so fast!" :marks="['fast']" /><span class="translation"
              >別開那麼快！</span
            ></span
          >
        </div>
        <div>
          <span class="term">不規則</span>
          <span
            ><NoteMark sentence="Did you sleep well?" :marks="['well']" /><span class="translation"
              >你睡得好嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="指路時用 straight 表示直走">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Go', role: '動詞' },
          { t: 'straight,', role: '情狀副詞', kind: 'key' },
          { t: 'then turn left.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="very 後面修飾動詞也用 well" mark="well">
      <NoteFix wrong="He cooks very good." right="He cooks very well." fix="well" />
    </NoteSlide>

    <NoteSlide title="fast 的情狀副詞不加 -ly">
      <NoteFix wrong="The train goes very fastly." right="The train goes very fast." fix="fast" />
    </NoteSlide>

    <NoteSlide title="情狀副詞不放在動詞和受詞中間">
      <NoteFix
        wrong="She opened slowly the door."
        right="She opened the door slowly."
        fix="slowly"
      />
    </NoteSlide>

    <NoteSlide title="修飾 drive 用 carefully，不用 careful">
      <NoteFix wrong="Please drive careful." right="Please drive carefully." fix="carefully" />
    </NoteSlide>

    <NoteSlide title="hard 表示努力，hardly 表示幾乎不">
      <NoteFork
        stem="She"
        :branches="[
          { head: 'works hard', rest: '', meaning: '努力', zh: '她工作很努力。' },
          { head: 'hardly works', rest: '', meaning: '幾乎不', zh: '她幾乎不工作。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接形容詞，不接情狀副詞" mark="well">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="The food is good." :marks="['good']" /><span class="translation"
              >食物很好吃。</span
            ></span
          >
        </div>
        <div>
          <span class="term">well<br /><i>健康</i></span>
          <span
            ><NoteMark sentence="I'm well, thanks." :marks="['well']" /><span class="translation"
              >我很好，謝謝。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說身體狀況時，<code>well</code> 是形容詞。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
