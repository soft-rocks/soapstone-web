<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-with-auxiliary-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="進行式的 wh- 疑問句把 be 放在主詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Who', role: '疑問詞' },
          { t: 'are', role: 'be', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'going', role: '動詞-ing', kind: 'key' },
          { t: 'with?', role: '介系詞' },
        ]"
      />
      <p class="translation">你要跟誰一起去？</p>
    </NoteSlide>

    <NoteSlide title="過去進行式用 was 或 were" mark="are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What', role: '疑問詞' },
          { t: 'were', role: 'be：過去式', kind: 'key' },
          { t: 'the kids', role: '主詞' },
          { t: 'watching', role: '動詞-ing' },
          { t: 'when the power went out?', kind: 'dim' },
        ]"
      />
      <p class="translation">停電的時候孩子們在看什麼？</p>
    </NoteSlide>

    <NoteSlide title="現在進行式問正在發生的事，也問安排好的計畫" mark="going">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在發生</span>
          <span
            ><NoteMark sentence="What is your dad fixing in the shed?" :marks="['fixing']" /><span
              class="translation"
              >你爸爸在小屋裡修什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">安排好的計畫</span>
          <span
            ><NoteMark sentence="When are your parents flying home?" :marks="['flying']" /><span
              class="translation"
              >你爸媽什麼時候飛回家？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞是介系詞的受詞時，介系詞放在句尾" mark="with">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'What', role: 'about 的受詞', kind: 'key' },
          { t: 'are the students complaining', kind: 'dim' },
          { t: 'about?', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">學生們在抱怨什麼？</p>
    </NoteSlide>

    <NoteSlide title="進行式的疑問句要有 be" mark="are">
      <NoteFix
        wrong="Where you taking all those boxes?"
        right="Where are you taking all those boxes?"
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="進行式用 be，不用 do" mark="are">
      <NoteFix
        wrong="What do you painting in the garden?"
        right="What are you painting in the garden?"
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="主詞是複數時用 are" mark="are">
      <NoteFix
        wrong="Why is the neighbours cutting down that tree?"
        right="Why are the neighbours cutting down that tree?"
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="進行式的動詞要加 -ing" mark="going">
      <NoteFix
        wrong="What is your grandmother knit?"
        right="What is your grandmother knitting?"
        fix="knitting"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
