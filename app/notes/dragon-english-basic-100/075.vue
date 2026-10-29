<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 075, as slides, in the order of notes/dragon-english-basic-100/075.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="if 子句和主要子句都用現在式，表示一般的情況" :mark="['live', 'have']">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞', kind: 'key' },
          { t: 'you', kind: 'dim' },
          { t: 'live', role: '現在式', kind: 'key', ring: true },
          { t: 'in a developing country for a while,', kind: 'dim' },
          { t: 'you', kind: 'dim' },
          { t: 'have', role: '現在式', kind: 'key', ring: true },
          { t: 'an opportunity to look at Japan from a different point of view.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="條件成立，結果通常就會發生" mark="If">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'If you heat ice,', role: '條件', kind: 'key' },
          { t: 'it melts.', role: '結果', kind: 'key' },
        ]"
      />
      <p class="translation">如果你把冰加熱，它就會融化。</p>
      <p class="remark">這不是假設語氣。這個句型講實際會發生的事。</p>
    </NoteSlide>

    <NoteSlide title="opportunity 後面接 to 不定詞，說明是做什麼的機會" mark="an opportunity to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'you have', kind: 'dim' },
          { t: 'an opportunity', role: '機會', kind: 'key' },
          { t: 'to look at Japan', role: 'to + 動詞原形', kind: 'key' },
          { t: 'from a different point of view.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide
      title="chance 的意思和 opportunity 一樣，前面用 have 或 get"
      mark="have an opportunity"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark
              sentence="I had an opportunity to meet the writer."
              :marks="['had an opportunity to']"
            /><span class="translation">我有機會見到那位作家。</span></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="Did you get a chance to see the castle?"
              :marks="['get a chance to']"
            /><span class="translation">你有機會去看那座城堡嗎？</span></span
          >
        </div>
      </div>
      <p class="remark"><code>opportunity</code> 比 <code>chance</code> 正式。</p>
    </NoteSlide>

    <NoteSlide title="主詞是帶來機會的事情時，用 give 加人" mark="have an opportunity">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This summer job', role: '帶來機會的事情', kind: 'key' },
          { t: 'gave', role: '動詞', kind: 'key' },
          { t: 'me', role: '人' },
          { t: 'a chance to save some money.', role: '機會' },
        ]"
      />
      <p class="translation">這份暑期工作讓我有機會存一點錢。</p>
    </NoteSlide>

    <NoteSlide title="take the opportunity to 表示利用機會去做一件事" mark="an opportunity to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'took the opportunity', role: '利用機會', kind: 'key' },
          { t: 'to practice my English', role: 'to + 動詞原形' },
          { t: 'with the tourists.', kind: 'dim' },
        ]"
      />
      <p class="translation">我利用這個機會跟遊客練習英文。</p>
    </NoteSlide>
  </NoteDeck>
</template>
