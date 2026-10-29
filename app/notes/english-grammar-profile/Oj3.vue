<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-imagined-situations-after-if, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="想像的情況用過去式" mark="if you spent">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'It would be better', role: '主句', kind: 'key' },
          { t: 'if', role: '想像的情況' },
          { t: 'you', role: '子句的主詞' },
          { t: 'spent', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'some time in the fresh air with your friends.', kind: 'dim' },
        ]"
      />
      <p class="translation">你要是能花點時間跟朋友到戶外呼吸新鮮空氣，會比較好。</p>
    </NoteSlide>

    <NoteSlide title="if 子句在前或主句在前" mark="if you spent">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 在前</span>
          <span
            ><NoteMark
              sentence="If we lived in the city, we wouldn't need a car."
              :marks="['lived', 'wouldn\'t need']"
            /><span class="translation">如果我們住在城裡，就不需要車了。</span></span
          >
        </div>
        <div>
          <span class="term">主句在前</span>
          <span
            ><NoteMark
              sentence="It would be easier if we took the train."
              :marks="['would be', 'took']"
            /><span class="translation">我們要是搭火車會比較輕鬆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="勸告用 If I were you" mark="It would be better">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If I', role: '想像自己' },
          { t: 'were', role: 'be 動詞', kind: 'key', ring: true },
          { t: 'you,', role: '是對方' },
          { t: 'I\'d apologise to her.', role: '勸告', kind: 'key' },
        ]"
      />
      <p class="translation">我要是你，就會跟她道歉。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 would" mark="spent">
      <NoteFix
        wrong="If I would have more money, I would travel."
        right="If I had more money, I would travel."
        fix="had"
      />
    </NoteSlide>

    <NoteSlide title="主句用 would" mark="It would be better">
      <NoteFix
        wrong="If I won the lottery, I will buy a house by the sea."
        right="If I won the lottery, I would buy a house by the sea."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="想像的情況用 if" mark="if you spent">
      <NoteFix
        wrong="When I had more time, I would learn Spanish."
        right="If I had more time, I would learn Spanish."
        fix="If"
      />
    </NoteSlide>

    <NoteSlide title="現在式和過去式" mark="spent">
      <div class="rows is-labeled">
        <div>
          <span class="term">可能有空</span>
          <span
            ><NoteMark
              sentence="If I have time this weekend, I'll help you."
              :marks="['have', 'I\'ll help']"
            /><span class="translation">我這個週末要是有空，就會幫你。</span></span
          >
        </div>
        <div>
          <span class="term">知道沒空</span>
          <span
            ><NoteMark
              sentence="If I had time this weekend, I'd help you."
              :marks="['had', 'I\'d help']"
            /><span class="translation">我這個週末要是有空，就會幫你了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would 和 could" mark="It would be better">
      <div class="rows is-labeled">
        <div>
          <span class="term">會做</span>
          <span
            ><NoteMark
              sentence="If I had a car, I would drive to work."
              :marks="['would drive']"
            /><span class="translation">如果我有車，我會開車上班。</span></span
          >
        </div>
        <div>
          <span class="term">做得到</span>
          <span
            ><NoteMark
              sentence="If I had a car, I could drive you to the airport."
              :marks="['could drive']"
            /><span class="translation">如果我有車，就可以載你去機場。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
