<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-enjoy-ing, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="enjoy 後面接動詞-ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'enjoy', role: '動詞', kind: 'key' },
          { t: 'playing the piano', role: '第一個動詞-ing', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'singing', role: '第二個動詞-ing', kind: 'key' },
          { t: 'together.', role: '副詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們喜歡一起彈鋼琴、唱歌。</p>
    </NoteSlide>

    <NoteSlide title="否定和問句的 do 放在 enjoy 前面" mark="enjoy">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="I don't enjoy driving at night." :marks="['don\'t enjoy']" /><span
              class="translation"
              >我不喜歡晚上開車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Did you enjoy the film?" :marks="['Did', 'enjoy']" /><span
              class="translation"
              >你喜歡那部電影嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="enjoy 後面的動詞不用 to + 原形動詞" mark="playing">
      <NoteFix
        wrong="I enjoy to swim in the sea."
        right="I enjoy swimming in the sea."
        fix="swimming"
      />
    </NoteSlide>

    <NoteSlide title="enjoy 後面的動詞不用原形" mark="playing">
      <NoteFix
        wrong="My dad enjoys cook for us."
        right="My dad enjoys cooking for us."
        fix="cooking"
      />
    </NoteSlide>

    <NoteSlide title="and 連接的兩個動詞都用動詞-ing" mark="singing">
      <NoteFix
        wrong="We enjoy reading and watch films."
        right="We enjoy reading and watching films."
        fix="watching"
      />
    </NoteSlide>

    <NoteSlide title="enjoy 後面要接名詞或動詞-ing" mark="enjoy">
      <NoteFix
        wrong="I really enjoyed at the party."
        right="I really enjoyed the party."
        fix="the party"
      >
        說玩得開心時用 <code>enjoy myself</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="like 兩種形式都可以接，enjoy 只接動詞-ing" mark="enjoy">
      <div class="rows is-labeled">
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="I like swimming. I like to swim."
              :marks="['swimming', 'to swim']"
            /><span class="translation">我喜歡游泳。</span></span
          >
        </div>
        <div>
          <span class="term">enjoy</span>
          <span
            ><NoteMark sentence="I enjoy swimming in the sea." :marks="['swimming']" /><span
              class="translation"
              >我喜歡在海裡游泳。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="enjoy yourself 的意思是玩得開心" mark="enjoy">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Enjoy', role: '動詞' },
          { t: 'yourself', role: '反身代名詞', kind: 'key', ring: true },
          { t: 'at the party!', kind: 'dim' },
        ]"
      />
      <p class="translation">在派對上玩得開心！</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
