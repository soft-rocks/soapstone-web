<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-particle-object-1063, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞接在小品詞後面" mark="some useful information">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I can surf the internet and', kind: 'dim' },
          { t: 'look', role: '動詞', kind: 'key' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'some useful information.', role: '受詞' },
        ]"
      />
      <p class="translation">我可以上網查一些有用的資料。</p>
      <p class="remark"><code>look up</code> 的意思是查。</p>
    </NoteSlide>

    <NoteSlide title="受詞可以是名詞、動詞-ing、that 子句或 wh 子句" mark="some useful information">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="The council has called off the parade."
              :marks="['the parade']"
            /><span class="translation">市議會取消了遊行。</span></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="I keep putting off calling the dentist."
              :marks="['calling']"
            /><span class="translation">我一直拖著不打電話給牙醫。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="She pointed out that the shop was closed on Mondays."
              :marks="['that']"
            /><span class="translation">她指出那家店星期一沒開。</span></span
          >
        </div>
        <div>
          <span class="term">wh 子句</span>
          <span
            ><NoteMark
              sentence="We need to work out how much the trip will cost."
              :marks="['how much']"
            /><span class="translation">我們得算出這趟旅行要花多少錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 子句只能放在小品詞後面" mark="up">
      <NoteFix
        wrong="He pointed that the date was wrong out."
        right="He pointed out that the date was wrong."
        fix="pointed out"
      />
    </NoteSlide>

    <NoteSlide title="put off 後面的動詞用動詞-ing">
      <NoteFix
        wrong="Don't put off to see a doctor."
        right="Don't put off seeing a doctor."
        fix="seeing"
      />
    </NoteSlide>

    <NoteSlide title="執行是 carry out，carry on 是繼續" mark="up">
      <NoteFix
        wrong="The scientists carried on the test last week."
        right="The scientists carried out the test last week."
        fix="out"
      />
    </NoteSlide>

    <NoteSlide title="取消是 call off，被動句的 off 接在過去分詞後面" mark="up">
      <NoteFix
        wrong="The match was called because of the rain."
        right="The match was called off because of the rain."
        fix="off"
      />
    </NoteSlide>

    <NoteSlide title="代名詞受詞放在中間，look at 的受詞只能放在介系詞後面" mark="look up">
      <div class="rows is-labeled">
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="I'll look it up." :marks="['it']" /><span class="translation"
              >我查一下。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞動詞</span>
          <span
            ><NoteMark sentence="I looked at the information." :marks="['at']" /><span
              class="translation"
              >我看了那些資料。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
