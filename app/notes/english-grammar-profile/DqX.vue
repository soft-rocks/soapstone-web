<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-sense-verbs-as-if-or-as, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="感官動詞 + as if / as though + 子句" mark="looks as if">
      <div class="rows is-labeled">
        <div>
          <span class="term">look as if</span>
          <span
            ><NoteMark sentence="You look as if you haven't slept." :marks="['look as if']" /><span
              class="translation"
              >你看起來好像沒睡覺。</span
            ></span
          >
        </div>
        <div>
          <span class="term">sound as if</span>
          <span
            ><NoteMark
              sentence="Your voice is very different on the phone today. You sound as if you have a cold."
              :marks="['sound as if']"
            /><span class="translation"
              >你今天在電話裡聲音很不一樣。你聽起來好像感冒了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">feel as though</span>
          <span
            ><NoteMark
              sentence="My sister walked into the party alone. She felt as though everyone was looking at her."
              :marks="['felt as though']"
            /><span class="translation"
              >我姊姊一個人走進派對。她覺得好像每個人都在看她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說不是真的事，子句常用過去式" mark="as if it'll rain">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'On the swing, I', kind: 'dim' },
          { t: 'felt', role: '感官動詞' },
          { t: 'as if', role: 'as if', kind: 'key' },
          { t: 'I was flying.', role: '過去式：不是真的', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">盪鞦韆的時候，我感覺自己好像在飛。</p>
    </NoteSlide>

    <NoteSlide title="It looks as if 從看到的情況判斷" mark="it looks as if">
      <NoteMark sentence="It looks as if it's going to rain." :marks="['It looks as if']" />
      <p class="translation">看起來好像要下雨了。</p>
    </NoteSlide>

    <NoteSlide title="as if 後面接子句，只接名詞用 like" mark="as if it'll rain">
      <NoteFix
        wrong="It looks as if rain."
        right="It looks as if it's going to rain."
        fix="it's going to rain"
      />
    </NoteSlide>

    <NoteSlide title="表示好像，用 as if，不用 as" mark="as if">
      <NoteFix
        wrong="You look as you haven't slept."
        right="You look as if you haven't slept."
        fix="as if"
      />
    </NoteSlide>

    <NoteSlide title="感官動詞後面接形容詞" mark="looks">
      <NoteFix
        wrong="She sounded angrily, as if she was upset."
        right="She sounded angry, as if she was upset."
        fix="angry"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
