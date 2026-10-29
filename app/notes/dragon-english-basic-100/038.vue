<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 038, as slides, in the order of notes/dragon-english-basic-100/038.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="動詞-ing 片段放在名詞後面，修飾這個名詞"
      mark="students coming to the library"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Some students', role: '名詞', kind: 'key' },
          { t: 'coming to the library', role: '動詞-ing 片段', kind: 'key' },
          { t: 'act as if they are in a coffee shop.', kind: 'dim' },
        ]"
      />
      <p class="remark">這個片段等於 <code>students who come to the library</code>。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 片段說明這個人或東西做什麼或正在做什麼" mark="coming to the library">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark
              sentence="The boy sitting next to me is my cousin."
              :marks="['sitting next to me']"
            /><span class="translation">坐在我旁邊的男生是我表弟。</span></span
          >
        </div>
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark
              sentence="Who is the woman talking to your father?"
              :marks="['talking to your father']"
            /><span class="translation">在跟你爸爸說話的那個女人是誰？</span></span
          >
        </div>
        <div>
          <span class="term">做什麼</span>
          <span
            ><NoteMark
              sentence="Students living far from school can take the school bus."
              :marks="['living far from school']"
            /><span class="translation">住得離學校遠的學生可以搭校車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as if 帶出子句，說明主詞的樣子像什麼" mark="as if">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Some students coming to the library', role: '主詞', kind: 'dim' },
          { t: 'act', role: '動詞' },
          { t: 'as if', role: '連接詞', kind: 'key' },
          { t: 'they are in a coffee shop.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="as if 的內容不是真的時，子句用過去式或現在式" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">可能是真的<br /><i>現在式</i></span>
          <span
            ><NoteMark sentence="It looks as if it is going to rain." :marks="['is']" /><span
              class="translation"
              >看起來好像要下雨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不是真的<br /><i>過去式</i></span>
          <span
            ><NoteMark sentence="He talks to me as if I were a child." :marks="['were']" /><span
              class="translation"
              >他跟我說話的樣子，好像我是小孩。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不是真的<br /><i>現在式</i></span>
          <span
            ><NoteMark sentence="He acts as if he is the boss." :marks="['is']" /><span
              class="translation"
              >他表現得好像他是老闆。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">原句的學生不在咖啡店，子句用現在式 <code>are</code>。</p>
    </NoteSlide>

    <NoteSlide title="講比主要動詞更早的事，as if 子句用過去完成式" mark="as if">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Ann', role: '主詞' },
          { t: 'acted', role: '主要動詞' },
          { t: 'as if', role: '連接詞', kind: 'dim' },
          { t: 'nothing', role: '主詞' },
          { t: 'had happened.', role: '過去完成式', kind: 'key' },
        ]"
      />
      <p class="translation">Ann 表現得好像什麼事都沒發生過。</p>
    </NoteSlide>
  </NoteDeck>
</template>
