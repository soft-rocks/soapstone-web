<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-adverb-preposition, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在介系詞片語前面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'m going to put it', kind: 'dim' },
          { t: 'right', role: '程度副詞', kind: 'key' },
          { t: 'in front of the window', role: '介系詞片語' },
          { t: 'so I have enough light.', role: 'so 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我要把它放在窗戶正前方，這樣光線才夠。</p>
    </NoteSlide>

    <NoteSlide title="right、straight、quite、really 和 especially 修飾介系詞片語" mark="right">
      <div class="rows is-labeled">
        <div>
          <span class="term">right<br /><i>正好、就在</i></span>
          <span
            ><NoteMark
              sentence="The photographer stood right beside the stage."
              :marks="['right']"
            /><span class="translation">攝影師就站在舞台旁邊。</span></span
          >
        </div>
        <div>
          <span class="term">straight<br /><i>直接</i></span>
          <span>straight into the room</span>
        </div>
        <div>
          <span class="term">quite / very<br /><i>相當、很</i></span>
          <span>quite near the station, very close to the sea</span>
        </div>
        <div>
          <span class="term">really<br /><i>真的</i></span>
          <span>really near the river</span>
        </div>
        <div>
          <span class="term">especially<br /><i>特別是</i></span>
          <span>especially with friends</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞也修飾表示時間的介系詞片語" mark="right">
      <div class="rows is-labeled">
        <div>
          <span class="term">straight after</span>
          <span
            ><NoteMark
              sentence="I went to bed straight after dinner."
              :marks="['straight after dinner']"
            /><span class="translation">我晚餐後就直接去睡了。</span></span
          >
        </div>
        <div>
          <span class="term">right after</span>
          <span>right after lunch</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="副詞放在整個介系詞前面" mark="right in front of">
      <NoteFix
        wrong="The bank is in front right of the station."
        right="The bank is right in front of the station."
        fix="right in front of"
      />
    </NoteSlide>

    <NoteSlide title="說就在那個位置用 right，不用 very" mark="right">
      <NoteFix
        wrong="She was standing very in front of me."
        right="She was standing right in front of me."
        fix="right"
      />
    </NoteSlide>

    <NoteSlide title="表示就在、正好用 right，不用 rightly" mark="right">
      <NoteFix
        wrong="The shop is rightly next to my school."
        right="The shop is right next to my school."
        fix="right"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
