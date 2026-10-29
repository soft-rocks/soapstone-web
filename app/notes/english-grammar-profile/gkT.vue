<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-plans-and-intentions-with-will-388, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will + 主詞 + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Will', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'come', role: '原形動詞 ...' },
          { t: 'by train?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Will、主詞、原形動詞" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will</span>
          <span>放在主詞前面。</span>
        </div>
        <div>
          <span class="term">主詞</span>
          <span>常是 you，問對方的計畫。也可以是別人。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>對方打算做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="是非疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you stay for the whole weekend?" :marks="[]" /><span
              class="translation"
              >你整個週末都會待著嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問對方會不會做某件事。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What time will you leave?" :marks="[]" /><span class="translation"
              >你幾點要出發？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問計畫的細節，像時間、地點、方法。</p>
    </NoteSlide>
    <NoteSlide title="回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, I will. / No, I won't." :marks="[]" /><span
              class="translation"
              >會。／不會。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 的疑問句不加 do" mark="Will">
      <NoteFix
        wrong="Do you will come by train?"
        right="Will you come by train?"
        :fix="['Will', 'come']"
      />
    </NoteSlide>
    <NoteSlide title="will 放在主詞前面" mark="Will">
      <NoteFix wrong="Where you will stay?" right="Where will you stay?" :fix="['will', 'stay?']" />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="Will">
      <NoteFix
        wrong="Will you bringing your sister?"
        right="Will you bring your sister?"
        :fix="['bring']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
