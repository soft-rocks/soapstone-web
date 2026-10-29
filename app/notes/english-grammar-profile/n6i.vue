<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-if-clause-imperative-hedging, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="讓對方自己決定" mark="if you like.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Leave your coat on the chair', role: '祈使句' },
          { t: 'if you want.', role: '對方決定', kind: 'key' },
        ]"
      />
      <p class="translation">你想的話，外套可以放在椅子上。</p>
    </NoteSlide>

    <NoteSlide title="祈使句加 if you want" mark="Call me">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="Borrow my umbrella if you want."
              :marks="['Borrow my umbrella']"
            /><span class="translation">你想的話，就借我的傘去用。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="提議和建議加 if you like">
      <div class="rows is-labeled">
        <div>
          <span class="term">I can<br /><i>提議幫忙</i></span>
          <span
            ><NoteMark
              sentence="I can lend you my notes if you like."
              :marks="['I can lend']"
            /><span class="translation">你想要的話，我可以借你筆記。</span></span
          >
        </div>
        <div>
          <span class="term">you could<br /><i>建議</i></span>
          <span
            ><NoteMark
              sentence="You could invite Lucy too if you like."
              :marks="['You could invite']"
            /><span class="translation">你想的話，也可以邀 Lucy。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if you prefer 說另一個選擇">
      <div class="rows is-labeled">
        <div>
          <span class="term">or ...<br /><i>if you prefer</i></span>
          <span
            ><NoteMark
              sentence="We can walk there, or take a taxi if you prefer."
              :marks="['or take a taxi', 'if you prefer.']"
            /><span class="translation">我們可以走路去，你比較想的話也可以搭計程車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句放在前面加逗號">
      <div class="rows is-labeled">
        <div>
          <span class="term">放在前面</span>
          <span
            ><NoteMark sentence="If you want, I'll come with you." :marks="['If you want,']" /><span
              class="translation"
              >你想的話，我陪你去。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：打不打由對方決定" mark="if you like.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Call me', role: '祈使句' },
          { t: 'if you like.', role: '對方決定', kind: 'key' },
        ]"
      />
      <p class="translation">你想的話，可以打電話給我。</p>
      <p class="remark">只說 Call me.，聽起來像要求對方一定要打。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 will" mark="like.">
      <NoteFix
        wrong="Come to the cinema with us if you will like."
        right="Come to the cinema with us if you like."
        fix="you like"
      />
    </NoteSlide>

    <NoteSlide title="提議要用 can 或 will">
      <NoteFix
        wrong="If you want, I help you carry the boxes."
        right="If you want, I'll help you carry the boxes."
        fix="I'll help"
      />
    </NoteSlide>

    <NoteSlide title="主要子句不用 must" mark="if you like.">
      <NoteFix
        wrong="You must come to the party if you like."
        right="You can come to the party if you like."
        fix="can"
      />
    </NoteSlide>

    <NoteSlide title="if you like it 說喜歡那個東西">
      <div class="rows is-labeled">
        <div>
          <span class="term">if you like<br /><i>你想要的話</i></span>
          <span
            ><NoteMark
              sentence="Have a piece of the cake if you like."
              :marks="['if you like.']"
            /><span class="translation">你想要的話，就吃一塊蛋糕吧。</span></span
          >
        </div>
        <div>
          <span class="term">if you like it<br /><i>你喜歡的話</i></span>
          <span
            ><NoteMark
              sentence="Keep the painting if you like it."
              :marks="['if you like it.']"
            /><span class="translation">如果你喜歡這幅畫，就留著吧。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Would you like 用疑問句提議">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="Would you like a lift home?" :marks="['Would you like']" /><span
              class="translation"
              >你要搭我的車回家嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">直述句</span>
          <span
            ><NoteMark
              sentence="I can give you a lift home if you like."
              :marks="['if you like.']"
            /><span class="translation">你想要的話，我可以載你回家。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
