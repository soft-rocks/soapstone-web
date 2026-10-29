<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-preposition-no-article, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞 + 名詞，不加冠詞" mark="to college">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I go', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'to', role: '介系詞', kind: 'key' },
          { t: 'college', role: '名詞' },
          { t: 'every day.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我每天都去學校。</p>
    </NoteSlide>

    <NoteSlide title="常見的固定說法" mark="to college">
      <div class="rows is-labeled">
        <div>
          <span class="term">學校</span>
          <span>go to school、at school、go to college、at university</span>
        </div>
        <div>
          <span class="term">工作</span>
          <span>go to work、at work、from work</span>
        </div>
        <div>
          <span class="term">家</span>
          <span>at home、go home</span>
        </div>
        <div>
          <span class="term">床</span>
          <span>go to bed、in bed</span>
        </div>
        <div>
          <span class="term">交通工具</span>
          <span>by car、by bus、by train、on foot</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加了 the，說的是建築">
      <div class="rows is-labeled">
        <div>
          <span class="term">go to school</span>
          <span
            ><NoteMark sentence="My son goes to school by bus." :marks="['to school']" /><span
              class="translation"
              >我兒子搭公車上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">go to the school</span>
          <span
            ><NoteMark
              sentence="I went to the school to talk to his teacher."
              :marks="['to the school']"
            /><span class="translation">我去學校跟他的老師談話。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="go to bed 不加 the">
      <NoteFix wrong="I go to the bed at eleven." right="I go to bed at eleven." fix="to bed" />
    </NoteSlide>

    <NoteSlide title="by + 交通工具不加冠詞">
      <NoteFix
        wrong="We went to Paris by the train."
        right="We went to Paris by train."
        fix="by train."
      />
    </NoteSlide>

    <NoteSlide title="go home 不加 to">
      <NoteFix wrong="I go to home after school." right="I go home after school." fix="go home" />
    </NoteSlide>

    <NoteSlide title="走路說 on foot">
      <NoteFix wrong="I go to work by foot." right="I go to work on foot." fix="on foot." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
