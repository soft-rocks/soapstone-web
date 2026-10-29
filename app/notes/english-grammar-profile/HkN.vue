<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-premodifiers-intensifying, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="修飾語 + 不定代名詞" mark="Nearly everyone">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Nearly', role: '修飾語', kind: 'key' },
          { t: 'everyone', role: '不定代名詞', kind: 'key' },
          { t: 'I know', role: '關係子句' },
          { t: 'sits at a computer all day.', kind: 'dim' },
        ]"
      />
      <p class="translation">我認識的人幾乎每個都整天坐在電腦前。</p>
    </NoteSlide>

    <NoteSlide title="幾乎、完全" mark="Nearly">
      <div class="rows is-labeled">
        <div>
          <span class="term">nearly / almost</span>
          <span
            ><NoteMark
              sentence="Almost everything in the shop was on sale."
              :marks="['Almost']"
            /><span class="translation">店裡幾乎每樣東西都在打折。</span></span
          >
        </div>
        <div>
          <span class="term">absolutely</span>
          <span
            ><NoteMark
              sentence="This shop sells absolutely everything for cats."
              :marks="['absolutely']"
            /><span class="translation">養貓要用的東西這家店全都有賣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="幾乎沒有、差不多">
      <div class="rows is-labeled">
        <div>
          <span class="term">hardly</span>
          <span
            ><NoteMark sentence="Hardly anyone came to the meeting." :marks="['Hardly']" /><span
              class="translation"
              >幾乎沒有人來開會。</span
            ></span
          >
        </div>
        <div>
          <span class="term">just about</span>
          <span
            ><NoteMark
              sentence="Just about everybody has a phone now."
              :marks="['Just about']"
            /><span class="translation">現在差不多每個人都有手機。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hardly anyone = almost no one">
      <div class="rows is-labeled">
        <div>
          <span class="term">hardly + any-</span>
          <span
            ><NoteMark sentence="Hardly anyone uses cash now." :marks="['Hardly anyone']" /><span
              class="translation"
              >現在幾乎沒有人用現金了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">almost + no-</span>
          <span
            ><NoteMark sentence="Almost no one uses cash now." :marks="['Almost no one']" /><span
              class="translation"
              >現在幾乎沒人用現金了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞還是用單數" mark="sits">
      <NoteFix
        wrong="Nearly everyone in my family have a car."
        right="Nearly everyone in my family has a car."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="almost 不直接接名詞" mark="everyone">
      <NoteFix
        wrong="Almost people at the concert were singing."
        right="Almost everyone at the concert was singing."
        fix="everyone"
      />
    </NoteSlide>

    <NoteSlide title="nearly 放在 everyone 前面" mark="Nearly everyone">
      <NoteFix
        wrong="I nearly know everyone in this street."
        right="I know nearly everyone in this street."
        fix="know nearly everyone"
      />
    </NoteSlide>

    <NoteSlide title="almost all 後面接名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Almost all', role: '修飾語', kind: 'key' },
          { t: 'the shops', role: '名詞', kind: 'key' },
          { t: 'close at six on Saturdays.', kind: 'dim' },
        ]"
      />
      <p class="translation">星期六幾乎所有的店都六點關門。</p>
    </NoteSlide>

    <NoteSlide title="almost 修飾動詞：差一點">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'almost', role: '修飾語', kind: 'key' },
          { t: 'dropped', role: '動詞', kind: 'key' },
          { t: 'my phone in the river.', kind: 'dim' },
        ]"
      />
      <p class="translation">我差點把手機掉進河裡。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
