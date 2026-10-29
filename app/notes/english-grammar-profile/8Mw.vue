<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-because, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主要子句 + because + 子句" mark="because I have children.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I want a big garden', role: '主要子句', kind: 'dim' },
          { t: 'because', role: '連接詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'have', role: '動詞' },
          { t: 'children.', role: '受詞' },
        ]"
      />
      <p class="translation">我想要一個大花園，因為我有小孩。</p>
    </NoteSlide>

    <NoteSlide title="用 because 回答 why">
      <NoteMark
        sentence='"Why are you tired?" "Because I went to bed late."'
        :marks="['Because']"
      />
      <p class="translation">「你為什麼這麼累？」「因為我很晚才睡。」</p>
    </NoteSlide>

    <NoteSlide title="because 接原因，so 接結果" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="I stayed at home because it was raining."
              :marks="['because']"
            /><span class="translation">我待在家裡，因為下雨了。</span></span
          >
        </div>
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark sentence="It was raining, so I stayed at home." :marks="['so']" /><span
              class="translation"
              >下雨了，所以我待在家裡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="because 和 so 不一起用" mark="because">
      <NoteFix
        wrong="Because I was hungry, so I ate a sandwich."
        right="I ate a sandwich because I was hungry."
        fix="because"
      />
    </NoteSlide>

    <NoteSlide title="because 後面要有主詞" mark="because I">
      <NoteFix
        wrong="I like this shop because is cheap."
        right="I like this shop because it is cheap."
        fix="it is"
      />
    </NoteSlide>

    <NoteSlide title="because 後面接主詞和動詞">
      <NoteFix
        wrong="We stayed inside because the rain."
        right="We stayed inside because it was raining."
        fix="it was raining."
      />
    </NoteSlide>

    <NoteSlide title="because 放在原因前面" mark="because I have children.">
      <NoteFix
        wrong="I have children because I want a big garden."
        right="I want a big garden because I have children."
        fix="because I have children."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
