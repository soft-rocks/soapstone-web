<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-simple-negative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 後面加 not，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'a girl', role: '名詞', kind: 'dim' },
          { t: 'who', role: '主詞' },
          { t: 'is', role: 'is' },
          { t: 'not', role: 'not', kind: 'key' },
          { t: 'accepted', role: '過去分詞', kind: 'key' },
          { t: 'in her class', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">一個在班上不被接納的女孩</p>
    </NoteSlide>

    <NoteSlide title="縮寫成 isn't、aren't、I'm not" mark="is not">
      <div class="rows is-labeled">
        <div>
          <span class="term">isn't</span>
          <span
            ><NoteMark sentence="Breakfast isn't included." :marks="['isn\'t']" /><span
              class="translation"
              >早餐沒有包含在內。</span
            ></span
          >
        </div>
        <div>
          <span class="term">aren't</span>
          <span
            ><NoteMark sentence="The sheets aren't printed properly." :marks="['aren\'t']" /><span
              class="translation"
              >紙印得不清楚。</span
            ></span
          >
        </div>
        <div>
          <span class="term">I'm not</span>
          <span
            ><NoteMark sentence="I'm not paid for the extra hours." :marks="['I\'m not']" /><span
              class="translation"
              >加班的時數我沒有拿到錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動的否定不用 don't" mark="is not">
      <NoteFix
        wrong="Dogs don't allowed in the shop."
        right="Dogs aren't allowed in the shop."
        fix="aren't"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 be 後面" mark="is not">
      <NoteFix wrong="Breakfast not is included." right="Breakfast is not included." fix="is not" />
    </NoteSlide>

    <NoteSlide title="am not 縮寫成 I'm not" mark="not">
      <NoteFix
        wrong="I amn't paid for the extra hours."
        right="I'm not paid for the extra hours."
        fix="I'm not"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
