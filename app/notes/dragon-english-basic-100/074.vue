<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 074, as slides, in the order of notes/dragon-english-basic-100/074.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="in order to 加動詞原形表示目的" mark="In order to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In order to', role: '目的', kind: 'key' },
          { t: 'stay healthy,', role: '動詞原形' },
          {
            t: 'you should have a balanced diet and get regular exercise.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">意思和表示目的的 <code>to</code> 一樣，但比較正式。</p>
    </NoteSlide>

    <NoteSlide title="in order to 也可以放在主要子句後面" mark="In order to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I got up early', role: '主要子句', kind: 'dim' },
          { t: 'in order to', role: '目的', kind: 'key' },
          { t: 'watch the sunrise.', role: '動詞原形' },
        ]"
      />
      <p class="translation">我為了看日出很早就起床。</p>
    </NoteSlide>

    <NoteSlide title="否定的目的用 in order not to" mark="In order to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We left early', kind: 'dim' },
          { t: 'in order', kind: 'key' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'to be late.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">我們早點出發，以免遲到。</p>
    </NoteSlide>

    <NoteSlide title="stay 是連綴動詞，後面接形容詞" mark="stay healthy">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In order to', kind: 'dim' },
          { t: 'stay', role: '連綴動詞', kind: 'key' },
          { t: 'healthy', role: '形容詞', kind: 'key', alts: ['awake', 'warm', 'calm'] },
        ]"
      />
      <p class="remark"><code>stay</code> 表示保持一個狀態。</p>
    </NoteSlide>

    <NoteSlide title="should 加動詞原形表示建議" mark="should">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You', role: '主詞', kind: 'dim' },
          { t: 'should', role: '建議', kind: 'key' },
          { t: 'see', role: '動詞原形', kind: 'key' },
          { t: 'a doctor.', kind: 'dim' },
        ]"
      />
      <p class="translation">你應該去看醫生。</p>
      <p class="remark">說話的人認為對方應該這樣做。</p>
    </NoteSlide>

    <NoteSlide title="否定用 shouldn't，問意見時把 should 放在主詞前面" mark="should">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="You shouldn't play video games all night."
              :marks="['shouldn\'t']"
            /><span class="translation">你不應該整晚打電動。</span></span
          >
        </div>
        <div>
          <span class="term">問意見</span>
          <span
            ><NoteMark
              sentence="Should I bring something to the party?"
              :marks="['Should I']"
            /><span class="translation">我應該帶點東西去派對嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
