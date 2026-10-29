<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-simple, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主要子句 + 從屬連接詞 + 子句" mark="while">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'All of us were dancing', role: '主要子句', kind: 'dim' },
          { t: 'while', role: '連接詞', kind: 'key' },
          { t: 'my father', role: '主詞' },
          { t: 'sang', role: '動詞' },
          { t: 'my favorite song.', role: '受詞' },
        ]"
      />
      <p class="translation">我爸爸在唱我最喜歡的歌，我們大家都在跳舞。</p>
    </NoteSlide>

    <NoteSlide title="子句放在句首加逗號">
      <NoteMark
        sentence="If I need a camera, I will use my mobile phone."
        :marks="['If', 'camera,']"
      />
      <p class="translation">如果我需要相機，我會用我的手機。</p>
    </NoteSlide>

    <NoteSlide title="if、when、while、so 的意思" mark="while">
      <div class="rows is-labeled">
        <div>
          <span class="term">if</span>
          <span>如果，說出條件</span>
        </div>
        <div>
          <span class="term">when</span>
          <span>當……的時候，說出時間</span>
        </div>
        <div>
          <span class="term">while</span>
          <span>在……的同時，兩件事同時進行</span>
        </div>
        <div>
          <span class="term">so</span>
          <span>所以，說出結果</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if、when 子句說未來用現在式">
      <div class="rows is-labeled">
        <div>
          <span class="term">if</span>
          <span
            ><NoteMark
              sentence="If you come to my house, I will show you my new bike."
              :marks="['come', 'will show']"
            /><span class="translation">如果你來我家，我會給你看我的新腳踏車。</span></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="When I finish my homework, I will call you."
              :marks="['finish', 'will call']"
            /><span class="translation">我寫完功課就打給你。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句不用 will">
      <NoteFix
        wrong="If it will rain tomorrow, we will stay at home."
        right="If it rains tomorrow, we will stay at home."
        fix="rains"
      />
    </NoteSlide>

    <NoteSlide title="從屬子句不單獨成句">
      <NoteFix
        wrong="I was very happy. When I saw my grandmother."
        right="I was very happy when I saw my grandmother."
        fix="happy when"
      />
    </NoteSlide>

    <NoteSlide title="so 放在結果前面">
      <NoteFix
        wrong="So I was hungry, I made a sandwich."
        right="I was hungry, so I made a sandwich."
        fix="so I made"
      />
    </NoteSlide>

    <NoteSlide title="while 子句要有主詞" mark="my father">
      <NoteFix
        wrong="My mum cooked dinner while was watching TV."
        right="My mum cooked dinner while my dad was watching TV."
        fix="my dad"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
