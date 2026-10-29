<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-when, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="When + 主詞 + 過去式, + 主詞 + 過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span>當……的時候。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>兩個子句都用過去式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="找東西的時候" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My watch is missing. I think I lost it when I was in the swimming pool."
              :marks="['when']"
            /><span class="translation">我的手錶不見了。我想我是在游泳池的時候弄丟的。</span></span
          >
        </div>
      </div>
      <p class="remark">when 子句常用來回想東西是什麼時候掉的。</p>
    </NoteSlide>
    <NoteSlide title="說過去的事，when 子句用過去式" mark="When">
      <NoteFix
        wrong="When I arrive at the hotel yesterday, the room wasn't ready."
        right="When I arrived at the hotel yesterday, the room wasn't ready."
        :fix="['arrived']"
      />
    </NoteSlide>
    <NoteSlide title="when 子句後面加逗號，不用 then" mark="When">
      <NoteFix
        wrong="When we got to the stadium then the match was over."
        right="When we got to the stadium, the match was over."
        :fix="['stadium,']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 we，用 were">
      <NoteFix
        wrong="When we was young, our family lived in Spain."
        right="When we were young, our family lived in Spain."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
