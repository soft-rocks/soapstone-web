<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-hers-as-subject, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="hers 放在子句開頭當主詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I put Sophie\'s pictures in my bag because', kind: 'dim' },
          { t: 'hers', role: '= her bag', kind: 'key' },
          { t: 'was already packed.', role: '動詞' },
        ]"
      />
      <p class="translation">我把 Sophie 的照片放進我的包包，因為她的包包已經裝好了。</p>
    </NoteSlide>

    <NoteSlide title="hers 常放在 but、and、that 後面，前面先說出名詞" mark="hers">
      <div class="rows is-labeled">
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="My essay was long, but hers was even longer."
              :marks="['hers was']"
            /><span class="translation">我的作文很長，可是她的更長。</span></span
          >
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="My sister's flat is small, but she says that hers has the best view in town."
              :marks="['hers has']"
            /><span class="translation"
              >我姊姊的公寓很小，可是她說她的公寓有全鎮最好的景色。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="書面語用 Hers was a 加名詞，描述她的人生" mark="hers">
      <div class="rows is-labeled">
        <div>
          <span class="term">書面語</span>
          <span
            ><NoteMark
              sentence="Hers was a quiet life in a small village."
              :marks="['Hers was a']"
            /><span class="translation">她過著在小村子裡的平靜生活。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hers 沒有撇號" mark="hers">
      <NoteFix
        wrong="My car is blue, and her's is red."
        right="My car is blue, and hers is red."
        fix="hers"
      />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 hers 當主詞" mark="hers">
      <NoteFix
        wrong="His room is tidy, but her is a mess."
        right="His room is tidy, but hers is a mess."
        fix="hers"
      />
    </NoteSlide>

    <NoteSlide title="she 指人，說她的東西用 hers" mark="hers">
      <NoteFix
        wrong="My coffee is cold, but she is still hot."
        right="My coffee is cold, but hers is still hot."
        fix="hers"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
