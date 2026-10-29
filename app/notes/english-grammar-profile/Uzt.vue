<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-each-the-other-s-as-complement, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the others 放在介系詞後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Each individual', role: '主詞', kind: 'key' },
          { t: 'is', role: '單數動詞' },
          { t: 'different from', role: '形容詞 + 介系詞' },
          { t: 'the others.', role: '介系詞的受詞', kind: 'key' },
        ]"
      />
      <p class="translation">每個人都跟其他人不一樣。</p>
    </NoteSlide>

    <NoteSlide title="兩個用 the other，三個以上用 the others" mark="the others">
      <div class="rows is-labeled">
        <div>
          <span class="term">兩個</span>
          <span
            ><NoteMark
              sentence="Two people can work together if each person listens to the other."
              :marks="['to the other']"
            /><span class="translation">兩個人只要都願意聽對方說話，就能一起工作。</span></span
          >
        </div>
        <div>
          <span class="term">三個以上</span>
          <span
            ><NoteMark
              sentence="Each of the five rooms is painted a different colour from the others."
              :marks="['from the others']"
            /><span class="translation">那五個房間，每一間的顏色都跟其他間不一樣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的介系詞" mark="different from">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 介系詞</span>
          <span>different from, kind to, angry with, close to</span>
        </div>
        <div>
          <span class="term">動詞 + 介系詞</span>
          <span>talk to, write to, depend on, learn from, compete with</span>
        </div>
        <div>
          <span class="term">名詞 + 介系詞</span>
          <span>a help to, a danger to</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="angry 後面先接 with" mark="from">
      <NoteFix
        wrong="Each of the brothers is angry the other."
        right="Each of the brothers is angry with the other."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="each 當主詞，動詞用單數" mark="is">
      <NoteFix
        wrong="Each of the partners depend on the other."
        right="Each of the partners depends on the other."
        fix="depends"
      />
    </NoteSlide>

    <NoteSlide title="四個人，用 the others" mark="the others">
      <NoteFix
        wrong="Each of the four friends writes to the other."
        right="Each of the four friends writes to the others."
        fix="the others."
      />
    </NoteSlide>

    <NoteSlide title="主詞是 each，介系詞後面用 the other" mark="the others">
      <NoteFix
        wrong="Each of them is kind to each other."
        right="Each of them is kind to the other."
        fix="the other."
      />
    </NoteSlide>

    <NoteSlide title="each other 的主詞是複數">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The two neighbours', role: '複數主詞', kind: 'key' },
          { t: 'often talk to', kind: 'dim' },
          { t: 'each other.', role: '代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">那兩個鄰居常常聊天。</p>
    </NoteSlide>

    <NoteSlide title="one … the other 說兩個人各自的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'One brother', role: '一個', kind: 'key' },
          { t: 'lives in Taipei, and', kind: 'dim' },
          { t: 'the other', role: '另一個', kind: 'key' },
          { t: 'lives in Tainan.', kind: 'dim' },
        ]"
      />
      <p class="translation">一個哥哥住台北，另一個住台南。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
