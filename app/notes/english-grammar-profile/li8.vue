<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-pointing, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + 地方的名詞" mark="this area">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I want to let you know about', role: '主詞 + 動詞 + 介係詞', kind: 'dim' },
          { t: 'this', role: '說話的人所在', kind: 'key' },
          { t: 'area', role: '地方的名詞' },
          { t: 'and the shops near here.', role: '另一個名詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我想跟你介紹一下這一區，還有這附近的商店。</p>
    </NoteSlide>

    <NoteSlide title="this 指自己所在的地方" mark="this area">
      <div class="rows is-labeled">
        <div>
          <span class="term">在這個小鎮</span>
          <span
            ><NoteMark sentence="This town is very quiet at night." :marks="['This town']" /><span
              class="translation"
              >這個小鎮晚上很安靜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">在這所學校</span>
          <span
            ><NoteMark
              sentence="The teachers at this school are very kind."
              :marks="['this school']"
            /><span class="translation">這所學校的老師都很親切。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 加名詞，here 單獨用" mark="here.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span
            ><NoteMark sentence="This café is my favourite." :marks="['This café']" /><span
              class="translation"
              >這家咖啡館是我最喜歡的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">here</span>
          <span
            ><NoteMark sentence="The coffee here is very good." :marks="['here']" /><span
              class="translation"
              >這裡的咖啡很好喝。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="自己所在的地方用 this" mark="this area">
      <NoteFix
        wrong="I live in Taipei. I really like that city."
        right="I live in Taipei. I really like this city."
        fix="this city."
      />
    </NoteSlide>

    <NoteSlide title="this 後面接單數名詞" mark="this area">
      <NoteFix
        wrong="There are many good restaurants in this streets."
        right="There are many good restaurants in this street."
        fix="this street."
      />
    </NoteSlide>

    <NoteSlide title="this 前面不加 the" mark="this">
      <NoteFix
        wrong="I am happy at the this school."
        right="I am happy at this school."
        fix="at this"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 this，不用 here" mark="this">
      <NoteFix wrong="I like here place." right="I like this place." fix="this place." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
