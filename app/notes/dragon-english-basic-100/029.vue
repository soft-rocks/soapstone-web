<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 029, as slides, in the order of notes/dragon-english-basic-100/029.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="found 後面的子句，動詞通常也用過去式" mark="found that it was">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'found', role: '過去式', kind: 'key' },
          { t: 'that', role: '連接詞' },
          { t: 'it', role: '主詞' },
          { t: 'was', role: '過去式', kind: 'key' },
          { t: 'no longer what it used to be.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>find that</code> 表示發現某件事。</p>
    </NoteSlide>

    <NoteSlide title="found 後面的 that 可以省略" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark sentence="I found that the shop was closed." :marks="['found that']" /><span
              class="translation"
              >我發現那家店關門了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">省略 that</span>
          <span
            ><NoteMark sentence="I found the door was locked." :marks="['found']" /><span
              class="translation"
              >我發現門鎖著。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="no longer 表示以前是這樣，現在不是了" mark="no longer">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'it', role: '主詞' },
          { t: 'was', role: 'be 動詞' },
          { t: 'no longer', kind: 'key', ring: true },
          { t: 'what it used to be.', role: '補語' },
        ]"
      />
      <p class="remark"><code>no longer</code> 放在 <code>be</code> 動詞後面。</p>
    </NoteSlide>

    <NoteSlide title="no longer 放在一般動詞前面" mark="no longer">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'no longer', kind: 'key', ring: true },
          { t: 'lives', role: '一般動詞' },
          { t: 'in Tokyo.', kind: 'dim' },
        ]"
      />
      <p class="translation">他已經不住在東京了。</p>
    </NoteSlide>

    <NoteSlide title="not … any longer 和 no longer 意思一樣" mark="no longer">
      <div class="rows is-labeled">
        <div>
          <span class="term">no longer</span>
          <span
            ><NoteMark sentence="My father no longer smokes." :marks="['no longer']" /><span
              class="translation"
              >我爸爸已經不抽菸了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not … any longer</span>
          <span
            ><NoteMark
              sentence="She doesn't play the piano any longer."
              :marks="['doesn\'t', 'any longer']"
            /><span class="translation">她已經不彈鋼琴了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="what 加主詞加 used to be，指以前的樣子" mark="what it used to be">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'what', role: '名詞子句', kind: 'key' },
          { t: 'it', role: '主詞' },
          { t: 'used to be.', role: '以前是這樣', kind: 'key' },
        ]"
      />
      <p class="remark"><code>what it used to be</code> 是它以前的樣子。</p>
    </NoteSlide>

    <NoteSlide title="what 加主詞加 is 指現在的樣子，加 was 指過去的樣子" mark="what it used to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">was</span>
          <span
            ><NoteMark
              sentence="This town is very different from what it was ten years ago."
              :marks="['what it was']"
            /><span class="translation">這個小鎮跟十年前的樣子很不一樣。</span></span
          >
        </div>
        <div>
          <span class="term">is</span>
          <span
            ><NoteMark
              sentence="The station in this old photo is very different from what it is now."
              :marks="['what it is']"
            /><span class="translation">這張舊照片裡的車站跟現在的樣子很不一樣。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
