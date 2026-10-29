<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-this-with-noun-and-possessive, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 加名詞，再加 of 和所有格代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: 'this', kind: 'key' },
          { t: 'characteristic', role: '名詞' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'his', role: '所有格代名詞', kind: 'key' },
          { t: 'is shown', role: '動詞', kind: 'dim' },
          { t: 'in every situation.', role: '地方', kind: 'dim' },
        ]"
      />
      <p class="translation">他的這個特點在每個場合都看得出來。</p>
    </NoteSlide>

    <NoteSlide title="強調的說法" mark="This characteristic of his">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的說法</span>
          <span
            ><NoteMark
              sentence="His patience is shown in every situation."
              :marks="['His patience']"
            /><span class="translation">他的耐心表現在每一個場合。</span></span
          >
        </div>
        <div>
          <span class="term">強調的說法</span>
          <span
            ><NoteMark
              sentence="This patience of his is shown in every situation."
              :marks="['This patience of his']"
            /><span class="translation">他的這份耐心表現在每一個場合。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="讚美和不耐煩" mark="of his">
      <div class="rows is-labeled">
        <div>
          <span class="term">讚美</span>
          <span
            ><NoteMark
              sentence="This rare talent of theirs makes us all proud."
              :marks="['of theirs']"
            /><span class="translation">他們這種難得的天分讓我們都感到驕傲。</span></span
          >
        </div>
        <div>
          <span class="term">不耐煩</span>
          <span
            ><NoteMark sentence="This bad habit of yours has to stop." :marks="['of yours']" /><span
              class="translation"
              >你這個壞習慣一定要改。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用 his" mark="of his">
      <NoteFix
        wrong="This talent of him is amazing."
        right="This talent of his is amazing."
        fix="his"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞用 these" mark="of his">
      <NoteFix
        wrong="This ideas of yours are great."
        right="These ideas of yours are great."
        fix="These"
      />
    </NoteSlide>

    <NoteSlide title="his 移到後面" mark="This characteristic of his">
      <NoteFix
        wrong="This his talent is rare."
        right="This talent of his is rare."
        fix="talent of his"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
