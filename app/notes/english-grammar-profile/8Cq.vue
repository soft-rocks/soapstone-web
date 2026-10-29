<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-it-were-not-for, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if it weren't for 的意思是要不是有" mark="If it weren't for">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If it weren\'t for', role: '要不是有', kind: 'key' },
          { t: 'my glasses,', role: '名詞片語' },
          { t: 'I wouldn\'t be able to read this.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">要不是有眼鏡，我沒辦法看這個。</p>
      <p class="remark">
        <code>it</code> 不指任何東西。<code>for</code> 後面接名詞片語，不接子句。
      </p>
    </NoteSlide>

    <NoteSlide title="正式的書面文字寫成 were not">
      <div class="rows is-labeled">
        <div>
          <span class="term">weren't</span>
          <span
            ><NoteMark
              sentence="If it weren't for the rain, we would eat outside."
              :marks="['weren\'t']"
            /><span class="translation">要不是下雨，我們會在外面吃。</span></span
          >
        </div>
        <div>
          <span class="term">were not<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="If it were not for this grant, the research would stop."
              :marks="['were not']"
            /><span class="translation">要不是有這筆補助，研究就會停下來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句說現在的結果，或過去的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">would + 原形動詞<br /><i>現在</i></span>
          <span
            ><NoteMark
              sentence="If it weren't for the noise, this would be the perfect flat."
              :marks="['would be']"
            /><span class="translation">要不是有噪音，這間公寓就完美了。</span></span
          >
        </div>
        <div>
          <span class="term">would have + 過去分詞<br /><i>過去</i></span>
          <span
            ><NoteMark
              sentence="If it weren't for her advice, I would have bought the wrong car."
              :marks="['would have bought']"
            /><span class="translation">要不是她的建議，我就買錯車了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="條件子句放在主要子句後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="I would join you if it weren't for my exam tomorrow."
              :marks="['if it weren\'t for']"
            /><span class="translation">要不是明天要考試，我就跟你們去了。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="I would have given up long ago if it weren't for you."
              :marks="['if it weren\'t for']"
            /><span class="translation">要不是有你，我早就放棄了。</span></span
          >
        </div>
      </div>
      <p class="remark">條件子句放在後面時，前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could 或 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="If it weren't for the traffic, we could be there in ten minutes."
              :marks="['could']"
            /><span class="translation">要不是塞車，我們十分鐘就能到。</span></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="If it weren't for the cost, we might move to the coast."
              :marks="['might']"
            /><span class="translation">要不是費用的問題，我們可能會搬到海邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：主要子句說過去考試的結果" mark="would have failed">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If it weren\'t for', role: '要不是有' },
          { t: 'that boy,', role: '名詞片語' },
          { t: 'I would have failed the exams.', role: '主要子句', kind: 'key' },
        ]"
      />
      <p class="translation">要不是那個男生，我考試就不及格了。</p>
      <p class="remark">那個男生幫了說話的人。</p>
    </NoteSlide>

    <NoteSlide title="for 後面接名詞片語，不接子句" mark="that boy,">
      <NoteFix
        wrong="If it weren't for she lent me the money, I couldn't pay the rent."
        right="If it weren't for her loan, I couldn't pay the rent."
        fix="her loan,"
      />
    </NoteSlide>

    <NoteSlide title="would 只放在主要子句" mark="If it weren't for">
      <NoteFix
        wrong="If it wouldn't be for your help, we would still be lost."
        right="If it weren't for your help, we would still be lost."
        fix="weren't for"
      />
    </NoteSlide>

    <NoteSlide title="主要子句用 would，不用 will">
      <NoteFix
        wrong="If it weren't for the noise, I will sleep much better."
        right="If it weren't for the noise, I would sleep much better."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="If it hadn't been for 只說過去的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">hadn't been for</span>
          <span
            ><NoteMark
              sentence="If it hadn't been for the map, we would have got lost."
              :marks="['hadn\'t been for']"
            /><span class="translation">要不是有那張地圖，我們早就迷路了。</span></span
          >
        </div>
        <div>
          <span class="term">hadn't been for</span>
          <span
            ><NoteMark
              sentence="If it hadn't been for the delay, we would have caught the train."
              :marks="['hadn\'t been for']"
            /><span class="translation">要不是延誤，我們就趕上火車了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>If it weren't for</code> 的名詞片語到現在還是一樣，像原句的那個男生。
      </p>
    </NoteSlide>

    <NoteSlide title="Were it not for 省略 if，意思一樣，語氣更正式">
      <div class="rows is-labeled">
        <div>
          <span class="term">Were it not for</span>
          <span
            ><NoteMark
              sentence="Were it not for his help, I would have failed."
              :marks="['Were it not for']"
            /><span class="translation">要不是他幫忙，我早就不及格了。</span></span
          >
        </div>
        <div>
          <span class="term">Were it not for</span>
          <span
            ><NoteMark
              sentence="Were it not for the bridge, the island would have no link to the mainland."
              :marks="['Were it not for']"
            /><span class="translation">要不是有這座橋，這座島就沒有路通往本島。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
