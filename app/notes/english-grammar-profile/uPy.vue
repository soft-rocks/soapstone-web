<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-458, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + dare not + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Many local people', role: '主詞' },
          { t: 'dare not', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'to that restaurant because it is too expensive.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="dare not、daren't、原形動詞" mark="dare not">
      <div class="rows is-labeled">
        <div>
          <span class="term">dare not</span>
          <span>不敢。比較正式。</span>
        </div>
        <div>
          <span class="term">daren't</span>
          <span>dare not 的縮寫。英式英文的口語常用。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不敢做的事，前面不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="一般動詞的否定" mark="dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I don't dare to ask her." :marks="['don\'t', 'dare', 'to']" /><span
              class="translation"
              >我不敢問她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He didn't dare tell his parents."
              :marks="['didn\'t', 'dare']"
            /><span class="translation">他不敢告訴他爸媽。</span></span
          >
        </div>
      </div>
      <p class="remark">dare 也可以當一般動詞。否定用 don't、doesn't、didn't，後面可以加 to。</p>
    </NoteSlide>
    <NoteSlide title="I daren't think">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I daren't think what might happen."
              :marks="['I daren\'t think']"
            /><span class="translation">我不敢想可能會發生什麼事。</span></span
          >
        </div>
      </div>
      <p class="remark">I daren't think 表示「我不敢想」，說一件事太可怕或太嚴重。</p>
    </NoteSlide>
    <NoteSlide title="dare not 後面直接接原形動詞" mark="dare not">
      <NoteFix wrong="They dare not to go there." right="They dare not go there." :fix="['go']" />
    </NoteSlide>
    <NoteSlide title="dare not 當情態動詞時，不加 -s" mark="dare not">
      <NoteFix
        wrong="She dares not speak to him."
        right="She dare not speak to him."
        :fix="['dare']"
      />
    </NoteSlide>
    <NoteSlide title="撇號放在 n 和 t 中間，代替 not 的 o" mark="not">
      <NoteFix wrong="I darent' look down." right="I daren't look down." :fix="['daren\'t']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
