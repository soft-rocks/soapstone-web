<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-as-subjects, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞放在動詞前面，說句子講的是誰">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My friends', role: '主詞', kind: 'key' },
          { t: 'are', role: '複數動詞' },
          { t: 'from Poland, Hungary, Libya and Morocco.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的朋友來自波蘭、匈牙利、利比亞和摩洛哥。</p>
    </NoteSlide>

    <NoteSlide title="主詞可以是人名、名詞片語或複數名詞" mark="My friends">
      <div class="rows is-labeled">
        <div>
          <span class="term">人名</span>
          <span
            ><NoteMark sentence="Anna is my sister." :marks="['Anna']" /><span class="translation"
              >Anna 是我姊姊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">限定詞 + 名詞</span>
          <span
            ><NoteMark sentence="His name is Stanislav." :marks="['His name']" /><span
              class="translation"
              >他的名字是 Stanislav。</span
            ></span
          >
        </div>
        <div>
          <span class="term">+ 形容詞</span>
          <span
            ><NoteMark sentence="The new teacher is very nice." :marks="['The new teacher']" /><span
              class="translation"
              >新老師人很好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="Cats sleep a lot." :marks="['Cats']" /><span class="translation"
              >貓很會睡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞的單複數決定動詞的形式" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數主詞</span>
          <span
            ><NoteMark sentence="My brother lives in London." :marks="['lives']" /><span
              class="translation"
              >我哥哥住在倫敦。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數主詞</span>
          <span
            ><NoteMark sentence="My parents live in Spain." :marks="['live']" /><span
              class="translation"
              >我爸媽住在西班牙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="英文的句子要有主詞，說天氣用 it" mark="My friends">
      <NoteFix wrong="Is very cold today." right="It is very cold today." fix="It" />
    </NoteSlide>

    <NoteSlide title="主詞是單數，現在式動詞加 -&#x2060;s" mark="are">
      <NoteFix wrong="My sister live in Paris." right="My sister lives in Paris." fix="lives" />
    </NoteSlide>

    <NoteSlide title="名詞已經是主詞，不再加 he" mark="My friends">
      <NoteFix wrong="My father he is a doctor." right="My father is a doctor." fix="My father" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
