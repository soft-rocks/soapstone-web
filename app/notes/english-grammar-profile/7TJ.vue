<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-irregular-plural-noun-s, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不規則複數名詞加 's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'clothes', role: '名詞', kind: 'dim' },
          { t: 'that attract', role: '關係子句', kind: 'dim' },
          { t: 'people\'s', role: '不規則複數名詞 + \'s', kind: 'key' },
          { t: 'attention.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">能吸引別人目光的衣服。</p>
    </NoteSlide>

    <NoteSlide title="字尾是 s 加 '，不是 s 加 's" mark="people's">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則的複數</span>
          <span
            ><NoteMark sentence="the girls' school" :marks="['girls\'']" /><span class="translation"
              >女子學校</span
            ></span
          >
        </div>
        <div>
          <span class="term">不規則的複數</span>
          <span
            ><NoteMark sentence="the children's school" :marks="['children\'s']" /><span
              class="translation"
              >孩子們的學校</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的不規則複數" mark="people's">
      <div class="rows is-labeled">
        <div>
          <span class="term">people</span>
          <span
            ><NoteMark
              sentence="Don't worry about other people's opinions."
              :marks="['people\'s']"
            /><span class="translation">別在意別人的看法。</span></span
          >
        </div>
        <div>
          <span class="term">children</span>
          <span
            ><NoteMark
              sentence="My mother writes children's books."
              :marks="['children\'s']"
            /><span class="translation">我媽媽寫童書。</span></span
          >
        </div>
        <div>
          <span class="term">women</span>
          <span
            ><NoteMark
              sentence="Women's football is becoming very popular."
              :marks="['Women\'s']"
            /><span class="translation">女子足球越來越受歡迎。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="撇號放在 s 前面" mark="people's">
      <NoteFix
        wrong="The childrens' toys are everywhere."
        right="The children's toys are everywhere."
        fix="children's"
      />
    </NoteSlide>

    <NoteSlide title="men 不再加 s" mark="people's">
      <NoteFix
        wrong="I bought it in the mens's department."
        right="I bought it in the men's department."
        fix="men's"
      />
    </NoteSlide>

    <NoteSlide title="表示所有要加撇號" mark="people's">
      <NoteFix
        wrong="The womens team won the cup."
        right="The women's team won the cup."
        fix="women's"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
