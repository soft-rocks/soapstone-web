<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 048, as slides, in the order of notes/dragon-english-basic-100/048.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="apologize 用 to 帶出道歉的對象，用 for 帶出原因">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'apologized', role: '動詞', kind: 'key' },
          { t: 'to Ann', role: 'to + 人', kind: 'key' },
          { t: 'for being late,', role: 'for + 原因', kind: 'key' },
          { t: 'but she didn’t forgive me.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>apologize</code> 是不及物動詞。</p>
    </NoteSlide>

    <NoteSlide title="apologize 的 for 後面接名詞或動詞-ing" mark="for being late">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="I apologized to my teacher for my mistake."
              :marks="['my mistake']"
            /><span class="translation">我為我的錯誤向老師道歉。</span></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="You should apologize to your sister for breaking her cup."
              :marks="['breaking']"
            /><span class="translation">你應該為打破你妹妹的杯子向她道歉。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面的 be 動詞用動名詞 being" mark="being late">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'for', role: '介系詞' },
          { t: 'being', role: '動名詞', kind: 'key', ring: true },
          { t: 'late', role: '形容詞' },
        ]"
      />
      <p class="remark"><code>being late</code> 的意思是遲到這件事。</p>
    </NoteSlide>

    <NoteSlide title="being 的否定式是 not being" mark="being">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He was sorry', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'not being', role: '否定的動名詞', kind: 'key' },
          { t: 'careful.', role: '形容詞' },
        ]"
      />
      <p class="translation">他很抱歉自己不夠小心。</p>
    </NoteSlide>

    <NoteSlide title="forgive 直接接人當受詞，人的前面不加 to" mark="forgive me">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'she', role: '主詞' },
          { t: 'didn’t forgive', role: '動詞', kind: 'key' },
          { role: '不加 to' },
          { t: 'me.', role: '受詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">她沒有原諒我。</p>
    </NoteSlide>

    <NoteSlide title="forgive 用 for 帶出原諒的原因，for 的部分可以省略" mark="forgive me">
      <div class="rows is-labeled">
        <div>
          <span class="term">forgive + 人 + for</span>
          <span
            ><NoteMark
              sentence="She never forgave him for lying to her."
              :marks="['for lying to her']"
            /><span class="translation">她從來沒有原諒他對她說謊。</span></span
          >
        </div>
        <div>
          <span class="term">forgive + 人</span>
          <span
            ><NoteMark sentence="I'm sorry. Please forgive me." :marks="['forgive me']" /><span
              class="translation"
              >對不起。請原諒我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
