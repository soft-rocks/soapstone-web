<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-perfect, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句加 for，說一段時間到現在都沒發生" mark="for ages.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t seen', role: 'haven\'t + 過去分詞' },
          { t: 'you', role: '受詞', kind: 'dim' },
          { t: 'for ages.', role: '一段時間', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">好久沒看到你了。</p>
      <p class="remark">鄰居三年前搬走，兩個人就沒再見面。</p>
    </NoteSlide>

    <NoteSlide title="for 後面接一段時間的長度" mark="for ages.">
      <div class="rows is-labeled">
        <div>
          <span class="term">確切的長度</span>
          <span>for two weeks、for three years、for six months</span>
        </div>
        <div>
          <span class="term">不確切的長度</span>
          <span>for a long time、for a while、for ages、for years、for so long</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定問句把 haven't 放在主詞前面" mark="haven't">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You don\'t know about Sam\'s new job?', kind: 'dim' },
          { t: 'Haven\'t', role: '句首', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'seen him', kind: 'dim' },
          { t: 'for a long time?', role: '一段時間' },
        ]"
      />
      <p class="translation">你不知道山姆換新工作了？你很久沒看到他了嗎？</p>
    </NoteSlide>

    <NoteSlide title="一段時間的長度用 for，不用 since" mark="for">
      <NoteFix
        wrong="My aunt hasn't visited us since three years."
        right="My aunt hasn't visited us for three years."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="到現在都沒發生，用現在完成式" mark="haven't seen">
      <NoteFix
        wrong="We don't go to the zoo for ages."
        right="We haven't been to the zoo for ages."
        fix="haven't been"
      />
    </NoteSlide>

    <NoteSlide title="一段時間的長度用 for，不用 during" mark="for">
      <NoteFix
        wrong="My dad hasn't eaten meat during two months."
        right="My dad hasn't eaten meat for two months."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="since 後面接上一次發生的時間點" mark="for ages.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Hi, Lucy! I haven\'t seen you', kind: 'dim' },
          { t: 'since the wedding.', role: '起點', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">嗨，露西！從婚禮以後我就沒看過你了。</p>
    </NoteSlide>

    <NoteSlide title="過去簡單式加 for，時間已經結束" mark="haven't seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I know the north of England well.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'lived', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'in Leeds', kind: 'dim' },
          { t: 'for two years.', role: '已經結束' },
        ]"
      />
      <p class="translation">我很熟英格蘭北部。我在里茲住過兩年。</p>
    </NoteSlide>

    <NoteSlide title="肯定句加 for，狀態持續到現在" mark="haven't seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I know all the shops on this street.', kind: 'dim' },
          { t: 'I\'ve lived', role: '肯定句', kind: 'key', ring: true },
          { t: 'here', kind: 'dim' },
          { t: 'for ten years.', role: '持續到現在' },
        ]"
      />
      <p class="translation">我知道這條街上所有的店。我在這裡住了十年。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
