<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// inverted-conditional, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if + 主詞 + should，說不預期發生的事" mark="If you should">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If', role: '連接詞' },
          { t: 'you', role: '主詞' },
          {
            t: 'should have any trouble with the software,',
            role: 'should + 原形動詞',
            kind: 'key',
          },
          { t: 'please email our support team.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果您使用這套軟體遇到任何問題，請寄電子郵件給我們的支援團隊。</p>
      <p class="remark">這個句型用在客氣或正式的場合。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用祈使句" mark="don't hesitate to call us.">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you should miss the last bus, take a taxi and keep the receipt."
              :marks="['take a taxi']"
            /><span class="translation">如果您錯過末班公車，請搭計程車，並留著收據。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you should feel dizzy, sit down and drink some water."
              :marks="['sit down']"
            /><span class="translation">如果您覺得頭暈，請坐下來喝點水。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句用 will、can 或 would">
      <div class="rows is-labeled">
        <div>
          <span class="term">will<br /><i>會發生的事</i></span>
          <span
            ><NoteMark
              sentence="If anyone should ask, I will be in the library."
              :marks="['will be']"
            /><span class="translation">如果有人問起，我會在圖書館。</span></span
          >
        </div>
        <div>
          <span class="term">can<br /><i>可以做的事</i></span>
          <span
            ><NoteMark
              sentence="If the boss should call, I can deal with it."
              :marks="['can deal']"
            /><span class="translation">如果老闆打電話來，我可以處理。</span></span
          >
        </div>
        <div>
          <span class="term">would<br /><i>可能的結果</i></span>
          <span
            ><NoteMark
              sentence="If you should decide to sell the car, I would be interested."
              :marks="['would be']"
            /><span class="translation">如果您決定賣掉那輛車，我會有興趣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定：not 放在 should 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">should not</span>
          <span
            ><NoteMark
              sentence="If the parcel should not arrive, let us know."
              :marks="['should not']"
            /><span class="translation">如果包裹沒有寄到，請告訴我們。</span></span
          >
        </div>
        <div>
          <span class="term">should not</span>
          <span
            ><NoteMark
              sentence="If the plan should not work, we will try another one."
              :marks="['should not']"
            /><span class="translation">如果這個計畫行不通，我們會試另一個。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="條件子句放在後面，前面不加逗號">
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="Please call me if you should miss your train."
              :marks="['if you should']"
            /><span class="translation">如果您錯過火車，請打電話給我。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="Please let me know if you should change your plans."
              :marks="['if you should']"
            /><span class="translation">如果您改變計畫，請告訴我。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：迷路不一定會發生" mark="should get lost,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞' },
          { t: 'you', role: '主詞' },
          { t: 'should get lost,', role: 'should + 原形動詞', kind: 'key' },
          { t: 'don\'t hesitate to call us.', role: '主要子句（祈使句）', kind: 'dim' },
        ]"
      />
      <p class="translation">萬一迷路了，請儘管打電話給我們。</p>
      <p class="remark"><code>don't hesitate to call us</code> 請對方儘管打電話。</p>
    </NoteSlide>

    <NoteSlide title="should 後面不加 to" mark="get">
      <NoteFix
        wrong="If you should to need a doctor, call reception."
        right="If you should need a doctor, call reception."
        fix="need"
      />
    </NoteSlide>

    <NoteSlide title="should 和 will 不連用" mark="get">
      <NoteFix
        wrong="If you should will arrive early, wait in the lobby."
        right="If you should arrive early, wait in the lobby."
        fix="arrive"
      />
    </NoteSlide>

    <NoteSlide title="If 的句型把 should 放在主詞後面" mark="If you should">
      <NoteFix
        wrong="If should you have any problems, call this number."
        right="If you should have any problems, call this number."
        fix="you should"
      />
      <p class="remark">倒裝時才把 <code>should</code> 放到主詞前面，而且省略 <code>if</code>。</p>
    </NoteSlide>

    <NoteSlide title="Should 的倒裝意思一樣，只用在書面">
      <div class="rows is-labeled">
        <div>
          <span class="term">Should + 主詞</span>
          <span
            ><NoteMark
              sentence="Should you require a wheelchair, ask a member of staff."
              :marks="['Should you']"
            /><span class="translation">如果您需要輪椅，請詢問工作人員。</span></span
          >
        </div>
        <div>
          <span class="term">Should + 主詞</span>
          <span
            ><NoteMark
              sentence="Should the meeting be cancelled, the secretary will email everyone."
              :marks="['Should the meeting']"
            /><span class="translation">如果會議取消，祕書會寄電子郵件通知大家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="If + 現在簡單式說可能發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">If + 現在簡單式</span>
          <span
            ><NoteMark sentence="If you get lost, call us." :marks="['If you get']" /><span
              class="translation"
              >如果你迷路了，就打給我們。</span
            ></span
          >
        </div>
        <div>
          <span class="term">If + 現在簡單式</span>
          <span
            ><NoteMark
              sentence="If the alarm rings, everyone leaves the building."
              :marks="['If the alarm rings,']"
            /><span class="translation">如果警報響了，所有人都要離開大樓。</span></span
          >
        </div>
      </div>
      <p class="remark">加 <code>should</code> 表示說話的人不預期那件事發生。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
