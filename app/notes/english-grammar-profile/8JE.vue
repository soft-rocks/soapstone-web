<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-irregular, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不規則比較級整個字換掉" mark="better">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Homemade bread', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'better', role: 'good 的比較級', kind: 'key', ring: true },
          { t: 'than store bread.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">自己做的麵包比店裡買的好。</p>
    </NoteSlide>

    <NoteSlide title="常見的不規則比較級" mark="better">
      <div class="rows is-labeled">
        <div>
          <span class="term">good → better</span>
          <span
            ><NoteMark sentence="I feel much better today." :marks="['better']" /><span
              class="translation"
              >我今天覺得好多了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">bad → worse</span>
          <span
            ><NoteMark sentence="The storm got worse at night." :marks="['worse']" /><span
              class="translation"
              >暴風雨到了晚上變得更嚴重。</span
            ></span
          >
        </div>
        <div>
          <span class="term">far → farther / further</span>
          <span
            ><NoteMark
              sentence="My school is farther from home than yours."
              :marks="['farther']"
            /><span class="translation">我的學校離家比你的遠。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="further 還有更多、進一步的意思" mark="better">
      <NoteMark
        sentence="For further information, call our office."
        :marks="['further information']"
      />
      <p class="translation">想知道更多資訊，請打電話到我們辦公室。</p>
    </NoteSlide>

    <NoteSlide title="do you think 插在 What color 和 is 中間" mark="do you think">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What color', role: '疑問詞 + 名詞', kind: 'key' },
          { t: 'do you think', role: '插入的部分', kind: 'dim', ring: true },
          { t: 'is', role: 'be' },
          { t: 'better?', role: '不規則比較級', kind: 'key' },
        ]"
      />
      <p class="translation">你覺得哪個顏色比較好？</p>
    </NoteSlide>

    <NoteSlide title="good 的比較級是 better" mark="better">
      <NoteFix
        wrong="This pen is gooder than that one."
        right="This pen is better than that one."
        fix="better"
      />
    </NoteSlide>

    <NoteSlide title="bad 的比較級是 worse" mark="better">
      <NoteFix
        wrong="The traffic is more bad today."
        right="The traffic is worse today."
        fix="worse"
      />
    </NoteSlide>

    <NoteSlide title="better 前面不加 more" mark="is better">
      <NoteFix
        wrong="Her English is more better than mine."
        right="Her English is better than mine."
        fix="better"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
