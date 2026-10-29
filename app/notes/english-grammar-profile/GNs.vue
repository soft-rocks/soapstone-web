<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-subject-it-passive, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it + 被動語態 + that 子句" mark="It is hoped that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '虛主詞', kind: 'key' },
          { t: 'is hoped', role: '被動語態', kind: 'key' },
          { t: 'that', role: '帶出內容' },
          { t: 'this report will help the club …', role: '希望的內容' },
        ]"
      />
      <p class="translation">希望這份報告能幫助社團改進，並滿足全校的需求。</p>
    </NoteSlide>

    <NoteSlide title="常用的動詞" mark="It is hoped that">
      <div class="rows is-labeled">
        <div>
          <span class="term">看法</span>
          <span
            ><NoteMark
              sentence="It is believed that the castle was built in the 12th century."
              :marks="['It is believed that']"
            /><span class="translation">一般認為這座城堡建於十二世紀。</span></span
          >
        </div>
        <div>
          <span class="term">決定</span>
          <span
            ><NoteMark
              sentence="It was decided that the meeting would be moved to Friday."
              :marks="['It was decided that']"
            /><span class="translation">會議決定改到星期五開。</span></span
          >
        </div>
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="It is recommended that visitors book early."
              :marks="['It is recommended that']"
            /><span class="translation">建議遊客提早訂票。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="什麼時候用" mark="It is hoped that">
      <div class="rows is-labeled">
        <div>
          <span class="term">不知道是誰</span>
          <span><NoteMark sentence="It is said that …" :marks="['It is said that']" /></span>
        </div>
        <div>
          <span class="term">是誰不重要</span>
          <span><NoteMark sentence="It was found that …" :marks="['It was found that']" /></span>
        </div>
        <div>
          <span class="term">口語</span>
          <span><NoteMark sentence="We hope that …" :marks="['We hope that']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞用 it" mark="It">
      <NoteFix
        wrong="Is believed that the painting is a copy."
        right="It is believed that the painting is a copy."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="被動語態用過去分詞" mark="hoped">
      <NoteFix
        wrong="It is hope that the new rules will reduce waste."
        right="It is hoped that the new rules will reduce waste."
        fix="hoped"
      />
    </NoteSlide>

    <NoteSlide title="不用 there 當主詞" mark="It">
      <NoteFix
        wrong="There was agreed that the fees would stay the same."
        right="It was agreed that the fees would stay the same."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="主詞 + 被動語態 + to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The castle', role: '主詞', kind: 'key' },
          { t: 'is believed', role: '被動語態' },
          { t: 'to be', role: 'to 不定詞', kind: 'key' },
          { t: 'eight hundred years old.', kind: 'dim' },
        ]"
      />
      <p class="translation">這座城堡一般認為有八百年歷史。</p>
    </NoteSlide>

    <NoteSlide title="主動語態說出是誰">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '說出是誰', kind: 'key' },
          { t: 'hope that', kind: 'key' },
          { t: 'the new library …', kind: 'dim' },
        ]"
      />
      <p class="translation">我們希望新圖書館能早點開放。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
