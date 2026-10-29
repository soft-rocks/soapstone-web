<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-theirs-as-subject, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Theirs 放在句首當主詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Theirs', role: '= their relationship', kind: 'key' },
          { t: 'had always been', role: '動詞' },
          { t: 'a love-hate relationship.', role: '補語' },
        ]"
      />
      <p class="translation">他們之間一直是又愛又恨的關係。</p>
    </NoteSlide>

    <NoteSlide title="動詞跟著 theirs 代替的名詞變化" mark="Theirs">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="Our flight was on time, but theirs was two hours late."
              :marks="['theirs was']"
            /><span class="translation">我們的班機準時，可是他們的晚了兩個小時。</span></span
          >
        </div>
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="Our house is small. Theirs is enormous."
              :marks="['Theirs is']"
            /><span class="translation">我們的房子很小。他們的很大。</span></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="Our children are at school. Theirs are already at university."
              :marks="['Theirs are']"
            /><span class="translation">我們的孩子還在上學。他們的已經上大學了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="書面語用 Theirs was a 加名詞，描述他們的關係" mark="Theirs">
      <div class="rows is-labeled">
        <div>
          <span class="term">書面語</span>
          <span
            ><NoteMark
              sentence="Theirs was a long and happy marriage."
              :marks="['Theirs was a']"
            /><span class="translation">他們的婚姻長久又幸福。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="theirs 沒有撇號" mark="Theirs">
      <NoteFix
        wrong="Our garden is small, but their's is huge."
        right="Our garden is small, but theirs is huge."
        fix="theirs"
      />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 theirs 當主詞" mark="Theirs">
      <NoteFix
        wrong="Our team lost, but their won."
        right="Our team lost, but theirs won."
        fix="theirs"
      />
    </NoteSlide>

    <NoteSlide title="there's 是 there is，所有格代名詞是 theirs" mark="Theirs">
      <NoteFix
        wrong="Our bus is late, but there's is on time."
        right="Our bus is late, but theirs is on time."
        fix="theirs"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
