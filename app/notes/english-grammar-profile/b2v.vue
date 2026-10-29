<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-willingness-offers, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My mother', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'get', role: '原形動詞' },
          { t: 'us there, and she will bring us back to my house after.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、I'll、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>願意、會。說願意做的事。</span>
        </div>
        <div>
          <span class="term">I'll</span>
          <span>我來。當下決定主動幫忙。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>願意做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I'll 主動幫忙">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="That bag looks heavy. I'll carry it." :marks="['I\'ll']" /><span
              class="translation"
              >那個袋子看起來很重。我來提。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話的當下決定幫忙，常用 I'll。</p>
    </NoteSlide>
    <NoteSlide title="won't 說不願意">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The door won't open." :marks="['won\'t']" /><span
              class="translation"
              >門打不開。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He won't listen to me." :marks="['won\'t']" /><span
              class="translation"
              >他不肯聽我說。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">won't 可以說人或東西不願意、不肯。</p>
    </NoteSlide>
    <NoteSlide title="當下決定幫忙要用 I'll">
      <NoteFix
        wrong="The phone is ringing. I answer it."
        right="The phone is ringing. I'll answer it."
        :fix="['I\'ll']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix wrong="My dad will to drive us." right="My dad will drive us." :fix="['drive']" />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix wrong="She will brings us home." right="She will bring us home." :fix="['bring']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
