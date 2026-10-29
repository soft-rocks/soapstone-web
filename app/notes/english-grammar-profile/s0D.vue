<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-questions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句把 will 放在主詞前面" mark="Will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Will', role: 'will', kind: 'key', ring: true },
          { t: 'they', role: '主詞' },
          { t: 'be holding', role: 'be + 動詞-ing', kind: 'key' },
          { t: 'any activities at night?', kind: 'dim' },
        ]"
      />
      <p class="translation">他們晚上會舉辦什麼活動嗎？</p>
      <p class="remark">學生問夏令營期間晚上會不會有活動在進行。</p>
    </NoteSlide>

    <NoteSlide title="簡答只用 will 或 won't" mark="Will">
      <div class="rows is-labeled">
        <div>
          <span class="term">問</span>
          <span
            ><NoteMark
              sentence="Will you be using the printer this afternoon?"
              :marks="['Will']"
            /><span class="translation">你今天下午會用印表機嗎？</span></span
          >
        </div>
        <div>
          <span class="term">答</span>
          <span
            ><NoteMark sentence="Yes, I will. / No, I won't." :marks="['will', 'won\'t']" /><span
              class="translation"
              >會，我會用。／不會，我不會用。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh- 疑問詞放在句首，後面的順序和是非疑問句相同" mark="Will they be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What', role: 'wh- 疑問詞', kind: 'key', ring: true },
          { t: 'will', role: 'will' },
          { t: 'you', role: '主詞' },
          { t: 'be cooking', role: 'be + 動詞-ing', kind: 'key' },
          { t: 'for the party?', kind: 'dim' },
        ]"
      />
      <p class="translation">派對上你會煮什麼？</p>
    </NoteSlide>

    <NoteSlide title="who 當主詞時，句子不換位置">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Who', role: '主詞', kind: 'key', ring: true },
          { t: 'will be meeting', role: 'will be + 動詞-ing', kind: 'key' },
          { t: 'us at the station?', kind: 'dim' },
        ]"
      />
      <p class="translation">誰會到車站接我們？</p>
    </NoteSlide>

    <NoteSlide title="否定疑問句確認以為會發生的事" mark="Will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Won\'t', role: 'will not', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'be working', role: 'be + 動詞-ing', kind: 'key' },
          { t: 'late again tonight?', kind: 'dim' },
        ]"
      />
      <p class="translation">你今晚不是又要加班嗎？</p>
    </NoteSlide>

    <NoteSlide title="will 後面接原形的 be" mark="be">
      <NoteFix
        wrong="Will you being coming to the meeting?"
        right="Will you be coming to the meeting?"
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="只有 will 移到主詞前面，be 留在主詞後面" mark="they be">
      <NoteFix
        wrong="Will be they holding a party?"
        right="Will they be holding a party?"
        fix="they be"
      />
    </NoteSlide>

    <NoteSlide title="未來進行式的疑問句用 will，不用 do" mark="Will">
      <NoteFix
        wrong="What do you be doing next summer?"
        right="What will you be doing next summer?"
        fix="will"
      />
    </NoteSlide>

    <NoteSlide title="簡答不重複 be">
      <NoteFix wrong="Yes, I will be." right="Yes, I will." fix="will" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
