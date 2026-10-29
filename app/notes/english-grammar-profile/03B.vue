<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-were-it-not-for-formal, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="were it not for 是 if it were not for 的倒裝" mark="Were it not for">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Were it not for', role: '要不是有', kind: 'key' },
          { t: 'the lighthouse,', role: '名詞片語' },
          { t: 'ships would hit these rocks.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">要不是有這座燈塔，船會撞上這些礁石。</p>
      <p class="remark">
        省略 <code>if</code>，把 <code>were</code> 放到 <code>it</code> 前面。<code>it</code>
        不指任何東西。
      </p>
    </NoteSlide>

    <NoteSlide title="主要子句說現在的結果，或過去的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">would + 原形動詞<br /><i>現在</i></span>
          <span
            ><NoteMark
              sentence="Were it not for her salary, the family would struggle to pay the bills."
              :marks="['would struggle']"
            /><span class="translation">要不是有她的薪水，這個家會付不出帳單。</span></span
          >
        </div>
        <div>
          <span class="term">would have + 過去分詞<br /><i>過去</i></span>
          <span
            ><NoteMark
              sentence="Were it not for the doctor's quick action, the patient would have died."
              :marks="['would have died.']"
            /><span class="translation">要不是醫生處理得快，病人早就死了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="were it not for 放在句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="Laura would have accepted the job in London were it not for her family."
              :marks="['were it not for']"
            /><span class="translation"
              >要不是因為家人，Laura 早就接受倫敦的那份工作了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="Many small theatres would close were it not for government grants."
              :marks="['were it not for']"
            /><span class="translation">要不是有政府補助，很多小劇場會關門。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>were it not for</code> 放在主要子句後面時，前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could 或 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="Were it not for the cost, the council could build a new library."
              :marks="['could']"
            /><span class="translation">要不是費用的問題，市議會可以蓋一座新圖書館。</span></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="Were it not for the high rents, young artists might stay in the city centre."
              :marks="['might']"
            /><span class="translation">要不是房租高，年輕藝術家可能會留在市中心。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：沒有那種玩具時，孩子現在會得到的東西" mark="would gain">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Were it not for', role: '要不是有' },
          { t: 'that kind of toy,', role: '名詞片語', kind: 'key' },
          {
            t: 'children would gain more team spirit, creativity and self-confidence.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">要是沒有那種玩具，孩子會更有團隊精神、創造力和自信。</p>
      <p class="remark">寫的人認為這種玩具對孩子有壞的影響。</p>
    </NoteSlide>

    <NoteSlide title="倒裝的句型不縮寫" mark="Were it not for">
      <NoteFix
        wrong="Weren't it for the heater, we would freeze in here."
        right="Were it not for the heater, we would freeze in here."
        fix="Were it not for"
      />
    </NoteSlide>

    <NoteSlide title="for 後面接名詞片語，不接子句" mark="that kind of toy,">
      <NoteFix
        wrong="Were it not for she supported us, we would have closed the shop."
        right="Were it not for her support, we would have closed the shop."
        fix="her support,"
      />
    </NoteSlide>

    <NoteSlide title="倒裝已經取代 if" mark="Were it not for">
      <NoteFix
        wrong="If were it not for the snow, the roads would be open."
        right="Were it not for the snow, the roads would be open."
        fix="Were it"
      />
      <p class="remark">保留 <code>if</code> 時，用 <code>If it were not for</code>。</p>
    </NoteSlide>

    <NoteSlide title="If it weren't for 意思一樣，也用在口語">
      <div class="rows is-labeled">
        <div>
          <span class="term">If it weren't for</span>
          <span
            ><NoteMark
              sentence="If it weren't for the wind, it would be a lovely day."
              :marks="['If it weren\'t for']"
            /><span class="translation">要不是有風，今天會是很舒服的一天。</span></span
          >
        </div>
        <div>
          <span class="term">If it weren't for</span>
          <span
            ><NoteMark
              sentence="If it weren't for my brother, I wouldn't have a job."
              :marks="['If it weren\'t for']"
            /><span class="translation">要不是我哥哥，我就沒有工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Had it not been for 只說過去的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">Had it not been for</span>
          <span
            ><NoteMark
              sentence="Had it not been for the storm, the ship would have arrived on time."
              :marks="['Had it not been for']"
            /><span class="translation">要不是那場暴風雨，船就準時到了。</span></span
          >
        </div>
        <div>
          <span class="term">Had it not been for</span>
          <span
            ><NoteMark
              sentence="Had it not been for his mistake, we would have won the final."
              :marks="['Had it not been for']"
            /><span class="translation">要不是他的失誤，我們就贏得決賽了。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>Were it not for</code> 的名詞片語到現在還是一樣。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
