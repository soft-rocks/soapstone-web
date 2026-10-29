<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-comparative-adjective-than-non-finite-clause, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="than 前後都用 to 不定詞，比較兩件事" mark="than to have a partner">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It\'s', role: '虛主詞' },
          { t: 'cheaper', role: '比較級', kind: 'dim' },
          { t: 'to cook at home', role: 'to 不定詞', kind: 'key' },
          { t: 'than', role: 'than' },
          { t: 'to eat out.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">在家煮飯比外食便宜。</p>
    </NoteSlide>

    <NoteSlide title="than + expected、planned、usual，省略了主詞" mark="than">
      <div class="rows is-labeled">
        <div>
          <span class="term">than expected</span>
          <span
            ><NoteMark
              sentence="We need more staff at weekends. The new café is busier than expected."
              :marks="['than expected']"
            /><span class="translation">我們週末需要更多人手。新咖啡店比預期的熱鬧。</span></span
          >
        </div>
        <div>
          <span class="term">than planned</span>
          <span
            ><NoteMark
              sentence="Everyone agreed quickly. The meeting finished earlier than planned."
              :marks="['than planned']"
            /><span class="translation">大家很快就同意了。會議比計畫的早結束。</span></span
          >
        </div>
        <div>
          <span class="term">than usual</span>
          <span
            ><NoteMark
              sentence="There's a football match in town. The roads are busier than usual today."
              :marks="['than usual']"
            /><span class="translation">鎮上有一場足球賽。今天路上的車比平常多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較級後面接 to 加原形動詞" mark="to be">
      <NoteFix
        wrong="It's easier walk than to take the bus."
        right="It's easier to walk than to take the bus."
        fix="to walk"
      />
    </NoteSlide>

    <NoteSlide title="than 前面要用比較級" mark="easier">
      <NoteFix
        wrong="The test was hard than expected."
        right="The test was harder than expected."
        fix="harder"
      />
    </NoteSlide>

    <NoteSlide title="比較級後面接 than，不接 that" mark="than">
      <NoteFix
        wrong="Sales were better that expected."
        right="Sales were better than expected."
        fix="than"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
