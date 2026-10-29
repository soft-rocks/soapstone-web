<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-with-verbs-taking-two-objects-with, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="東西當主詞，收到的人放在 to 後面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Your name', role: '直接受詞', kind: 'key' },
          { t: 'was given', role: 'be + 過去分詞' },
          { t: 'to me', role: 'to + 收到的人', kind: 'key' },
          { t: 'by Allan Westwood', role: 'by + 做動作的人', kind: 'dim' },
        ]"
      />
      <p class="translation">你的名字是 Allan Westwood 給我的。</p>
    </NoteSlide>

    <NoteSlide title="收到的人或東西當主詞" mark="Your name">
      <div class="rows is-labeled">
        <div>
          <span class="term">收到的人當主詞</span>
          <span
            ><NoteMark sentence="I was given your name." :marks="['I']" /><span class="translation"
              >我得到了你的名字。</span
            ></span
          >
        </div>
        <div>
          <span class="term">東西當主詞</span>
          <span
            ><NoteMark sentence="Your name was given to me." :marks="['Your name', 'to me']" /><span
              class="translation"
              >你的名字是別人給我的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="大部分動詞用 to，buy、make 用 for" mark="to me">
      <div class="rows is-labeled">
        <div>
          <span class="term">to</span>
          <span
            ><NoteMark sentence="The house was sold to a young couple." :marks="['to']" /><span
              class="translation"
              >房子賣給一對年輕夫妻。</span
            ></span
          >
        </div>
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark sentence="This cake was made for you by Grandma." :marks="['for']" /><span
              class="translation"
              >這個蛋糕是奶奶為你做的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="收到的人前面用 to，不用 from" mark="to">
      <NoteFix
        wrong="Your name was given from me by Allan."
        right="Your name was given to me by Allan."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="buy、make、cook 用 for" mark="to">
      <NoteFix
        wrong="This cake was made to you by Grandma."
        right="This cake was made for you by Grandma."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接受格" mark="me">
      <NoteFix
        wrong="The keys were sent to I last week."
        right="The keys were sent to me last week."
        fix="me"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
