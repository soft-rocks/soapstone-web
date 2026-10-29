<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-simple, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞放在名詞或代名詞前面" mark="for you.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I can cook', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'some food', role: '受詞', kind: 'dim' },
          { t: 'for', role: '介系詞', kind: 'key' },
          { t: 'you.', role: '代名詞（受格）' },
        ]"
      />
      <p class="translation">我可以煮點東西給你吃。</p>
      <p class="remark"><code>for you</code> 說明是給誰的。</p>
    </NoteSlide>

    <NoteSlide title="常用的介系詞說地點、方向、對象或一起的人" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">in<br /><i>在……裡面</i></span>
          <span>in the box, in Tainan</span>
        </div>
        <div>
          <span class="term">at<br /><i>在某個地點</i></span>
          <span>at home, at school</span>
        </div>
        <div>
          <span class="term">to<br /><i>到、往</i></span>
          <span>go to school, send it to me</span>
        </div>
        <div>
          <span class="term">for<br /><i>給、為了</i></span>
          <span>a present for you</span>
        </div>
        <div>
          <span class="term">with<br /><i>和……一起</i></span>
          <span>play with my brother</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="月份用 in，星期用 on，幾點用 at">
      <div class="rows is-labeled">
        <div>
          <span class="term">in</span>
          <span>in July, in the evening</span>
        </div>
        <div>
          <span class="term">on</span>
          <span>on Friday, on 3 May</span>
        </div>
        <div>
          <span class="term">at</span>
          <span>at 7:30, at night</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面的代名詞用受格" mark="you.">
      <NoteFix wrong="These cookies are for she." right="These cookies are for her." fix="her" />
    </NoteSlide>

    <NoteSlide title="星期前面用 on">
      <NoteFix wrong="The shop is closed in Sunday mornings." right="The shop is closed on Sunday mornings." fix="on" />
    </NoteSlide>

    <NoteSlide title="去某個地方用 go to">
      <NoteFix wrong="Does your son go school near here?" right="Does your son go to school near here?" fix="to">
        <code>home</code> 是例外，說 <code>go home</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
