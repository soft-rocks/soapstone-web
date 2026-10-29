<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-adjective-plural-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複數名詞前面可以只放形容詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'have', kind: 'dim' },
          { t: 'new', role: '形容詞', kind: 'key' },
          { t: 'neighbors.', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我有新鄰居了。</p>
      <p class="remark">說的是一般的一群人或東西，不特別指哪一些。</p>
    </NoteSlide>

    <NoteSlide title="加了 the，說的就是聽話的人知道的那一群" mark="new">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 複數名詞<br /><i>一般的一群</i></span>
          <span
            ><NoteMark sentence="They're nice people." :marks="['nice people']" /><span
              class="translation"
              >他們人很好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the + 形容詞 + 複數名詞<br /><i>知道的那一群</i></span>
          <span
            ><NoteMark
              sentence="The new neighbors are very quiet."
              :marks="['The new neighbors']"
            /><span class="translation">新來的那些鄰居很安靜。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面沒有限定詞，名詞要用複數" mark="neighbors">
      <NoteFix wrong="This town has nice shop." right="This town has nice shops." fix="shops" />
    </NoteSlide>

    <NoteSlide title="形容詞的形式不隨名詞改變" mark="new">
      <NoteFix wrong="They sell cheaps clothes." right="They sell cheap clothes." fix="cheap" />
    </NoteSlide>

    <NoteSlide title="形容詞放在名詞前面" mark="new">
      <NoteFix
        wrong="We need chairs new for the office."
        right="We need new chairs for the office."
        fix="new chairs"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
