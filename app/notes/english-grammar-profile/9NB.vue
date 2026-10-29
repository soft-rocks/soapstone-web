<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-declarative-with-have, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="haven't + 過去分詞，表示到現在還沒做" mark="haven't eaten">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t', role: 'have + not', kind: 'key', ring: true },
          { t: 'visited', role: '過去分詞', kind: 'key' },
          { t: 'my old school since I graduated.', kind: 'dim' },
        ]"
      />
      <p class="translation">我畢業以後就沒回過母校。</p>
    </NoteSlide>

    <NoteSlide title="haven't got 是沒有，hadn't 說過去以前的事" mark="haven't">
      <div class="rows is-labeled">
        <div>
          <span class="term">haven't got</span>
          <span
            ><NoteMark
              sentence="I haven't got any cash. Can I pay by card?"
              :marks="['haven\'t got']"
            /><span class="translation">我身上沒有現金，可以刷卡嗎？</span></span
          >
        </div>
        <div>
          <span class="term">hadn't</span>
          <span
            ><NoteMark
              sentence="We hadn't eaten all day, so we were very hungry."
              :marks="['hadn\'t eaten']"
            /><span class="translation">我們一整天沒吃東西，所以很餓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="haven't 後面用過去分詞" mark="eaten">
      <NoteFix
        wrong="We haven't saw the new film yet."
        right="We haven't seen the new film yet."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="單數名詞當主詞，用 hasn't" mark="haven't">
      <NoteFix
        wrong="The baby haven't slept all afternoon."
        right="The baby hasn't slept all afternoon."
        fix="hasn't"
      />
    </NoteSlide>

    <NoteSlide title="haven't got 後面用 any，不用 no" mark="haven't">
      <NoteFix
        wrong="We haven't got no bread for breakfast."
        right="We haven't got any bread for breakfast."
        fix="any"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
