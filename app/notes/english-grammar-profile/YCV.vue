<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-834, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="正式的文字寫完整形式 have not" mark="have not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'have not', role: '完整形式', kind: 'key', ring: true },
          { t: 'fulfilled', role: '過去分詞', kind: 'key' },
          { t: 'your task', role: '受詞' },
          { t: 'with due care.', role: '方式', kind: 'dim' },
        ]"
      />
      <p class="translation">你沒有謹慎地完成你的任務。</p>
      <p class="remark">經理寫正式的警告信給員工。</p>
    </NoteSlide>

    <NoteSlide title="完整形式和縮寫意思一樣，正式程度不同" mark="have not">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整形式</span>
          <span
            ><NoteMark sentence="The company has not paid the invoice." :marks="['has not']" /><span
              class="translation"
              >公司還沒有支付這張發票。</span
            ></span
          >
        </div>
        <div>
          <span class="term">縮寫</span>
          <span
            ><NoteMark sentence="The company hasn't paid the invoice." :marks="['hasn\'t']" /><span
              class="translation"
              >公司還沒付這張發票。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not yet 說應該做、還沒做的事" mark="have not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The committee', kind: 'dim' },
          { t: 'has not yet', role: 'yet 在 not 後面', kind: 'key', ring: true },
          { t: 'reached', role: '過去分詞' },
          { t: 'a decision.', kind: 'dim' },
        ]"
      />
      <p class="translation">委員會還沒有做出決定。</p>
    </NoteSlide>

    <NoteSlide title="not 放在 have 後面" mark="have not">
      <NoteFix
        wrong="You not have fulfilled your task."
        right="You have not fulfilled your task."
        fix="have not"
      />
    </NoteSlide>

    <NoteSlide title="has not 後面接過去分詞" mark="fulfilled">
      <NoteFix
        wrong="The supplier has not deliver the goods."
        right="The supplier has not delivered the goods."
        fix="delivered"
      />
    </NoteSlide>

    <NoteSlide title="否定句的受詞前面用 any，不用 no" mark="not">
      <NoteFix
        wrong="We have not received no reply."
        right="We have not received any reply."
        fix="any"
      />
    </NoteSlide>

    <NoteSlide title="did not 說過去一個時間點沒做的事" mark="have not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The tenant', kind: 'dim' },
          { t: 'did not pay', role: 'did not + 原形動詞', kind: 'key', ring: true },
          { t: 'the rent' },
          { t: 'in March.', role: '過去的時間' },
        ]"
      />
      <p class="translation">房客三月沒有付房租。</p>
    </NoteSlide>

    <NoteSlide title="have no 後面接名詞，have 是「有」" mark="have not">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'have no', role: '沒有', kind: 'key', ring: true },
          { t: 'record', role: '名詞' },
          { t: 'of your payment.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們沒有你付款的紀錄。</p>
    </NoteSlide>

    <NoteSlide title="have never 說到現在一次也沒有" mark="have not">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The bank', kind: 'dim' },
          { t: 'has never charged', role: '從來沒有', kind: 'key', ring: true },
          { t: 'us a fee.', kind: 'dim' },
        ]"
      />
      <p class="translation">銀行從來沒有向我們收過手續費。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
