<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-stance, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="unfortunately 放在句首，說出壞消息">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Unfortunately,', role: '態度副詞', kind: 'key' },
          { t: 'my team', role: '主詞' },
          { t: 'lost.', role: '動詞' },
        ]"
      />
      <p class="translation">可惜我們隊輸了。</p>
    </NoteSlide>

    <NoteSlide title="actually 說出真正的情況，of course 說明顯的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">actually<br /><i>其實</i></span>
          <span
            ><NoteMark sentence="I actually prefer tea." :marks="['actually']" /><span
              class="translation"
              >其實我比較喜歡茶。</span
            ></span
          >
        </div>
        <div>
          <span class="term">of course<br /><i>當然</i></span>
          <span
            ><NoteMark sentence="Of course, my new watch is black." :marks="['Of course,']" /><span
              class="translation"
              >我的新手錶當然是黑色的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="態度副詞也可以放在 be、助動詞後面或一般動詞前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark
              sentence="The hotel was actually very nice."
              :marks="['was actually']"
            /><span class="translation">那家飯店其實很不錯。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark
              sentence="They will of course need a map."
              :marks="['will of course']"
            /><span class="translation">他們當然需要一張地圖。</span></span
          >
        </div>
        <div>
          <span class="term">一般動詞前面</span>
          <span
            ><NoteMark
              sentence="She actually lives next door to my aunt."
              :marks="['actually lives']"
            /><span class="translation">她其實就住在我阿姨家隔壁。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答問題時，of course 表示同意，actually 客氣地更正">
      <div class="rows is-labeled">
        <div>
          <span class="term">of course</span>
          <span
            ><NoteMark sentence="Can I use your phone? Of course." :marks="['Of course.']" /><span
              class="translation"
              >「我可以用你的電話嗎？」「當然可以。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">actually</span>
          <span
            ><NoteMark
              sentence="Are you from Spain? Actually, I'm from Mexico."
              :marks="['Actually,']"
            /><span class="translation">「你是西班牙人嗎？」「其實我是墨西哥人。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定的回答用 of course not">
      <NoteFix
        wrong="Is it raining? Of course no."
        right="Is it raining? Of course not."
        fix="Of course not."
      />
    </NoteSlide>

    <NoteSlide title="unfortunate 的 e 要留著" mark="Unfortunately">
      <NoteFix
        wrong="Unfortunatly, the shop was closed."
        right="Unfortunately, the shop was closed."
        fix="Unfortunately,"
      />
    </NoteSlide>

    <NoteSlide title="of course 的 of 不能省略">
      <NoteFix
        wrong="Course, you can come with us."
        right="Of course, you can come with us."
        fix="Of course,"
      />
    </NoteSlide>

    <NoteSlide title="對方說新消息時，不回答 of course">
      <NoteFix
        wrong="I passed my driving test! Of course."
        right="I passed my driving test! Well done!"
        fix="Well done!"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
