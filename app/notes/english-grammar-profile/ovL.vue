<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-ability-1212, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="couldn't 加原形動詞，說過去做不到的事" mark="couldn't buy">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'couldn\'t', role: '做不到', kind: 'key', ring: true },
          { t: 'buy', role: '原形動詞', kind: 'key' },
          { t: 'the T-shirt', role: '受詞' },
          { t: 'because it was too expensive.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">我買不起那件 T 恤，因為它太貴了。</p>
      <p class="remark">說話者當時想買，卻做不到。</p>
    </NoteSlide>

    <NoteSlide title="couldn't 常接找不到、睡不著、去不了這類動作" mark="buy">
      <div class="rows is-labeled">
        <div>
          <span class="term">找不到</span>
          <span
            ><NoteMark
              sentence="I couldn't find my keys this morning."
              :marks="['couldn\'t find']"
            /><span class="translation">我今天早上找不到鑰匙。</span></span
          >
        </div>
        <div>
          <span class="term">睡不著</span>
          <span
            ><NoteMark
              sentence="She couldn't sleep last night."
              :marks="['couldn\'t sleep']"
            /><span class="translation">她昨晚睡不著。</span></span
          >
        </div>
        <div>
          <span class="term">去不了</span>
          <span
            ><NoteMark
              sentence="We couldn't go to the beach because of the storm."
              :marks="['couldn\'t go']"
            /><span class="translation">因為暴風雨，我們去不了海邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="because 接主詞和動詞，because of 接名詞" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="I couldn't buy the T-shirt because it was too expensive."
              :marks="['because', 'it was']"
            /><span class="translation">我買不起那件 T 恤，因為它太貴了。</span></span
          >
        </div>
        <div>
          <span class="term">because of</span>
          <span
            ><NoteMark
              sentence="We couldn't go to the beach because of the storm."
              :marks="['because of', 'the storm']"
            /><span class="translation">因為暴風雨，我們去不了海邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="couldn't 已經表示過去，後面接原形動詞" mark="buy">
      <NoteFix
        wrong="I couldn't went to school yesterday."
        right="I couldn't go to school yesterday."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="could 的否定直接加 not，不用 didn't" mark="couldn't">
      <NoteFix wrong="He didn't could swim." right="He couldn't swim." fix="couldn't" />
    </NoteSlide>

    <NoteSlide title="後面是主詞加動詞，用 because" mark="because">
      <NoteFix
        wrong="We couldn't play outside because of it was raining."
        right="We couldn't play outside because it was raining."
        fix="because"
      />
    </NoteSlide>

    <NoteSlide title="can't 說現在，couldn't 說過去" mark="couldn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'can\'t find', role: '現在做不到', kind: 'key', ring: true },
          { t: 'my glasses.', kind: 'dim' },
        ]"
      />
      <p class="translation">我找不到我的眼鏡。</p>
    </NoteSlide>

    <NoteSlide title="wasn't able to 和 couldn't 意思相近，比較正式" mark="couldn't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', kind: 'dim' },
          { t: 'wasn\'t able to', role: '比較正式', kind: 'key', ring: true },
          { t: 'finish the race.', kind: 'dim' },
        ]"
      />
      <p class="translation">他沒能跑完比賽。</p>
    </NoteSlide>

    <NoteSlide title="couldn't have 是確定沒有發生，不是做不到" mark="couldn't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'couldn\'t have taken', role: 'couldn\'t have + 過去分詞', kind: 'key', ring: true },
          { t: 'the money.', kind: 'dim' },
        ]"
      />
      <p class="translation">她不可能拿了那筆錢。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
