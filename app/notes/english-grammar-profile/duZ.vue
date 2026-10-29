<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-that, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that + 單數名詞" mark="that film.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I also', role: '主詞 + 副詞', kind: 'dim' },
          { t: 'want to see', role: '動詞', kind: 'dim' },
          { t: 'that', role: '那個', kind: 'key' },
          { t: 'film.', role: '單數名詞' },
        ]"
      />
      <p class="translation">我也想看那部電影。</p>
    </NoteSlide>

    <NoteSlide title="that 指的東西" mark="that film.">
      <div class="rows is-labeled">
        <div>
          <span class="term">遠的</span>
          <span
            ><NoteMark sentence="Who lives in that house?" :marks="['that house?']" /><span
              class="translation"
              >誰住在那間房子裡？</span
            ></span
          >
        </div>
        <div>
          <span class="term">雙方都知道的</span>
          <span
            ><NoteMark
              sentence="Do you remember that restaurant in Paris?"
              :marks="['that restaurant']"
            /><span class="translation">你還記得巴黎那家餐廳嗎？</span></span
          >
        </div>
        <div>
          <span class="term">對方剛說的</span>
          <span
            ><NoteMark sentence="Is that book good?" :marks="['that book']" /><span
              class="translation"
              >那本書好看嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 指近的，that 指遠的" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">this chair</span>
          <span>說話的人坐的椅子</span>
        </div>
        <div>
          <span class="term">that chair</span>
          <span>房間另一邊的椅子</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 加單數，those 加複數" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">that</span>
          <span>that film、that shop</span>
        </div>
        <div>
          <span class="term">those</span>
          <span>those films、those shops</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 those">
      <NoteFix wrong="I like that shoes." right="I like those shoes." fix="those" />
    </NoteSlide>

    <NoteSlide title="that 前面不加 the" mark="that film.">
      <NoteFix
        wrong="I want to see the that film."
        right="I want to see that film."
        fix="see that"
      />
    </NoteSlide>

    <NoteSlide title="that 放在名詞前面" mark="that">
      <NoteFix wrong="Who is girl that?" right="Who is that girl?" fix="that girl?" />
    </NoteSlide>

    <NoteSlide title="遠的東西用 that" mark="that">
      <NoteFix
        wrong="Can you see this bird on the roof over there?"
        right="Can you see that bird on the roof over there?"
        fix="that bird"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
