<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-the-same-comparative-adjective-with, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="同一個比較級說兩次，表示越來越怎麼樣" mark="worse and worse">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Nowadays,', kind: 'dim' },
          { t: 'television', role: '主詞' },
          { t: 'is getting', role: 'get，表示改變' },
          { t: 'worse and worse.', role: '比較級 + and + 比較級', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">現在的電視越來越難看了。</p>
      <p class="remark"><code>bad</code> 的比較級是 <code>worse</code>。</p>
    </NoteSlide>

    <NoteSlide title="短的形容詞重複 -er，長的形容詞只重複 more" mark="worse and worse">
      <div class="rows is-labeled">
        <div>
          <span class="term">-er + and + -er</span>
          <span
            ><NoteMark
              sentence="The room became hotter and hotter."
              :marks="['hotter and hotter']"
            /><span class="translation">房間越來越熱。</span></span
          >
        </div>
        <div>
          <span class="term">more and more + 形容詞</span>
          <span
            ><NoteMark
              sentence="Rent is getting more and more expensive."
              :marks="['more and more']"
            /><span class="translation">房租越來越貴。</span></span
          >
        </div>
        <div>
          <span class="term">不規則比較級</span>
          <span
            ><NoteMark
              sentence="His English is getting better and better."
              :marks="['better and better']"
            /><span class="translation">他的英文越來越好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="進行式表示現在正在改變" mark="is getting">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The roads', kind: 'dim' },
          { t: 'are getting', role: '現在進行式', kind: 'key', ring: true },
          { t: 'busier and busier.', role: '比較級 + and + 比較級' },
        ]"
      />
      <p class="translation">路上的車越來越多。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞只重複 more，形容詞說一次" mark="worse and worse">
      <NoteFix
        wrong="Rent is getting more expensive and more expensive."
        right="Rent is getting more and more expensive."
        fix="more and more"
      />
    </NoteSlide>

    <NoteSlide title="兩個都用比較級" mark="worse and worse">
      <NoteFix
        wrong="The water got colder and cold."
        right="The water got colder and colder."
        fix="colder#2"
      />
    </NoteSlide>

    <NoteSlide title="good 的比較級是 better" mark="worse">
      <NoteFix
        wrong="His English is getting gooder and gooder."
        right="His English is getting better and better."
        fix="better and better"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
