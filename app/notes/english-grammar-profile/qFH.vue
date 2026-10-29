<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-use-reporting-verbs-past-continuous, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="was / were wondering 加 wh 子句，轉述過去心裡想的問題">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'were wondering', role: 'were + wondering', kind: 'key' },
          { t: 'what', role: 'wh 詞', kind: 'key' },
          { t: 'had happened,', role: '子句' },
          { t: 'but then we realized that there had been a power cut.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們本來在想到底發生了什麼事，後來才發現是停電了。</p>
    </NoteSlide>

    <NoteSlide title="wondering 想知道答案，thinking 在心裡考慮" mark="were wondering">
      <div class="rows is-labeled">
        <div>
          <span class="term">wondering</span>
          <span
            ><NoteMark
              sentence="I was wondering why she hadn't called."
              :marks="['was wondering']"
            /><span class="translation">我那時在想她為什麼沒打電話來。</span></span
          >
        </div>
        <div>
          <span class="term">thinking</span>
          <span
            ><NoteMark
              sentence="I was thinking which flat would be better for us."
              :marks="['was thinking']"
            /><span class="translation">我那時在想哪一間公寓比較適合我們。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句有自己的主詞，to + 原形動詞沒有主詞" mark="what had happened">
      <div class="rows is-labeled">
        <div>
          <span class="term">子句</span>
          <span
            ><NoteMark
              sentence="He was wondering where his wallet was."
              :marks="['his wallet was']"
            /><span class="translation">他在想他的錢包到底在哪裡。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark sentence="She was wondering what to say." :marks="['to say']" /><span
              class="translation"
              >她在想要說什麼。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="想到一半，另一件事打斷這個想法" mark="but then">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="I was wondering where to sit when Sam waved at me."
              :marks="['when']"
            /><span class="translation">我正在想要坐哪裡，Sam 就朝我揮手了。</span></span
          >
        </div>
        <div>
          <span class="term">but then</span>
          <span
            ><NoteMark
              sentence="We were wondering who was at the door, but then we heard Dad's voice."
              :marks="['but then']"
            /><span class="translation">我們本來在想是誰在門口，後來就聽到爸爸的聲音。</span></span
          >
        </div>
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark
              sentence="While he was thinking how to reply, Jenny took his hand."
              :marks="['While']"
            /><span class="translation">他還在想要怎麼回答，Jenny 就牽起了他的手。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh 子句用直述句的語序" mark="what had happened">
      <NoteFix
        wrong="I was wondering what had he done."
        right="I was wondering what he had done."
        fix="he had"
      />
    </NoteSlide>

    <NoteSlide title="wondering 後面接 wh 詞，不接 that" mark="what">
      <NoteFix
        wrong="I was wondering that he was angry."
        right="I was wondering why he was angry."
        fix="why"
      />
    </NoteSlide>

    <NoteSlide title="why 後面接子句，不接 to + 原形動詞">
      <NoteFix
        wrong="I was wondering why to call her."
        right="I was wondering why I should call her."
        fix="I should"
      />
    </NoteSlide>

    <NoteSlide title="過去進行式是 was 加 -ing" mark="were wondering">
      <NoteFix
        wrong="I was wonder what to do."
        right="I was wondering what to do."
        fix="wondering"
      />
    </NoteSlide>

    <NoteSlide title="I was wondering if you could 是客氣的請求，說的是現在">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I was wondering if', kind: 'key' },
          { t: 'you could help me.', role: '請求', kind: 'dim' },
        ]"
      />
      <p class="translation">不知道你能不能幫我一下。</p>
    </NoteSlide>

    <NoteSlide title="wondered 說出想過，was wondering 說出那時還在想">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'wondered', role: '過去簡單式', kind: 'key' },
          { t: 'why she was late.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想知道她為什麼遲到。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
