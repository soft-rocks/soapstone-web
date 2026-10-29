<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-past-perfect-modal-verbs, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去沒發生的事，想像它發生了" mark="if the plan had been more flexible.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞' },
          { t: 'I had known about the sale,', role: 'had + 過去分詞', kind: 'key' },
          { t: 'I could have saved a lot of money.', role: 'could have + 過去分詞' },
        ]"
      />
      <p class="translation">如果我早知道有特價，本來可以省很多錢。</p>
      <p class="remark">這個句型常帶著後悔或遺憾。</p>
    </NoteSlide>

    <NoteSlide title="could have：本來可以做到" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">could have</span>
          <span
            ><NoteMark
              sentence="If she had asked for help, she could have finished on time."
              :marks="['could have finished']"
            /><span class="translation">如果她當初找人幫忙，本來可以準時完成。</span></span
          >
        </div>
        <div>
          <span class="term">could have</span>
          <span
            ><NoteMark
              sentence="If you had told me earlier, I could have changed my plans."
              :marks="['could have changed']"
            /><span class="translation">如果你早點告訴我，我本來可以改變計畫。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="might have：也許會發生">
      <div class="rows is-labeled">
        <div>
          <span class="term">might have</span>
          <span
            ><NoteMark
              sentence="If they had taken the coast road, they might have seen the dolphins."
              :marks="['might have seen']"
            /><span class="translation">如果他們走海岸公路，也許會看到海豚。</span></span
          >
        </div>
        <div>
          <span class="term">might have</span>
          <span
            ><NoteMark
              sentence="If the weather had been better, more people might have come."
              :marks="['might have come.']"
            /><span class="translation">如果天氣好一點，也許會有更多人來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動：have been + 過去分詞" mark="could have been avoided">
      <div class="rows is-labeled">
        <div>
          <span class="term">could have been</span>
          <span
            ><NoteMark
              sentence="The fire could have been stopped if the alarm had worked."
              :marks="['could have been stopped']"
            /><span class="translation">如果警報器有響，火本來可以被撲滅。</span></span
          >
        </div>
        <div>
          <span class="term">might have been</span>
          <span
            ><NoteMark
              sentence="If the report had been checked, the mistakes might have been noticed."
              :marks="['might have been noticed.']"
            /><span class="translation">如果報告有人檢查，那些錯誤也許會被發現。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定：hadn't 和 might not have">
      <div class="rows is-labeled">
        <div>
          <span class="term">hadn't<br /><i>might not have</i></span>
          <span
            ><NoteMark
              sentence="If the ambulance hadn't arrived so quickly, he might not have survived."
              :marks="['hadn\'t arrived', 'might not have survived.']"
            /><span class="translation">如果救護車沒有那麼快趕到，他也許活不下來。</span></span
          >
        </div>
        <div>
          <span class="term">hadn't</span>
          <span
            ><NoteMark
              sentence="If I hadn't missed the bus, I could have met you for lunch."
              :marks="['hadn\'t missed']"
            /><span class="translation">如果我沒錯過公車，本來可以跟你吃午餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：問題已經發生了" mark="could have been avoided">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'All this', role: '主詞' },
          { t: 'could have been avoided', role: 'could have been + 過去分詞', kind: 'key' },
          { t: 'if the plan had been more flexible.', role: 'if + had + 過去分詞', kind: 'dim' },
        ]"
      />
      <p class="translation">如果計畫更有彈性一點，這一切本來都可以避免。</p>
      <p class="remark"><code>if</code> 子句放在後面，前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="if 子句用過去完成式" mark="had been">
      <NoteFix
        wrong="If I would have seen the sign, I could have stopped."
        right="If I had seen the sign, I could have stopped."
        fix="had seen"
      />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="avoided">
      <NoteFix
        wrong="If we had left at six, we could have went to the museum."
        right="If we had left at six, we could have gone to the museum."
        fix="gone"
      />
    </NoteSlide>

    <NoteSlide title="could 後面要有 have" mark="have">
      <NoteFix
        wrong="If he had called me, I could helped him."
        right="If he had called me, I could have helped him."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="would have 說一定會發生的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">would have<br /><i>一定會</i></span>
          <span
            ><NoteMark
              sentence="If the bus had come, I would have arrived on time."
              :marks="['would have']"
            /><span class="translation">如果公車有來，我就會準時到了。</span></span
          >
        </div>
        <div>
          <span class="term">could have<br /><i>做得到</i></span>
          <span
            ><NoteMark
              sentence="If I had brought my laptop, I could have worked on the train."
              :marks="['could have']"
            /><span class="translation">如果我有帶筆電，本來可以在火車上工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if + 過去簡單式說現在不是真的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去簡單式<br /><i>現在</i></span>
          <span
            ><NoteMark
              sentence="If I had a car, I could drive you home."
              :marks="['had', 'could drive']"
            /><span class="translation">如果我有車，就可以載你回家。</span></span
          >
        </div>
        <div>
          <span class="term">過去完成式<br /><i>過去</i></span>
          <span
            ><NoteMark
              sentence="If I had had a car, I could have driven you home."
              :marks="['had had', 'could have driven']"
            /><span class="translation">如果我那時有車，就可以載你回家了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
