<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-semi-modal-auxiliary-verbs-used-to, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="used to 說過去常做、現在不做的事">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'used to', role: '半情態動詞', kind: 'key' },
          { t: 'play', role: '原形動詞', kind: 'key' },
          { t: 'together', role: '副詞', kind: 'dim' },
          { t: 'every single day!', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我們以前每天都玩在一起！</p>
    </NoteSlide>

    <NoteSlide title="used to 說過去的習慣，也說過去的狀態" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去的習慣</span>
          <span
            ><NoteMark sentence="I used to walk to school." :marks="['used to', 'walk']" /><span
              class="translation"
              >我以前都走路上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去的狀態</span>
          <span
            ><NoteMark sentence="There used to be a cinema here." :marks="['used to', 'be']" /><span
              class="translation"
              >這裡以前有一家電影院。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定和問句用 did，後面寫 use to" mark="used">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="I didn't use to like coffee."
              :marks="['didn\'t', 'use to']"
            /><span class="translation">我以前不喜歡咖啡。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Did you use to live here?" :marks="['Did', 'use to']" /><span
              class="translation"
              >你以前住在這裡嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ought to 表示應該，否定是 ought not to">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span
            ><NoteMark sentence="I think you ought to join a gym." :marks="['ought to']" /><span
              class="translation"
              >我覺得你應該去健身房。</span
            ></span
          >
        </div>
        <div>
          <span class="term">ought not to</span>
          <span
            ><NoteMark sentence="You ought not to drive so fast." :marks="['ought not to']" /><span
              class="translation"
              >你不應該開這麼快。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="used to 後面接原形動詞" mark="play">
      <NoteFix wrong="I used to played the piano." right="I used to play the piano." fix="play" />
    </NoteSlide>

    <NoteSlide title="did 後面寫 use to，不寫 used to" mark="used">
      <NoteFix wrong="She didn't used to eat fish." right="She didn't use to eat fish." fix="use" />
    </NoteSlide>

    <NoteSlide title="used to 只說過去，現在的習慣用現在簡單式" mark="used to">
      <NoteFix
        wrong="I use to get up at seven every day."
        right="I usually get up at seven every day."
        fix="usually"
      />
    </NoteSlide>

    <NoteSlide title="ought 後面要有 to">
      <NoteFix
        wrong="You ought tell her the truth."
        right="You ought to tell her the truth."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="be used to 的意思是習慣了，後面接動詞-ing" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">used to<br /><i>以前常做</i></span>
          <span
            ><NoteMark sentence="I used to walk to school." :marks="['used to']" /><span
              class="translation"
              >我以前都走路上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be used to<br /><i>習慣了</i></span>
          <span
            ><NoteMark
              sentence="I'm used to getting up early."
              :marks="['I\'m', 'used to', 'getting']"
            /><span class="translation">我習慣早起了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
