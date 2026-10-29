<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-even, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="even 表示比已經很怎麼樣的還要更怎麼樣" mark="even better">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Monday was hot,', role: '已經很熱', kind: 'dim' },
          { t: 'but today is', kind: 'dim' },
          { t: 'even', role: 'even', kind: 'key', ring: true },
          { t: 'hotter.', role: '比較級', kind: 'key' },
        ]"
      />
      <p class="translation">星期一已經很熱，今天更熱。</p>
    </NoteSlide>

    <NoteSlide title="much 只說差很多，even 表示前面那個已經很怎麼樣" mark="even">
      <div class="rows is-labeled">
        <div>
          <span class="term">much</span>
          <span
            ><NoteMark
              sentence="My brother is much taller than me."
              :marks="['much taller']"
            /><span class="translation">我哥哥比我高很多。</span></span
          >
        </div>
        <div>
          <span class="term">even</span>
          <span
            ><NoteMark
              sentence="My brother is tall, but my sister is even taller."
              :marks="['even taller']"
            /><span class="translation">我哥哥很高，但是我姊姊更高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get even + 比較級，表示變得更怎麼樣" mark="even better">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The rain', role: '主詞' },
          { t: 'got', role: 'get', kind: 'key', ring: true },
          { t: 'even heavier', role: 'even + 比較級', kind: 'key' },
          { t: 'in the afternoon.', kind: 'dim' },
        ]"
      />
      <p class="translation">到了下午，雨下得更大了。</p>
    </NoteSlide>

    <NoteSlide title="even 後面要用比較級" mark="better">
      <NoteFix
        wrong="The second test was even hard."
        right="The second test was even harder."
        fix="harder"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾比較級" mark="even">
      <NoteFix
        wrong="The soup was good, but the dessert was very better."
        right="The soup was good, but the dessert was even better."
        fix="even"
      />
    </NoteSlide>

    <NoteSlide title="even 放在比較級前面" mark="even better">
      <NoteFix
        wrong="This year the festival was bigger even."
        right="This year the festival was even bigger."
        fix="even bigger"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
