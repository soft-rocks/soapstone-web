<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-that, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that + 單數動詞" mark="That was">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '單數', kind: 'key' },
          { t: 'was', role: '單數動詞', kind: 'key' },
          { t: 'amazing.', role: '形容詞' },
        ]"
      />
      <p class="translation">那真是太棒了。</p>
    </NoteSlide>

    <NoteSlide title="that 在句子裡的位置" mark="That">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="That is my sister's car." :marks="['That']" /><span
              class="translation"
              >那是我姊姊的車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="Can you pass me that, please?" :marks="['that,']" /><span
              class="translation"
              >可以把那個遞給我嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="We had a swim. After that, we went for a coffee."
              :marks="['After that,']"
            /><span class="translation">我們去游了泳，之後去喝咖啡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 和 those" mark="That was">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark sentence="That is my bag." :marks="['That is']" /><span class="translation"
              >那是我的包包。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="Those are my shoes." :marks="['Those are']" /><span
              class="translation"
              >那些是我的鞋子。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 接單數動詞" mark="was">
      <NoteFix
        wrong="That were the best day of my holiday."
        right="That was the best day of my holiday."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="一件事用 that" mark="That">
      <NoteFix
        wrong="We went on a boat trip. Those was really fun."
        right="We went on a boat trip. That was really fun."
        fix="That"
      />
    </NoteSlide>

    <NoteSlide title="that's 後面不再加動詞" mark="That was">
      <NoteFix wrong="That's was a lovely meal." right="That was a lovely meal." fix="That" />
    </NoteSlide>

    <NoteSlide title="that + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '限定詞', kind: 'key' },
          { t: 'song', role: '名詞' },
          { t: 'was amazing.', kind: 'dim' },
        ]"
      />
      <p class="translation">那首歌真好聽。</p>
    </NoteSlide>

    <NoteSlide title="再次提到用 it">
      <NoteWords
        :size="24"
        :parts="[
          { t: '&quot;Where\'s my phone?&quot;', kind: 'dim' },
          { t: '&quot;It\'s', role: '= 手機', kind: 'key' },
          { t: 'on the table.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">「我的手機在哪裡？」「在桌上。」</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
