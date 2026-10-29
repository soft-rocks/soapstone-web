<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-events-in-progress, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在進行式說寫卡片時還在持續的感受">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'are', role: 'be', kind: 'key' },
          { t: 'missing', role: '動詞-ing', kind: 'key' },
          { t: 'you.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們好想你。</p>
    </NoteSlide>
    <NoteSlide title="說這一刻的事，也說一段時間的事" mark="missing">
      <div class="rows is-labeled">
        <div>
          <span class="term">這一刻的動作</span>
          <span
            ><NoteMark
              sentence="Shh, Dad is talking on the phone."
              :marks="['is', 'talking']"
            /><span class="translation">噓，爸爸在講電話。</span></span
          >
        </div>
        <div>
          <span class="term">一段時間的事</span>
          <span
            ><NoteMark sentence="We're missing you a lot." :marks="['We\'re', 'missing']" /><span
              class="translation"
              >我們都很想你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在簡單式說習慣，現在進行式說現在這一刻" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">習慣</span>
          <span
            ><NoteMark sentence="I watch TV every evening." :marks="['watch']" /><span
              class="translation"
              >我每天晚上都看電視。</span
            ></span
          >
        </div>
        <div>
          <span class="term">這一刻</span>
          <span
            ><NoteMark sentence="I'm watching TV." :marks="['I\'m', 'watching']" /><span
              class="translation"
              >我在看電視。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="know、like、want 說狀態，通常不用進行式" mark="missing">
      <NoteFix wrong="I'm knowing the answer." right="I know the answer." fix="know" />
    </NoteSlide>
    <NoteSlide title="說話時正在做的事，用現在進行式" mark="are">
      <NoteFix
        wrong="Be quiet! I listen to the news."
        right="Be quiet! I'm listening to the news."
        :fix="['I\'m', 'listening']"
      />
    </NoteSlide>
    <NoteSlide title="問對方這時候在做什麼，用 are you doing" mark="are">
      <NoteFix
        wrong="What do you do now? Can I come over?"
        right="What are you doing now? Can I come over?"
        :fix="['are', 'doing']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="are">
      <NoteFix wrong="Look, it snowing!" right="Look, it's snowing!" fix="it's" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
