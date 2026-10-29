<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-cleft-constructions-with-it, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 分裂句強調主詞" mark="It was my father who">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', role: '開頭', kind: 'key' },
          { t: 'my father', role: '被強調的主詞', kind: 'key' },
          { t: 'who', role: '指 my father' },
          { t: 'took all this away …', kind: 'dim' },
        ]"
      />
      <p class="translation">把這一切從我身邊奪走的，是我爸爸。</p>
    </NoteSlide>

    <NoteSlide title="怎麼改成分裂句" mark="It was my father who">
      <div class="rows is-labeled">
        <div>
          <span class="term">原本的句子</span>
          <span
            ><NoteMark
              sentence="My grandmother taught me to cook."
              :marks="['My grandmother']"
            /><span class="translation">我奶奶教我做菜。</span></span
          >
        </div>
        <div>
          <span class="term">人：who</span>
          <span
            ><NoteMark
              sentence="It was my grandmother who taught me to cook."
              :marks="['It was my grandmother who']"
            /><span class="translation">教我做菜的是我奶奶。</span></span
          >
        </div>
        <div>
          <span class="term">東西：that</span>
          <span
            ><NoteMark
              sentence="It was the noise that woke me up."
              :marks="['It was the noise that']"
            /><span class="translation">把我吵醒的是那個噪音。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞的形式" mark="who">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', role: '單數', kind: 'key' },
          { t: 'my parents', role: '複數主詞' },
          { t: 'who', kind: 'dim' },
          { t: 'make', role: '複數動詞', kind: 'key' },
          { t: 'all the decisions.', kind: 'dim' },
        ]"
      />
      <p class="translation">做所有決定的是我爸媽。</p>
    </NoteSlide>

    <NoteSlide title="動詞跟著被強調的主詞" mark="who">
      <NoteFix
        wrong="It is the students who decides the topic each week."
        right="It is the students who decide the topic each week."
        fix="decide"
      />
    </NoteSlide>

    <NoteSlide title="人用 who，不用 which" mark="who">
      <NoteFix
        wrong="It was my teacher which encouraged me to write."
        right="It was my teacher who encouraged me to write."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="it 後面用 was" mark="It was">
      <NoteFix
        wrong="It were my brothers who started the fight."
        right="It was my brothers who started the fight."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="強調受詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'the old farmhouse', role: '受詞', kind: 'key' },
          { t: 'that', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'missed most.', kind: 'dim' },
        ]"
      />
      <p class="translation">我最想念的是那間老農舍。</p>
    </NoteSlide>

    <NoteSlide title="What 分裂句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What surprised me', kind: 'dim' },
          { t: 'was', kind: 'dim' },
          { t: 'his silence.', role: '重點在句尾', kind: 'key' },
        ]"
      />
      <p class="translation">讓我驚訝的是他的沉默。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
