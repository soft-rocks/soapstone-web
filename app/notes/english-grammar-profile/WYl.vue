<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-adjectives-with-prefix-a, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a- 形容詞放在 be 或連綴動詞後面" mark="was alone">
      <div class="rows is-labeled">
        <div>
          <span class="term">be + asleep</span>
          <span
            ><NoteMark sentence="Be quiet. The baby is asleep." :marks="['is asleep']" /><span
              class="translation"
              >小聲一點，寶寶睡著了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">fall + asleep</span>
          <span
            ><NoteMark
              sentence="He fell asleep in front of the TV."
              :marks="['fell asleep']"
            /><span class="translation">他在電視前面睡著了。</span></span
          >
        </div>
        <div>
          <span class="term">stay + awake</span>
          <span
            ><NoteMark sentence="Drink some coffee to stay awake." :marks="['stay awake']" /><span
              class="translation"
              >喝點咖啡保持清醒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在名詞前面時，換一個字" mark="alone">
      <div class="rows is-labeled">
        <div>
          <span class="term">asleep → sleeping</span>
          <span
            ><NoteMark
              sentence="Be quiet. There's a sleeping baby in the next room."
              :marks="['sleeping baby']"
            /><span class="translation">小聲一點，隔壁房間有個寶寶在睡覺。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="alone 是一個人，lonely 是覺得寂寞" mark="alone">
      <NoteMark sentence="I'm often alone, but I'm not lonely." :marks="['alone', 'lonely']" />
      <p class="translation">我常常一個人，但是我不寂寞。</p>
    </NoteSlide>

    <NoteSlide title="asleep 不放在名詞前面" mark="alone">
      <NoteFix
        wrong="Be quiet. There's an asleep baby in the next room."
        right="Be quiet. There's a sleeping baby in the next room."
        fix="a sleeping baby"
      />
    </NoteSlide>

    <NoteSlide title="睡得很熟用 fast asleep，不用 very" mark="very">
      <NoteFix
        wrong="The baby is very asleep."
        right="The baby is fast asleep."
        fix="fast asleep"
      />
    </NoteSlide>

    <NoteSlide title="一個人住用 alone，不用 lonely" mark="alone">
      <NoteFix
        wrong="He lives lonely in a small flat."
        right="He lives alone in a small flat."
        fix="alone"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
