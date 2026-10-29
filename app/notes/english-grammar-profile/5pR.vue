<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative-with-will, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="won't be 加動詞-ing 說那個時間不會進行的動作" mark="won't be attending">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'won\'t be', role: 'will not be', kind: 'key', ring: true },
          { t: 'attending', role: '動詞-ing', kind: 'key' },
          { t: 'your English class', kind: 'dim' },
          { t: 'next week.', role: '未來的時間' },
        ]"
      />
      <p class="translation">我下週不會去上你的英文課。</p>
      <p class="remark">學生下星期要跟家人去倫敦旅行。</p>
    </NoteSlide>

    <NoteSlide title="書面寫 will not be，口語說 won't be" mark="won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">will not be<br /><i>書面、正式場合</i></span>
          <span
            ><NoteMark
              sentence="The library will not be opening on Sunday."
              :marks="['will not be']"
            /><span class="translation">圖書館星期天不開。</span></span
          >
        </div>
        <div>
          <span class="term">won't be<br /><i>口語</i></span>
          <span
            ><NoteMark sentence="I won't be wearing a tie tonight." :marks="['won\'t be']" /><span
              class="translation"
              >我今晚不會打領帶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面常接不會做的原因" mark="won't be attending">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I won\'t be cycling to work this week,', role: '不會做的事' },
          { t: 'because my bike is broken.', role: '原因', kind: 'key' },
        ]"
      />
      <p class="translation">我這星期不會騎腳踏車上班，因為我的腳踏車壞了。</p>
    </NoteSlide>

    <NoteSlide title="not 放在 will 後面、be 前面" mark="won't">
      <NoteFix
        wrong="I will be not attending the meeting."
        right="I will not be attending the meeting."
        fix="not be"
      />
    </NoteSlide>

    <NoteSlide title="won't 後面先接 be，再接動詞-ing" mark="be">
      <NoteFix
        wrong="She won't coming with us."
        right="She won't be coming with us."
        fix="be coming"
      />
    </NoteSlide>

    <NoteSlide title="will not 的縮寫是 won't" mark="won't">
      <NoteFix
        wrong="They willn't be staying long."
        right="They won't be staying long."
        fix="won't"
      />
    </NoteSlide>

    <NoteSlide title="未來進行式的否定用 won't，不用 don't" mark="won't">
      <NoteFix
        wrong="I don't be working tomorrow."
        right="I won't be working tomorrow."
        fix="won't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
