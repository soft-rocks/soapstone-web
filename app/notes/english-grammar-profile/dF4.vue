<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-with-like, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Would you like + to + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'m going to a concert on Saturday.', kind: 'dim' },
          { t: 'Would you like', kind: 'key', ring: true },
          { t: 'to', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'with me?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Would you like to、Would you like + 名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Would you like to</span>
          <span>你想……嗎？邀請對方做某件事。</span>
        </div>
        <div>
          <span class="term">Would you like + 名詞</span>
          <span>你想要……嗎？問對方要不要某樣東西。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先說計畫，再邀請">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I want to watch the film. Would you like to come with me?"
              :marks="[]"
            /><span class="translation">我想去看那部電影。你想跟我一起去嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">邀請常先說自己的計畫，再問對方。</p>
    </NoteSlide>
    <NoteSlide title="would you like 後面接動詞時要加 to" mark="Would you like">
      <NoteFix
        wrong="Would you like come with me?"
        right="Would you like to come with me?"
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="問句把 would 放在句首，不用 do" mark="Would">
      <NoteFix
        wrong="Do you would like some tea?"
        right="Would you like some tea?"
        :fix="['Would', 'like']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="Would you like to playing tennis?"
        right="Would you like to play tennis?"
        :fix="['play']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
