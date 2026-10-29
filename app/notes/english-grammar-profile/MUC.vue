<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-yet-concessive, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句 + , and yet + 子句" mark="and yet">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'This college is famous for its art teachers,', role: '子句 + 逗號', kind: 'dim' },
          { t: 'and yet', role: '連接詞', kind: 'key' },
          { t: 'it does not have its own gallery.', role: '子句' },
        ]"
      />
      <p class="translation">這所學院以美術老師出名，但它卻沒有自己的展覽館。</p>
    </NoteSlide>

    <NoteSlide title="連接子句，也連接形容詞" mark="yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">子句</span>
          <span
            ><NoteMark
              sentence="The host family was carefully selected, yet it was four miles away from school."
              :marks="['yet']"
            /><span class="translation">寄宿家庭是仔細挑過的，卻離學校四英里遠。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The design is simple yet elegant."
              :marks="['simple yet elegant.']"
            /><span class="translation">這個設計簡單卻高雅。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="yet 和 but" mark="yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">but</span>
          <span>口語和書面語都用，可以接在 not 後面</span>
        </div>
        <div>
          <span class="term">yet</span>
          <span>比較正式，強調出乎意料</span>
        </div>
        <div>
          <span class="term">and yet</span>
          <span>可以這樣用，and but 不行</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="連接詞 yet 和副詞 yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">連接詞</span>
          <span
            ><NoteMark sentence="It was late, yet nobody wanted to leave." :marks="['yet']" /><span
              class="translation"
              >已經很晚了，卻沒有人想走。</span
            ></span
          >
        </div>
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark sentence="I haven't finished my homework yet." :marks="['yet.']" /><span
              class="translation"
              >我還沒寫完功課。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 後面接 yet，不接 but" mark="and yet">
      <NoteFix
        wrong="The room was small, and but it was very comfortable."
        right="The room was small, and yet it was very comfortable."
        fix="and yet"
      />
    </NoteSlide>

    <NoteSlide title="yet 後面不再加 but" mark="yet">
      <NoteFix
        wrong="He was tired, yet but he kept working."
        right="He was tired, yet he kept working."
        fix="yet he"
      />
    </NoteSlide>

    <NoteSlide title="表示更正用 not A but B">
      <NoteFix
        wrong="The meeting is not on Monday yet on Tuesday."
        right="The meeting is not on Monday but on Tuesday."
        fix="but"
      />
    </NoteSlide>

    <NoteSlide title="形容詞之間不加逗號">
      <NoteFix
        wrong="The hotel was cheap, yet clean."
        right="The hotel was cheap yet clean."
        fix="cheap yet"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
