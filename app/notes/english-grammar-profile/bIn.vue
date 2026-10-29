<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-negative-questions-opinion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Doesn't it 開頭，希望朋友也覺得有意思">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'Doesn\'t', role: 'Doesn\'t', kind: 'key', ring: true },
          { t: 'it', role: '主詞' },
          { t: 'sound', role: '原形動詞', kind: 'key' },
          { t: 'fascinating?', role: '形容詞', kind: 'dim' },
        ]"
      />
      <p class="translation">聽起來不是很有意思嗎？</p>
    </NoteSlide>
    <NoteSlide title="複數主詞用 don't，be 的句子用 isn't" mark="Doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">doesn't</span>
          <span
            ><NoteMark sentence="Doesn't she look happy?" :marks="['Doesn\'t']" /><span
              class="translation"
              >她看起來不是很開心嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">don't</span>
          <span
            ><NoteMark sentence="Don't we all like presents?" :marks="['Don\'t']" /><span
              class="translation"
              >我們不是都喜歡收禮物嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">isn't</span>
          <span
            ><NoteMark sentence="Isn't the view beautiful?" :marks="['Isn\'t']" /><span
              class="translation"
              >景色不是很美嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="yes 和 no 照事實回答" mark="Doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">yes</span>
          <span
            ><NoteMark
              sentence='"Doesn&apos;t it sound great?" "Yes, it does."'
              :marks="['Yes, it does.&quot;']"
            /><span class="translation">「聽起來不是很棒嗎？」「對啊。」</span></span
          >
        </div>
        <div>
          <span class="term">no</span>
          <span
            ><NoteMark
              sentence='"Isn&apos;t the film too long?" "No, I liked every minute."'
              :marks="['No,']"
            /><span class="translation"
              >「這部電影不會太長嗎？」「不會，我每一分鐘都很喜歡。」</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="doesn't 後面的動詞用原形" mark="sound">
      <NoteFix
        wrong="Doesn't it sounds fascinating?"
        right="Doesn't it sound fascinating?"
        :fix="['sound']"
      />
    </NoteSlide>
    <NoteSlide title="the flowers 是複數，用 don't" mark="Doesn't">
      <NoteFix
        wrong="Doesn't the flowers smell lovely?"
        right="Don't the flowers smell lovely?"
        :fix="['Don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="be 的句子用 isn't" mark="Doesn't">
      <NoteFix
        wrong="Doesn't the view beautiful?"
        right="Isn't the view beautiful?"
        :fix="['Isn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
