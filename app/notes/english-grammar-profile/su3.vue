<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-may-as-well, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may as well + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'may as well', kind: 'key', ring: true },
          { t: 'see', role: '原形動詞' },
          { t: 'the other things.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may as well、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">may as well</span>
          <span>乾脆、不如。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者覺得最合理的做法。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="沒有更好的選擇" mark="may as well">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The bus isn't coming. We may as well walk."
              :marks="['may as well']"
            /><span class="translation">公車不來了。我們不如走路吧。</span></span
          >
        </div>
      </div>
      <p class="remark">may as well 常用在沒有更好的選擇的時候。語氣不太熱情。</p>
    </NoteSlide>
    <NoteSlide title="告訴對方一件事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You may as well know the truth."
              :marks="['You may as well know']"
            /><span class="translation">你不如現在就知道真相。</span></span
          >
        </div>
      </div>
      <p class="remark">You may as well know 表示對方遲早會知道，不如現在就說出來。</p>
    </NoteSlide>
    <NoteSlide title="may as well 後面直接接原形動詞" mark="may as well">
      <NoteFix wrong="We may as well to go home." right="We may as well go home." :fix="['go']" />
    </NoteSlide>
    <NoteSlide title="這個說法的順序是 may as well" mark="may as well">
      <NoteFix
        wrong="You may well as take a seat."
        right="You may as well take a seat."
        :fix="['as', 'take']"
      />
    </NoteSlide>
    <NoteSlide title="may as well 後面接原形動詞" mark="may as well">
      <NoteFix wrong="I may as well buying two." right="I may as well buy two." :fix="['buy']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
