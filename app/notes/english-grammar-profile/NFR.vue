<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-in-itself-intensifying, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="in itself 說這件事本身">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In my opinion,', kind: 'dim' },
          { t: 'a car', role: '主詞' },
          { t: 'can\'t be harmful', role: 'be + 形容詞' },
          { t: 'in itself.', role: '本身', kind: 'key' },
        ]"
      />
      <p class="translation">我認為汽車本身不可能有害。</p>
      <p class="remark">說的是汽車這個東西，不是開車的人。</p>
    </NoteSlide>

    <NoteSlide title="in itself 放在形容詞或名詞片語後面，也可以緊接在主詞後面" mark="in itself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The plan is not wrong in itself; we just started it too late."
              :marks="['wrong in itself;']"
            /><span class="translation">這個計畫本身沒錯，我們只是太晚開始。</span></span
          >
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="Finishing the marathon was an achievement in itself."
              :marks="['an achievement in itself.']"
            /><span class="translation">跑完馬拉松本身就是一項成就。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="Money in itself doesn't make people happy."
              :marks="['Money in itself']"
            /><span class="translation">錢本身不會讓人快樂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句子常接著說問題出在別的地方" mark="in itself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">對比</span>
          <span
            ><NoteMark
              sentence="Social media isn't dangerous in itself. It depends on how you use it."
              :marks="['in itself.', 'how you use it.']"
            /><span class="translation">社群媒體本身並不危險，要看你怎麼用。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 in themselves" mark="in itself.">
      <NoteFix
        wrong="These problems are not serious in itself."
        right="These problems are not serious in themselves."
        fix="themselves."
      />
    </NoteSlide>

    <NoteSlide title="固定說法是 in itself，不是 in it" mark="in itself.">
      <NoteFix
        wrong="The plan isn't bad in it."
        right="The plan isn't bad in itself."
        fix="itself."
      />
    </NoteSlide>

    <NoteSlide title="表示本身的固定說法用介系詞 in" mark="in itself.">
      <NoteFix
        wrong="Money on itself won't solve the problem."
        right="Money in itself won't solve the problem."
        fix="in"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
