<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-negative, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Don't + 原形動詞，叫別人不要做" mark="Don't tell">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Don\'t', role: 'do not', kind: 'key', ring: true },
          { t: 'touch', role: '原形動詞', kind: 'key' },
          { t: 'the iron.', role: '受詞' },
          { t: 'I\'ve just used it.', kind: 'dim' },
        ]"
      />
      <p class="translation">別碰熨斗，我剛用過。</p>
    </NoteSlide>

    <NoteSlide title="Don't 用來勸告、指示和禁止" mark="Don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">勸告</span>
          <span
            ><NoteMark
              sentence="Stop at the next service station for a coffee. Don't drive when you're sleepy."
              :marks="['Don\'t drive']"
            /><span class="translation"
              >在下一個休息站停下來喝杯咖啡。想睡的時候別開車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">指示</span>
          <span
            ><NoteMark
              sentence="Here's a present from Grandma. Don't open the box until your birthday."
              :marks="['Don\'t open']"
            /><span class="translation">這是奶奶送的禮物。生日以前別打開這個盒子。</span></span
          >
        </div>
        <div>
          <span class="term">禁止</span>
          <span
            ><NoteMark
              sentence="The floor is wet, children. Don't run in the hall."
              :marks="['Don\'t run']"
            /><span class="translation">孩子們，地板是濕的。走廊上不要跑。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Don't be + 形容詞" mark="Don't">
      <NoteMark sentence="Don't be shy. Come and say hello." :marks="['Don\'t be shy']" />
      <p class="translation">別害羞，過來打招呼。</p>
    </NoteSlide>

    <NoteSlide title="否定祈使句用 Don't 開頭" mark="Don't">
      <NoteFix
        wrong="Not leave your bike by the gate."
        right="Don't leave your bike by the gate."
        fix="Don't"
      />
    </NoteSlide>

    <NoteSlide title="Don't 後面用原形動詞" mark="tell">
      <NoteFix
        wrong="Don't crying in front of the children."
        right="Don't cry in front of the children."
        fix="cry"
      />
    </NoteSlide>

    <NoteSlide title="祈使句的否定一律用 Don't" mark="Don't">
      <NoteFix
        wrong="Doesn't be late for the train tomorrow."
        right="Don't be late for the train tomorrow."
        fix="Don't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
