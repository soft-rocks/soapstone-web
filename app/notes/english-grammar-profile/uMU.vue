<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-457, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + dare + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I can cook if', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'dare', kind: 'key', ring: true },
          { t: 'eat', role: '原形動詞' },
          { t: 'it!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="dare、原形動詞" mark="dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">dare</span>
          <span>敢。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>敢做的事，前面不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常出現的地方" mark="dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 子句</span>
          <span
            ><NoteMark sentence="I'll tell you, if you dare listen." :marks="['dare']" /><span
              class="translation"
              >如果你敢聽，我就告訴你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="Dare we ask him?" :marks="['Dare']" /><span class="translation"
              >我們敢問他嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定的意思</span>
          <span
            ><NoteMark sentence="Nobody dare say a word." :marks="['dare']" /><span
              class="translation"
              >沒有人敢說一句話。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">dare 加原形動詞的肯定句不常見。常出現在。</p>
    </NoteSlide>
    <NoteSlide title="一般動詞的 dare" mark="dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She dares to say what she thinks." :marks="['to']" /><span
              class="translation"
              >她敢說出自己的想法。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">dare 也可以當一般動詞用。後面加 to，主詞是第三人稱單數時加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="主詞是 you，dare 不加 -s" mark="dare">
      <NoteFix
        wrong="If you dares eat it, I'll cook."
        right="If you dare eat it, I'll cook."
        :fix="['dare']"
      />
    </NoteSlide>
    <NoteSlide title="dare 後面接原形動詞" mark="dare">
      <NoteFix
        wrong="I can cook if you dare eating it."
        right="I can cook if you dare eat it."
        :fix="['eat']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事也一樣，dare 後面接原形動詞" mark="dare">
      <NoteFix wrong="Nobody dare said a word." right="Nobody dare say a word." :fix="['say']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
