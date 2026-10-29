<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-supposed-to-obligation-expectation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + supposed to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have bought some disks, but', kind: 'dim' },
          { t: 'I don\'t know what', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'am', kind: 'key', ring: true },
          { t: 'supposed to', kind: 'key', ring: true },
          { t: 'do', role: '原形動詞' },
          { t: 'with them.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="be supposed to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be supposed to</span>
          <span>照規定、安排或期待，應該。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="規定和義務">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You're supposed to show your ticket at the door."
              :marks="[]"
            /><span class="translation">你應該在門口出示票。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="預期的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Travel is supposed to give us new experiences." :marks="[]" /><span
              class="translation"
              >旅行應該帶給我們新的經驗。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">be supposed to 也說一件事被期待會帶來的結果。</p>
    </NoteSlide>
    <NoteSlide title="what am I supposed to ...?">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What am I supposed to say to her?" :marks="[]" /><span
              class="translation"
              >我該跟她說什麼？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">What am I supposed to do? 表示不知道該怎麼辦，有時帶著不滿。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be supposed to，supposed 要有 -d" mark="supposed">
      <NoteFix
        wrong="You are suppose to wear a tie."
        right="You are supposed to wear a tie."
        :fix="['supposed']"
      />
    </NoteSlide>
    <NoteSlide title="supposed 前面要有 be 動詞" mark="supposed">
      <NoteFix
        wrong="We supposed to be there at eight."
        right="We are supposed to be there at eight."
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="疑問句裡，am 放在 I 前面" mark="am">
      <NoteFix
        wrong="What I am supposed to do?"
        right="What am I supposed to do?"
        :fix="['am', 'supposed']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
