<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-neither-nor, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="neither + 動詞 + nor + 動詞" mark="neither eat nor drink">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We can', role: '主詞 + 情態動詞', kind: 'dim' },
          { t: 'neither', role: '連接詞', kind: 'key' },
          { t: 'eat', role: '動詞' },
          { t: 'nor', role: '連接詞', kind: 'key' },
          { t: 'drink', role: '動詞' },
          { t: 'during the lessons.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">上課時我們不能吃東西，也不能喝東西。</p>
    </NoteSlide>

    <NoteSlide title="連接名詞和過去分詞" mark="neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Neither you nor I would like that."
              :marks="['Neither', 'nor']"
            /><span class="translation">你和我都不會喜歡那樣。</span></span
          >
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark
              sentence="I have neither climbed nor surfed before."
              :marks="['neither climbed nor surfed']"
            /><span class="translation">我以前沒攀岩過，也沒衝浪過。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither … nor 和 not … or" mark="neither eat nor drink">
      <div class="rows is-labeled">
        <div>
          <span class="term">not … or</span>
          <span
            ><NoteMark sentence="We can't swim or fish in the lake." :marks="['can\'t', 'or']"
          /></span>
        </div>
        <div>
          <span class="term">neither … nor</span>
          <span
            ><NoteMark
              sentence="We can neither swim nor fish in the lake."
              :marks="['neither', 'nor']"
            /><span class="translation">意思相同，比較強調，也比較正式。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞跟 nor 後面的主詞一致">
      <div class="rows is-labeled">
        <div>
          <span class="term">are</span>
          <span
            ><NoteMark
              sentence="Neither my brother nor my parents are at home."
              :marks="['my parents are']"
          /></span>
        </div>
        <div>
          <span class="term">is</span>
          <span
            ><NoteMark
              sentence="Neither my parents nor my brother is at home."
              :marks="['my brother is']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither 配 nor，不配 or" mark="nor">
      <NoteFix
        wrong="The room was neither clean or comfortable."
        right="The room was neither clean nor comfortable."
        fix="nor"
      />
    </NoteSlide>

    <NoteSlide title="前面不再加 not" mark="neither">
      <NoteFix
        wrong="I don't like neither tea nor coffee."
        right="I like neither tea nor coffee."
        fix="I like"
      />
    </NoteSlide>

    <NoteSlide title="動詞跟靠近的主詞一致">
      <NoteFix
        wrong="Neither the teacher nor the students was ready."
        right="Neither the teacher nor the students were ready."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="neither 放在被否定的字前面" mark="neither eat">
      <NoteFix
        wrong="Neither he speaks French nor German."
        right="He speaks neither French nor German."
        fix="neither French"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
