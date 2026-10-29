<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-with-superlative, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="最高級加現在完成式，說到現在最特別的經驗" mark="the best game">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'That is', kind: 'dim' },
          { t: 'the best game', role: 'the + 最高級 + 名詞', kind: 'key', ring: true },
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'ever', role: '到現在', kind: 'key' },
          { t: 'played.', role: '過去分詞' },
        ]"
      />
      <p class="translation">那是我玩過最棒的一場比賽。</p>
      <p class="remark">說話者拿這場和這輩子打過的每一場比。</p>
    </NoteSlide>

    <NoteSlide title="ever 放在 have 和過去分詞中間" mark="ever">
      <NoteMark
        sentence="That is the best game I've ever played."
        :marks="['I\'ve ever played.']"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面可以加 that，意思不變" mark="game">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I walked out after twenty minutes.', kind: 'dim' },
          { t: 'It\'s the worst film', kind: 'dim' },
          { t: 'that', role: '可加可不加', kind: 'key', ring: true },
          { t: 'I\'ve ever seen.', kind: 'dim' },
        ]"
      />
      <p class="translation">我看了二十分鐘就走出來了。那是我看過最爛的電影。</p>
    </NoteSlide>

    <NoteSlide title="the first、the only 後面也常接現在完成式" mark="the best">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'m a bit nervous on this plane.', kind: 'dim' },
          { t: 'This is', kind: 'dim' },
          { t: 'the first time', role: 'the first', kind: 'key', ring: true },
          { t: 'I\'ve flown.', role: '現在完成式' },
        ]"
      />
      <p class="translation">我在這架飛機上有點緊張。這是我第一次搭飛機。</p>
    </NoteSlide>

    <NoteSlide title="比較到現在的經驗，用現在完成式" mark="I've ever played.">
      <NoteFix
        wrong="That was the most boring museum my class ever visit."
        right="That was the most boring museum my class has ever visited."
        fix="has ever visited"
      />
    </NoteSlide>

    <NoteSlide title="ever 不放在句尾" mark="ever">
      <NoteFix
        wrong="This is the longest bridge we've driven across ever."
        right="This is the longest bridge we've ever driven across."
        fix="ever"
      />
    </NoteSlide>

    <NoteSlide title="最高級加名詞，前面要加 the" mark="the">
      <NoteFix
        wrong="That's tallest tree my son has ever climbed."
        right="That's the tallest tree my son has ever climbed."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="比較的範圍已經結束，用過去簡單式" mark="I've ever played.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We played golf every day in Scotland.', kind: 'dim' },
          { t: 'It was the best game I', kind: 'dim' },
          { t: 'played', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'on that trip.', role: '結束的時間' },
        ]"
      />
      <p class="translation">我們在蘇格蘭每天都打高爾夫。那是我那趟旅行打得最好的一場。</p>
    </NoteSlide>

    <NoteSlide title="never 加比較級，意思和最高級加 ever 一樣" mark="best">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We won the final in the last second.', kind: 'dim' },
          { t: 'I\'ve', kind: 'dim' },
          { t: 'never', role: '從來沒有', kind: 'key', ring: true },
          { t: 'played' },
          { t: 'a better game.', role: '比較級', kind: 'key' },
        ]"
      />
      <p class="translation">我們在最後一秒贏了決賽。我從來沒打過更好的比賽。</p>
    </NoteSlide>

    <NoteSlide title="in 或 of 說比較的範圍是一個群體" mark="I've ever played.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Give the ball to Leo.', kind: 'dim' },
          { t: 'He\'s the best player', kind: 'dim' },
          { t: 'in the team.', role: '群體', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">把球傳給里歐。他是隊上最好的球員。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
