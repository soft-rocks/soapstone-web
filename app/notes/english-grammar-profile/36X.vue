<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// just-91, as slides, in the order of content.md. One point per slide: the title names it,
// the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="only 放在 be 後面，指出數量">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It\'s', role: '主詞 + be', kind: 'dim' },
          { t: 'only', role: '焦點副詞', kind: 'key' },
          { t: 'two hours.', role: '數量' },
        ]"
      />
      <p class="translation">才兩個小時而已。</p>
    </NoteSlide>

    <NoteSlide title="only 和 just 放在一般動詞前面" mark="only">
      <div class="rows is-labeled">
        <div>
          <span class="term">just</span>
          <span
            ><NoteMark sentence="I just want a glass of water." :marks="['just want']" /><span
              class="translation"
              >我只想要一杯水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">only</span>
          <span
            ><NoteMark sentence="She only drinks tea." :marks="['only drinks']" /><span
              class="translation"
              >她只喝茶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="only 放在哪個部分前面，就指出哪個部分" mark="only">
      <div class="rows is-labeled">
        <div>
          <span class="term">指出主詞</span>
          <span
            ><NoteMark sentence="Only I saw her." :marks="['Only I']" /><span class="translation"
              >只有我看到她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">指出受詞</span>
          <span
            ><NoteMark sentence="I saw only her." :marks="['only her']" /><span class="translation"
              >我只看到她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="指出主詞用 only，不用 alone">
      <NoteFix
        wrong="Alone my sister knows the answer."
        right="Only my sister knows the answer."
        fix="Only"
      />
    </NoteSlide>

    <NoteSlide title="有助動詞時，only 放在助動詞後面" mark="only">
      <NoteFix
        wrong="I only can stay a few minutes."
        right="I can only stay a few minutes."
        fix="can only"
      />
    </NoteSlide>

    <NoteSlide title="just 放在數量前面">
      <NoteFix wrong="The tickets were £8 just." right="The tickets were just £8." fix="just £8" />
    </NoteSlide>

    <NoteSlide title="only 和 just 意思相同，一句只用一個" mark="only">
      <NoteFix wrong="It's just only a short walk." right="It's just a short walk." fix="just" />
    </NoteSlide>

    <NoteSlide title="just 放在 have 和過去分詞中間，表示剛剛">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have', kind: 'dim' },
          { t: 'just', role: '剛剛', kind: 'key' },
          { t: 'had', role: '過去分詞' },
          { t: 'lunch.', role: '受詞' },
        ]"
      />
      <p class="translation">我剛吃過午餐。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
