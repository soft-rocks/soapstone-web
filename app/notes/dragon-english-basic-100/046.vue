<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 046, as slides, in the order of notes/dragon-english-basic-100/046.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="be against 表示反對，against 是介系詞" mark="am against">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'am against', role: '反對', kind: 'key' },
          { t: 'human cloning.', role: '名詞' },
        ]"
      />
      <p class="translation">我反對複製人。</p>
    </NoteSlide>

    <NoteSlide title="be against 後面接名詞或動詞-ing" mark="human cloning">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Most of my classmates were against the idea."
              :marks="['the idea']"
            /><span class="translation">我大部分的同學都反對這個想法。</span></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="My mother is against keeping a dog in the apartment."
              :marks="['keeping']"
            /><span class="translation">我媽媽反對在公寓裡養狗。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="贊成用 be for" mark="against">
      <div class="rows is-labeled">
        <div>
          <span class="term">be for</span>
          <span
            ><NoteMark sentence="My father is for the new train line." :marks="['is for']" /><span
              class="translation"
              >我爸爸贊成蓋新的鐵路線。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問贊不贊成</span>
          <span
            ><NoteMark
              sentence="Are you for or against school uniforms?"
              :marks="['for or against']"
            /><span class="translation">你贊成還是反對學校制服？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="That is because 前面是結果，後面接原因" mark="That is because">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I am against human cloning.', role: '結果' },
          { t: 'That is because', kind: 'key' },
          { t: 'it could cause duplication of dictators.', role: '原因' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>that</code> 指前一句講的事。</p>
    </NoteSlide>

    <NoteSlide title="That is why 前面是原因，後面接結果" mark="That">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I missed the bus.', role: '原因' },
          { t: 'That is why', kind: 'key' },
          { t: 'I was late for school.', role: '結果' },
        ]"
      />
      <p class="translation">我錯過了公車。所以我上學遲到了。</p>
    </NoteSlide>

    <NoteSlide title="could 表示一件事有可能發生" mark="could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'That knife', role: '主詞' },
          { t: 'could', role: '情態動詞', kind: 'key' },
          { t: 'cut', role: '動詞原形' },
          { t: 'you.', kind: 'dim' },
        ]"
      />
      <p class="translation">那把刀可能會割傷你。</p>
      <p class="remark"><code>could</code> 在這裡不是過去式。</p>
    </NoteSlide>
  </NoteDeck>
</template>
