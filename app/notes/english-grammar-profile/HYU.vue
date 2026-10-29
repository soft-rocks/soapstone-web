<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// not-only-inversion, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only 放在句首，第一個子句倒裝" mark="Not only was he">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Not only', role: 'not only', kind: 'dim' },
          { t: 'did he', role: '助動詞 + 主詞', kind: 'key', ring: true },
          { t: 'pass,', role: '原形動詞', kind: 'key' },
          { t: 'but he also got the top mark.', role: '不倒裝', kind: 'dim' },
        ]"
      />
      <p class="translation">他不但及格了，還拿了最高分。</p>
    </NoteSlide>

    <NoteSlide title="be、助動詞、did 放在主詞前面" mark="was he">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark
              sentence="We won't rent the flat on King Street. Not only is it small, but it's also very dark."
              :marks="['is it']"
            /><span class="translation">我們不會租國王街那間公寓。它不但小，還很暗。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞</span>
          <span
            ><NoteMark
              sentence="Give Lily the main part in the school show. Not only can she sing, but she can also dance."
              :marks="['can she']"
            /><span class="translation"
              >讓莉莉演學校表演的主角。她不但會唱歌，還會跳舞。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般動詞加 do / did</span>
          <span
            ><NoteMark
              sentence="My grandma never buys clothes. Not only does she knit, but she also sews her own dresses."
              :marks="['does she knit']"
            /><span class="translation"
              >我奶奶從來不買衣服。她不但會織毛線，還自己縫洋裝。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not only 在句首時要倒裝" mark="was he">
      <NoteFix
        wrong="Not only she was tired, but she also had a headache."
        right="Not only was she tired, but she also had a headache."
        fix="was she"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞要加 did，動詞用原形" mark="Not only">
      <NoteFix
        wrong="Not only came they early, but they also helped."
        right="Not only did they come early, but they also helped."
        fix="did they come"
      />
    </NoteSlide>

    <NoteSlide title="but 後面的子句不倒裝" mark="but the students">
      <NoteFix
        wrong="Not only is it cheap, but also is it fast."
        right="Not only is it cheap, but it is also fast."
        fix="it is also"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
