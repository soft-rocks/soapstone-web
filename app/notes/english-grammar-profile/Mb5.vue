<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-determiner-noun, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="限定詞放在名詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My', role: '限定詞', kind: 'key' },
          { t: 'husband', role: '名詞' },
          { t: 'is', kind: 'dim' },
          { t: 'a', role: '限定詞', kind: 'key' },
          { t: 'teacher.', role: '名詞' },
        ]"
      />
      <p class="translation">我先生是老師。</p>
      <p class="remark">限定詞說明指的是哪一個人或東西。</p>
    </NoteSlide>

    <NoteSlide title="a 和 the 說明聽話的人知不知道是哪一個" mark="a">
      <div class="rows is-labeled">
        <div>
          <span class="term">a / an<br /><i>第一次提到</i></span>
          <span
            ><NoteMark sentence="There is a park near my house." :marks="['a park']" /><span
              class="translation"
              >我家附近有一座公園。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the<br /><i>聽話的人知道是哪一個</i></span>
          <span
            ><NoteMark
              sentence="Can you close the window? It's cold in here."
              :marks="['the window']"
            /><span class="translation">你可以關一下窗戶嗎？這裡好冷。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格限定詞說明人或東西屬於誰" mark="My">
      <div class="rows is-labeled">
        <div>
          <span class="term">my</span>
          <span
            ><NoteMark sentence="My mum is a nurse at the hospital." :marks="['My mum']" /><span
              class="translation"
              >我媽媽是那家醫院的護士。</span
            ></span
          >
        </div>
        <div>
          <span class="term">their</span>
          <span
            ><NoteMark
              sentence="Their children go to the same school as my son."
              :marks="['Their children']"
            /><span class="translation">他們的孩子跟我兒子上同一所學校。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 和 that 接單數名詞，these 和 those 接複數名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">this + 單數名詞</span>
          <span
            ><NoteMark
              sentence="This bag is very heavy. Can you help me?"
              :marks="['This bag']"
            /><span class="translation">這個袋子好重。你可以幫我一下嗎？</span></span
          >
        </div>
        <div>
          <span class="term">those + 複數名詞</span>
          <span
            ><NoteMark sentence="Those shoes are too small for me." :marks="['Those shoes']" /><span
              class="translation"
              >那雙鞋我穿太小了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要有限定詞" mark="a">
      <NoteFix wrong="My sister is doctor." right="My sister is a doctor." fix="a" />
    </NoteSlide>

    <NoteSlide title="名詞的發音以母音開頭時用 an" mark="a">
      <NoteFix
        wrong="I eat a apple every morning."
        right="I eat an apple every morning."
        fix="an"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 these 或 those">
      <NoteFix wrong="I like this shoes." right="I like these shoes." fix="these" />
    </NoteSlide>

    <NoteSlide title="一個名詞前面只放一個限定詞" mark="My">
      <NoteFix wrong="This is the my bag." right="This is my bag." fix="my" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
