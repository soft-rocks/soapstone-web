<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-temporary-situations-860, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it's raining 說的是窗外暫時的天氣">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'m in a hotel in the center of Madrid,', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'it\'s', role: '主詞 + be' },
          { t: 'raining', role: '動詞-ing', kind: 'key' },
          { t: 'a little bit.', kind: 'dim' },
        ]"
      />
      <p class="translation">我現在在馬德里市中心的一家飯店，外面正下著小雨。</p>
    </NoteSlide>
    <NoteSlide title="天氣、感受、安排和穿著都可以是暫時的" mark="raining">
      <div class="rows is-labeled">
        <div>
          <span class="term">天氣</span>
          <span
            ><NoteMark sentence="The sun is shining today." :marks="['shining']" /><span
              class="translation"
              >今天出太陽。</span
            ></span
          >
        </div>
        <div>
          <span class="term">感受</span>
          <span
            ><NoteMark sentence="I'm loving this job so far." :marks="['loving']" /><span
              class="translation"
              >到目前為止，我很喜歡這份工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">安排</span>
          <span
            ><NoteMark
              sentence="I'm covering for a colleague this week."
              :marks="['covering']"
            /><span class="translation">我這個星期在代一個同事的班。</span></span
          >
        </div>
        <div>
          <span class="term">外表</span>
          <span
            ><NoteMark sentence="You're looking tired today." :marks="['looking']" /><span
              class="translation"
              >你今天看起來很累。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">love、hate、look 用進行式時，說的是現在這段時間的感受或樣子。</p>
    </NoteSlide>
    <NoteSlide title="說話時的天氣是暫時的，用現在進行式" mark="raining">
      <NoteFix
        wrong="Take an umbrella. It rains outside."
        right="Take an umbrella. It's raining outside."
        :fix="['It\'s', 'raining']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式的 be 後面接動詞-ing" mark="raining">
      <NoteFix
        wrong="I'm enjoy my stay here."
        right="I'm enjoying my stay here."
        :fix="['enjoying']"
      />
    </NoteSlide>
    <NoteSlide title="只維持一個星期的安排，用現在進行式" mark="raining">
      <NoteFix
        wrong="This week I look after my neighbour's cat."
        right="This week I'm looking after my neighbour's cat."
        :fix="['I\'m', 'looking']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
