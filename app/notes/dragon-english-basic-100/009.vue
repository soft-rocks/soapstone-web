<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 009, as slides, in the order of notes/dragon-english-basic-100/009.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 只佔主詞的位置，真正的主詞在後面">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is impossible', kind: 'dim' },
          {
            t: 'to predict where and when there will be a major earthquake.',
            role: '真正的主詞',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">真正的主詞是 <code>to</code> 不定詞片段。</p>
    </NoteSlide>

    <NoteSlide title="impossible 表示做不到，possible 表示做得到" mark="impossible">
      <div class="rows is-labeled">
        <div>
          <span class="term">impossible</span>
          <span
            ><NoteMark
              sentence="It is impossible to finish this work in one day."
              :marks="['impossible']"
            /><span class="translation">一天之內完成這份工作是不可能的。</span></span
          >
        </div>
        <div>
          <span class="term">possible</span>
          <span
            ><NoteMark
              sentence="It is possible to walk from the hotel to the station."
              :marks="['possible']"
            /><span class="translation">從飯店走路到車站是可以的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="要說是誰做這件事，在 to 前面加 for 和人" mark="to predict">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It is possible', kind: 'dim' },
          { t: 'for us', role: 'for + 人', kind: 'key' },
          { t: 'to get there by noon.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">我們中午之前到那裡是有可能的。</p>
    </NoteSlide>

    <NoteSlide title="間接問句的 there 放在動詞前面" mark="where and when there will be">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'where and when', role: '疑問詞' },
          { t: 'there', kind: 'key' },
          { t: 'will be', role: '動詞', kind: 'key' },
          { t: 'a major earthquake.', role: '名詞' },
        ]"
      />
      <p class="remark">直接問的話是 <code>Where will there be a major earthquake?</code></p>
    </NoteSlide>

    <NoteSlide title="沒有疑問詞的問題，用 if 或 whether 帶出間接問句" mark="where">
      <div class="rows is-labeled">
        <div>
          <span class="term">if</span>
          <span
            ><NoteMark
              sentence="Can you tell me if there is a convenience store near here?"
              :marks="['if there is']"
            /><span class="translation">你可以告訴我這附近有沒有便利商店嗎？</span></span
          >
        </div>
        <div>
          <span class="term">whether</span>
          <span
            ><NoteMark
              sentence="I asked the ticket clerk whether there were any seats left."
              :marks="['whether there were']"
            /><span class="translation">我問售票員還有沒有剩下的座位。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="主要動詞是過去式，改成 there was、there were 或 there would be"
      mark="there will be"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">there was</span>
          <span
            ><NoteMark
              sentence="She asked me if there was a post office nearby."
              :marks="['asked', 'there was']"
            /><span class="translation">她問我附近有沒有郵局。</span></span
          >
        </div>
        <div>
          <span class="term">there were</span>
          <span
            ><NoteMark
              sentence="She asked whether there were any towels in the room."
              :marks="['asked', 'there were']"
            /><span class="translation">她問房間裡有沒有毛巾。</span></span
          >
        </div>
        <div>
          <span class="term">there would be</span>
          <span
            ><NoteMark
              sentence="I asked my teacher when there would be a school trip."
              :marks="['asked', 'there would be']"
            /><span class="translation">我問老師什麼時候會有校外教學。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個疑問詞連在一起，共用後面的子句" mark="where and when">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'where', role: '疑問詞', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'when', role: '疑問詞', kind: 'key' },
          { t: 'there will be a major earthquake.', role: '共用的子句' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="兩個疑問詞用 and 或 or 連接" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark
              sentence="Please tell me when and where we will meet."
              :marks="['when and where']"
            /><span class="translation">請告訴我我們什麼時候、在哪裡見面。</span></span
          >
        </div>
        <div>
          <span class="term">or</span>
          <span
            ><NoteMark
              sentence="I don't remember how or why it happened."
              :marks="['how or why']"
            /><span class="translation">我不記得那件事是怎麼發生的、為什麼發生。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
