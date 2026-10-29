<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-question-461, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Dare + 主詞 + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Dare', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'run', role: '原形動詞 ...' },
          { t: 'the risk of even one child turning to violent crime?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="dare、原形動詞" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">dare</span>
          <span>放在句首，主詞前面。不用 do。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>前面不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="修辭問句" mark="Dare we">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Dare we ignore the warnings?" :marks="['Dare we']" /><span
              class="translation"
              >我們敢忽視這些警告嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Dare we ...? 常是修辭問句，意思是「我們不能這樣做」。</p>
    </NoteSlide>
    <NoteSlide title="一般動詞的疑問句" mark="Dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Do you dare to tell her?" :marks="['dare', 'Do', 'to']" /><span
              class="translation"
              >你敢告訴她嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">日常說話常用 do 加 dare，後面可以加 to。</p>
    </NoteSlide>
    <NoteSlide title="dare 放句首時，後面直接接原形動詞" mark="Dare">
      <NoteFix
        wrong="Dare we to accept the offer?"
        right="Dare we accept the offer?"
        :fix="['accept']"
      />
    </NoteSlide>
    <NoteSlide title="dare 放句首時不加 -s" mark="Dare">
      <NoteFix wrong="Dares she ask the boss?" right="Dare she ask the boss?" :fix="['Dare']" />
    </NoteSlide>
    <NoteSlide title="主詞後面接原形動詞">
      <NoteFix wrong="Dare we taking the risk?" right="Dare we take the risk?" :fix="['take']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
