<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-everything-subject, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="everything + 單數動詞" mark="everything is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I hope', kind: 'dim' },
          { t: 'everything', role: '主詞', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'all right.', kind: 'dim' },
        ]"
      />
      <p class="translation">我希望一切都好。</p>
    </NoteSlide>

    <NoteSlide title="is、was、加 -s 的動詞" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="Everything is clean now." :marks="['is']" /><span
              class="translation"
              >現在都乾淨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="Everything was cheap at the market." :marks="['was']" /><span
              class="translation"
              >市場裡的東西都很便宜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">其他動詞</span>
          <span
            ><NoteMark sentence="Everything looks nice." :marks="['looks']" /><span
              class="translation"
              >一切看起來都很好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句：is 放在前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Is', role: 'be 動詞', kind: 'key' },
          { t: 'everything', role: '主詞', kind: 'key' },
          { t: 'OK?', kind: 'dim' },
        ]"
      />
      <p class="translation">一切都還好嗎？</p>
    </NoteSlide>

    <NoteSlide title="動詞用 is，不用 are" mark="is">
      <NoteFix
        wrong="Everything are ready for the picnic."
        right="Everything is ready for the picnic."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="問句只用一個 is">
      <NoteFix
        wrong="Is everything are OK with your room?"
        right="Is everything OK with your room?"
        fix="Is everything OK"
      />
    </NoteSlide>

    <NoteSlide title="everything 後面要有 is" mark="is">
      <NoteFix
        wrong="I hope everything all right with your family."
        right="I hope everything is all right with your family."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="all + 複數名詞，動詞用 are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All the rooms', role: '複數', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'clean.', kind: 'dim' },
        ]"
      />
      <p class="translation">所有房間都很乾淨。</p>
    </NoteSlide>

    <NoteSlide title="everyone 指人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everyone', role: '指人', kind: 'key' },
          { t: 'is', role: '單數動詞' },
          { t: 'happy.', kind: 'dim' },
        ]"
      />
      <p class="translation">每個人都很開心。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
