<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reflections, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How can + 主詞 + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'How can', kind: 'key', ring: true },
          { t: 'each of us stay fit in this world of stress and', kind: 'dim' },
          { t: 'fast-food', role: '主詞' },
          { t: 'restaurants?', role: '原形動詞 ...' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="How can、主詞、if 子句" mark="each of us">
      <div class="rows is-labeled">
        <div>
          <span class="term">How can</span>
          <span>引出要討論的問題。</span>
        </div>
        <div>
          <span class="term">主詞</span>
          <span>常用 we、each of us、people、anyone。</span>
        </div>
        <div>
          <span class="term">if 子句</span>
          <span>說明困難的條件。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="提出問題，接著回答" mark="How can">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="How can we save energy at home? First, turn off lights you don't need."
              :marks="['How can']"
            /><span class="translation">我們在家要怎麼省電？首先，關掉不需要的燈。</span></span
          >
        </div>
      </div>
      <p class="remark">文章裡常先用 How can 問，再在下一句或下一段回答。</p>
    </NoteSlide>
    <NoteSlide title="表示不可能：how can ... if ..." mark="How can">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="How can we improve if we are not allowed to make mistakes?"
              :marks="['How can', 'if']"
            /><span class="translation">如果不允許我們犯錯，我們要怎麼進步？（被動）</span></span
          >
        </div>
      </div>
      <p class="remark">How can 加 if 子句，表示在那種條件下做不到。</p>
    </NoteSlide>
    <NoteSlide title="問句裡，can 放在主詞前面" mark="can">
      <NoteFix wrong="How we can stay fit?" right="How can we stay fit?" :fix="['can', 'stay']" />
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix
        wrong="How can we to protect the forests?"
        right="How can we protect the forests?"
        :fix="['protect']"
      />
    </NoteSlide>
    <NoteSlide title="can 後面接原形動詞" mark="can">
      <NoteFix
        wrong="How can each of us stays healthy?"
        right="How can each of us stay healthy?"
        :fix="['stay']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
