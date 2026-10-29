<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-degree-adjectives-before-nouns, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="real、absolute、complete、total 加強名詞的語氣" mark="complete darkness">
      <div class="rows is-labeled">
        <div>
          <span class="term">real</span>
          <span
            ><NoteMark
              sentence="Parking is a real problem in this town."
              :marks="['real problem']"
            /><span class="translation">停車在這個鎮上是個很大的問題。</span></span
          >
        </div>
        <div>
          <span class="term">absolute</span>
          <span
            ><NoteMark
              sentence="Tom says cats can't swim. That's absolute nonsense."
              :marks="['absolute nonsense']"
            /><span class="translation">湯姆說貓不會游泳。那完全是胡說八道。</span></span
          >
        </div>
        <div>
          <span class="term">total</span>
          <span
            ><NoteMark
              sentence="Grandma is coming in an hour, and your bedroom is a total mess!"
              :marks="['total mess']"
            /><span class="translation">奶奶一個小時後就到了，你的臥室還亂七八糟！</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞前面不加 a" mark="complete darkness">
      <NoteMark
        sentence="During the power cut, the street was in complete darkness."
        :marks="['complete darkness']"
      />
      <p class="translation">停電的時候，整條街一片漆黑。</p>
    </NoteSlide>

    <NoteSlide title="complete 放在 be 後面時，意思是完成的" mark="complete">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞前面</span>
          <span
            ><NoteMark
              sentence="Her visit was a complete surprise to us."
              :marks="['complete surprise']"
            /><span class="translation">她來看我們，完全出乎我們的意料。</span></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="The work is complete." :marks="['is complete']" /><span
              class="translation"
              >工作完成了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾名詞要用形容詞" mark="complete">
      <NoteFix
        wrong="There was absolutely silence in the room."
        right="There was absolute silence in the room."
        fix="absolute"
      />
    </NoteSlide>

    <NoteSlide title="darkness 前面不加 a" mark="in complete darkness">
      <NoteFix
        wrong="We sat in a complete darkness."
        right="We sat in complete darkness."
        fix="in complete"
      />
    </NoteSlide>

    <NoteSlide title="加強語氣的 total 要放在名詞前面" mark="complete darkness">
      <NoteFix
        wrong="The party was total."
        right="The party was a total success."
        fix="a total success"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
