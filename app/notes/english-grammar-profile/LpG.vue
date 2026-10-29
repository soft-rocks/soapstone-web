<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-ellipted-if-clause, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 後面直接接過去分詞" mark="if requested,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If', role: '連接詞' },
          { t: 'used correctly,', role: '過去分詞', kind: 'key' },
          { t: 'this cream protects your skin from the sun.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果使用正確，這種乳液能保護你的皮膚不被曬傷。</p>
      <p class="remark">過去分詞有被動的意思。</p>
    </NoteSlide>

    <NoteSlide title="省略主詞和 be 動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整的子句</span>
          <span
            ><NoteMark
              sentence="If it is used correctly, this cream protects your skin from the sun."
              :marks="['it is']"
            /><span class="translation">如果使用正確，這種乳液能保護你的皮膚不被曬傷。</span></span
          >
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="If used correctly, this cream protects your skin from the sun."
              :marks="['If used']"
            /><span class="translation">如果使用正確，這種乳液能保護你的皮膚不被曬傷。</span></span
          >
        </div>
        <div>
          <span class="term">if needed<br /><i>省略 it</i></span>
          <span
            ><NoteMark
              sentence="You can take a short break if needed."
              :marks="['if needed']"
            /><span class="translation">需要的話，你可以休息一下。</span></span
          >
        </div>
      </div>
      <p class="remark">
        省略的主詞是主要子句的主詞。<code>if needed</code> 和
        <code>if required</code> 省略的主詞可以是 <code>it</code>，指主要子句說的事。
      </p>
    </NoteSlide>

    <NoteSlide title="放在句首、句中或句尾" mark="if requested,">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首<br /><i>後面加逗號</i></span>
          <span
            ><NoteMark
              sentence="If stored in the freezer, the bread stays fresh for a month."
              :marks="['If stored in the freezer,']"
            /><span class="translation">如果放在冷凍庫，麵包可以保鮮一個月。</span></span
          >
        </div>
        <div>
          <span class="term">句中<br /><i>前後加逗號</i></span>
          <span
            ><NoteMark
              sentence="The forms, if signed today, will reach the bank by Friday."
              :marks="['if signed today,']"
            /><span class="translation">這些表格如果今天簽好，星期五前會送到銀行。</span></span
          >
        </div>
        <div>
          <span class="term">句尾<br /><i>前面不加逗號</i></span>
          <span
            ><NoteMark
              sentence="Extra pillows can be brought to your room if needed."
              :marks="['if needed.']"
            /><span class="translation">如有需要，可以送額外的枕頭到您房間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定：not 放在 if 和過去分詞中間">
      <div class="rows is-labeled">
        <div>
          <span class="term">if not</span>
          <span
            ><NoteMark
              sentence="If not collected by noon, the parcel goes back to the post office."
              :marks="['If not collected']"
            /><span class="translation">如果中午前沒人領，包裹會退回郵局。</span></span
          >
        </div>
        <div>
          <span class="term">if not</span>
          <span
            ><NoteMark
              sentence="The seeds won't grow if not watered every day."
              :marks="['if not watered']"
            /><span class="translation">種子如果沒有每天澆水，就不會長。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：if 子句放在句中" mark="if requested,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Meals are served,', role: '主要子句', kind: 'dim' },
          { t: 'if requested,', role: 'if + 過去分詞', kind: 'key' },
          { t: 'three times a day.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如有需要，每天可供應三餐。</p>
      <p class="remark">
        <code>if requested</code> 是 <code>if they are requested</code> 的省略。<code>they</code> 指
        <code>meals</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="被做的動作用過去分詞" mark="requested,">
      <NoteFix
        wrong="If storing in the fridge, the soup keeps for three days."
        right="If stored in the fridge, the soup keeps for three days."
        fix="stored"
      />
    </NoteSlide>

    <NoteSlide title="主詞和 be 動詞一起省略" mark="if requested,">
      <NoteFix
        wrong="If it stored in a dry place, the rice lasts a year."
        right="If stored in a dry place, the rice lasts a year."
        fix="If stored"
      />
    </NoteSlide>

    <NoteSlide title="not 放在過去分詞前面">
      <NoteFix
        wrong="If used not within a week, the coupon expires."
        right="If not used within a week, the coupon expires."
        fix="not used"
      />
    </NoteSlide>

    <NoteSlide title="if + 形容詞說狀態">
      <div class="rows is-labeled">
        <div>
          <span class="term">if necessary</span>
          <span
            ><NoteMark
              sentence="If necessary, we can postpone the trip."
              :marks="['If necessary,']"
            /><span class="translation">必要的話，我們可以延後這趟旅行。</span></span
          >
        </div>
        <div>
          <span class="term">if true</span>
          <span
            ><NoteMark
              sentence="The rumour, if true, would end his career."
              :marks="['if true,']"
            /><span class="translation">那個傳言如果是真的，會毀了他的事業。</span></span
          >
        </div>
      </div>
      <p class="remark">過去分詞說被做的動作。</p>
    </NoteSlide>

    <NoteSlide title="沒有 if 的過去分詞構句">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有 if<br /><i>已經發生</i></span>
          <span
            ><NoteMark
              sentence="Built in 1890, the bridge is still in use today."
              :marks="['Built in 1890,']"
            /><span class="translation">這座橋建於 1890 年，到今天還在使用。</span></span
          >
        </div>
        <div>
          <span class="term">if<br /><i>條件</i></span>
          <span
            ><NoteMark
              sentence="If built with steel, the bridge would last longer."
              :marks="['If built with steel,']"
            /><span class="translation">如果用鋼材建造，這座橋會更耐用。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
