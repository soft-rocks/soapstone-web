<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-813, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句中副詞放在 have 和 been 中間" mark="also">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'also', role: '句中副詞', kind: 'key', ring: true },
          { t: 'been singing', role: 'been + 動詞-ing' },
          { t: 'in a choir', kind: 'dim' },
          { t: 'for five years.', role: '一段時間' },
        ]"
      />
      <p class="translation">我也已經在合唱團唱了五年了。</p>
      <p class="remark">說話者在志工報名表上加上第二項經驗。</p>
    </NoteSlide>

    <NoteSlide title="常用的句中副詞" mark="also">
      <div class="rows is-labeled">
        <div>
          <span class="term">附加</span>
          <span>also</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>just、recently、already、always</span>
        </div>
        <div>
          <span class="term">確定的程度</span>
          <span>probably、certainly、really</span>
        </div>
        <div>
          <span class="term">頻率</span>
          <span>often、constantly</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句的 probably 放在 hasn't 前面" mark="also">
      <div class="rows is-labeled">
        <div>
          <span class="term">haven't 後面</span>
          <span
            ><NoteMark
              sentence="We lost every game this season. We haven't really been trying."
              :marks="['really']"
            /><span class="translation">我們這一季每場都輸。我們沒有真的在努力。</span></span
          >
        </div>
        <div>
          <span class="term">hasn't 前面</span>
          <span
            ><NoteMark
              sentence="Your sister looks very tired. She probably hasn't been sleeping well."
              :marks="['probably']"
            /><span class="translation">你姊姊看起來很累。她大概最近都睡不好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句的副詞放在主詞後面" mark="also">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You\'re still wearing yesterday\'s clothes.', kind: 'dim' },
          { t: 'Have', role: '句首' },
          { t: 'you', role: '主詞' },
          { t: 'really', role: '主詞後面', kind: 'key', ring: true },
          { t: 'been working all night?', kind: 'dim' },
        ]"
      />
      <p class="translation">你還穿著昨天的衣服。你真的工作了一整夜嗎？</p>
    </NoteSlide>

    <NoteSlide title="副詞不放在 been 後面" mark="also been">
      <NoteFix
        wrong="My mum has been also taking yoga classes."
        right="My mum has also been taking yoga classes."
        fix="also been"
      />
    </NoteSlide>

    <NoteSlide title="副詞不放在 have 前面" mark="I've also">
      <NoteFix
        wrong="We just have been looking at your holiday photos."
        right="We have just been looking at your holiday photos."
        fix="have just"
      />
    </NoteSlide>

    <NoteSlide title="probably 放在 hasn't 前面" mark="also">
      <NoteFix
        wrong="Your son hasn't probably been listening in class."
        right="Your son probably hasn't been listening in class."
        fix="probably hasn't"
      />
    </NoteSlide>

    <NoteSlide title="現在完成簡單式說一個經驗" mark="also been singing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I play the piano, and', kind: 'dim' },
          { t: 'I\'ve', kind: 'dim' },
          { t: 'also sung', role: '經驗', kind: 'key', ring: true },
          { t: 'in a choir.', kind: 'dim' },
        ]"
      />
      <p class="translation">我會彈鋼琴，我也在合唱團唱過歌。</p>
    </NoteSlide>

    <NoteSlide title="recently 也常放在句尾" mark="also">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I need a holiday.', kind: 'dim' },
          { t: 'I\'ve been feeling tired', kind: 'dim' },
          { t: 'recently.', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我需要放假。我最近一直覺得很累。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
