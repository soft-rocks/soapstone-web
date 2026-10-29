<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 036, as slides, in the order of notes/dragon-english-basic-100/036.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="have been to 表示去過某個地方，現在已經回來了" mark="have been to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have been to', role: '現在完成式', kind: 'key' },
          { t: 'Taipei', role: '地點' },
          { t: 'twice.', kind: 'dim' },
        ]"
      />
      <p class="translation">我去過台北兩次。</p>
    </NoteSlide>

    <NoteSlide title="have been to 常和 ever、never、once、twice 一起用" mark="have been to">
      <div class="rows is-labeled">
        <div>
          <span class="term">ever</span>
          <span
            ><NoteMark
              sentence="Has anyone in your family ever been to Europe?"
              :marks="['ever']"
            /><span class="translation">你家有人去過歐洲嗎？</span></span
          >
        </div>
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark
              sentence="My parents have never been to a foreign country."
              :marks="['never']"
            /><span class="translation">我爸媽從來沒去過國外。</span></span
          >
        </div>
        <div>
          <span class="term">once</span>
          <span
            ><NoteMark sentence="She has been to the new museum once." :marks="['once']" /><span
              class="translation"
              >她去過那間新的博物館一次。</span
            ></span
          >
        </div>
        <div>
          <span class="term">twice</span>
          <span
            ><NoteMark sentence="Tom has been to Kyoto twice." :marks="['twice']" /><span
              class="translation"
              >Tom 去過京都兩次。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have gone to 表示去了那裡，現在還沒回來" mark="have been to">
      <div class="rows is-labeled">
        <div>
          <span class="term">been to<br /><i>已經回來</i></span>
          <span
            ><NoteMark sentence="I have been to Taipei twice." :marks="['have been to']" /><span
              class="translation"
              >我去過台北兩次。</span
            ></span
          >
        </div>
        <div>
          <span class="term">gone to<br /><i>還沒回來</i></span>
          <span
            ><NoteMark
              sentence="My father has gone to Osaka on business. He will be back on Friday."
              :marks="['has gone to']"
            /><span class="translation">我爸爸去大阪出差了。他星期五會回來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句用現在完成式，說一個可能是真的情況" mark="If you have been to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If you', kind: 'dim' },
          { t: 'have been to', role: '現在完成式', kind: 'key' },
          { t: 'old European cities,', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'must have been impressed', role: 'must have + 過去分詞', kind: 'key' },
          { t: 'by the beautiful streets.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">這不是假設語氣。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用 must have 加過去分詞，有把握地推測過去的事" mark="must have been">
      <div class="rows is-labeled">
        <div>
          <span class="term">看過電影</span>
          <span
            ><NoteMark
              sentence="If you have seen this movie, you must have cried at the end."
              :marks="['must have cried']"
            /><span class="translation">如果你看過這部電影，你在結尾一定哭了。</span></span
          >
        </div>
        <div>
          <span class="term">吃過蛋糕</span>
          <span
            ><NoteMark
              sentence="If you have tried her cake, you must have liked it."
              :marks="['must have liked']"
            /><span class="translation">如果你吃過她做的蛋糕，你一定很喜歡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be impressed by 表示覺得一樣東西很好，記在心裡" mark="impressed by">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'was impressed by', role: 'be + 過去分詞 + by', kind: 'key' },
          { t: 'his speech.', role: '讓人印象深刻的東西' },
        ]"
      />
      <p class="translation">他的演講讓我印象深刻。</p>
    </NoteSlide>

    <NoteSlide title="be impressed 後面接 by 或 with" mark="by">
      <div class="rows is-labeled">
        <div>
          <span class="term">by</span>
          <span
            ><NoteMark
              sentence="The teacher was impressed by your answer."
              :marks="['impressed by']"
            /><span class="translation">老師對你的答案印象深刻。</span></span
          >
        </div>
        <div>
          <span class="term">with</span>
          <span
            ><NoteMark
              sentence="We were impressed with the clean streets of Tokyo."
              :marks="['impressed with']"
            /><span class="translation">東京乾淨的街道讓我們印象深刻。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
