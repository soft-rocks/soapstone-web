<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-past-perfect-would-have, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去沒發生的事和假想的結果" mark="had not been">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I had set an alarm,', role: 'had + 過去分詞', kind: 'key' },
          { t: 'I would have woken up on time.', role: 'would have + 過去分詞' },
        ]"
      />
      <p class="translation">如果我有設鬧鐘，我就會準時起床了。</p>
      <p class="remark">事實是我沒設鬧鐘，所以沒有準時起床。</p>
    </NoteSlide>

    <NoteSlide title="肯定和否定的條件" mark="had not been">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="If you had told me the truth, I would have forgiven you."
              :marks="['had told']"
            /><span class="translation">如果你當時跟我說實話，我就會原諒你了。</span></span
          >
        </div>
        <div>
          <span class="term">否定<br /><i>hadn't / wouldn't have</i></span>
          <span
            ><NoteMark
              sentence="If I hadn't dropped my phone, the screen wouldn't have cracked."
              :marks="['hadn\'t dropped', 'wouldn\'t have cracked.']"
            /><span class="translation">如果我沒摔到手機，螢幕就不會裂了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句放在後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="I would have sent you a card if I had had your address."
              :marks="['if I had had your address.']"
            /><span class="translation">如果我當時有你的地址，我就會寄卡片給你了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>had had</code> 的第一個 <code>had</code> 是助動詞，第二個是 <code>have</code>
        的過去分詞。
      </p>
    </NoteSlide>

    <NoteSlide title="縮寫 'd">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 子句<br /><i>'d = had</i></span>
          <span
            ><NoteMark
              sentence="If I'd seen the sign, I'd have stopped."
              :marks="['If I\'d']"
            /><span class="translation">如果我當時有看到標誌，我就會停下來了。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句<br /><i>'d = would</i></span>
          <span
            ><NoteMark
              sentence="If I'd seen the sign, I'd have stopped."
              :marks="['I\'d have']"
            /><span class="translation">如果我當時有看到標誌，我就會停下來了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：他們在，所以我不寂寞" mark="If they had not been there,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If they had not been there,', role: 'had not been', kind: 'key' },
          { t: 'I would have been very lonely.', role: 'would have been + 形容詞' },
        ]"
      />
      <p class="translation">如果他們當時不在那裡，我會非常寂寞。</p>
      <p class="remark">事實是他們在那裡，所以我不寂寞。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 would have" mark="had not been">
      <NoteFix
        wrong="If you would have phoned me, I would have waited for you."
        right="If you had phoned me, I would have waited for you."
        fix="had phoned"
      />
    </NoteSlide>

    <NoteSlide title="結果在過去要用 would have" mark="would have been">
      <NoteFix
        wrong="If we had left at six, we would avoid the traffic."
        right="If we had left at six, we would have avoided the traffic."
        fix="would have avoided"
      />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="been">
      <NoteFix
        wrong="If she had asked me, I would have went with her."
        right="If she had asked me, I would have gone with her."
        fix="gone"
      />
    </NoteSlide>

    <NoteSlide title="第二條件句說現在或未來">
      <div class="rows is-labeled">
        <div>
          <span class="term">第二條件句<br /><i>現在或未來</i></span>
          <span
            ><NoteMark
              sentence="If I had more money, I would buy a new laptop."
              :marks="['had', 'would buy']"
            /><span class="translation">如果我有更多錢，我會買一台新筆電。</span></span
          >
        </div>
        <div>
          <span class="term">第三條件句<br /><i>過去</i></span>
          <span
            ><NoteMark
              sentence="If I had had more money, I would have bought a new laptop."
              :marks="['had had', 'would have bought']"
            /><span class="translation">如果我當時有更多錢，我就會買一台新筆電了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="混合條件句的結果在現在">
      <div class="rows is-labeled">
        <div>
          <span class="term">混合條件句<br /><i>結果在現在</i></span>
          <span
            ><NoteMark
              sentence="If I had taken that job in Tokyo, I would live in Japan now."
              :marks="['would live']"
            /><span class="translation"
              >如果我當時接下東京那份工作，我現在就住在日本了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">第三條件句<br /><i>結果在過去</i></span>
          <span
            ><NoteMark
              sentence="If I had taken that job in Tokyo, I would have moved to Japan last year."
              :marks="['would have moved']"
            /><span class="translation"
              >如果我當時接下東京那份工作，我去年就搬到日本了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
