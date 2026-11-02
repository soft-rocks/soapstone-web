<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-habitual-and-typical, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will often 說人常常會做的事" mark="will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'often', role: '頻率副詞', alts: ['usually'] },
          { t: 'knock', role: '原形動詞', kind: 'key' },
          { t: 'on the door to see how you are.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="這個 will 說習慣，不說未來" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="On Sundays my dad will wash the car and then read the paper."
              :marks="['will']"
            /><span class="translation">星期天我爸爸常常會洗車，然後看報紙。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will usually 說東西通常的樣子" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="A good curry will usually contain garlic and onion."
              :marks="['will usually']"
            /><span class="translation">好的咖哩通常會有大蒜和洋蔥。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面的動詞不加 -s" mark="will">
      <NoteFix
        wrong="She will often knocks on the door."
        right="She will often knock on the door."
        :fix="['knock']"
      />
    </NoteSlide>
    <NoteSlide title="will 不加 -s" mark="will">
      <NoteFix
        wrong="He wills often go for walks."
        right="He will often go for walks."
        :fix="['will']"
      />
    </NoteSlide>
    <NoteSlide title="usually 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="The dish will usually to contain rice."
        right="The dish will usually contain rice."
        :fix="['contain']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
