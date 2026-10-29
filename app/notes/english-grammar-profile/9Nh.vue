<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-would-love-to, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would love to 強調很想做一件事">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'d', role: 'I + would', kind: 'key' },
          { t: 'love', role: '原形動詞', kind: 'key' },
          { t: 'to hear', role: 'to + 原形動詞', kind: 'key' },
          { t: 'it!', role: 'hear 的受詞' },
        ]"
      />
      <p class="translation">我很想聽！</p>
    </NoteSlide>

    <NoteSlide title="回答邀請時，to 後面的動詞可以省略" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">答應</span>
          <span
            ><NoteMark
              sentence='"Would you like to come to dinner?" "I&apos;d love to!"'
              :marks="['I\'d love to']"
            /><span class="translation">「你要來吃晚餐嗎？」「好啊，我很想去！」</span></span
          >
        </div>
        <div>
          <span class="term">不能去</span>
          <span
            ><NoteMark
              sentence="I'd love to, but I have to work."
              :marks="['I\'d love to', 'but']"
            /><span class="translation">我很想去，可是我得上班。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would love to 的語氣比 would like to 強" mark="love">
      <NoteFork
        stem="I'd"
        :branches="[
          {
            head: 'like',
            rest: 'to see the new exhibition.',
            meaning: '想',
            zh: '我想看那個新展覽。',
          },
          {
            head: 'love',
            rest: 'to see that film again.',
            meaning: '很想',
            zh: '我好想再看一次那部電影。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="would love 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix wrong="I'd love go to Japan." right="I'd love to go to Japan." fix="to#1" />
    </NoteSlide>

    <NoteSlide title="would 後面的 love 用原形" mark="love">
      <NoteFix
        wrong="My brother would loves to work in Africa."
        right="My brother would love to work in Africa."
        fix="love"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="hear">
      <NoteFix
        wrong="We'd love to trying the local food."
        right="We'd love to try the local food."
        fix="try"
      />
    </NoteSlide>

    <NoteSlide title="省略後面的動詞時，to 要留著" mark="to">
      <NoteFix wrong="Yes, I'd love." right="Yes, I'd love to." fix="to" />
    </NoteSlide>

    <NoteSlide title="love 加動詞-ing 說平常喜歡做的事" mark="love">
      <NoteMark
        sentence="My grandmother loves dancing at family parties."
        :marks="['loves dancing']"
      />
      <p class="translation">我奶奶很愛在家族聚會上跳舞。</p>
    </NoteSlide>

    <NoteSlide title="would hate to 是很不想做一件事" mark="love">
      <NoteMark sentence="I'd hate to be late for my own wedding." :marks="['I\'d hate to']" />
      <p class="translation">我可不想在自己的婚禮上遲到。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
