<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-compound-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="用連字號把字連成一個形容詞" mark="good-looking">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He was', kind: 'dim' },
          { t: 'tall', role: '形容詞' },
          { t: 'and', kind: 'dim' },
          { t: 'good-looking.', role: '複合形容詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">他長得又高又帥。</p>
      <p class="remark"><code>good</code> 加 <code>looking</code>，意思是長得好看。</p>
    </NoteSlide>

    <NoteSlide title="常見的複合形容詞" mark="good-looking">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 / 副詞 + 動詞-ing</span>
          <span
            ><NoteMark sentence="She is a hard-working student." :marks="['hard-working']" /><span
              class="translation"
              >她是個很用功的學生。</span
            ></span
          >
        </div>
        <div>
          <span class="term">well + 過去分詞</span>
          <span
            ><NoteMark sentence="He is a well-known singer." :marks="['well-known']" /><span
              class="translation"
              >他是個有名的歌手。</span
            ></span
          >
        </div>
        <div>
          <span class="term">數字 + 名詞</span>
          <span
            ><NoteMark sentence="It's a ten-minute walk." :marks="['ten-minute']" /><span
              class="translation"
              >走路要十分鐘。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="數字後面的名詞用單數" mark="good-looking">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He has a', kind: 'dim' },
          { t: 'five-year-old', role: 'year 不加 -s', kind: 'key', ring: true },
          { t: 'son.', role: '名詞' },
        ]"
      />
      <p class="translation">他有一個五歲的兒子。</p>
    </NoteSlide>

    <NoteSlide title="複合形容詞裡的名詞不加 -s" mark="good-looking">
      <NoteFix
        wrong="It's a ten-minutes walk from here."
        right="It's a ten-minute walk from here."
        fix="ten-minute"
      />
    </NoteSlide>

    <NoteSlide title="放在名詞前面時要加連字號" mark="good-looking">
      <NoteFix
        wrong="She is a well known writer."
        right="She is a well-known writer."
        fix="well-known"
      />
    </NoteSlide>

    <NoteSlide title="good-looking 用動詞-ing" mark="good-looking">
      <NoteFix
        wrong="He is a good-looked man."
        right="He is a good-looking man."
        fix="good-looking"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
