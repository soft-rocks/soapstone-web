<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-past-continuous-affirmative, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="was 加 being，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'because', role: '連接詞', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'was', role: 'was / were' },
          { t: 'being', role: 'being', kind: 'key' },
          { t: 'redecorated.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">因為正在重新裝潢。</p>
    </NoteSlide>

    <NoteSlide title="when 和 while 接正在進行的事" mark="was being redecorated">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="We arrived when the room was being cleaned."
              :marks="['was being cleaned']"
            /><span class="translation">我們到的時候，房間正在打掃。</span></span
          >
        </div>
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark
              sentence="We stayed with friends while our car was being repaired."
              :marks="['was being repaired']"
            /><span class="translation">我們的車在修的時候，我們住在朋友家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="was being 正在進行，was 已經做完" mark="was being">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在進行</span>
          <span
            ><NoteMark
              sentence="The bridge was being built in 2010."
              :marks="['was being built']"
            /><span class="translation">2010 年那座橋正在蓋。</span></span
          >
        </div>
        <div>
          <span class="term">做完了</span>
          <span
            ><NoteMark sentence="The bridge was built in 2010." :marks="['was built']" /><span
              class="translation"
              >那座橋是 2010 年蓋的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用 was being，不用 was been" mark="being">
      <NoteFix
        wrong="We couldn't use the kitchen because it was been painted."
        right="We couldn't use the kitchen because it was being painted."
        fix="being"
      />
    </NoteSlide>

    <NoteSlide title="複數主詞用 were" mark="was being">
      <NoteFix
        wrong="The rooms was being cleaned when we arrived."
        right="The rooms were being cleaned when we arrived."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="being 後面接過去分詞" mark="redecorated">
      <NoteFix
        wrong="The car was being repairing."
        right="The car was being repaired."
        fix="repaired"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
