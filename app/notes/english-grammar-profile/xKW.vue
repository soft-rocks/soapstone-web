<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-1206, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="肯定句是主詞加 could，再接原形動詞" mark="could come">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'could come', role: 'could + 原形動詞', kind: 'key', ring: true },
          { t: 'by bus,', role: '方式', kind: 'dim' },
          { t: 'and', role: '連接兩個建議' },
          { t: 'we', role: '主詞' },
          { t: 'could meet', role: 'could + 原形動詞', kind: 'key' },
          { t: 'at the bus station.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以搭公車來，我們可以在公車站碰面。</p>
    </NoteSlide>

    <NoteSlide title="肯定句的 could 常用來建議、說過去的能力和可能" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="We could go to the museum near Cibeles."
              :marks="['could go']"
            /><span class="translation">我們可以去 Cibeles 附近的博物館。</span></span
          >
        </div>
        <div>
          <span class="term">過去的能力</span>
          <span
            ><NoteMark
              sentence="My brother could ride a horse at six."
              :marks="['could ride']"
            /><span class="translation">我哥六歲就會騎馬了。</span></span
          >
        </div>
        <div>
          <span class="term">可能</span>
          <span
            ><NoteMark sentence="That could be our bus." :marks="['could be']" /><span
              class="translation"
              >那可能就是我們要搭的公車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 後面再寫一次主詞和 could" mark="we could">
      <NoteMark
        sentence="You could come by bus, and we could meet at the bus station."
        :marks="['and', 'we could']"
      />
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="come">
      <NoteFix wrong="You could to stay with us." right="You could stay with us." fix="stay" />
    </NoteSlide>

    <NoteSlide title="主詞是 she，動詞也不加 -s" mark="come">
      <NoteFix wrong="She could speaks French." right="She could speak French." fix="speak" />
    </NoteSlide>

    <NoteSlide title="could 不隨主詞改變，不加 -s" mark="could">
      <NoteFix wrong="He coulds help you." right="He could help you." fix="could" />
    </NoteSlide>

    <NoteSlide title="can 說確定做得到，could 比較客氣或只是可能" mark="could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', kind: 'dim' },
          { t: 'can take', role: '確定做得到', kind: 'key', ring: true },
          { t: 'the train from the airport.', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以從機場搭火車。</p>
    </NoteSlide>

    <NoteSlide title="could have 說過去沒做的事，could 說現在或未來的建議" mark="could meet">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'could have met', role: 'could have + 過去分詞', kind: 'key', ring: true },
          { t: 'at the station.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們本來可以在車站碰面的。</p>
    </NoteSlide>

    <NoteSlide title="would 說意願，could 說做得到或有可能" mark="could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'would love', role: '意願', kind: 'key', ring: true },
          { t: 'to see you.', kind: 'dim' },
        ]"
      />
      <p class="translation">我很想見你。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
