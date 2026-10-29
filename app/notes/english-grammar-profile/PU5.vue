<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-one-more-with-another, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a week，再 another week" mark="another week">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I spent', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'a week', role: '前面的一個' },
          { t: 'in Dubai, and I am going to spend', role: '地點 + 第二個子句', kind: 'dim' },
          { t: 'another week', role: '再一個', kind: 'key' },
          { t: 'in Al Ain.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我在杜拜待了一個星期，接下來還要在艾因再待一個星期。</p>
    </NoteSlide>

    <NoteSlide title="another + 數字 + 複數名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">another two</span>
          <span
            ><NoteMark sentence="We need another two chairs." :marks="['another two chairs.']" /><span
              class="translation"
              >我們還需要兩張椅子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">another three</span>
          <span
            ><NoteMark
              sentence="The trip takes another three hours by bus."
              :marks="['another three hours']"
            /><span class="translation">搭公車還要再三個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="another reason、another thing">
      <div class="rows is-labeled">
        <div>
          <span class="term">another reason</span>
          <span
            ><NoteMark
              sentence="Another reason is that the rent is cheap."
              :marks="['Another reason']"
            /><span class="translation">另一個原因是房租便宜。</span></span
          >
        </div>
        <div>
          <span class="term">another thing</span>
          <span
            ><NoteMark
              sentence="Another thing I like about my job is the people."
              :marks="['Another thing']"
            /><span class="translation">我喜歡這份工作的另一點是同事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="再一個用 another" mark="another week">
      <NoteFix
        wrong="I'm going to stay for other week."
        right="I'm going to stay for another week."
        fix="another week."
      />
    </NoteSlide>

    <NoteSlide title="接複數名詞要有數字">
      <NoteFix wrong="We need another chairs." right="We need another two chairs." fix="another two" />
    </NoteSlide>

    <NoteSlide title="another 不再加 more">
      <NoteFix
        wrong="Can I have another more cookie?"
        right="Can I have another cookie?"
        fix="another cookie?"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞加 slice of">
      <NoteFix
        wrong="Can I have another bread?"
        right="Can I have another slice of bread?"
        fix="another slice of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
