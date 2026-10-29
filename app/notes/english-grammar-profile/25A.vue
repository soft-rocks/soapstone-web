<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-these-already-mentioned, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these 指剛說過的事物" mark="these are">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'clever and generous,', role: '剛說過的事物' },
          { t: 'and', kind: 'dim' },
          { t: 'these', role: '複數', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'the things …', kind: 'dim' },
        ]"
      />
      <p class="translation">他很聰明又很大方，這些就是我最喜歡他的地方。</p>
    </NoteSlide>

    <NoteSlide title="these 指什麼" mark="these">
      <div class="rows is-labeled">
        <div>
          <span class="term">列出的事</span>
          <span
            ><NoteMark
              sentence="She sings and plays the guitar. These are her hobbies."
              :marks="['These']"
            /><span class="translation">她會唱歌又會彈吉他。這些是她的嗜好。</span></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="I watch The Simpsons and Friends. These are my favourites."
              :marks="['These']"
            /><span class="translation"
              >我看《辛普森家庭》和《六人行》。這些是我最喜歡的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">things like these</span>
          <span
            ><NoteMark
              sentence="Old films and jazz? I love things like these."
              :marks="['things like these.']"
            /><span class="translation">老電影和爵士樂？我很喜歡這類東西。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="these 和 those">
      <NoteWords
        :size="24"
        :parts="[
          { t: '&quot;… old paintings.&quot;', role: '對方說的', kind: 'dim' },
          { t: '&quot;… I don\'t paint', kind: 'dim' },
          { t: 'those', role: '比較早的', kind: 'key' },
          { t: 'any more.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">「我很喜歡你以前的畫。」「謝謝，不過我已經不畫那樣的畫了。」</p>
    </NoteSlide>

    <NoteSlide title="好幾件事用 these" mark="these">
      <NoteFix
        wrong="She is honest and kind. This are the reasons I hired her."
        right="She is honest and kind. These are the reasons I hired her."
        fix="These"
      />
    </NoteSlide>

    <NoteSlide title="these 的動詞用複數" mark="are">
      <NoteFix
        wrong="I've made three rules. These is very important."
        right="I've made three rules. These are very important."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="做總結用 these" mark="these">
      <NoteFix
        wrong="Be on time and bring a pen. They are the only rules."
        right="Be on time and bring a pen. These are the only rules."
        fix="These"
      />
    </NoteSlide>

    <NoteSlide title="these + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'These', role: '限定詞', kind: 'key' },
          { t: 'shoes', role: '名詞' },
          { t: 'hurt my feet.', kind: 'dim' },
        ]"
      />
      <p class="translation">這雙鞋子穿得我腳很痛。</p>
    </NoteSlide>

    <NoteSlide title="the following：指後面的事物">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You will need', kind: 'dim' },
          { t: 'the following:', role: '後面才列出', kind: 'key' },
          { t: 'a pen, a ruler …', kind: 'dim' },
        ]"
      />
      <p class="translation">你會需要以下的東西：一支筆、一把尺和一台計算機。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
