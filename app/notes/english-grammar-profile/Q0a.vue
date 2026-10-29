<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-none-substitution, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="none 代替名詞" mark="none.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'As for', kind: 'dim' },
          { t: 'disadvantages,', role: '前面的名詞', kind: 'key' },
          { t: 'I see', role: '肯定動詞' },
          { t: 'none.', role: '一個也沒有', kind: 'key' },
        ]"
      />
      <p class="translation">至於缺點，我看不出有什麼缺點。</p>
    </NoteSlide>

    <NoteSlide title="none 的位置" mark="none.">
      <div class="rows is-labeled">
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark
              sentence="I looked for a cheap hotel, but I found none."
              :marks="['found none.']"
            /><span class="translation">我想找便宜的旅館，可是一間也沒找到。</span></span
          >
        </div>
        <div>
          <span class="term">there was none</span>
          <span
            ><NoteMark
              sentence="We wanted some bread, but there was none left."
              :marks="['there was none']"
            /><span class="translation">我們想吃麵包，可是一點也不剩了。</span></span
          >
        </div>
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark sentence="I invited three friends. None came." :marks="['None']" /><span
              class="translation"
              >我邀了三個朋友，一個也沒來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">單獨回答</span>
          <span
            ><NoteMark sentence="Problems when using English? None." :marks="['None.']" /><span
              class="translation"
              >使用英文時有什麼問題嗎？沒有。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="可數和不可數名詞" mark="disadvantages,">
      <div class="rows is-labeled">
        <div>
          <span class="term">可數</span>
          <span
            ><NoteMark
              sentence="He asked for questions, but there were none."
              :marks="['questions,', 'none.']"
            /><span class="translation">他問大家有沒有問題，可是一個也沒有。</span></span
          >
        </div>
        <div>
          <span class="term">不可數</span>
          <span
            ><NoteMark
              sentence="I wanted some milk, but there was none in the fridge."
              :marks="['milk,', 'none']"
            /><span class="translation">我想喝牛奶，可是冰箱裡一點也沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞不加 not" mark="see">
      <NoteFix
        wrong="I looked for my keys, but I didn't find none."
        right="I looked for my keys, but I found none."
        fix="found"
      />
    </NoteSlide>

    <NoteSlide title="不接名詞時用 none" mark="none.">
      <NoteFix
        wrong="We needed eggs, but there were no."
        right="We needed eggs, but there were none."
        fix="none."
      />
    </NoteSlide>

    <NoteSlide title="代替名詞用 none" mark="none.">
      <NoteFix
        wrong="She asked for suggestions, but we had nothing."
        right="She asked for suggestions, but we had none."
        fix="none."
      />
    </NoteSlide>

    <NoteSlide title="none of + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'None of', kind: 'key' },
          { t: 'the students', role: '哪一群人' },
          { t: 'knew the answer.', kind: 'dim' },
        ]"
      />
      <p class="translation">沒有一個學生知道答案。</p>
    </NoteSlide>

    <NoteSlide title="not any + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There', kind: 'dim' },
          { t: 'aren\'t any', role: '口語', kind: 'key' },
          { t: 'tickets', role: '名詞' },
          { t: 'left.', kind: 'dim' },
        ]"
      />
      <p class="translation">票都賣完了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
