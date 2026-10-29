<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-with-really, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="really 放在主詞和動詞中間，加強 want">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'really', role: 'really', kind: 'key', ring: true },
          { t: 'want', role: '動詞', kind: 'key' },
          { t: 'to see you.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我真的很想見你。</p>
    </NoteSlide>
    <NoteSlide title="really 不影響動詞的 -s" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark sentence="I really like my new teacher." :marks="['really', 'like']" /><span
              class="translation"
              >我真的很喜歡我的新老師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">she</span>
          <span
            ><NoteMark
              sentence="She really wants to be a doctor."
              :marks="['really', 'wants']"
            /><span class="translation">她真的很想當醫生。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="really 放在 don't 前面或後面，意思不同" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't really</span>
          <span
            ><NoteMark sentence="I don't really like fish." :marks="['don\'t', 'really']" /><span
              class="translation"
              >我不太喜歡魚。</span
            ></span
          >
        </div>
        <div>
          <span class="term">really don't</span>
          <span
            ><NoteMark sentence="I really don't like fish." :marks="['really', 'don\'t']" /><span
              class="translation"
              >我真的很不喜歡魚。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 的句子，really 放在 be 後面" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="The film is really good." :marks="['is', 'really']" /><span
              class="translation"
              >這部電影真的很好看。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="really 放在動詞前面" mark="really">
      <NoteFix
        wrong="I like really this song."
        right="I really like this song."
        :fix="['really', 'like']"
      />
    </NoteSlide>
    <NoteSlide title="加強動詞用 really，不用 very" mark="really">
      <NoteFix wrong="I very like this city." right="I really like this city." :fix="['really']" />
    </NoteSlide>
    <NoteSlide title="real 是形容詞，動詞前面用 really" mark="really">
      <NoteFix
        wrong="We real need your help."
        right="We really need your help."
        :fix="['really']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
