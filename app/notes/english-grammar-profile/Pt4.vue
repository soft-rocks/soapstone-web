<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-habitual-states-or-actions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去的習慣用過去簡單式" mark="always talked">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'talked', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'during class.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們以前上課總是在聊天。</p>
      <p class="remark">說話者在同學會上遇到老同學。</p>
    </NoteSlide>

    <NoteSlide title="說出多常發生" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">頻率副詞</span>
          <span
            ><NoteMark sentence="We usually walked to school together." :marks="['usually']" /><span
              class="translation"
              >我們通常一起走路上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">every</span>
          <span
            ><NoteMark
              sentence="I phoned my grandmother every Sunday evening."
              :marks="['every Sunday evening']"
            /><span class="translation">我以前每個星期天晚上都打給奶奶。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去的狀態" mark="talked">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark
              sentence="When I was a child, I was very shy."
              :marks="['was very shy']"
            /><span class="translation">我小時候很害羞。</span></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="We had a dog called Rufus." :marks="['had']" /><span
              class="translation"
              >我們以前養過一隻叫 Rufus 的狗。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="頻率副詞放在動詞前面" mark="always talked">
      <NoteFix
        wrong="We talked always during class."
        right="We always talked during class."
        fix="always talked"
      />
    </NoteSlide>

    <NoteSlide title="過去的習慣用過去式" mark="talked">
      <NoteFix
        wrong="When I was a child, I always play outside."
        right="When I was a child, I always played outside."
        fix="played"
      />
    </NoteSlide>

    <NoteSlide title="不用 was used to" mark="talked">
      <NoteFix
        wrong="I was used to walk to school."
        right="I walked to school every day."
        fix="walked"
      />
    </NoteSlide>

    <NoteSlide title="every 前面不加介系詞" mark="always">
      <NoteFix
        wrong="We went to the beach in every summer."
        right="We went to the beach every summer."
        fix="every summer"
      />
    </NoteSlide>

    <NoteSlide title="一次的事和過去的習慣" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">一次</span>
          <span
            ><NoteMark sentence="We went to Spain last summer." :marks="['last summer']" /><span
              class="translation"
              >我們去年夏天去了西班牙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">習慣</span>
          <span
            ><NoteMark sentence="We went to Spain every summer." :marks="['every summer']" /><span
              class="translation"
              >我們以前每年夏天都去西班牙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去簡單式和 used to" mark="talked">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="I played the piano every day when I was young."
              :marks="['played', 'every day']"
            /><span class="translation">我小時候每天都彈鋼琴。</span></span
          >
        </div>
        <div>
          <span class="term">used to</span>
          <span
            ><NoteMark sentence="I used to play the piano." :marks="['used to play']" /><span
              class="translation"
              >我以前會彈鋼琴。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
