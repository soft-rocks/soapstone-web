<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-instructions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使句用來指路、說要帶什麼、說怎麼做" mark="Wear">
      <div class="rows is-labeled">
        <div>
          <span class="term">交通和指路</span>
          <span
            ><NoteMark
              sentence="The museum is easy to reach by underground. Take the yellow line to the river."
              :marks="['Take']"
            /><span class="translation">搭地鐵去博物館很方便。搭黃線到河邊。</span></span
          >
        </div>
        <div>
          <span class="term">要帶的東西</span>
          <span
            ><NoteMark
              sentence="The bus ride to the zoo takes three hours. Bring some fruit and a drink."
              :marks="['Bring']"
            /><span class="translation">搭巴士去動物園要三個小時。帶些水果和飲料。</span></span
          >
        </div>
        <div>
          <span class="term">做事的方法</span>
          <span
            ><NoteMark
              sentence="This cleaner is very strong. Wear rubber gloves when you use it."
              :marks="['Wear']"
            /><span class="translation">這個清潔劑很強。用的時候要戴橡膠手套。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="remember 後面接 to 不定詞，提醒對方" mark="Wear">
      <NoteMark sentence="Remember to bring your swimsuit!" :marks="['Remember to bring']" />
      <p class="translation">記得帶泳衣！</p>
    </NoteSlide>

    <NoteSlide title="please 後面直接接原形動詞" mark="Wear">
      <NoteFix wrong="Please to wear an apron." right="Please wear an apron." fix="wear" />
    </NoteSlide>

    <NoteSlide title="提醒要做的事，remember 不接動詞-ing" mark="Wear">
      <NoteFix
        wrong="Remember taking your umbrella tomorrow."
        right="Remember to take your umbrella tomorrow."
        fix="to take"
      />
    </NoteSlide>

    <NoteSlide title="祈使句用原形動詞，不用過去式" mark="Wear">
      <NoteFix
        wrong="Took the second street on the left."
        right="Take the second street on the left."
        fix="Take"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
