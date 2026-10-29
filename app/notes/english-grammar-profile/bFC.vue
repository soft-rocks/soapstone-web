<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-be-on-the-point-of, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + on the point of + 動詞-ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'on the point of', kind: 'key', ring: true },
          { t: 'leaving', role: '動詞-ing' },
          { t: 'the office, the phone rang.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was / were、on the point of、動詞-ing" mark="of">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were</span>
          <span>be 的過去式，跟著主詞變化。</span>
        </div>
        <div>
          <span class="term">on the point of</span>
          <span>表示正要。of 是介系詞。</span>
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            >介系詞 of 後面接動詞&#x2060;-&#x2060;ing。這是過去那個時間下一刻就要發生的動作。</span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和 when 子句一起用" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She was on the point of giving up when she got the job offer."
              :marks="['when']"
            /><span class="translation">她正要放棄的時候，收到了錄取通知。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="When we were on the point of selling the house, prices went up."
              :marks="['When']"
            /><span class="translation">我們正要賣房子的時候，房價漲了。</span></span
          >
        </div>
      </div>
      <p class="remark">when 子句說突然發生的事。這件事常讓主詞沒做成原本要做的事。</p>
    </NoteSlide>
    <NoteSlide title="和 be about to 比較">
      <div class="rows is-labeled">
        <div>
          <span class="term">was about to + 原形動詞</span>
          <span
            ><NoteMark sentence="I was about to leave." :marks="[]" /><span class="translation"
              >我正要離開。</span
            ></span
          >
        </div>
        <div>
          <span class="term">was on the point of + 動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark sentence="I was on the point of leaving." :marks="[]" /><span
              class="translation"
              >我正準備要離開。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">be on the point of 和 be about to 的意思相同。兩個說法後面接的形式不同。</p>
    </NoteSlide>
    <NoteSlide title="of 是介系詞，後面接動詞-ing" mark="of">
      <NoteFix
        wrong="I was on the point of leave the office."
        right="I was on the point of leaving the office."
        :fix="['leaving']"
      />
    </NoteSlide>
    <NoteSlide title="on the point 後面要有 of" mark="on the point">
      <NoteFix
        wrong="They were on the point leaving."
        right="They were on the point of leaving."
        :fix="['of']"
      />
    </NoteSlide>
    <NoteSlide title="這個說法用 of 加動詞-ing，不用 to 加原形動詞" mark="of">
      <NoteFix
        wrong="He was on the point to quit his job."
        right="He was on the point of quitting his job."
        :fix="['of quitting']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
