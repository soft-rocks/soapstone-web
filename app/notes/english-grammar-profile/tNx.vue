<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-infinitive-715, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞後面接 not to be 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'an experience', role: '名詞', kind: 'dim' },
          { t: 'not', role: 'not', kind: 'key' },
          { t: 'to be', role: 'to be', kind: 'key' },
          { t: 'missed', role: '過去分詞' },
        ]"
      />
      <p class="translation">不容錯過的經驗</p>
    </NoteSlide>

    <NoteSlide title="前面可以接動詞、形容詞或名詞" mark="an experience">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark sentence="She deserves to be told the truth." :marks="['deserves']" /><span
              class="translation"
              >她應該知道真相。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be supposed to</span>
          <span
            ><NoteMark
              sentence="Some training is supposed to be given."
              :marks="['is supposed']"
            /><span class="translation">應該會有一些訓練。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="My essay was ready to be printed." :marks="['ready']" /><span
              class="translation"
              >我的作文可以印了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="It's an experience not to be missed."
              :marks="['an experience']"
            /><span class="translation">這是不容錯過的經驗。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面接 be，不加 to" mark="to be">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The new houses', role: '主詞', kind: 'dim' },
          { t: 'might not', role: '情態動詞 + not', kind: 'key' },
          { t: 'be built', role: 'be + 過去分詞' },
          { t: 'of brick.', role: '材料', kind: 'dim' },
        ]"
      />
      <p class="translation">新房子可能不會用磚頭蓋。</p>
    </NoteSlide>

    <NoteSlide title="否定不定詞，和否定前面的動詞" mark="not to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定不定詞</span>
          <span
            ><NoteMark sentence="I asked not to be disturbed." :marks="['not to be']" /><span
              class="translation"
              >我說不要打擾我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定前面的動詞</span>
          <span
            ><NoteMark sentence="I didn't ask to be woken up." :marks="['didn\'t ask']" /><span
              class="translation"
              >我沒有說要叫醒我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞後面的被動不定詞要有 to" mark="not to be">
      <NoteFix
        wrong="It is an experience not be missed."
        right="It is an experience not to be missed."
        fix="not to be"
      />
    </NoteSlide>

    <NoteSlide title="被動不定詞要有 be" mark="be">
      <NoteFix
        wrong="My essay was ready to printed."
        right="My essay was ready to be printed."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形 be" mark="be">
      <NoteFix
        wrong="Some training is supposed to been given."
        right="Some training is supposed to be given."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="to be">
      <NoteFix
        wrong="The houses might not to be built."
        right="The houses might not be built."
        fix="not be"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
