<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-those-substitution, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those + 分詞" mark="those attending">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All', kind: 'dim' },
          { t: 'those', role: '指人', kind: 'key' },
          { t: 'attending', role: '-ing 分詞', kind: 'key' },
          { t: 'are requested …', kind: 'dim' },
        ]"
      />
      <p class="translation">所有與會者請準時出席。</p>
    </NoteSlide>

    <NoteSlide title="those 後面的說明" mark="attending">
      <div class="rows is-labeled">
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="The prize goes to those who finish first."
              :marks="['those who']"
            /><span class="translation">獎品給最先完成的人。</span></span
          >
        </div>
        <div>
          <span class="term">-ing 分詞</span>
          <span
            ><NoteMark
              sentence="Those living near the airport complain about the noise."
              :marks="['Those living']"
            /><span class="translation">住在機場附近的人抱怨噪音。</span></span
          >
        </div>
        <div>
          <span class="term">-ed 分詞</span>
          <span
            ><NoteMark
              sentence="Most of those invited came to the party."
              :marks="['those invited']"
            /><span class="translation">受邀的人大部分都來參加派對了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 指人和指東西" mark="those">
      <div class="rows is-labeled">
        <div>
          <span class="term">指人</span>
          <span
            ><NoteMark
              sentence="Those wishing to leave early should tell the teacher."
              :marks="['Those wishing']"
            /><span class="translation">想提早離開的人要告訴老師。</span></span
          >
        </div>
        <div>
          <span class="term">代替名詞</span>
          <span
            ><NoteMark
              sentence="Of these apples, keep those which are fresh."
              :marks="['apples,', 'those which']"
            /><span class="translation">這些蘋果裡，把新鮮的留下來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 前面用 those" mark="those">
      <NoteFix
        wrong="Them who arrive late will not be allowed in."
        right="Those who arrive late will not be allowed in."
        fix="Those"
      />
    </NoteSlide>

    <NoteSlide title="指「……的人」用 those" mark="those">
      <NoteFix
        wrong="These who live near the school can walk there."
        right="Those who live near the school can walk there."
        fix="Those"
      />
    </NoteSlide>

    <NoteSlide title="those 的動詞用複數" mark="are requested">
      <NoteFix
        wrong="Those living in the old building has to move out."
        right="Those living in the old building have to move out."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="those + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Those', role: '限定詞', kind: 'key' },
          { t: 'shoes', role: '名詞' },
          { t: 'are too small for me.', kind: 'dim' },
        ]"
      />
      <p class="translation">那雙鞋子我穿太小了。</p>
    </NoteSlide>

    <NoteSlide title="anyone who：動詞用單數">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Anyone who', kind: 'key' },
          { t: 'wants', role: '單數動詞', kind: 'key' },
          { t: 'a ticket should call this number.', kind: 'dim' },
        ]"
      />
      <p class="translation">想要票的人都可以打這個電話。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
