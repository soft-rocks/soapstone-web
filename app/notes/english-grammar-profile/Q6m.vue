<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// partial-negation, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 放在 everyone 前面，表示不是全部都這樣">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Not', role: 'not', kind: 'key' },
          { t: 'everyone', role: '不定代名詞', kind: 'key' },
          { t: 'likes', role: '單數動詞' },
          { t: 'sports or music.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">不是每個人都喜歡運動或音樂。</p>
    </NoteSlide>

    <NoteSlide title="every 接單數名詞和單數動詞，all 接複數" mark="everyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">Not every</span>
          <span
            ><NoteMark sentence="Not every student can come." :marks="['every student']" /><span
              class="translation"
              >不是每個學生都能來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Not all</span>
          <span
            ><NoteMark sentence="Not all the shops are open." :marks="['all the shops are']" /><span
              class="translation"
              >不是每家店都有開。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Not all of</span>
          <span
            ><NoteMark sentence="Not all of us have a car." :marks="['all of us']" /><span
              class="translation"
              >不是我們每個人都有車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not everyone 是部分否定，no one 是全部否定" mark="Not everyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">部分否定<br /><i>有些人來了</i></span>
          <span
            ><NoteMark sentence="Not everyone came." :marks="['Not everyone']" /><span
              class="translation"
              >不是每個人都來了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">全部否定<br /><i>沒有人來</i></span>
          <span
            ><NoteMark sentence="No one came." :marks="['No one']" /><span class="translation"
              >一個人都沒來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="all 當主詞、動詞加 not 時容易誤會，用 not all 比較清楚" mark="Not">
      <div class="rows is-labeled">
        <div>
          <span class="term">容易誤會</span>
          <span><NoteMark sentence="All the students didn't pass." :marks="['didn\'t']" /></span>
        </div>
        <div>
          <span class="term">比較清楚</span>
          <span
            ><NoteMark sentence="Not all the students passed." :marks="['Not all']" /><span
              class="translation"
              >不是所有學生都及格了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="部分否定的 not 放在 everyone 前面" mark="Not everyone">
      <NoteFix
        wrong="Everyone not likes sports."
        right="Not everyone likes sports."
        fix="Not everyone"
      />
    </NoteSlide>

    <NoteSlide title="everyone 用單數動詞" mark="likes">
      <NoteFix
        wrong="Not everyone agree with the plan."
        right="Not everyone agrees with the plan."
        fix="agrees"
      />
    </NoteSlide>

    <NoteSlide title="every 後面接單數名詞" mark="everyone">
      <NoteFix
        wrong="Not every flats in the building has a balcony."
        right="Not every flat in the building has a balcony."
        fix="flat"
      />
    </NoteSlide>

    <NoteSlide title="全部否定用 no one，不用 not everyone" mark="Not everyone">
      <NoteFix
        wrong="Not everyone came, so the room was empty."
        right="No one came, so the room was empty."
        fix="No one"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
