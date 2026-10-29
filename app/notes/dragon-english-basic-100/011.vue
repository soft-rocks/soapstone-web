<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 011, as slides, in the order of notes/dragon-english-basic-100/011.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 是形式主詞，真正的主詞是 that 子句">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'never occurred to me', kind: 'dim' },
          { t: 'that my remark might hurt her feelings.', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="occur to 加人，表示一個想法出現在那個人心裡" mark="occurred to me">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It suddenly', kind: 'dim' },
          { t: 'occurred to', role: '動詞 + 介系詞', kind: 'key' },
          { t: 'me', role: '人', kind: 'key' },
          { t: 'that today was Mom\'s birthday.', role: '想法' },
        ]"
      />
      <p class="translation">我突然想到今天是媽媽的生日。</p>
    </NoteSlide>

    <NoteSlide title="加上 never，表示從來沒想到" mark="never">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'never', role: '從來沒有', kind: 'key', ring: true },
          { t: 'occurred to me', role: '想到' },
          { t: 'that my remark might hurt her feelings.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="表示想法的名詞也可以當 occur to 的主詞" mark="occurred to me">
      <div class="rows is-labeled">
        <div>
          <span class="term">idea</span>
          <span
            ><NoteMark
              sentence="A good idea occurred to me on the way home."
              :marks="['A good idea']"
            /><span class="translation">回家的路上我想到一個好主意。</span></span
          >
        </div>
        <div>
          <span class="term">answer</span>
          <span
            ><NoteMark
              sentence="The answer occurred to me while I was taking a shower."
              :marks="['The answer']"
            /><span class="translation">我在洗澡的時候想到了答案。</span></span
          >
        </div>
        <div>
          <span class="term">thought</span>
          <span
            ><NoteMark
              sentence="A strange thought occurred to me in the middle of the night."
              :marks="['A strange thought']"
            /><span class="translation">半夜我冒出一個奇怪的念頭。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="might 表示有可能，但是不確定" mark="might hurt">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Take an umbrella. It', kind: 'dim' },
          { t: 'might', role: '有可能', kind: 'key' },
          { t: 'rain.', role: '動詞原形' },
        ]"
      />
      <p class="translation">帶把傘吧。可能會下雨。</p>
    </NoteSlide>

    <NoteSlide title="主要動詞是過去式，子句裡的 may 改成 might" :mark="['occurred', 'might']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It never', kind: 'dim' },
          { t: 'occurred', role: '過去式', kind: 'key' },
          { t: 'to me that my remark', kind: 'dim' },
          { t: 'might', role: 'may 的過去式', kind: 'key', ring: true },
          { t: 'hurt her feelings.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="現在和未來的事也可以用 might" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="Tom might be asleep already." :marks="['might be']" /><span
              class="translation"
              >Tom 可能已經睡了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark sentence="We might go to Okinawa this summer." :marks="['might go']" /><span
              class="translation"
              >我們今年夏天可能會去沖繩。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
