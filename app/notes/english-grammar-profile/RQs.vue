<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-as-adjuncts, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="next week 前面不加介系詞，直接說明時間">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I will write to you again', kind: 'dim' },
          { t: 'next week.', role: '時間名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">我下禮拜會再寫信給你。</p>
    </NoteSlide>

    <NoteSlide title="this、next、last、every 和 today 這類詞組成時間名詞片語" mark="next week.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this / next / last</span>
          <span>this morning, next week, last year</span>
        </div>
        <div>
          <span class="term">every</span>
          <span>every day, every Friday</span>
        </div>
        <div>
          <span class="term">today / tomorrow</span>
          <span>tomorrow morning, yesterday afternoon</span>
        </div>
        <div>
          <span class="term">時間長度</span>
          <span
            ><NoteMark sentence="I waited two hours." :marks="['two hours']" /><span
              class="translation"
              >我等了兩個小時。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面有 next 或 last，就不加介系詞" mark="next week.">
      <div class="rows is-labeled">
        <div>
          <span class="term">不加介系詞</span>
          <span>next Monday, last summer, this evening</span>
        </div>
        <div>
          <span class="term">加介系詞</span>
          <span>on Monday, in the summer, in the evening</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="next 前面不加 on" mark="next week.">
      <NoteFix
        wrong="I'll see you on next Monday."
        right="I'll see you next Monday."
        fix="next Monday"
      />
    </NoteSlide>

    <NoteSlide title="從現在算的下禮拜說 next week，不加 the" mark="next week.">
      <NoteFix
        wrong="We're going to Spain the next week."
        right="We're going to Spain next week."
        fix="next week"
      />
    </NoteSlide>

    <NoteSlide title="this morning 前面不加介系詞">
      <NoteFix
        wrong="I saw him at this morning."
        right="I saw him this morning."
        fix="this morning"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
