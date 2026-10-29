<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-inverted-were-to-infinitive-formal, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="were 放到主詞前面，取代 if" mark="Were">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Were', role: '取代 if', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'to win the scholarship,', role: 'to + 原形動詞' },
          { t: 'I would study in Japan.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果我真的拿到這份獎學金，我會去日本讀書。</p>
      <p class="remark">這個句型說未來一件假設的事，用在正式的書面文字和演講。</p>
    </NoteSlide>

    <NoteSlide title="各種主詞都用 were" mark="this suggestion">
      <div class="rows is-labeled">
        <div>
          <span class="term">she</span>
          <span
            ><NoteMark
              sentence="Were she to resign, the board would need a new chair."
              :marks="['Were she']"
            /><span class="translation">如果她辭職，董事會就得找新的主席。</span></span
          >
        </div>
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark
              sentence="Were I to lose my job, I would move back to my parents' house."
              :marks="['Were I']"
            /><span class="translation">如果我丟了工作，我會搬回爸媽家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動和否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">to be + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="Were the law to be changed, thousands of families would benefit."
              :marks="['to be changed,']"
            /><span class="translation">如果法律修改，成千上萬的家庭會受惠。</span></span
          >
        </div>
        <div>
          <span class="term">not to + 原形動詞<br /><i>否定</i></span>
          <span
            ><NoteMark
              sentence="Were you not to sign the contract, the deal would collapse."
              :marks="['not to sign']"
            /><span class="translation">如果你不簽合約，這筆交易會告吹。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>not</code> 放在主詞後面，<code>to</code> 前面。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could 或 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="Were we to leave now, we could still catch the last train."
              :marks="['could']"
            /><span class="translation">如果我們現在走，還趕得上最後一班火車。</span></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="Were you to speak to him directly, he might listen."
              :marks="['might']"
            /><span class="translation">如果你直接跟他談，他可能會聽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：to be put into practice 是被動" mark="to be put into practice,">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Were', role: '取代 if' },
          { t: 'this suggestion', role: '主詞' },
          { t: 'to be put into practice,', role: 'to be + 過去分詞（被動）', kind: 'key' },
          { t: 'our town would change completely.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果這個建議真的付諸實行，我們的城鎮會徹底改變。</p>
      <p class="remark">建議是被執行的東西。<code>would change</code> 說實行後的結果。</p>
    </NoteSlide>

    <NoteSlide title="這個倒裝只用 were" mark="Were">
      <NoteFix
        wrong="Was the manager to hear about this, he would cancel the trip."
        right="Were the manager to hear about this, he would cancel the trip."
        fix="Were"
      />
    </NoteSlide>

    <NoteSlide title="倒裝已經取代 if" mark="Were">
      <NoteFix
        wrong="If were the shop to close, the street would be very quiet."
        right="Were the shop to close, the street would be very quiet."
        fix="Were"
      />
      <p class="remark">保留 <code>if</code> 時，用 <code>If the factory were to close</code>。</p>
    </NoteSlide>

    <NoteSlide title="倒裝的句型不縮寫">
      <NoteFix
        wrong="Weren't the bank to lend us the money, we would have to sell the house."
        right="Were the bank not to lend us the money, we would have to sell the house."
        fix="not"
      />
    </NoteSlide>

    <NoteSlide title="If + 主詞 + were to 意思一樣，也用在口語">
      <div class="rows is-labeled">
        <div>
          <span class="term">If you were to</span>
          <span
            ><NoteMark
              sentence="If you were to ask her, she would say yes."
              :marks="['If you were to']"
            /><span class="translation">如果你去問她，她會答應。</span></span
          >
        </div>
        <div>
          <span class="term">If the price were to</span>
          <span
            ><NoteMark
              sentence="If the price were to rise, we would buy less."
              :marks="['If the price were to']"
            /><span class="translation">如果價格上漲，我們會少買一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Should 的倒裝說可能發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="Should you need any help, please call me."
              :marks="['please call']"
            /><span class="translation">如果你需要幫忙，請打電話給我。</span></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="Should the shipment arrive late, we will contact you."
              :marks="['will']"
            /><span class="translation">如果貨晚到，我們會跟您聯絡。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>Were</code> 的倒裝說假設的事，主要子句用 <code>would</code>、<code>could</code> 或
        <code>might</code>。
      </p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
