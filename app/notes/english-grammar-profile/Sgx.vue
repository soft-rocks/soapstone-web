<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-don-t-you-warning, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定祈使句加上 you，就變成警告或責備">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Don\'t you', role: 'Don\'t you', kind: 'key' },
          { t: 'ever', role: '以後永遠不准' },
          { t: 'do', role: '原形動詞' },
          { t: 'that', role: '受詞' },
          { t: 'again!', kind: 'dim' },
        ]"
      />
      <p class="translation">你再敢這樣做試試看！</p>
    </NoteSlide>

    <NoteSlide title="Don't you dare 表示你敢做就試試看" mark="Don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">dare + 原形動詞</span>
          <span
            ><NoteMark
              sentence="Don't you dare use my laptop without asking!"
              :marks="['dare use']"
            /><span class="translation">你敢沒問就用我的筆電試試看！</span></span
          >
        </div>
        <div>
          <span class="term">單獨用</span>
          <span
            ><NoteMark sentence="Don't you dare!" :marks="['dare']" /><span class="translation"
              >你敢！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="沒有 you 是提醒，有 you 是警告" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">提醒</span>
          <span
            ><NoteMark sentence="Don't touch the cake." :marks="['Don\'t']" /><span
              class="translation"
              >別碰蛋糕。</span
            ></span
          >
        </div>
        <div>
          <span class="term">警告</span>
          <span
            ><NoteMark sentence="Don't you touch the cake!" :marks="['you']" /><span
              class="translation"
              >你不准碰蛋糕！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="警告句的 you 重讀、語調下降，疑問句的語調上揚" mark="Don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">警告<br /><i>語調下降</i></span>
          <span><NoteMark sentence="Don't you touch my phone!" :marks="['you']" /></span>
        </div>
        <div>
          <span class="term">疑問句<br /><i>語調上揚</i></span>
          <span><NoteMark sentence="Don't you like it?" :marks="['like']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Don't you worry 是在安慰對方" mark="Don't you">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Don\'t you worry.', role: '語氣溫和', kind: 'key' },
          { t: 'I\'ll take care of it.', kind: 'dim' },
        ]"
      />
      <p class="translation">你別擔心。我會處理。</p>
    </NoteSlide>

    <NoteSlide title="you 放在 Don't 和動詞中間" mark="Don't you">
      <NoteFix
        wrong="Don't open you my letters again!"
        right="Don't you open my letters again!"
        fix="you"
      />
    </NoteSlide>

    <NoteSlide title="dare 後面直接接原形動詞，不加 to">
      <NoteFix wrong="Don't you dare to tell her!" right="Don't you dare tell her!" fix="tell" />
    </NoteSlide>

    <NoteSlide title="祈使句的動詞用原形" mark="do">
      <NoteFix
        wrong="Don't you ever says that again!"
        right="Don't you ever say that again!"
        fix="say"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
