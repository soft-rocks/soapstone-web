<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-noun-particle, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞受詞放在動詞和小品詞中間" mark="the computers">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Another way is to', kind: 'dim' },
          { t: 'turn', role: '動詞', kind: 'key' },
          { t: 'the computers', role: '名詞受詞', kind: 'key', ring: true },
          { t: 'off', role: '小品詞', kind: 'key' },
          { t: 'in the evenings.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">另一個辦法是晚上把電腦關掉。</p>
    </NoteSlide>

    <NoteSlide title="名詞受詞可以放在小品詞中間或後面" mark="the computers">
      <div class="rows is-labeled">
        <div>
          <span class="term">中間</span>
          <span
            ><NoteMark sentence="Turn the computers off." :marks="['the computers']" /><span
              class="translation"
              >把電腦關掉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark sentence="Turn off the computers." :marks="['the computers']" /><span
              class="translation"
              >把電腦關掉。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞很長時，放在小品詞後面" mark="the computers">
      <NoteMark
        sentence="Please turn off all the computers in the library and the classrooms."
        :marks="['off', 'all the computers']"
      />
      <p class="translation">請把圖書館和教室裡所有的電腦都關掉。</p>
    </NoteSlide>

    <NoteSlide title="take time off 的受詞只能放在中間" mark="the computers">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m going to', kind: 'dim' },
          { t: 'take', role: '動詞', kind: 'key' },
          { t: 'a week', role: '名詞受詞', kind: 'key', ring: true },
          { t: 'off.', role: '小品詞', kind: 'key' },
        ]"
      />
      <p class="translation">我要請一個星期的假。</p>
    </NoteSlide>

    <NoteSlide title="很長的受詞不放在動詞和小品詞中間" mark="off">
      <NoteFix
        wrong="She gave the books that she borrowed from the library last month back."
        right="She gave back the books that she borrowed from the library last month."
        fix="gave back"
      />
    </NoteSlide>

    <NoteSlide title="休假是 take time off，off 不能省略" mark="off">
      <NoteFix
        wrong="I'm glad you've decided to take some time."
        right="I'm glad you've decided to take some time off."
        fix="off"
      />
    </NoteSlide>

    <NoteSlide title="動詞在前面，名詞受詞在中間，小品詞在最後" mark="turn">
      <NoteFix
        wrong="We need to out work the problem."
        right="We need to work the problem out."
        fix="work the problem out"
      />
    </NoteSlide>

    <NoteSlide title="代名詞受詞只能放在動詞和小品詞中間" mark="the computers">
      <NoteFix wrong="Turn off them." right="Turn them off." fix="them" />
    </NoteSlide>

    <NoteSlide title="介系詞動詞的受詞只能放在介系詞後面" mark="the computers">
      <NoteMark sentence="We looked at the computers." :marks="['at', 'the computers']" />
      <p class="translation">我們看了那些電腦。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
