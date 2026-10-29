<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-wishes-and-preferences, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would prefer + to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'would prefer', kind: 'key', ring: true },
          { t: 'to', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'on Sunday, because on Sunday I have no school.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would prefer、would love、would rather" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">would prefer</span>
          <span>比較想要。</span>
        </div>
        <div>
          <span class="term">would love</span>
          <span>很想要。</span>
        </div>
        <div>
          <span class="term">would rather</span>
          <span>寧願。後面直接接原形動詞，不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would rather 不加 to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd rather stay at home." :marks="[]" /><span class="translation"
              >我寧願待在家裡。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would rather 後面直接接原形動詞。</p>
    </NoteSlide>
    <NoteSlide title="熱情地回應">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Bring your new CD! I'd love to hear it!"
              :marks="['I\'d love to']"
            /><span class="translation">帶你的新 CD 來！我很想聽！</span></span
          >
        </div>
      </div>
      <p class="remark">I'd love to 常用來熱情地接受邀請或請求。</p>
    </NoteSlide>
    <NoteSlide title="would rather 後面直接接原形動詞">
      <NoteFix wrong="I'd rather to walk." right="I'd rather walk." :fix="['walk.']" />
    </NoteSlide>
    <NoteSlide title="would prefer 後面接動詞時要加 to" mark="would prefer">
      <NoteFix wrong="I'd prefer go tomorrow." right="I'd prefer to go tomorrow." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix wrong="She would loves to come." right="She would love to come." :fix="['love']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
