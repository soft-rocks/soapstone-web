<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-future-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + thought + (that) + 主詞 + would + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">thought / knew / hoped</span>
          <span>過去的想法。</span>
        </div>
        <div>
          <span class="term">would</span>
          <span>will 的過去形式。說過去時看到的未來。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>那時候預期會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="想法和結果不一樣">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We thought the film would be terrible, but it was beautiful."
              :marks="['but']"
            /><span class="translation">我們以為那部電影會很糟，可是它很美。</span></span
          >
        </div>
      </div>
      <p class="remark">常先說過去的想法，再用 but 說結果不一樣。</p>
    </NoteSlide>
    <NoteSlide title="轉述問題" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She asked me if I would play with her." :marks="['would']" /><span
              class="translation"
              >她問我會不會跟她一起玩。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">轉述別人問的問題，will 改成 would。</p>
    </NoteSlide>
    <NoteSlide title="過去的想法用 would" mark="would">
      <NoteFix
        wrong="I thought it will be great."
        right="I thought it would be great."
        :fix="['would']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix
        wrong="She hoped he would to call."
        right="She hoped he would call."
        :fix="['call.']"
      />
    </NoteSlide>
    <NoteSlide title="if 後面用直述句的順序">
      <NoteFix
        wrong="She asked me if would I come."
        right="She asked me if I would come."
        :fix="['I', 'come.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
