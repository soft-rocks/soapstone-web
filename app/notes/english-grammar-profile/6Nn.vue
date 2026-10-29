<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-pronoun-preposition, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="who 是介系詞的受詞，介系詞留在子句最後面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'They have', kind: 'dim' },
          { t: 'three wonderful children', role: '名詞' },
          { t: 'who', role: '受詞', kind: 'key' },
          { t: 'I love to play', role: '主詞 + 動詞' },
          { t: 'with.', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">他們有三個很棒的孩子，我很喜歡跟他們一起玩。</p>
    </NoteSlide>

    <NoteSlide title="限定子句可以省略關係代名詞，非限定子句用 who 或 which" mark="with.">
      <div class="rows is-labeled">
        <div>
          <span class="term">限定</span>
          <span
            ><NoteMark
              sentence="Is this the charger you were looking for?"
              :marks="['for?']"
            /><span class="translation">這是你在找的充電器嗎？</span></span
          >
        </div>
        <div>
          <span class="term">非限定</span>
          <span
            ><NoteMark
              sentence="I've started doing yoga, which I'm not very good at."
              :marks="['which', 'at.']"
            /><span class="translation">我開始做瑜伽了，不過我做得不太好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞跟著子句裡的動詞或形容詞" mark="play with.">
      <div class="rows is-labeled">
        <div>
          <span class="term">depend on</span>
          <span
            ><NoteMark
              sentence="My brother is someone who you can always depend on."
              :marks="['depend on.']"
            /><span class="translation">我哥哥是你隨時都可以依靠的人。</span></span
          >
        </div>
        <div>
          <span class="term">其他組合</span>
          <span>good at, interested in, listen to</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的書面語把介系詞放在 whom 或 which 前面" mark="with.">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="The committee to which I sent my application has not replied."
              :marks="['to which']"
            /><span class="translation">我寄申請書去的委員會還沒回覆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 已經是介系詞的受詞，不再加 her" mark="with.">
      <NoteFix
        wrong="The girl who I went to the cinema with her is my cousin."
        right="The girl who I went to the cinema with is my cousin."
        fix="with is"
      />
    </NoteSlide>

    <NoteSlide title="listen 後面的 to 要留在句尾">
      <NoteFix
        wrong="That's the song which I was listening."
        right="That's the song which I was listening to."
        fix="to."
      />
    </NoteSlide>

    <NoteSlide title="介系詞放在前面時不能用 that">
      <NoteFix
        wrong="The man with that I spoke was very kind."
        right="The man that I spoke with was very kind."
        fix="that I spoke with"
      />
    </NoteSlide>

    <NoteSlide title="介系詞只出現一次" mark="with.">
      <NoteFix
        wrong="The house in which we lived in was old."
        right="The house which we lived in was old."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
