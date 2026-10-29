<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-inverted-should-future-possible-outcome-formal, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="should 放到主詞前面，取代 if" mark="Should">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Should', role: '取代 if', kind: 'key' },
          { t: 'the weather', role: '主詞' },
          { t: 'turn bad,', role: '原形動詞' },
          { t: 'we would postpone the ceremony.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果天氣變壞，我們會把典禮延期。</p>
      <p class="remark">這個句型說未來可能發生的事，用在客氣或正式的場合。</p>
    </NoteSlide>

    <NoteSlide title="否定和被動">
      <div class="rows is-labeled">
        <div>
          <span class="term">not + 原形動詞<br /><i>否定</i></span>
          <span
            ><NoteMark
              sentence="Should the payment not reach us by Friday, we would have to cancel your order."
              :marks="['not reach']"
            /><span class="translation"
              >如果款項星期五前沒有匯到，我們就得取消您的訂單。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="Should the flight be cancelled, the airline would book you on the next one."
              :marks="['be cancelled,']"
            /><span class="translation">如果航班取消，航空公司會幫您訂下一班。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>not</code> 放在主詞後面。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用 would like 或 would be happy">
      <div class="rows is-labeled">
        <div>
          <span class="term">would like<br /><i>想做的事</i></span>
          <span
            ><NoteMark
              sentence="Should we win the contract, we would like to hire ten new engineers."
              :marks="['would like']"
            /><span class="translation">如果我們拿到合約，我們想再請十位工程師。</span></span
          >
        </div>
        <div>
          <span class="term">would be happy<br /><i>客氣的提議</i></span>
          <span
            ><NoteMark
              sentence="Should you require a larger room, we would be happy to upgrade you."
              :marks="['would be happy']"
            /><span class="translation">如果您需要大一點的房間，我們很樂意幫您升等。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could 或 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="Should you change your plans, we could still reserve a seat for you."
              :marks="['could']"
            /><span class="translation">如果您改變計畫，我們還是可以幫您保留一個位子。</span></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="Should the river rise any higher, the bridge might collapse."
              :marks="['might']"
            /><span class="translation">如果河水再漲高，那座橋可能會垮。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：正式的警告信" mark="would have no choice but to">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Should', role: '取代 if' },
          { t: 'you', role: '主詞' },
          { t: 'fail to do so,', role: '原形動詞' },
          {
            t: 'we would have no choice but to take further action.',
            role: '主要子句',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">如果您沒有這麼做，我們將不得不採取進一步的行動。</p>
      <p class="remark">
        <code>fail to do so</code> 是沒有做到前面要求的事。<code>would have no choice but to</code>
        說那時只能做的事。
      </p>
    </NoteSlide>

    <NoteSlide title="should 後面接原形動詞，不加 -s" mark="fail">
      <NoteFix
        wrong="Should the customer requires a refund, we would process it within a week."
        right="Should the customer require a refund, we would process it within a week."
        fix="require"
      />
    </NoteSlide>

    <NoteSlide title="倒裝已經取代 if" mark="Should">
      <NoteFix
        wrong="If should you change your mind, we would be happy to hear from you."
        right="Should you change your mind, we would be happy to hear from you."
        fix="Should"
      />
      <p class="remark">
        保留 <code>if</code> 時，用 <code>If you should change your mind</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="倒裝的句型不縮寫">
      <NoteFix
        wrong="Shouldn't the parcel arrive, we would send another one."
        right="Should the parcel not arrive, we would send another one."
        fix="not"
      />
    </NoteSlide>

    <NoteSlide title="If + 主詞 + should 意思一樣，也用在口語">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you should see Tom, tell him to call me."
              :marks="['If you should']"
            /><span class="translation">如果你碰到 Tom，叫他打給我。</span></span
          >
        </div>
        <div>
          <span class="term">would</span>
          <span
            ><NoteMark
              sentence="If the printer should break down, we would call the technician."
              :marks="['If the printer should']"
            /><span class="translation">如果印表機壞了，我們會找技術人員來修。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 will 或祈使句">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句<br /><i>提出要求</i></span>
          <span
            ><NoteMark
              sentence="Should you need directions to the venue, please call our office."
              :marks="['please call']"
            /><span class="translation"
              >如果您需要會場的路線說明，請打電話到我們的辦公室。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will<br /><i>一定會做的事</i></span>
          <span
            ><NoteMark
              sentence="Should the meeting run late, I will call you."
              :marks="['will']"
            /><span class="translation">如果會議拖晚了，我會打電話給你。</span></span
          >
        </div>
      </div>
      <p class="remark">主要子句用 <code>would</code> 說可能的結果。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
