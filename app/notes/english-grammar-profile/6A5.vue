<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-and, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="同一個比較級重複兩次，表示越來越怎麼樣" mark="smaller and smaller">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The nights', role: '主詞' },
          { t: 'are getting', role: 'get', kind: 'dim' },
          { t: 'shorter', role: '形容詞-er', kind: 'key' },
          { t: 'and', role: 'and', kind: 'key', ring: true },
          { t: 'shorter.', role: '形容詞-er', kind: 'key' },
        ]"
      />
      <p class="translation">晚上越來越短。</p>
    </NoteSlide>

    <NoteSlide title="常放在 get、become、grow 後面" mark="become">
      <div class="rows is-labeled">
        <div>
          <span class="term">get（口語）</span>
          <span
            ><NoteMark sentence="The tea in my cup got cooler and cooler." :marks="['got']" /><span
              class="translation"
              >我杯子裡的茶越來越涼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">become（正式）</span>
          <span
            ><NoteMark
              sentence="The village became quieter and quieter."
              :marks="['became']"
            /><span class="translation">村子越來越安靜。</span></span
          >
        </div>
        <div>
          <span class="term">grow</span>
          <span
            ><NoteMark sentence="The cat grew fatter and fatter." :marks="['grew']" /><span
              class="translation"
              >那隻貓越來越胖。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="長的形容詞重複 more" mark="smaller and smaller">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The trains are becoming', kind: 'dim' },
          { t: 'more and more', role: 'more and more', kind: 'key', ring: true },
          { t: 'crowded.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">火車越來越擠。</p>
    </NoteSlide>

    <NoteSlide title="不規則的比較級也重複" mark="smaller and smaller">
      <NoteMark
        sentence="The view got better and better as we climbed."
        :marks="['better and better']"
      />
      <p class="translation">我們越爬，風景越好。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞只重複 more" mark="smaller and smaller">
      <NoteFix
        wrong="Phones are getting more expensive and more expensive."
        right="Phones are getting more and more expensive."
        fix="more and more"
      />
    </NoteSlide>

    <NoteSlide title="短的形容詞不加 more" mark="smaller and smaller">
      <NoteFix
        wrong="The soup got more and more hotter."
        right="The soup got hotter and hotter."
        fix="hotter and hotter"
      />
    </NoteSlide>

    <NoteSlide title="越來越怎麼樣要用比較級" mark="smaller and smaller">
      <NoteFix
        wrong="The music got loud and loud."
        right="The music got louder and louder."
        fix="louder and louder"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
