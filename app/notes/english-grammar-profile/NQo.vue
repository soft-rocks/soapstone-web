<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-requests-613, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will you please + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will you please</span>
          <span>請您……。正式的請求。</span>
        </div>
        <div>
          <span class="term">Will you … !</span>
          <span>句尾用驚嘆號時，是生氣的命令。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>請對方做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式信件的請求" mark="Will you please">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Will you please inform me about the exact price?"
              :marks="['Will you please']"
            /><span class="translation">可以請您告訴我確切的價格嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">商業信件常用 Will you please 請對方提供資料。</p>
    </NoteSlide>
    <NoteSlide title="生氣的命令" mark="Will you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you be quiet!" :marks="['Will you']" /><span
              class="translation"
              >你給我安靜！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Will you 加命令，句尾用驚嘆號，表示說話者很不耐煩。</p>
    </NoteSlide>
    <NoteSlide title="please 放在 you 後面" mark="please">
      <NoteFix
        wrong="Will please you send it?"
        right="Will you please send it?"
        :fix="['you', 'send']"
      />
    </NoteSlide>
    <NoteSlide title="please 後面接原形動詞" mark="please">
      <NoteFix
        wrong="Will you please sending the form?"
        right="Will you please send the form?"
        :fix="['send']"
      />
    </NoteSlide>
    <NoteSlide title="請求用 will you please，不用 do" mark="Will you please">
      <NoteFix
        wrong="Do you please call me back?"
        right="Will you please call me back?"
        :fix="['Will']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
