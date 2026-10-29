<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-postmodifying-with-adjective-phrase, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞後面接了介系詞片語，就放在名詞後面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We could go by boat to', kind: 'dim' },
          { t: 'a small island', role: '名詞' },
          { t: 'full of exotic birds.', role: '形容詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">我們可以搭船去一座小島，島上到處都是珍奇的鳥類。</p>
      <p class="remark">可以看成省略了 <code>which is</code>。</p>
    </NoteSlide>

    <NoteSlide title="形容詞片語由形容詞加介系詞片語或不定詞組成" mark="full of exotic birds">
      <div class="rows is-labeled">
        <div>
          <span class="term">full of</span>
          <span>a box full of old letters</span>
        </div>
        <div>
          <span class="term">famous for</span>
          <span>a town famous for its cheese</span>
        </div>
        <div>
          <span class="term">similar to</span>
          <span>a phone similar to mine</span>
        </div>
        <div>
          <span class="term">easy + to + 原形動詞</span>
          <span>a book easy to read</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞單獨一個時放在名詞前面" mark="full">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞單獨一個</span>
          <span><NoteMark sentence="a full box" :marks="['full']" /></span>
        </div>
        <div>
          <span class="term">形容詞 + of 片語</span>
          <span><NoteMark sentence="a box full of toys" :marks="['full of toys']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="整個形容詞片語放在名詞後面" mark="full of exotic birds">
      <NoteFix
        wrong="We stayed in a full of tourists hotel."
        right="We stayed in a hotel full of tourists."
        fix="full of tourists"
      />
    </NoteSlide>

    <NoteSlide title="full 後面要接 of" mark="of">
      <NoteFix
        wrong="I found a bag full old photos."
        right="I found a bag full of old photos."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="famous 後面接 for">
      <NoteFix
        wrong="It's a region famous of its wine."
        right="It's a region famous for its wine."
        fix="for"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
