<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-repeated-continuing-events, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have been 加動詞-ing，說反覆到現在的活動" mark="I've been watching">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'been watching', role: 'been + 動詞-ing', kind: 'key', ring: true },
          { t: 'TV', role: '受詞', kind: 'dim' },
          { t: 'a lot,', role: '次數', kind: 'key' },
          { t: 'especially the sports programs.', kind: 'dim' },
        ]"
      />
      <p class="translation">我最近很常看電視，尤其是體育節目。</p>
      <p class="remark">說話者扭傷了腳，在家休息兩個禮拜。</p>
    </NoteSlide>

    <NoteSlide title="常加的頻率和時間的說法" mark="a lot,">
      <div class="rows is-labeled">
        <div>
          <span class="term">次數</span>
          <span>a lot、often、every day、twice a week</span>
        </div>
        <div>
          <span class="term">一段時間</span>
          <span>for two weeks、for months</span>
        </div>
        <div>
          <span class="term">起點</span>
          <span>since January、since I moved here</span>
        </div>
        <div>
          <span class="term">最近</span>
          <span>lately、recently</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="從動詞看出活動反覆發生" mark="been watching">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My brother wants to get fit.', kind: 'dim' },
          { t: 'He', kind: 'dim' },
          { t: 'has been going to the gym', role: '去了很多次', kind: 'key', ring: true },
          { t: 'for two weeks.', role: '一段時間' },
        ]"
      />
      <p class="translation">我哥哥想練好身材。他上健身房上了兩個禮拜了。</p>
    </NoteSlide>

    <NoteSlide title="since 持續到現在，不用現在進行式" mark="I've been watching">
      <NoteFix
        wrong="My dad is playing golf every weekend since May."
        right="My dad has been playing golf every weekend since May."
        fix="has been playing"
      />
    </NoteSlide>

    <NoteSlide title="說出確切次數，用現在完成簡單式" mark="a lot,">
      <NoteFix
        wrong="I've been calling the bank three times today."
        right="I've called the bank three times today."
        fix="I've called"
      />
    </NoteSlide>

    <NoteSlide title="been 不能漏掉" mark="been">
      <NoteFix
        wrong="My daughter has going to swimming lessons since March."
        right="My daughter has been going to swimming lessons since March."
        fix="been going"
      />
    </NoteSlide>

    <NoteSlide title="反覆的活動和單一持續的活動" mark="been watching">
      <div class="rows is-labeled">
        <div>
          <span class="term">很多次</span>
          <span
            ><NoteMark
              sentence="I feel much fitter. I've been swimming every morning this month."
              :marks="['every morning']"
            /><span class="translation">我覺得身體好多了。這個月我每天早上都去游泳。</span></span
          >
        </div>
        <div>
          <span class="term">一次持續</span>
          <span
            ><NoteMark
              sentence="My arms are tired. I've been swimming for an hour."
              :marks="['for an hour.']"
            /><span class="translation">我的手臂好累。我游了一個小時了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在簡單式只說現在的習慣" mark="I've been watching">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成進行式</span>
          <span
            ><NoteMark
              sentence="My legs are getting stronger. I've been cycling to work since the train strike started."
              :marks="['I\'ve been cycling']"
            /><span class="translation"
              >我的腿越來越有力了。從火車罷工以後，我就一直騎腳踏車上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在簡單式</span>
          <span
            ><NoteMark
              sentence="I don't need a parking space. I cycle to work."
              :marks="['cycle']"
            /><span class="translation">我不需要停車位。我騎腳踏車上班。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
