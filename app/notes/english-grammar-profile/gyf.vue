<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-one-general-formal, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one 泛指任何人，動詞用單數" mark="one sees">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… is that', kind: 'dim' },
          { t: 'one', role: '任何人', kind: 'key' },
          { t: 'sees', role: '單數動詞', kind: 'key' },
          { t: 'cats everywhere.', kind: 'dim' },
        ]"
      />
      <p class="translation">……就是到處都看得到貓。</p>
    </NoteSlide>

    <NoteSlide title="one、one's 和 oneself" mark="one sees">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞 one</span>
          <span
            ><NoteMark sentence="One should always tell the truth." :marks="['One']" /><span
              class="translation"
              >人應該永遠說實話。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所有格 one's</span>
          <span
            ><NoteMark sentence="One must look after one's health." :marks="['one\'s']" /><span
              class="translation"
              >人必須照顧好自己的健康。</span
            ></span
          >
        </div>
        <div>
          <span class="term">反身代名詞 oneself</span>
          <span
            ><NoteMark
              sentence="It is important to believe in oneself."
              :marks="['oneself']"
            /><span class="translation">相信自己很重要。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="One more reason 的 one 是數字" mark="One more reason">
      <div class="rows is-labeled">
        <div>
          <span class="term">數字</span>
          <span>One more reason</span>
        </div>
        <div>
          <span class="term">任何人</span>
          <span>one sees cats everywhere</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one 後面用單數動詞" mark="sees">
      <NoteFix
        wrong="One never feel safe walking here at night."
        right="One never feels safe walking here at night."
        fix="feels"
      />
    </NoteSlide>

    <NoteSlide title="所有格要加撇號">
      <NoteFix
        wrong="One should wash ones hands before meals."
        right="One should wash one's hands before meals."
        fix="one's"
      />
    </NoteSlide>

    <NoteSlide title="反身代名詞是 oneself">
      <NoteFix
        wrong="One can easily lose oneselves in a big city."
        right="One can easily lose oneself in a big city."
        fix="oneself"
      />
    </NoteSlide>

    <NoteSlide title="用了 one，就繼續用 one">
      <NoteFix
        wrong="If one works hard, you will succeed."
        right="If one works hard, one will succeed."
        fix="one will"
      />
    </NoteSlide>

    <NoteSlide title="you 比 one 口語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', role: '一般人', kind: 'key' },
          { t: 'can\'t always get what', kind: 'dim' },
          { t: 'you', role: '一般人', kind: 'key' },
          { t: 'want.', kind: 'dim' },
        ]"
      />
      <p class="translation">人不可能總是得到想要的東西。</p>
    </NoteSlide>

    <NoteSlide title="代替名詞的 one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I don\'t like this', kind: 'dim' },
          { t: 'cup.', role: '名詞', kind: 'key' },
          { t: 'Can I have a different', kind: 'dim' },
          { t: 'one?', role: '= cup', kind: 'key' },
        ]"
      />
      <p class="translation">我不喜歡這個杯子。可以換一個嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
