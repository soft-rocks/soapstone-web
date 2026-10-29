<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-linking-complement, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="look 連接主詞和補語，意思是看起來">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'looks', role: '連綴動詞', kind: 'key' },
          { t: 'good', role: '補語' },
          { t: 'on you.', kind: 'dim' },
        ]"
      />
      <p class="translation">這個你穿起來很好看。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞說看起來、聽起來、感覺起來或變得" mark="looks">
      <div class="rows is-labeled">
        <div>
          <span class="term">sound</span>
          <span
            ><NoteMark sentence="The new song sounds great." :marks="['sounds']" /><span
              class="translation"
              >新歌聽起來很棒。</span
            ></span
          >
        </div>
        <div>
          <span class="term">feel</span>
          <span
            ><NoteMark sentence="This blanket feels warm." :marks="['feels']" /><span
              class="translation"
              >這條毯子摸起來很暖。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="The roads will get icy tonight." :marks="['get']" /><span
              class="translation"
              >今晚路面會結冰。</span
            ></span
          >
        </div>
        <div>
          <span class="term">become</span>
          <span
            ><NoteMark sentence="My neighbour became a good friend." :marks="['became']" /><span
              class="translation"
              >我的鄰居成了好朋友。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="補語說明主詞，用形容詞，不用副詞" mark="good">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The curry', role: '主詞' },
          { t: 'smells', role: '連綴動詞' },
          { t: 'good.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">咖哩聞起來很香。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞後面的補語用形容詞" mark="good">
      <NoteFix
        wrong="That dress looks beautifully on you."
        right="That dress looks beautiful on you."
        fix="beautiful"
      />
    </NoteSlide>

    <NoteSlide title="連綴動詞後面直接接形容詞，不加 like">
      <NoteFix
        wrong="Your lemonade tastes like refreshing."
        right="Your lemonade tastes refreshing."
        fix="tastes delicious"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 it，現在式動詞加 -&#x2060;s" mark="looks">
      <NoteFix
        wrong="The water feel cold this morning."
        right="The water feels cold this morning."
        fix="feels"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
