<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-phrase-noun-phrase, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="同位語和前面的名詞片語指同一個人">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'A new employee,', role: '第一個名詞片語' },
          { t: 'Mary Watts,', role: '同位語', kind: 'key' },
          { t: 'has just joined our company.', kind: 'dim' },
        ]"
      />
      <p class="translation">新員工 Mary Watts 剛加入我們公司。</p>
      <p class="remark">拿掉同位語，句子的文法還是完整。</p>
    </NoteSlide>

    <NoteSlide title="同位語在句中前後加逗號，在句尾前面加逗號" mark="Mary Watts,">
      <div class="rows is-labeled">
        <div>
          <span class="term">句中</span>
          <span
            ><NoteMark
              sentence="Mr Miller, the Sales Director, will visit us next Thursday."
              :marks="['the Sales Director,']"
            /><span class="translation">業務總監 Miller 先生下星期四會來拜訪我們。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="We live near Eboli, a small town in the south."
              :marks="['a small town in the south.']"
            /><span class="translation">我們住在南部的小鎮 Eboli 附近。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同位語可以列出是哪些人" mark="Mary Watts,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She came with', kind: 'dim' },
          { t: 'two more friends,', role: '第一個名詞片語' },
          { t: 'Peter and Gorha.', role: '同位語', kind: 'key' },
        ]"
      />
      <p class="translation">她跟另外兩個朋友 Peter 和 Gorha 一起來。</p>
    </NoteSlide>

    <NoteSlide title="句中的同位語前後都要加逗號" mark="Mary Watts,">
      <NoteFix
        wrong="My brother, a doctor works in London."
        right="My brother, a doctor, works in London."
        fix="doctor,"
      />
    </NoteSlide>

    <NoteSlide title="同位語和前面的名詞片語單複數一致" mark="A new employee,">
      <NoteFix
        wrong="The team captain, Emma and Lucy, are late."
        right="The team captains, Emma and Lucy, are late."
        fix="captains,"
      />
    </NoteSlide>

    <NoteSlide title="同位語前面不加 who" mark="Mary Watts,">
      <NoteFix
        wrong="Our teacher, who Mrs Jones, is very strict."
        right="Our teacher, Mrs Jones, is very strict."
        fix="Mrs Jones,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
