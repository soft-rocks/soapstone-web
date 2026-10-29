<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-questions-about-the-future, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Are you coming to the concert?" :marks="[]" /><span
              class="translation"
              >你要來聽演唱會嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, I am. / No, I'm not." :marks="[]" /><span class="translation"
              >要。／不要。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">簡答用 be 動詞。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Where are you going for your holidays?" :marks="['Where']" /><span
              class="translation"
              >你放假要去哪裡？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">常用的疑問詞：what、where、when、what time、who、how。</p>
    </NoteSlide>
    <NoteSlide title="常用的動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What are you doing tonight?" :marks="[]" /><span
              class="translation"
              >你今晚要做什麼？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問未來的計畫，常用 come、go、do、leave、meet、stay、have。</p>
    </NoteSlide>
    <NoteSlide title="疑問句裡，be 動詞放在主詞前面">
      <NoteFix
        wrong="When you are coming?"
        right="When are you coming?"
        :fix="['are', 'coming?']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式的疑問句用 be 動詞開頭，不用 do">
      <NoteFix
        wrong="Do you coming to the party?"
        right="Are you coming to the party?"
        :fix="['Are']"
      />
    </NoteSlide>
    <NoteSlide title="簡答用問句裡的 be 動詞">
      <NoteFix
        wrong="Are you coming? — Yes, I do."
        right="Are you coming? — Yes, I am."
        :fix="['am.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
