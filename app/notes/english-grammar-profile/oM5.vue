<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// during-for-in-839, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複合介系詞整組當一個介系詞用" mark="in front of">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We can meet', kind: 'dim' },
          { t: 'in front of', role: '複合介系詞', kind: 'key' },
          { t: 'our tennis club.', role: '名詞片語' },
        ]"
      />
      <p class="translation">我們可以在我們網球俱樂部前面碰面。</p>
    </NoteSlide>

    <NoteSlide title="常用的複合介系詞說位置、舉例、原因和替代" mark="in front of">
      <div class="rows is-labeled">
        <div>
          <span class="term">in front of<br /><i>在……前面</i></span>
          <span>in front of the school</span>
        </div>
        <div>
          <span class="term">next to<br /><i>在……旁邊</i></span>
          <span>next to the window</span>
        </div>
        <div>
          <span class="term">close to<br /><i>離……很近</i></span>
          <span>close to the beach</span>
        </div>
        <div>
          <span class="term">such as<br /><i>像是</i></span>
          <span>fruit such as apples and bananas</span>
        </div>
        <div>
          <span class="term">because of<br /><i>因為</i></span>
          <span>because of the rain</span>
        </div>
        <div>
          <span class="term">instead of<br /><i>而不是</i></span>
          <span>tea instead of coffee</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="because of 接名詞片語，because 接子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">because of</span>
          <span
            ><NoteMark
              sentence="The match was cancelled because of the storm."
              :marks="['because of the storm']"
            /><span class="translation">比賽因為暴風雨取消了。</span></span
          >
        </div>
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="The match was cancelled because it was stormy."
              :marks="['because it was stormy']"
            /><span class="translation">比賽取消了，因為有暴風雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="next to 的 to 不能省略">
      <NoteFix wrong="Come and sit next me." right="Come and sit next to me." fix="to" />
    </NoteSlide>

    <NoteSlide title="in front of 的 of 不能省略" mark="of">
      <NoteFix
        wrong="There's a tree in front my house."
        right="There's a tree in front of my house."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="because of 後面接名詞片語，不接子句">
      <NoteFix
        wrong="We had our picnic indoors because of it was raining."
        right="We had our picnic indoors because of the rain."
        fix="the rain"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
