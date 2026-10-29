<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-preposition-noun-phrase, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞加名詞片語，說明去哪裡和跟誰一起">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I have free time,', role: '時間子句', kind: 'dim' },
          { t: 'I go', kind: 'dim' },
          { t: 'to the park', role: '去哪裡', kind: 'key' },
          { t: 'with my dog.', role: '跟誰一起', kind: 'key' },
        ]"
      />
      <p class="translation">我有空的時候，會帶我的狗去公園。</p>
    </NoteSlide>

    <NoteSlide title="名詞片語可以只有名詞，也可以加限定詞和形容詞" mark="to the park">
      <div class="rows is-labeled">
        <div>
          <span class="term">只有名詞</span>
          <span>at home, by bus, in July</span>
        </div>
        <div>
          <span class="term">限定詞 + 名詞</span>
          <span>to the park, with my dog</span>
        </div>
        <div>
          <span class="term">+ 形容詞</span>
          <span>in a small town, with my best friend</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="好幾個介系詞片語，常見的順序是先地點後時間" mark="with my dog.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I go', kind: 'dim' },
          { t: 'to the gym', role: '地點' },
          { t: 'with my brother', role: '跟誰' },
          { t: 'on Saturdays.', role: '時間', kind: 'key' },
        ]"
      />
      <p class="translation">我星期六會跟我哥哥去健身房。</p>
    </NoteSlide>

    <NoteSlide title="可數名詞單數前面要有限定詞" mark="the">
      <NoteFix
        wrong="There's a big dog in garden."
        right="There's a big dog in the garden."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="說交通方式，by 後面不加 the">
      <NoteFix wrong="My grandparents came here by the plane." right="My grandparents came here by plane." fix="by plane" />
    </NoteSlide>

    <NoteSlide title="去某個地方，名詞片語前面要加 to" mark="to">
      <NoteFix
        wrong="Are you coming the beach with us?"
        right="Are you coming to the beach with us?"
        fix="to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
