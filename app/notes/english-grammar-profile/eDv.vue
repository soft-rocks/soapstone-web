<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-manner-106, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情狀副詞放在受詞後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'she should take', role: '主詞 + 助動詞 + 動詞', kind: 'dim' },
          { t: 'his warning', role: '受詞' },
          { t: 'seriously.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">她應該認真看待他的警告。</p>
    </NoteSlide>

    <NoteSlide title="要強調做法時，情狀副詞可以放在一般動詞前面" mark="seriously">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He', role: '主詞', kind: 'dim' },
          { t: 'deliberately', role: '情狀副詞', kind: 'key' },
          { t: 'broke', role: '一般動詞' },
          { t: 'the window.', role: '受詞' },
        ]"
      />
      <p class="translation">他是故意打破窗戶的。</p>
    </NoteSlide>

    <NoteSlide title="有些情狀副詞常和固定的動詞一起用" mark="take his warning seriously">
      <div class="rows is-labeled">
        <div>
          <span class="term">take ... seriously</span>
          <span>認真看待</span>
        </div>
        <div>
          <span class="term">need ... urgently</span>
          <span>急需</span>
        </div>
        <div>
          <span class="term">work properly</span>
          <span>正常運作</span>
        </div>
        <div>
          <span class="term">treat ... fairly</span>
          <span>公平對待</span>
        </div>
        <div>
          <span class="term">do ... deliberately / accidentally</span>
          <span>故意做 / 不小心做</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情狀副詞不放在動詞和受詞中間" mark="seriously">
      <NoteFix
        wrong="Nobody took seriously my idea."
        right="Nobody took my idea seriously."
        fix="my idea seriously."
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用副詞 properly">
      <NoteFix
        wrong="The coffee machine in our kitchen isn't working proper."
        right="The coffee machine in our kitchen isn't working properly."
        fix="properly"
      />
    </NoteSlide>

    <NoteSlide title="accidental 加 -ly 寫成 accidentally">
      <NoteFix
        wrong="I accidently deleted the file."
        right="I accidentally deleted the file."
        fix="accidentally"
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞 take 用副詞 seriously">
      <NoteFix
        wrong="The police didn't take the threat serious."
        right="The police didn't take the threat seriously."
        fix="seriously."
      />
    </NoteSlide>

    <NoteSlide title="fairly 修飾動詞表示公平，修飾形容詞表示相當">
      <div class="rows is-labeled">
        <div>
          <span class="term">公平地</span>
          <span
            ><NoteMark sentence="The judge treated everyone fairly." :marks="['fairly']" /><span
              class="translation"
              >法官公平地對待每一個人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">相當</span>
          <span
            ><NoteMark
              sentence="The walk to the waterfall was fairly easy."
              :marks="['fairly easy.']"
            /><span class="translation">走去瀑布的路相當好走。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
