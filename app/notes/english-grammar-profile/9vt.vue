<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-used-not-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + used not to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'As a teenager I', role: '主詞' },
          { t: 'used not to', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'very sociable. I had few friends.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="used not to、原形動詞" mark="used">
      <div class="rows is-labeled">
        <div>
          <span class="term">used not to</span>
          <span>以前不常、以前不是。not 放在 used 和 to 中間。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>過去不做的事或過去不是的狀態。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在自傳和回憶" mark="used not to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I used not to do my homework, and I did badly at school."
              :marks="['used not to']"
            /><span class="translation">我以前不寫功課，在學校成績很差。</span></span
          >
        </div>
      </div>
      <p class="remark">自傳和回憶的文章常用 used not to 說自己過去的樣子。</p>
    </NoteSlide>
    <NoteSlide title="used not to 已經是否定，不再加 didn't" mark="used not to">
      <NoteFix
        wrong="I didn't used not to be very sociable."
        right="I used not to be very sociable."
        :fix="['used']"
      />
    </NoteSlide>
    <NoteSlide title="這個形式寫成 used，要有 -d" mark="used">
      <NoteFix wrong="She use not to eat meat." right="She used not to eat meat." :fix="['used']" />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix wrong="We used not to going out." right="We used not to go out." :fix="['go']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
