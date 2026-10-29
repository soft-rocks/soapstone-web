<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-ones, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="ones 代替複數名詞" mark="new ones.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My', kind: 'dim' },
          { t: 'pillows', role: '複數名詞', kind: 'key' },
          { t: 'are getting old, and I need', kind: 'dim' },
          { t: 'new', role: '修飾語' },
          { t: 'ones.', role: '代替 pillows', kind: 'key' },
        ]"
      />
      <p class="translation">我的枕頭越來越舊了，我需要新的。</p>
    </NoteSlide>

    <NoteSlide title="說過的名詞、看得出來的名詞" mark="ones.">
      <div class="rows is-labeled">
        <div>
          <span class="term">說過的</span>
          <span
            ><NoteMark
              sentence="The old maps were wrong, so we bought new ones."
              :marks="['new ones.']"
            /><span class="translation">舊地圖是錯的，所以我們買了新的。</span></span
          >
        </div>
        <div>
          <span class="term">看得出來的</span>
          <span
            ><NoteMark
              sentence="Could I try on the brown ones, please?"
              :marks="['the brown ones,']"
            /><span class="translation">（在鞋店）我可以試穿咖啡色那雙嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ones 前面要有修飾語" mark="new">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span><NoteMark sentence="cheap ones" :marks="['cheap']" /></span>
        </div>
        <div>
          <span class="term">the</span>
          <span><NoteMark sentence="the ones upstairs" :marks="['the']" /></span>
        </div>
        <div>
          <span class="term">which</span>
          <span><NoteMark sentence="which ones" :marks="['which']" /></span>
        </div>
        <div>
          <span class="term">these、those</span>
          <span><NoteMark sentence="these ones" :marks="['these']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="沒有修飾語用 some">
      <NoteFix
        wrong="We've run out of cups. I'll buy ones tomorrow."
        right="We've run out of cups. I'll buy some tomorrow."
        fix="some"
      />
    </NoteSlide>

    <NoteSlide title="同一批東西用 them">
      <NoteFix
        wrong="I washed the new pillows and put ones on the bed."
        right="I washed the new pillows and put them on the bed."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 ones">
      <NoteFix
        wrong="This bread is stale. Have you got any fresh ones?"
        right="This bread is stale. Have you got any fresh bread?"
        fix="fresh bread?"
      />
    </NoteSlide>

    <NoteSlide title="單數用 one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'ve broken my umbrella, so I need', kind: 'dim' },
          { t: 'a new one.', role: '代替單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的傘壞了，所以我要買一把新的。</p>
    </NoteSlide>

    <NoteSlide title="one's 是所有格">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'One should never lose', kind: 'dim' },
          { t: 'one\'s', role: '所有格', kind: 'key' },
          { t: 'temper.', kind: 'dim' },
        ]"
      />
      <p class="translation">人不應該亂發脾氣。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
