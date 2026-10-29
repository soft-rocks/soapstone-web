<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-advice-580, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + should + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was only seventy euros. It looks very nice. My advice:', kind: 'dim' },
          { t: 'you', kind: 'key', ring: true },
          { t: 'should', kind: 'key', ring: true },
          { t: 'buy', role: '原形動詞' },
          { t: 'this.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="you should、because 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">you should</span>
          <span>你應該。給建議。</span>
        </div>
        <div>
          <span class="term">because 子句</span>
          <span>說明為什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上理由">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should take some money, because the ticket costs four pounds."
              :marks="[]"
            /><span class="translation">你應該帶點錢，因為票要四英鎊。</span></span
          >
        </div>
      </div>
      <p class="remark">建議常接著說理由，讓對方知道為什麼。</p>
    </NoteSlide>
    <NoteSlide title="讓建議更客氣">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I think you should rest." :marks="['I think']" /><span
              class="translation"
              >我想你應該休息。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">前面加 I think，建議聽起來比較客氣。</p>
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="should">
      <NoteFix wrong="You should to buy it." right="You should buy it." :fix="['buy']" />
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="should">
      <NoteFix
        wrong="You should took an umbrella."
        right="You should take an umbrella."
        :fix="['take']"
      />
    </NoteSlide>
    <NoteSlide title="should 不加 -s" mark="should">
      <NoteFix wrong="He shoulds see a doctor." right="He should see a doctor." :fix="['should']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
