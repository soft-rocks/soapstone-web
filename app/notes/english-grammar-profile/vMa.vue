<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-noun-phrases, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="quite 放在 a 前面，修飾整個名詞片語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It would be', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'quite', role: '程度副詞', kind: 'key' },
          { t: 'a formal meeting.', role: '名詞片語' },
        ]"
      />
      <p class="translation">那會是一場相當正式的會議。</p>
    </NoteSlide>

    <NoteSlide title="quite 後面也可以只接 a 加名詞" mark="quite a">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Winning the prize was', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'quite', role: '程度副詞', kind: 'key' },
          { t: 'a surprise.', role: '名詞片語' },
        ]"
      />
      <p class="translation">得獎真是一大驚喜。</p>
    </NoteSlide>

    <NoteSlide title="rather 放在 a 前面或後面都可以">
      <div class="rows is-labeled">
        <div>
          <span class="term">a 前面</span>
          <span
            ><NoteMark
              sentence="I live rather a long way from work."
              :marks="['rather a long way']"
            /><span class="translation">我住的地方離公司滿遠的。</span></span
          >
        </div>
        <div>
          <span class="term">a 後面</span>
          <span
            ><NoteMark
              sentence="She gave a rather short speech."
              :marks="['a rather short speech.']"
            /><span class="translation">她的致詞滿短的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="almost、nearly 加名詞片語，表示差一點就是">
      <div class="rows is-labeled">
        <div>
          <span class="term">almost</span>
          <span
            ><NoteMark
              sentence="After all, he is almost a human."
              :marks="['almost a human.']"
            /><span class="translation">畢竟牠幾乎就是個人了。</span></span
          >
        </div>
        <div>
          <span class="term">nearly</span>
          <span
            ><NoteMark
              sentence="The baby is nearly a year old now."
              :marks="['nearly a year']"
            /><span class="translation">寶寶現在快一歲了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 放在 a 前面，不放在 a 後面" mark="quite a">
      <NoteFix wrong="It was a quite good film." right="It was quite a good film." fix="quite a" />
    </NoteSlide>

    <NoteSlide title="very 放在 a 後面，修飾形容詞">
      <NoteFix wrong="It was very a hot day." right="It was a very hot day." fix="a very hot" />
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要有 a">
      <NoteFix
        wrong="We live rather long way from the station."
        right="We live rather a long way from the station."
        fix="rather a long way"
      />
    </NoteSlide>

    <NoteSlide title="表示差一點用 almost，不用 most">
      <NoteFix wrong="It took most an hour." right="It took almost an hour." fix="almost" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
