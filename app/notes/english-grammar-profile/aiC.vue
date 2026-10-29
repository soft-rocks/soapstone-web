<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-linking-verbs-adjective, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="連綴動詞後面的形容詞說明主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The color blue', role: '主詞' },
          { t: 'always', role: '頻率副詞', kind: 'dim' },
          { t: 'looks', role: '連綴動詞', kind: 'key' },
          { t: 'fresh.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">藍色看起來總是很清新。</p>
      <p class="remark"><code>fresh</code> 說的是藍色，不是看這個動作。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞說感官、變化或狀態" mark="looks">
      <div class="rows is-labeled">
        <div>
          <span class="term">感官</span>
          <span
            ><NoteMark sentence="This soup smells delicious." :marks="['smells']" /><span
              class="translation"
              >這碗湯聞起來好香。</span
            ></span
          >
        </div>
        <div>
          <span class="term">變化</span>
          <span
            ><NoteMark sentence="It's getting dark." :marks="['getting']" /><span
              class="translation"
              >天快黑了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">狀態</span>
          <span
            ><NoteMark sentence="Please keep quiet." :marks="['keep']" /><span class="translation"
              >請保持安靜。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 後面接受詞，再接連綴動詞和形容詞" mark="looks">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'makes', role: 'make' },
          { t: 'me', role: '受詞' },
          { t: 'feel', role: '連綴動詞', kind: 'key' },
          { t: 'comfortable.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">它讓我覺得很舒服。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞後面用形容詞，不用副詞" mark="fresh">
      <NoteFix
        wrong="This cake tastes wonderfully."
        right="This cake tastes wonderful."
        fix="wonderful"
      />
    </NoteSlide>

    <NoteSlide title="look 接形容詞，look like 接名詞" mark="looks">
      <NoteFix wrong="You look like tired." right="You look tired." fix="look" />
    </NoteSlide>

    <NoteSlide title="連綴動詞前面不再加 be 動詞" mark="looks">
      <NoteFix wrong="The music is sounds great." right="The music sounds great." fix="sounds" />
    </NoteSlide>

    <NoteSlide title="現在簡單式的連綴動詞照主詞變化" mark="looks">
      <NoteFix wrong="This room feel cold." right="This room feels cold." fix="feels" />
    </NoteSlide>

    <NoteSlide title="look 的意思是看時是一般動詞，後面用副詞" mark="looks">
      <div class="rows is-labeled">
        <div>
          <span class="term">連綴動詞<br /><i>看起來</i></span>
          <span
            ><NoteMark sentence="You look tired." :marks="['look', 'tired']" /><span
              class="translation"
              >你看起來很累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般動詞<br /><i>看</i></span>
          <span
            ><NoteMark
              sentence="She looked carefully at the photo."
              :marks="['looked', 'carefully']"
            /><span class="translation">她仔細看了那張照片。</span></span
          >
        </div>
        <div>
          <span class="term">look like<br /><i>像</i></span>
          <span
            ><NoteMark sentence="You look like your mother." :marks="['look like']" /><span
              class="translation"
              >你長得像你媽媽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
