<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-with-still, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="still 加否定句，強調到現在還沒發生" mark="still haven't decided.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have to tell you that', role: '主句', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'still', role: '到現在還沒', kind: 'key', ring: true },
          { t: 'haven\'t decided.', role: 'haven\'t + 過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">我得跟你說，我還沒決定。</p>
      <p class="remark">朋友等答案已經等了一個月。</p>
    </NoteSlide>

    <NoteSlide title="正式的文字寫完整形式，still 的位置不變" mark="still">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The company', kind: 'dim' },
          { t: 'still', role: '位置不變', kind: 'key', ring: true },
          { t: 'has not paid', role: '完整形式' },
          { t: 'us.', kind: 'dim' },
        ]"
      />
      <p class="translation">那家公司到現在還沒付錢給我們。</p>
    </NoteSlide>

    <NoteSlide title="疑問句的 still not 放在主詞後面" mark="still">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Have', role: '句首' },
          { t: 'you', role: '主詞' },
          { t: 'still not', role: '主詞後面', kind: 'key', ring: true },
          { t: 'decided?', role: '過去分詞' },
        ]"
      />
      <p class="translation">你到現在還沒決定嗎？</p>
    </NoteSlide>

    <NoteSlide title="still 放在 haven't 前面" mark="still haven't">
      <NoteFix
        wrong="I haven't still decided."
        right="I still haven't decided."
        fix="still haven't"
      />
    </NoteSlide>

    <NoteSlide title="做完了用 already，不用 still" mark="still">
      <NoteFix wrong="I have still decided." right="I have already decided." fix="already" />
    </NoteSlide>

    <NoteSlide title="hasn't 後面接過去分詞，不接過去式" mark="haven't decided.">
      <NoteFix
        wrong="My brother still hasn't wrote back."
        right="My brother still hasn't written back."
        fix="written"
      />
    </NoteSlide>

    <NoteSlide title="yet 只說還沒發生，still 強調等太久" mark="still">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I haven\'t decided', kind: 'dim' },
          { t: 'yet.', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我還沒決定。</p>
    </NoteSlide>

    <NoteSlide title="still 加現在簡單式，說狀態還在持續" mark="still">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'still live', role: '還在持續', kind: 'key', ring: true },
          { t: 'with my parents.', kind: 'dim' },
        ]"
      />
      <p class="translation">我還跟爸媽住在一起。</p>
    </NoteSlide>

    <NoteSlide title="already 說比預期早做完" mark="still">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve', kind: 'dim' },
          { t: 'already', role: '比預期早', kind: 'key', ring: true },
          { t: 'booked the tickets.', kind: 'dim' },
        ]"
      />
      <p class="translation">我已經訂好票了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
