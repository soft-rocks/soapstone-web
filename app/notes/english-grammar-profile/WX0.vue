<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-guesses-and-predictions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can't / cannot + be + 形容詞 / 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You look very pale.', kind: 'dim' },
          { t: 'You', role: '主詞' },
          { t: 'can\'t', kind: 'key', ring: true },
          { t: 'be', kind: 'key', ring: true },
          { t: 'feeling well.', role: '形容詞 / 名詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="can't / cannot、be + 形容詞 / 名詞、be + 動詞-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">can't / cannot</span>
          <span>說話者很確定某件事不是真的。</span>
        </div>
        <div>
          <span class="term">be + 形容詞 / 名詞</span>
          <span>推測現在的狀態。</span>
        </div>
        <div>
          <span class="term">be + 動詞&#x2060;-&#x2060;ing</span>
          <span>推測現在正在發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回應別人的話">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Tom won the lottery." "That can&apos;t be true!"'
              :marks="[]"
            /><span class="translation">「Tom 中樂透了。」「不可能吧！」</span></span
          >
        </div>
      </div>
      <p class="remark">It can't be true. 或 That can't be right. 常用來回應很難相信的消息。</p>
    </NoteSlide>
    <NoteSlide title="can't 後面接原形動詞 be" mark="can't">
      <NoteFix
        wrong="He can't is at home. His car isn't there."
        right="He can't be at home. His car isn't there."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="can't 後面接形容詞時，中間要有 be" mark="can't">
      <NoteFix
        wrong="You can't hungry. You just ate."
        right="You can't be hungry. You just ate."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="推測正在發生的事，用 can't be 加動詞-ing" mark="can't be">
      <NoteFix
        wrong="She can't working now. It's Sunday."
        right="She can't be working now. It's Sunday."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
