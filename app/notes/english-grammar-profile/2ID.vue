<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-complex, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主要子句 + as soon as + 子句" mark="as soon as">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I decided to go to Paris', role: '主要子句', kind: 'dim' },
          { t: 'as soon as', role: '連接詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'finished', role: '動詞' },
          { t: 'university.', role: '受詞' },
        ]"
      />
      <p class="translation">我決定大學一畢業就去巴黎。</p>
    </NoteSlide>

    <NoteSlide title="子句放在句首加逗號">
      <NoteMark
        sentence="Despite the fact that there were some problems with the sound, the festival was a success."
        :marks="['Despite the fact that', 'sound,']"
      />
      <p class="translation">雖然音響有些問題，這個節慶還是很成功。</p>
    </NoteSlide>

    <NoteSlide title="時間、條件、目的" mark="as soon as">
      <div class="rows is-labeled">
        <div>
          <span class="term">as soon as</span>
          <span>一……就……</span>
        </div>
        <div>
          <span class="term">as long as</span>
          <span>只要</span>
        </div>
        <div>
          <span class="term">in order that</span>
          <span>為了、好讓，比 so that 正式</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="對比、原因、方式">
      <div class="rows is-labeled">
        <div>
          <span class="term">despite the fact that</span>
          <span>雖然，比 although 正式</span>
        </div>
        <div>
          <span class="term">due to the fact that</span>
          <span>因為，比 because 正式</span>
        </div>
        <div>
          <span class="term">as if、as though</span>
          <span>好像</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as if 後面的時態">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在不真實</span>
          <span
            ><NoteMark sentence="He talks as if he knew everything." :marks="['knew']" /><span
              class="translation"
              >他講話的樣子好像什麼都懂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去不真實</span>
          <span
            ><NoteMark
              sentence="She looked at me as though she had seen a ghost."
              :marks="['had seen']"
            /><span class="translation">她看著我，好像見到鬼一樣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="despite 接子句加 the fact that">
      <NoteFix
        wrong="Despite it was raining, we played the match."
        right="Despite the fact that it was raining, we played the match."
        fix="the fact that"
      />
    </NoteSlide>

    <NoteSlide title="as soon as 子句用現在式">
      <NoteFix
        wrong="I'll text you as soon as the plane will land."
        right="I'll text you as soon as the plane lands."
        fix="lands."
      />
    </NoteSlide>

    <NoteSlide title="as long as 最後的 as 不能少">
      <NoteFix
        wrong="You can use my laptop as long you are careful."
        right="You can use my laptop as long as you are careful."
        fix="as long as"
      />
    </NoteSlide>

    <NoteSlide title="due to 接子句加 the fact that">
      <NoteFix
        wrong="The flight was cancelled due to the weather was bad."
        right="The flight was cancelled due to the fact that the weather was bad."
        fix="the fact that"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
