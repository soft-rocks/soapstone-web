<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis-533, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Must + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Must', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'now.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Must go / Must dash、Must be + 形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Must go / Must dash</span>
          <span>省略 I，說自己必須走了。</span>
        </div>
        <div>
          <span class="term">Must be + 形容詞</span>
          <span>省略 It，表示推論「一定是……」。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="省略 I：信件結尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Must go now. Write soon!" :marks="[]" /><span class="translation"
              >我得走了。快點回信！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">非正式的信和訊息結尾常用。</p>
    </NoteSlide>
    <NoteSlide title="省略 It：推論">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Must be really difficult for you." :marks="['Must be']" /><span
              class="translation"
              >這對你來說一定很難。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">聽到別人的事，常用 Must be 表示同情或推論。</p>
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="Must">
      <NoteFix wrong="Must to go now." right="Must go now." :fix="['go']" />
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="Must">
      <NoteFix wrong="Must going, see you!" right="Must go, see you!" :fix="['go,']" />
    </NoteSlide>
    <NoteSlide title="be 後面要接形容詞或名詞">
      <NoteFix wrong="Must be for you." right="Must be hard for you." :fix="['hard']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
