<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / we + shall not + 原形動詞" mark="shall not">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall not</span>
          <span>否定。not 放在 shall 後面。</span>
        </div>
        <div>
          <span class="term">shan't</span>
          <span>shall not 的縮寫，英式英語的口語說法。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在 I 和 we" mark="shall not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I shall not stay long." :marks="['shall not', 'I']" /><span
              class="translation"
              >我不會待太久。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        說未來不會發生的事時，shall not 只接 I 和 we。意思和 will not 相同，語氣比較正式。
      </p>
    </NoteSlide>
    <NoteSlide title="法律和合約的用法" mark="shall not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The tenant shall not keep pets in the flat."
              :marks="['shall not']"
            /><span class="translation">房客不得在公寓內飼養寵物。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My client shall not release you from the agreement."
              :marks="['shall not']"
            /><span class="translation">我的當事人不會解除你在協議中的義務。</span></span
          >
        </div>
      </div>
      <p class="remark">
        法律文件和合約常用 shall not 規定不准做的事。這時主詞可以是任何人或東西，意思是不准、不得。
      </p>
    </NoteSlide>
    <NoteSlide title="not 放在 shall 後面、動詞前面" mark="shall">
      <NoteFix
        wrong="We shall forget not your help."
        right="We shall not forget your help."
        :fix="['not', 'your']"
      />
    </NoteSlide>
    <NoteSlide title="shall not 的縮寫是 shan't" mark="shall not">
      <NoteFix wrong="I shalln't be late." right="I shan't be late." :fix="['shan\'t']" />
    </NoteSlide>
    <NoteSlide title="shall not 後面直接接原形動詞" mark="shall not">
      <NoteFix
        wrong="We shall not to accept late entries."
        right="We shall not accept late entries."
        :fix="['accept']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
