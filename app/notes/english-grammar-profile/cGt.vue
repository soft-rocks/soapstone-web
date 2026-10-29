<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-formal, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Many 當主詞指人" mark="Many say">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Many', role: '很多人', kind: 'key' },
          { t: 'say', role: '複數動詞' },
          { t: 'that extreme sports …', kind: 'dim' },
        ]"
      />
      <p class="translation">很多人說，極限運動……</p>
    </NoteSlide>

    <NoteSlide title="few、many、most、others" mark="Many">
      <div class="rows is-labeled">
        <div>
          <span class="term">few</span>
          <span
            ><NoteMark sentence="Few believed his story." :marks="['Few']" /><span
              class="translation"
              >很少人相信他的說法。</span
            ></span
          >
        </div>
        <div>
          <span class="term">many</span>
          <span
            ><NoteMark sentence="Many have left the village to find work." :marks="['Many']" /><span
              class="translation"
              >很多人離開村子去找工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">most</span>
          <span
            ><NoteMark sentence="Most enjoyed it." :marks="['Most']" /><span class="translation"
              >大部分的人都很喜歡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">others</span>
          <span
            ><NoteMark
              sentence="Some prefer to work alone. Others like working in a team."
              :marks="['Others']"
            /><span class="translation">有些人喜歡自己做，有些人喜歡團隊合作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="報告和問卷調查" mark="Many">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Most', role: '大部分的人', kind: 'key' },
          { t: 'said they would come again, but', kind: 'dim' },
          { t: 'a few', role: '有幾個人', kind: 'key' },
          { t: 'wanted …', kind: 'dim' },
        ]"
      />
      <p class="translation">大部分的人說他們會再來，不過有幾個人希望……</p>
    </NoteSlide>

    <NoteSlide title="動詞用複數" mark="say">
      <NoteFix
        wrong="Many says the plan will not work."
        right="Many say the plan will not work."
        fix="say"
      />
    </NoteSlide>

    <NoteSlide title="指人用 others">
      <NoteFix
        wrong="Some liked the film. Other found it boring."
        right="Some liked the film. Others found it boring."
        fix="Others"
      />
    </NoteSlide>

    <NoteSlide title="most 前面不加 the">
      <NoteFix
        wrong="The most agreed with the new rules."
        right="Most agreed with the new rules."
        fix="Most"
      />
    </NoteSlide>

    <NoteSlide title="a few：有幾個人">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'A few', role: '有幾個人', kind: 'key' },
          { t: 'disagreed, but', kind: 'dim' },
          { t: 'most', role: '大部分的人', kind: 'key' },
          { t: 'supported the idea.', kind: 'dim' },
        ]"
      />
      <p class="translation">有幾個人不同意，可是大部分的人支持這個想法。</p>
    </NoteSlide>

    <NoteSlide title="many of + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Many of', kind: 'key' },
          { t: 'the workers', role: '哪一群人' },
          { t: 'were unhappy …', kind: 'dim' },
        ]"
      />
      <p class="translation">很多工人不滿意……</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
