<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-verbs-of-senses-object-infinitive, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="感官動詞的受詞後面接原形動詞，不加 to">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It is very common in Argentina', kind: 'dim' },
          { t: 'to hear', role: '感官動詞', kind: 'key' },
          { t: 'people', role: '受詞' },
          { t: 'talk', role: '原形動詞', kind: 'key' },
          { t: 'about the economic depression.', kind: 'dim' },
        ]"
      />
      <p class="translation">在阿根廷，常常會聽到大家在談經濟蕭條。</p>
    </NoteSlide>

    <NoteSlide title="原形動詞說整個動作，從開始到結束" mark="talk">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'saw', role: '感官動詞' },
          { t: 'her', role: '受詞' },
          { t: 'get into', role: '整個動作', kind: 'key', ring: true },
          { t: 'a taxi.', kind: 'dim' },
        ]"
      />
      <p class="translation">我看到她上了計程車。</p>
      <p class="remark">她走過去，打開門，坐進去。</p>
    </NoteSlide>

    <NoteSlide title="被動句的原形動詞前面要加 to" mark="hear">
      <div class="rows is-labeled">
        <div>
          <span class="term">主動</span>
          <span
            ><NoteMark sentence="We saw him leave the building." :marks="['him', 'leave']" /><span
              class="translation"
              >我們看到他離開了大樓。</span
            ></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="He was seen to leave the building."
              :marks="['He', 'to leave']"
            /><span class="translation">有人看到他離開了大樓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主動句的受詞直接接原形動詞" mark="talk">
      <NoteFix
        wrong="I heard her to sing in the next room."
        right="I heard her sing in the next room."
        fix="sing"
      />
    </NoteSlide>

    <NoteSlide title="時態只標在感官動詞上" mark="hear">
      <NoteFix wrong="We watched the plane landed." right="We watched the plane land." fix="land" />
    </NoteSlide>

    <NoteSlide title="感官動詞後面的代名詞用受格" mark="people">
      <NoteFix
        wrong="Did you see he take the money?"
        right="Did you see him take the money?"
        fix="him"
      />
    </NoteSlide>

    <NoteSlide title="被動句的 to 不能省略" mark="talk">
      <NoteFix
        wrong="She was heard leave the house at midnight."
        right="She was heard to leave the house at midnight."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="動詞-ing 說正在進行的事" mark="talk">
      <NoteMark
        sentence="From the window I saw my neighbour painting his fence."
        :marks="['painting']"
      />
      <p class="translation">我從窗戶看到鄰居正在油漆他家的圍籬。</p>
    </NoteSlide>

    <NoteSlide title="make 和 let 後面也接原形動詞，但不是感官動詞" mark="talk">
      <NoteMark sentence="My boss let me leave early on Friday." :marks="['let', 'leave']" />
      <p class="translation">我老闆讓我星期五提早走。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
