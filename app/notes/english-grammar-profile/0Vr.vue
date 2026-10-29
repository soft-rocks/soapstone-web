<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-gender-neutral-1003, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="he or she 回指性別不明的人" mark="he or she has">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'somebody', role: '不定代名詞', kind: 'key' },
          { t: 'wants to be a journalist,', kind: 'dim' },
          { t: 'he or she', role: '回指', kind: 'key' },
          { t: 'has to', role: '單數動詞' },
        ]"
      />
      <p class="translation">如果有人想當記者，他就必須……</p>
    </NoteSlide>

    <NoteSlide title="回指的寫法" mark="he or she">
      <div class="rows is-labeled">
        <div>
          <span class="term">he or she</span>
          <span
            ><NoteMark
              sentence="A doctor must listen carefully to every patient, and he or she must never rush."
              :marks="['he or she']"
            /><span class="translation">醫生必須仔細聽每個病人說話，而且絕對不能急。</span></span
          >
        </div>
        <div>
          <span class="term">he/she（書面）</span>
          <span
            ><NoteMark
              sentence="Each applicant must show that he/she can speak two languages."
              :marks="['he/she']"
            /><span class="translation">每位申請人都必須證明自己會說兩種語言。</span></span
          >
        </div>
        <div>
          <span class="term">they</span>
          <span
            ><NoteMark
              sentence="If a customer is not happy, they can ask for their money back."
              :marks="['they']"
            /><span class="translation">客人如果不滿意，可以要求退錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="知道是男是女，直接用 he 或 she">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Ask', kind: 'dim' },
          { t: 'your mother', role: '女性', kind: 'key' },
          { t: 'if', kind: 'dim' },
          { t: 'she', role: '回指', kind: 'key' },
          { t: 'needs any help.', kind: 'dim' },
        ]"
      />
      <p class="translation">問問你媽媽需不需要幫忙。</p>
    </NoteSlide>

    <NoteSlide title="受格 him or her，所有格 his or her">
      <div class="rows is-labeled">
        <div>
          <span class="term">受格</span>
          <span
            ><NoteMark
              sentence="If a child is lonely, try to play with him or her."
              :marks="['him or her']"
            /><span class="translation">孩子如果覺得孤單，就試著陪他玩。</span></span
          >
        </div>
        <div>
          <span class="term">所有格</span>
          <span
            ><NoteMark
              sentence="Every student must bring his or her own lunch."
              :marks="['his or her']"
            /><span class="translation">每個學生都要自己帶午餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="he or she 後面用單數動詞" mark="has">
      <NoteFix
        wrong="If a student is late, he or she have to see the teacher."
        right="If a student is late, he or she has to see the teacher."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="they 後面用複數動詞">
      <NoteFix
        wrong="If a passenger loses a bag, they has to report it."
        right="If a passenger loses a bag, they have to report it."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="受詞用 him or her">
      <NoteFix
        wrong="If a baby cries, pick he or she up."
        right="If a baby cries, pick him or her up."
        fix="him or her"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 his or her">
      <NoteFix
        wrong="Each player must wear he or she own shirt."
        right="Each player must wear his or her own shirt."
        fix="his or her"
      />
    </NoteSlide>

    <NoteSlide title="it 不指人" mark="he or she">
      <NoteFix
        wrong="If a new employee has a question, it should ask the manager."
        right="If a new employee has a question, he or she should ask the manager."
        fix="he or she"
      />
    </NoteSlide>

    <NoteSlide title="舊的寫法只用 he">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If a customer complains,', kind: 'dim' },
          { t: 'he', role: '只指男性', kind: 'key' },
          { t: 'must be treated politely.', kind: 'dim' },
        ]"
      />
      <p class="translation">客人如果抱怨，一定要有禮貌地對待。</p>
    </NoteSlide>

    <NoteSlide title="改用複數名詞，直接用 they">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'students', role: '複數名詞', kind: 'key' },
          { t: 'want to be journalists,', kind: 'dim' },
          { t: 'they', role: '回指', kind: 'key' },
          { t: 'have to read a lot.', kind: 'dim' },
        ]"
      />
      <p class="translation">學生如果想當記者，就必須大量閱讀。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
