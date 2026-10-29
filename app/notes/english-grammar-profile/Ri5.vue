<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-affirmative-865, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞是 she，plays 和 likes 都加 -s">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'plays', role: '動詞-s', kind: 'key', ring: true },
          { t: 'tennis,', role: '受詞', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'she', role: '主詞' },
          { t: 'likes', role: '動詞-s', kind: 'key', ring: true },
          { t: 'going to the swimming pool.', kind: 'dim' },
        ]"
      />
      <p class="translation">她有在打網球，也喜歡去游泳池。</p>
    </NoteSlide>
    <NoteSlide title="主詞是單數，動詞才加 -s" mark="plays">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark sentence="I live in a small town." :marks="['live']" /><span
              class="translation"
              >我住在一個小鎮。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he</span>
          <span
            ><NoteMark sentence="My brother lives in London." :marks="['lives']" /><span
              class="translation"
              >我哥哥住在倫敦。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="動詞的字尾決定 -s 的拼法" mark="likes">
      <div class="rows is-labeled">
        <div>
          <span class="term">加 -&#x2060;s</span>
          <span>like → likes</span>
        </div>
        <div>
          <span class="term">加 -&#x2060;es</span>
          <span>watch → watches，go → goes</span>
        </div>
        <div>
          <span class="term">子音加 y</span>
          <span>study → studies</span>
        </div>
        <div>
          <span class="term">母音加 y</span>
          <span>play → plays</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 和 have 有自己的形式" mark="She">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="I am your new neighbour." :marks="['am']" /><span
              class="translation"
              >我是你的新鄰居。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="She has two cats." :marks="['has']" /><span class="translation"
              >她養了兩隻貓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是 they，動詞不加 -s">
      <NoteFix wrong="They likes pizza." right="They like pizza." :fix="['like']" />
    </NoteSlide>
    <NoteSlide title="肯定句的動詞前面不加 be">
      <NoteFix
        wrong="I am live near the station."
        right="I live near the station."
        :fix="['live']"
      />
    </NoteSlide>
    <NoteSlide title="study 的 y 改成 i 再加 -es">
      <NoteFix
        wrong="He studys English every evening."
        right="He studies English every evening."
        :fix="['studies']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
