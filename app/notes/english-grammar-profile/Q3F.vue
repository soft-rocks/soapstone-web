<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-these, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these + 複數名詞" mark="these clothes">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'these', role: '這些', kind: 'key' },
          { t: 'clothes', role: '複數名詞' },
          { t: 'because they weren\'t expensive.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">我買這些衣服是因為它們不貴。</p>
    </NoteSlide>

    <NoteSlide title="this 加單數，these 加複數" mark="these">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span>this shirt、this child、this box</span>
        </div>
        <div>
          <span class="term">these</span>
          <span>these shirts、these children、these boxes</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞用複數" mark="these clothes">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark sentence="These apples are sweet." :marks="['These apples are']" /><span
              class="translation"
              >這些蘋果很甜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般動詞</span>
          <span
            ><NoteMark sentence="These shoes hurt my feet." :marks="['These shoes hurt']" /><span
              class="translation"
              >這雙鞋穿起來腳很痛。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="只有複數形的名詞" mark="these clothes">
      <div class="rows is-labeled">
        <div>
          <span class="term">jeans</span>
          <span
            ><NoteMark sentence="These jeans are too long." :marks="['These jeans']" /><span
              class="translation"
              >這條牛仔褲太長了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">scissors</span>
          <span
            ><NoteMark sentence="Are these scissors sharp?" :marks="['these scissors']" /><span
              class="translation"
              >這把剪刀利嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數名詞前面用 this">
      <NoteFix wrong="I like these hat." right="I like this hat." fix="this hat." />
    </NoteSlide>

    <NoteSlide title="these 加名詞，動詞不加 -s">
      <NoteFix
        wrong="These flowers smells lovely."
        right="These flowers smell lovely."
        fix="smell"
      />
    </NoteSlide>

    <NoteSlide title="jeans 前面用 these" mark="these clothes">
      <NoteFix wrong="This jeans are new." right="These jeans are new." fix="These jeans" />
    </NoteSlide>

    <NoteSlide title="不可數名詞前面用 this">
      <NoteFix
        wrong="These furniture is old."
        right="This furniture is old."
        fix="This furniture"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
