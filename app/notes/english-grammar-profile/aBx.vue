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
          { t: 'you', role: '主詞' },
          { t: 'doing', role: '動詞-ing' },
          { t: 'at ten last night?', kind: 'dim' },
        ]"
      />
      <p class="translation">你昨晚十點在做什麼？</p>
    </NoteSlide>

    <NoteSlide title="現在進行式問正在發生的事，也問安排好的計畫" mark="going">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在發生</span>
          <span
            ><NoteMark sentence="What are you reading?" :marks="['reading']" /><span
              class="translation"
              >你在讀什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">安排好的計畫</span>
          <span
            ><NoteMark sentence="When are you coming here?" :marks="['coming']" /><span
              class="translation"
              >你什麼時候要來這裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞是介系詞的受詞時，介系詞放在句尾" mark="with">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'What', role: 'at 的受詞', kind: 'key' },
          { t: 'are you looking', kind: 'dim' },
          { t: 'at?', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">你在看什麼？</p>
    </NoteSlide>

    <NoteSlide title="進行式的疑問句要有 be" mark="are">
      <NoteFix wrong="Where you going?" right="Where are you going?" fix="are" />
    </NoteSlide>

    <NoteSlide title="進行式用 be，不用 do" mark="are">
      <NoteFix wrong="What do you doing?" right="What are you doing?" fix="are" />
    </NoteSlide>

    <NoteSlide title="主詞是 they 時用 are" mark="are">
      <NoteFix wrong="Why is they laughing?" right="Why are they laughing?" fix="are" />
    </NoteSlide>

    <NoteSlide title="進行式的動詞要加 -ing" mark="going">
      <NoteFix wrong="What is she make?" right="What is she making?" fix="making" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
