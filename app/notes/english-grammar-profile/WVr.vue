<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-assumptions-379, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will have 加過去分詞推測到現在已經發生的事" mark="will have heard">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'As', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'will have heard,', role: 'will have + 過去分詞', kind: 'key', ring: true },
          { t: 'this year\'s work experience program in Britain was a success.', kind: 'dim' },
        ]"
      />
      <p class="translation">你應該已經聽說了，今年在英國舉辦的工作體驗計畫很成功。</p>
      <p class="remark">校長推測家長應該已經聽說。這裡的 will 不表示未來。</p>
    </NoteSlide>

    <NoteSlide title="主詞是 you 時，推測對方已經知道某件事" mark="As you will have heard">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="As you will have noticed, the office has moved to the third floor."
              :marks="['As you will have noticed']"
            /><span class="translation">你應該已經注意到了，辦公室搬到三樓了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        常見的開頭：<code>As you will have heard</code>、<code>As you will have noticed</code
        >、<code>You will have seen</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="主詞也可以是別人或事情" mark="you">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Don\'t phone now.', kind: 'dim' },
          { t: 'The baby', role: '主詞', kind: 'key', ring: true },
          { t: 'will have fallen asleep.', role: 'will have + 過去分詞' },
        ]"
      />
      <p class="translation">現在別打電話，寶寶應該已經睡著了。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="heard">
      <NoteFix
        wrong="As you will have saw, the results are online."
        right="As you will have seen, the results are online."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="推測已經發生的事要有 have" mark="will have">
      <NoteFix
        wrong="As you will heard, the trip was a success."
        right="As you will have heard, the trip was a success."
        fix="will have"
      />
    </NoteSlide>

    <NoteSlide title="will 後面直接接原形的 have" mark="will have">
      <NoteFix
        wrong="You will to have noticed the new sign."
        right="You will have noticed the new sign."
        fix="will have"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
