<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-with-it-would-be, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It would be + 形容詞 + if + 主詞 + 過去式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It would be', kind: 'key', ring: true },
          { t: 'perfect', role: '形容詞' },
          { t: 'if', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'arrived', role: '過去式' },
          { t: 'at 7.20.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="it would be、形容詞、if 子句" mark="perfect">
      <div class="rows is-labeled">
        <div>
          <span class="term">it would be</span>
          <span>那會……。提出建議。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>常用 good、nice、great、perfect、better。</span>
        </div>
        <div>
          <span class="term">if 子句</span>
          <span>用過去式，可是說的是現在或未來。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if 子句用過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It would be great if you came with me." :marks="[]" /><span
              class="translation"
              >如果你跟我一起去，那就太好了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">it would be … if 後面的子句用過去式，讓建議更客氣。</p>
    </NoteSlide>
    <NoteSlide title="to 加原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It would be nice to bring your new game."
              :marks="['It would be nice to']"
            /><span class="translation">如果帶你的新遊戲來就好了。</span></span
          >
        </div>
      </div>
      <p class="remark">it would be nice to 加原形動詞，說建議對方做的事。</p>
    </NoteSlide>
    <NoteSlide title="would 後面接原形 be" mark="would">
      <NoteFix
        wrong="It would being nice to see you."
        right="It would be nice to see you."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="would be 後面要接形容詞" mark="would be">
      <NoteFix
        wrong="It would be if you brought a towel."
        right="It would be useful if you brought a towel."
        :fix="['useful']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞">
      <NoteFix
        wrong="It would be nice to bringing some music."
        right="It would be nice to bring some music."
        :fix="['bring']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
