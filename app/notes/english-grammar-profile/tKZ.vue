<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-affirmative-main-clauses-affirmative-question-tags, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="直述句和附加問句都用肯定，確認剛知道的事">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Your boyfriend is also sixteen,', role: '肯定的直述句' },
          { t: 'is he?', role: '肯定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">你男朋友也是十六歲，是嗎？</p>
    </NoteSlide>

    <NoteSlide title="一正一反是確認，兩邊肯定是驚訝或有興趣" mark="is he">
      <div class="rows is-labeled">
        <div>
          <span class="term">一正一反<br /><i>本來就這樣想</i></span>
          <span
            ><NoteMark sentence="You're from Spain, aren't you?" :marks="['aren\'t you']" /><span
              class="translation"
              >你是西班牙人，對吧？</span
            ></span
          >
        </div>
        <div>
          <span class="term">兩邊肯定<br /><i>剛聽說</i></span>
          <span
            ><NoteMark sentence="You're from Spain, are you?" :marks="['are you']" /><span
              class="translation"
              >原來你是西班牙人啊？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常在直述句前面加 So 或 Oh">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'So', role: '原來如此', kind: 'key', ring: true },
          { t: 'you bought new black clothes,', role: '肯定的直述句' },
          { t: 'did you?', role: '肯定的附加問句' },
        ]"
      />
      <p class="translation">所以你買了新的黑色衣服，是嗎？</p>
    </NoteSlide>

    <NoteSlide title="語氣不好時，表示懷疑或不滿" mark="is he">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Oh, you think you\'re clever,', role: '肯定的直述句' },
          { t: 'do you?', role: '懷疑', kind: 'key' },
        ]"
      />
      <p class="translation">喔，你覺得你很聰明是吧？</p>
    </NoteSlide>

    <NoteSlide title="直述句沒有助動詞時，附加問句用 do" mark="is">
      <NoteFix
        wrong="So you live in Paris, are you?"
        right="So you live in Paris, do you?"
        fix="do"
      />
    </NoteSlide>

    <NoteSlide title="代名詞代替直述句的主詞" mark="he">
      <NoteFix
        wrong="So your sister is a doctor, is it?"
        right="So your sister is a doctor, is she?"
        fix="she"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
