<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-get-reflexive-pronoun-ed, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="get 加反身代名詞，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'could', role: '情態動詞', kind: 'dim' },
          { t: 'get', role: 'get' },
          { t: 'yourself', role: '反身代名詞', kind: 'key' },
          { t: 'killed', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">你可能會害死自己。</p>
    </NoteSlide>

    <NoteSlide title="反身代名詞照主詞選" mark="yourself">
      <div class="rows is-labeled">
        <div>
          <span class="term">you</span>
          <span
            ><NoteMark sentence="You'll get yourself hurt." :marks="['yourself']" /><span
              class="translation"
              >你會把自己弄傷。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he</span>
          <span
            ><NoteMark sentence="My cousin got himself arrested." :marks="['himself']" /><span
              class="translation"
              >我表哥被警察抓了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">we</span>
          <span
            ><NoteMark
              sentence="We got ourselves lost in the old town."
              :marks="['ourselves']"
            /><span class="translation">我們在舊城區把自己搞丟了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加反身代名詞，強調是自己造成的" mark="get yourself killed">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="He got hurt." :marks="['got hurt']" /><span class="translation"
              >他受傷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get + 反身代名詞</span>
          <span
            ><NoteMark sentence="He got himself hurt." :marks="['got himself hurt']" /><span
              class="translation"
              >他把自己弄傷了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="反身代名詞和主詞要一致" mark="yourself">
      <NoteFix wrong="He got yourself arrested." right="He got himself arrested." fix="himself" />
    </NoteSlide>

    <NoteSlide title="用反身代名詞，不用受格" mark="yourself">
      <NoteFix
        wrong="You could get you killed."
        right="You could get yourself killed."
        fix="yourself"
      />
    </NoteSlide>

    <NoteSlide title="反身代名詞後面接過去分詞" mark="killed">
      <NoteFix
        wrong="She got herself involve in the fight."
        right="She got herself involved in the fight."
        fix="involved"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
