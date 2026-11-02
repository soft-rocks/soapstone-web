<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-plural-nouns-333, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="both 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'as', role: '連接詞', kind: 'dim' },
          { t: 'both', role: 'both', kind: 'key' },
          { t: 'teams', role: '複數名詞', kind: 'key' },
          { t: 'played well,', role: '動詞' },
        ]"
      />
      <p class="translation">因為兩隊都打得很好，</p>
    </NoteSlide>

    <NoteSlide title="all、both、a few" mark="both teams">
      <div class="rows is-labeled">
        <div>
          <span class="term">all</span>
          <span
            ><NoteMark
              sentence="This notice is for all students: we are going to have a concert at school."
              :marks="['all students']"
            /><span class="translation">這份通知是給全體學生的：學校要辦一場音樂會。</span></span
          >
        </div>
        <div>
          <span class="term">both</span>
          <span
            ><NoteMark sentence="Both boys make me laugh." :marks="['Both boys']" /><span
              class="translation"
              >兩個男生都讓我笑。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a few</span>
          <span
            ><NoteMark
              sentence="I'm just writing to say hello, and to tell you a few things."
              :marks="['a few things']"
            /><span class="translation">我只是寫信打個招呼，順便跟你說幾件事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="all 和 both 後面可以先接 the 或 my" mark="both">
      <div class="rows is-labeled">
        <div>
          <span class="term">all the</span>
          <span
            ><NoteMark
              sentence="All the guests left before midnight."
              :marks="['All the guests']"
            /><span class="translation">所有客人都在半夜以前走了。</span></span
          >
        </div>
        <div>
          <span class="term">both my</span>
          <span
            ><NoteMark
              sentence="Both my parents work at the hospital."
              :marks="['Both my parents']"
            /><span class="translation">我爸媽都在醫院工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a few 有幾個，few 幾乎沒有" mark="both">
      <div class="rows is-labeled">
        <div>
          <span class="term">a few</span>
          <span
            ><NoteMark
              sentence="I have a few friends here. We go out at weekends."
              :marks="['a few']"
            /><span class="translation">我在這裡有幾個朋友。我們週末會出去。</span></span
          >
        </div>
        <div>
          <span class="term">few</span>
          <span
            ><NoteMark
              sentence="I have few friends here. I often feel lonely."
              :marks="['few']"
            /><span class="translation">我在這裡幾乎沒有朋友。我常覺得寂寞。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="both 只用在兩個" mark="both">
      <NoteFix
        wrong="We've got three dogs. Both dogs are black."
        right="We've got three dogs. All three dogs are black."
        fix="All three"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 a little" mark="both">
      <NoteFix
        wrong="I take my coffee with a few milk."
        right="I take my coffee with a little milk."
        fix="a little"
      />
    </NoteSlide>

    <NoteSlide title="a few 接複數名詞" mark="teams">
      <NoteFix
        wrong="The bus will leave in a few minute."
        right="The bus will leave in a few minutes."
        fix="minutes"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
