<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-negative-866, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="don't 放在 know 前面，know 用原形">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'don\'t', role: 'don\'t', kind: 'key', ring: true },
          { t: 'know', role: '原形動詞', kind: 'key' },
          { t: 'the place.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你不熟那個地方。</p>
    </NoteSlide>
    <NoteSlide title="主詞是單數用 doesn't" mark="don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't</span>
          <span
            ><NoteMark sentence="I don't eat meat." :marks="['don\'t']" /><span class="translation"
              >我不吃肉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">doesn't</span>
          <span
            ><NoteMark sentence="My brother doesn't like coffee." :marks="['doesn\'t']" /><span
              class="translation"
              >我哥哥不喜歡咖啡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 的否定句不用 don't，not 放在 be 後面" mark="don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'm not</span>
          <span
            ><NoteMark sentence="I'm not hungry." :marks="['I\'m', 'not']" /><span
              class="translation"
              >我不餓。</span
            ></span
          >
        </div>
        <div>
          <span class="term">isn't</span>
          <span
            ><NoteMark sentence="The shop isn't open on Sundays." :marks="['isn\'t']" /><span
              class="translation"
              >這家店星期天不營業。</span
            ></span
          >
        </div>
        <div>
          <span class="term">aren't</span>
          <span
            ><NoteMark sentence="My parents aren't at home." :marks="['aren\'t']" /><span
              class="translation"
              >我爸媽不在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="doesn't 後面的動詞不加 -s" mark="know">
      <NoteFix wrong="She doesn't likes fish." right="She doesn't like fish." :fix="['like']" />
    </NoteSlide>
    <NoteSlide title="單數名詞的主詞用 doesn't" mark="don't">
      <NoteFix
        wrong="My dad don't drink coffee."
        right="My dad doesn't drink coffee."
        :fix="['doesn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="not 不能直接放在動詞前面" mark="don't">
      <NoteFix wrong="I not like this song." right="I don't like this song." :fix="['don\'t']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
