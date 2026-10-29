<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-529, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'wear', role: '原形動詞' },
          { t: 'your sports shoes and you must also bring your racket!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="must、原形動詞" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">must</span>
          <span>必須、一定要。所有主詞都用 must，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>必須做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="must 後面不加 to" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I must feed the neighbours' fish while they're away." :marks="['must']" /><span class="translation"
              >鄰居不在的時候，我必須幫他們餵魚。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must 是情態動詞。後面直接接原形動詞。</p>
    </NoteSlide>
    <NoteSlide title="must 只有現在式" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Last winter we had to sell our old piano." :marks="['had to']" /><span
              class="translation"
              >去年冬天我們必須賣掉那台舊鋼琴。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must 沒有過去式。說過去必須做的事，用 had to。</p>
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="You must to switch off your phone in here."
        right="You must switch off your phone in here."
        :fix="['switch']"
      />
    </NoteSlide>
    <NoteSlide title="must 不加 -s" mark="must">
      <NoteFix
        wrong="She musts finish her homework."
        right="She must finish her homework."
        :fix="['must']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix wrong="He must goes home now." right="He must go home now." :fix="['go']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
