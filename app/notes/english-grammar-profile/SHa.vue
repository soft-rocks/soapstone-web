<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-determiner-of-determiner-346, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量限定詞加 of 再加限定詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'none', role: '數量限定詞', kind: 'key' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'the', role: '限定詞' },
          { t: 'stores', role: '名詞' },
          { t: 'had it.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">每家店都沒有。</p>
    </NoteSlide>

    <NoteSlide title="常用的數量限定詞" mark="none of">
      <div class="rows is-labeled">
        <div>
          <span class="term">none of</span>
          <span
            ><NoteMark sentence="None of the stores had it." :marks="['None of']" /><span
              class="translation"
              >每家店都沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">half of</span>
          <span
            ><NoteMark
              sentence="Spend half of your holiday with your parents."
              :marks="['half of']"
            /><span class="translation">假期花一半的時間陪爸媽。</span></span
          >
        </div>
        <div>
          <span class="term">enough of</span>
          <span
            ><NoteMark sentence="That's enough of my news!" :marks="['enough of']" /><span
              class="translation"
              >我的近況就說到這裡！</span
            ></span
          >
        </div>
        <div>
          <span class="term">one of</span>
          <span
            ><NoteMark sentence="One of my teachers is from Canada." :marks="['One of']" /><span
              class="translation"
              >我的一個老師是加拿大人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有限定詞才加 of" mark="the">
      <div class="rows is-labeled">
        <div>
          <span class="term">哪一群</span>
          <span
            ><NoteMark sentence="Most of the students passed." :marks="['Most of the']" /><span
              class="translation"
              >那些學生大部分都過了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般的人</span>
          <span
            ><NoteMark sentence="Most students like holidays." :marks="['Most']" /><span
              class="translation"
              >大部分學生都喜歡放假。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="接限定詞要加 of" mark="none of">
      <NoteFix wrong="None the stores had it." right="None of the stores had it." fix="None of" />
    </NoteSlide>

    <NoteSlide title="of 後面要有限定詞" mark="the">
      <NoteFix
        wrong="Most of students passed the test."
        right="Most of the students passed the test."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="none 不再加 not" mark="none">
      <NoteFix
        wrong="None of my friends didn't come."
        right="None of my friends came."
        fix="came"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
