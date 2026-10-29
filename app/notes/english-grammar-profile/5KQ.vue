<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-812, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="haven't 加 been 和動詞-ing" mark="haven't been working">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I hope', role: '主句', kind: 'dim' },
          { t: 'you', role: '主詞' },
          {
            t: 'haven\'t been working',
            role: 'haven\'t + been + 動詞-ing',
            kind: 'key',
            ring: true,
          },
          { t: 'too hard!', role: '程度' },
        ]"
      />
      <p class="translation">希望你最近工作沒有太累！</p>
      <p class="remark">朋友到新公司上班三個月了。</p>
    </NoteSlide>

    <NoteSlide title="正式的文字用 has not" mark="haven't">
      <NoteMark
        sentence="Dear Sir, I am writing about your repair work. The heating system has not been working properly since your staff completed it."
        :marks="['has not been working']"
      />
      <p class="translation">
        敬啟者，我寫信是關於你們的維修工作。從你們的員工完工以後，暖氣系統就一直沒有正常運作。
      </p>
    </NoteSlide>

    <NoteSlide title="否定問句把 haven't 放在主詞前面" mark="haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You look so thin.', kind: 'dim' },
          { t: 'Haven\'t', role: '句首', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'been eating?', role: 'been + 動詞-ing' },
        ]"
      />
      <p class="translation">你看起來好瘦。你一直沒吃東西嗎？</p>
    </NoteSlide>

    <NoteSlide title="been 不能漏掉" mark="been">
      <NoteFix
        wrong="My grandfather hasn't sleeping well since the operation."
        right="My grandfather hasn't been sleeping well since the operation."
        fix="been sleeping"
      />
    </NoteSlide>

    <NoteSlide title="been 後面接動詞-ing" mark="working">
      <NoteFix
        wrong="Our teacher hasn't been feel well lately."
        right="Our teacher hasn't been feeling well lately."
        fix="feeling"
      />
    </NoteSlide>

    <NoteSlide title="not 加在 have 後面，不用 don't" mark="haven't">
      <NoteFix
        wrong="We don't have been using the car much this month."
        right="We haven't been using the car much this month."
        fix="haven't"
      />
    </NoteSlide>

    <NoteSlide title="簡單式說還沒做完，進行式說沒有一直在做" mark="haven't been working">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成簡單式</span>
          <span
            ><NoteMark
              sentence="Can I keep it for another week? I haven't finished the book."
              :marks="['haven\'t finished']"
            /><span class="translation">我可以再留一個禮拜嗎？那本書我還沒看完。</span></span
          >
        </div>
        <div>
          <span class="term">現在完成進行式</span>
          <span
            ><NoteMark
              sentence="I've been so busy at work. I haven't been reading much lately."
              :marks="['haven\'t been reading']"
            /><span class="translation">我工作一直很忙。我最近都沒怎麼看書。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去進行式說過去某個時間點" mark="haven't been working">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I was in the garden.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'wasn\'t working', role: '過去進行式', kind: 'key', ring: true },
          { t: 'when you called.', role: '時間點' },
        ]"
      />
      <p class="translation">我那時候在花園。你打來的時候我沒在工作。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
