<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-negative-anything, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定動詞 + anything" mark="anything.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', kind: 'dim' },
          { t: 'don\'t have to bring', role: '否定動詞', kind: 'key' },
          { t: 'anything.', role: '任何東西', kind: 'key' },
        ]"
      />
      <p class="translation">你什麼都不用帶。</p>
    </NoteSlide>

    <NoteSlide title="don't、didn't" mark="don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't / doesn't</span>
          <span
            ><NoteMark
              sentence="She doesn't eat anything after six."
              :marks="['doesn\'t eat']"
            /><span class="translation">她六點以後什麼都不吃。</span></span
          >
        </div>
        <div>
          <span class="term">didn't</span>
          <span
            ><NoteMark sentence="I didn't hear anything." :marks="['didn\'t hear']" /><span
              class="translation"
              >我什麼都沒聽到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't、haven't">
      <div class="rows is-labeled">
        <div>
          <span class="term">can't</span>
          <span
            ><NoteMark
              sentence="I can't see anything without my glasses."
              :marks="['can\'t see']"
            /><span class="translation">沒戴眼鏡我什麼都看不到。</span></span
          >
        </div>
        <div>
          <span class="term">haven't / hasn't</span>
          <span
            ><NoteMark
              sentence="We haven't decided anything yet."
              :marks="['haven\'t decided']"
            /><span class="translation">我們還什麼都沒決定。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not ... anything = nothing" mark="anything.">
      <div class="rows is-labeled">
        <div>
          <span class="term">not ... anything</span>
          <span
            ><NoteMark
              sentence="I didn't order anything at the café."
              :marks="['didn\'t', 'anything']"
            /><span class="translation">我在咖啡店什麼都沒點。</span></span
          >
        </div>
        <div>
          <span class="term">nothing</span>
          <span
            ><NoteMark sentence="I ordered nothing at the café." :marks="['nothing']" /><span
              class="translation"
              >我在咖啡店一樣東西都沒點。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定動詞後面用 anything" mark="anything.">
      <NoteFix
        wrong="I can't find something in this drawer."
        right="I can't find anything in this drawer."
        fix="anything"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞的否定加 don't" mark="don't">
      <NoteFix
        wrong="I not need anything from the chemist today."
        right="I don't need anything from the chemist today."
        fix="don't need"
      />
    </NoteSlide>

    <NoteSlide title="doesn't 後面接原形動詞">
      <NoteFix
        wrong="He doesn't wants anything for dinner."
        right="He doesn't want anything for dinner."
        fix="want"
      />
    </NoteSlide>

    <NoteSlide title="肯定句的 anything：隨便哪一樣">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You can choose', kind: 'dim' },
          { t: 'anything', role: '隨便哪一樣', kind: 'key' },
          { t: 'from the dessert menu.', kind: 'dim' },
        ]"
      />
      <p class="translation">甜點菜單上的東西你隨便選。</p>
    </NoteSlide>

    <NoteSlide title="not ... any + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'don\'t have', role: '否定動詞', kind: 'key' },
          { t: 'any', role: 'any' },
          { t: 'eggs', role: '名詞', kind: 'key' },
          { t: 'left for the cake.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們沒有剩下的蛋可以做蛋糕了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
