<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-these-ones-those-ones-substitution, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these ones 代替複數名詞" mark="these ones.">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… a lot of', kind: 'dim' },
          { t: 'things', role: '前面的名詞', kind: 'key' },
          { t: '… let\'s just start with', kind: 'dim' },
          { t: 'these ones.', role: '= these things', kind: 'key' },
        ]"
      />
      <p class="translation">該做的事情很多，不過我們就先從這些開始吧。</p>
    </NoteSlide>

    <NoteSlide title="these ones 和 those ones" mark="these ones.">
      <div class="rows is-labeled">
        <div>
          <span class="term">近的東西</span>
          <span
            ><NoteMark
              sentence="I don't like those shoes. I prefer these ones."
              :marks="['shoes.', 'these ones.']"
            /><span class="translation">我不喜歡那雙鞋，我比較喜歡這雙。</span></span
          >
        </div>
        <div>
          <span class="term">遠的東西</span>
          <span
            ><NoteMark
              sentence="These glasses are dirty. Can you pass me those ones?"
              :marks="['glasses', 'those ones?']"
            /><span class="translation">這些杯子很髒，你可以把那邊那些遞給我嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加不加 ones" mark="these ones.">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="Which cups do you want? I'll take these."
              :marks="['these.']"
            /><span class="translation">你要哪些杯子？我要這些。</span></span
          >
        </div>
        <div>
          <span class="term">有形容詞</span>
          <span
            ><NoteMark
              sentence="I like the blue ones better than these red ones."
              :marks="['these red ones.']"
            /><span class="translation">比起這些紅的，我比較喜歡藍的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 ones" mark="these ones.">
      <NoteFix
        wrong="This bread is old. Let's buy fresh bread instead of these ones."
        right="This bread is old. Let's buy fresh bread instead of this."
        fix="of this."
      />
    </NoteSlide>

    <NoteSlide title="單數名詞用 this one" mark="these ones.">
      <NoteFix
        wrong="I don't want that pen. Give me these ones."
        right="I don't want that pen. Give me this one."
        fix="this one."
      />
    </NoteSlide>

    <NoteSlide title="近的東西用 these" mark="these ones.">
      <NoteFix
        wrong="Look at the pictures on this wall. Those ones are mine."
        right="Look at the pictures on this wall. These ones are mine."
        fix="These ones"
      />
    </NoteSlide>

    <NoteSlide title="the ones + 說明">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The ones', kind: 'key' },
          { t: 'on the top shelf', role: '說明' },
          { t: 'are cheaper.', kind: 'dim' },
        ]"
      />
      <p class="translation">最上面那一層的比較便宜。</p>
    </NoteSlide>

    <NoteSlide title="those + 關係子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Those', role: '指人', kind: 'key' },
          { t: 'who arrived late', role: '關係子句' },
          { t: 'missed the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">晚到的人沒搭上公車。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
