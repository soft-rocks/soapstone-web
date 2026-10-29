<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-that-pointing, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that + 名詞，指遠的東西" mark="that bird">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Look at', role: '動詞', kind: 'dim' },
          { t: 'that', role: '遠的', kind: 'key' },
          { t: 'bird', role: '名詞' },
          { t: 'on the roof!', role: '位置', kind: 'dim' },
        ]"
      />
      <p class="translation">你看屋頂上那隻鳥！</p>
    </NoteSlide>

    <NoteSlide title="空間上遠的東西" mark="that bird on the roof!">
      <div class="rows is-labeled">
        <div>
          <span class="term">over there</span>
          <span
            ><NoteMark
              sentence="That house over there is my uncle's."
              :marks="['That house over there']"
            /><span class="translation">那邊那間房子是我舅舅的。</span></span
          >
        </div>
        <div>
          <span class="term">outside</span>
          <span
            ><NoteMark sentence="What's that noise outside?" :marks="['that noise outside?']" /><span
              class="translation"
              >外面那是什麼聲音？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間上遠的東西" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">that day</span>
          <span>那一天</span>
        </div>
        <div>
          <span class="term">that night</span>
          <span>那天晚上</span>
        </div>
        <div>
          <span class="term">that week</span>
          <span>那個星期</span>
        </div>
        <div>
          <span class="term">that year</span>
          <span>那一年</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 近，that 遠" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span>近的東西，現在的時間：this bird、this week</span>
        </div>
        <div>
          <span class="term">that</span>
          <span>遠的東西，過去的時間：that bird、that week</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="天上的東西用 that" mark="that">
      <NoteFix
        wrong="Look at this plane in the sky!"
        right="Look at that plane in the sky!"
        fix="that plane"
      />
    </NoteSlide>

    <NoteSlide title="過去的一年用 that year">
      <NoteFix
        wrong="I was born in 1990. This year my family moved to Tainan."
        right="I was born in 1990. That year my family moved to Tainan."
        fix="That year"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 those" mark="that bird">
      <NoteFix
        wrong="Look at that birds on the roof!"
        right="Look at those birds on the roof!"
        fix="those birds"
      />
    </NoteSlide>

    <NoteSlide title="look 後面接 at" mark="Look at">
      <NoteFix
        wrong="Look that bird on the roof!"
        right="Look at that bird on the roof!"
        fix="Look at"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
