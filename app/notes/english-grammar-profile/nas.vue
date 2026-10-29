<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-pronouns-1189, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定的動詞後面用 anyone">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'didn\'t tell', role: '否定的動詞' },
          { t: 'anyone', role: '不定代名詞', kind: 'key' },
          { t: 'about this story at first.', kind: 'dim' },
        ]"
      />
      <p class="translation">一開始我沒跟任何人說這件事。</p>
    </NoteSlide>

    <NoteSlide title="不否定動詞時，用 no one、nothing、nowhere" mark="anyone">
      <NoteFork
        stem="I"
        :branches="[
          { head: 'didn\'t tell', rest: 'anyone', meaning: '較常用', zh: '我沒跟任何人說。' },
          { head: 'told', rest: 'no one', meaning: '比較正式', zh: '我誰都沒說。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="any- 接在否定的動詞後面，no- 單獨表示否定" mark="anyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span>anyone、anybody ／ no one、nobody</span>
        </div>
        <div>
          <span class="term">東西、事情</span>
          <span>anything ／ nothing</span>
        </div>
        <div>
          <span class="term">地方</span>
          <span>anywhere ／ nowhere</span>
        </div>
      </div>
      <p class="remark"><code>no one</code> 寫成兩個字，<code>nobody</code> 寫成一個字。</p>
    </NoteSlide>

    <NoteSlide title="主詞是否定的人或東西時，用 nobody 或 nothing" mark="anyone">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Nothing', role: '主詞', kind: 'key' },
          { t: 'works in this old house.', role: '肯定的動詞' },
        ]"
      />
      <p class="translation">這間老房子什麼都壞了。</p>
    </NoteSlide>

    <NoteSlide title="一句話只用一個否定" mark="anyone">
      <NoteFix
        wrong="The burglars didn't leave nothing in the safe."
        right="The burglars didn't leave anything in the safe."
        fix="anything"
      />
    </NoteSlide>

    <NoteSlide title="anyone 不當否定句的主詞" mark="anyone">
      <NoteFix
        wrong="Anybody didn't wake up when the alarm went off."
        right="Nobody woke up when the alarm went off."
        fix="Nobody woke up"
      />
    </NoteSlide>

    <NoteSlide title="no one 寫成兩個字">
      <NoteFix wrong="Noone saw the accident." right="No one saw the accident." fix="No one" />
    </NoteSlide>

    <NoteSlide title="nobody 當主詞時，動詞用單數">
      <NoteFix
        wrong="Nobody were brave enough to jump."
        right="Nobody was brave enough to jump."
        fix="was"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
