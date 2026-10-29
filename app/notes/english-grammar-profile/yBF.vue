<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-with-determiners-quantity-695, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a little bit of 說很少的量">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I hope', kind: 'dim' },
          { t: 'this little bit of', role: '數量詞', kind: 'key' },
          { t: 'advice', role: '不可數名詞' },
          { t: 'can help you!', kind: 'dim' },
        ]"
      />
      <p class="translation">希望這一點小建議能幫到你！</p>
    </NoteSlide>

    <NoteSlide title="數量詞說量少、剛好夠、量多或再多一些" mark="little bit of">
      <div class="rows is-labeled">
        <div>
          <span class="term">量少</span>
          <span>a bit of, a little bit of, not much</span>
        </div>
        <div>
          <span class="term">剛好夠</span>
          <span>enough</span>
        </div>
        <div>
          <span class="term">量多</span>
          <span>plenty of, loads of, a great deal of</span>
        </div>
        <div>
          <span class="term">再多一些（正式）</span>
          <span>further</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="much 常用在否定句和疑問句" mark="little bit of">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="They can't spend much time with you." :marks="['much']" /><span
              class="translation"
              >他們沒辦法花很多時間陪你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="How much luggage have you got?" :marks="['much']" /><span
              class="translation"
              >你有多少行李？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a bit 放在名詞前面要加 of" mark="bit of">
      <NoteFix wrong="Can I have a bit milk?" right="Can I have a bit of milk?" fix="of" />
    </NoteSlide>

    <NoteSlide title="enough 放在名詞前面">
      <NoteFix
        wrong="We haven't got money enough."
        right="We haven't got enough money."
        fix="enough money"
      />
    </NoteSlide>

    <NoteSlide title="plenty 後面要加 of">
      <NoteFix
        wrong="There's plenty food for everyone."
        right="There's plenty of food for everyone."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="people 是可數名詞，用 many">
      <NoteFix
        wrong="There weren't much people at the concert."
        right="There weren't many people at the concert."
        fix="many"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
