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

    <NoteSlide title="in itself 放在形容詞或名詞片語後面" mark="in itself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="Our new shop failed. The plan was not wrong in itself; we just started it too late."
              :marks="['wrong in itself;']"
            /><span class="translation"
              >我們的新店失敗了。這個計畫本身沒錯，我們只是太晚開始。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="My time was very slow, but I didn't care. Finishing the marathon was an achievement in itself."
              :marks="['an achievement in itself.']"
            /><span class="translation"
              >我的時間很慢，可是我不在乎。跑完馬拉松本身就是一項成就。</span
            ></span
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
        wrong="The report lists three problems. These problems are not serious in itself."
        right="The report lists three problems. These problems are not serious in themselves."
        fix="themselves."
      />
    </NoteSlide>

    <NoteSlide title="固定說法是 in itself，不是 in it" mark="in itself.">
      <NoteFix
        wrong="Don't give up the idea of a school garden. The plan isn't bad in it."
        right="Don't give up the idea of a school garden. The plan isn't bad in itself."
        fix="itself."
      />
    </NoteSlide>

    <NoteSlide title="表示本身的固定說法用介系詞 in" mark="in itself.">
      <NoteFix
        wrong="The school needs better teachers, not just new computers. Money on itself won't solve the problem."
        right="The school needs better teachers, not just new computers. Money in itself won't solve the problem."
        fix="in"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
