<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-continuous-affirmative-721, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="are being 加過去分詞，說正在改變的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'miles and miles of coast', role: '主詞' },
          { t: 'are being', role: 'am / is / are being', kind: 'key' },
          { t: 'submerged.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">綿延好幾英里的海岸正被海水淹沒。</p>
    </NoteSlide>

    <NoteSlide title="說話的這一刻，和最近這段時間" mark="are being submerged">
      <div class="rows is-labeled">
        <div>
          <span class="term">這一刻</span>
          <span
            ><NoteMark
              sentence="The patient is being examined."
              :marks="['is being examined']"
            /><span class="translation">病人正在接受檢查。</span></span
          >
        </div>
        <div>
          <span class="term">最近這段時間</span>
          <span
            ><NoteMark
              sentence="More and more shops are being closed these days."
              :marks="['are being closed']"
            /><span class="translation">最近有愈來愈多店關門。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="東西自己在變用主動，被別的東西改變用被動" mark="is melting">
      <div class="rows is-labeled">
        <div>
          <span class="term">主動</span>
          <span
            ><NoteMark sentence="The ice is melting." :marks="['is melting']" /><span
              class="translation"
              >冰正在融化。</span
            ></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="Miles and miles of coast are being submerged."
              :marks="['are being submerged']"
            /><span class="translation">綿延好幾英里的海岸正被海水淹沒。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被做的事用 are being 加過去分詞" mark="are being submerged">
      <NoteFix
        wrong="More and more forests are cutting down these days."
        right="More and more forests are being cut down these days."
        fix="being cut"
      />
    </NoteSlide>

    <NoteSlide title="不及物動詞沒有被動" mark="is rising">
      <NoteFix
        wrong="The temperature is being risen."
        right="The temperature is rising."
        fix="is rising"
      />
    </NoteSlide>

    <NoteSlide title="a lot of 加複數名詞用 are" mark="are">
      <NoteFix
        wrong="A lot of new homes is being built outside the city."
        right="A lot of new homes are being built outside the city."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
