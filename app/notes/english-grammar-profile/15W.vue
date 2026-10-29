<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-get-ed, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="get 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'my husband\'s car', role: '主詞' },
          { t: 'got', role: 'get', kind: 'key' },
          { t: 'stolen', role: '過去分詞', kind: 'key' },
          { t: 'from our garage.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我先生的車在我們家車庫被偷了。</p>
    </NoteSlide>

    <NoteSlide title="get 照時態變化" mark="got">
      <div class="rows is-labeled">
        <div>
          <span class="term">got</span>
          <span
            ><NoteMark sentence="My car got stolen." :marks="['got']" /><span class="translation"
              >我的車被偷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="I get paid every Friday." :marks="['get']" /><span
              class="translation"
              >我每個星期五領薪水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will get</span>
          <span
            ><NoteMark sentence="Be careful or you'll get hurt." :marks="['you\'ll get']" /><span
              class="translation"
              >小心點，不然你會受傷。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to get</span>
          <span
            ><NoteMark sentence="We want our staff to get trained." :marks="['to get']" /><span
              class="translation"
              >我們希望員工受到訓練。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get 口語，be 一般" mark="got stolen">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="The window got broken in the storm."
              :marks="['got broken']"
            /><span class="translation">窗戶在暴風雨中被打破了。</span></span
          >
        </div>
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark
              sentence="The window was replaced the next day."
              :marks="['was replaced']"
            /><span class="translation">窗戶隔天就換好了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get 後面接過去分詞" mark="stolen">
      <NoteFix
        wrong="My car got steal last week."
        right="My car got stolen last week."
        fix="stolen"
      />
    </NoteSlide>

    <NoteSlide title="get 取代 be，不再加 was" mark="got">
      <NoteFix wrong="My car was got stolen." right="My car got stolen." fix="got" />
    </NoteSlide>

    <NoteSlide title="否定用 didn't get" mark="got">
      <NoteFix
        wrong="I got not paid last month."
        right="I didn't get paid last month."
        fix="didn't get"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
