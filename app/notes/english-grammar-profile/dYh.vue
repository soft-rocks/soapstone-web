<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-questions-873, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="問 you 的看法，疑問詞後面接 do you">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'What', role: '疑問詞', kind: 'key' },
          { t: 'do', role: 'do', kind: 'key', ring: true },
          { t: 'you', role: '主詞', ring: true },
          { t: 'think', role: '原形動詞' },
          { t: 'about my mobile phone?', kind: 'dim' },
        ]"
      />
      <p class="translation">你覺得我的手機怎麼樣？</p>
    </NoteSlide>
    <NoteSlide title="是非問句用 Do you 開頭" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">是非</span>
          <span
            ><NoteMark sentence="Do you have a mobile phone?" :marks="['Do', 'you']" /><span
              class="translation"
              >你有手機嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">wh-</span>
          <span
            ><NoteMark sentence="Where do you live?" :marks="['Where', 'do', 'you']" /><span
              class="translation"
              >你住在哪裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回答用 do 或 don't，不重複動詞" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark sentence='"Do you like pizza?" "Yes, I do."' :marks="['do#2']" /><span
              class="translation"
              >「你喜歡披薩嗎？」「喜歡。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence='"Do you speak French?" "No, I don&apos;t."'
              :marks="['don\'t.&quot;']"
            /><span class="translation">「你會說法文嗎？」「不會。」</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 的問句不用 do" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="Are you hungry?" :marks="['Are', 'you']" /><span
              class="translation"
              >你餓了嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="疑問詞後面要有 do" mark="do">
      <NoteFix
        wrong="What you think about my phone?"
        right="What do you think about my phone?"
        :fix="['do']"
      />
    </NoteSlide>
    <NoteSlide title="do 放在 you 前面" mark="do">
      <NoteFix wrong="Where you do live?" right="Where do you live?" :fix="['do', 'you']" />
    </NoteSlide>
    <NoteSlide title="be 的問句用 are you" mark="do">
      <NoteFix wrong="Do you are tired?" right="Are you tired?" :fix="['Are', 'you']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
