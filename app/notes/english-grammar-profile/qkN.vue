<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-inverted-past-perfect-imagined-past, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="had 放到主詞前面，取代 if" mark="Had">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Had', role: '取代 if', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'known about the traffic,', role: '過去分詞' },
          { t: 'I would have left earlier.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">要是我早知道會塞車，我就早點出門了。</p>
      <p class="remark">這個句型說過去沒有發生的事，用在正式的書面文字和演講。</p>
    </NoteSlide>

    <NoteSlide title="been 加形容詞或名詞" mark="been an option,">
      <div class="rows is-labeled">
        <div>
          <span class="term">been + 形容詞</span>
          <span
            ><NoteMark
              sentence="Had he been more careful, he wouldn't have broken his leg."
              :marks="['been more careful,']"
            /><span class="translation">要是他小心一點，就不會摔斷腿了。</span></span
          >
        </div>
        <div>
          <span class="term">been + 名詞</span>
          <span
            ><NoteMark
              sentence="Had public transportation been an option, I would have chosen that instead of my car."
              :marks="['been an option,']"
            /><span class="translation"
              >要是當時有大眾運輸可以搭，我就會選那個，不開車了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>been</code> 是 <code>be</code> 的過去分詞。</p>
    </NoteSlide>

    <NoteSlide title="否定：not 放在主詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">Had + 主詞 + not</span>
          <span
            ><NoteMark
              sentence="Had she not called me, I would have missed the flight."
              :marks="['not called']"
            /><span class="translation">要是她沒打電話給我，我就錯過班機了。</span></span
          >
        </div>
        <div>
          <span class="term">Had + 主詞 + not</span>
          <span
            ><NoteMark
              sentence="Had we not booked a table, we would have waited for an hour."
              :marks="['not booked']"
            /><span class="translation">要是我們沒有訂位，就得等一個小時了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could have 或 might have">
      <div class="rows is-labeled">
        <div>
          <span class="term">could have<br /><i>當時可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="Had you asked me, I could have lent you the money."
              :marks="['could have lent']"
            /><span class="translation">要是你開口，我就可以借你錢了。</span></span
          >
        </div>
        <div>
          <span class="term">might have<br /><i>當時可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="Had the ambulance come sooner, he might have survived."
              :marks="['might have survived.']"
            /><span class="translation">要是救護車早點來，他也許就活下來了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句用 would + 原形動詞，說現在的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在的結果</span>
          <span
            ><NoteMark
              sentence="Had I saved more money, I would own a car now."
              :marks="['would own']"
            /><span class="translation">要是我以前多存點錢，現在就有車了。</span></span
          >
        </div>
        <div>
          <span class="term">現在的結果</span>
          <span
            ><NoteMark
              sentence="Had he not lost his passport, he would be in Tokyo by now."
              :marks="['would be']"
            /><span class="translation">要是他沒弄丟護照，現在已經在東京了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：當時沒有大眾運輸可以搭" mark="would have chosen">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Had', role: '取代 if' },
          { t: 'public transportation', role: '主詞' },
          { t: 'been an option,', role: 'been + 名詞' },
          {
            t: 'I would have chosen that instead of my car.',
            role: '主要子句',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">要是當時有大眾運輸可以搭，我就會選那個，不開車了。</p>
      <p class="remark">說話的人當時開車。<code>would have chosen</code> 說過去沒有發生的選擇。</p>
    </NoteSlide>

    <NoteSlide title="倒裝已經取代 if" mark="Had">
      <NoteFix
        wrong="If had I known about the meeting, I would have come."
        right="Had I known about the meeting, I would have come."
        fix="Had"
      />
      <p class="remark">保留 <code>if</code> 時，用 <code>If I had known</code>。</p>
    </NoteSlide>

    <NoteSlide title="倒裝的句型不縮寫">
      <NoteFix
        wrong="Hadn't she warned us, we would have taken the wrong road."
        right="Had she not warned us, we would have taken the wrong road."
        fix="not"
      />
    </NoteSlide>

    <NoteSlide title="說過去的結果，主要子句用 would have" mark="would have chosen">
      <NoteFix
        wrong="Had they left earlier, they would catch the train."
        right="Had they left earlier, they would have caught the train."
        fix="would have caught"
      />
      <p class="remark">那班火車已經開走了，結果也在過去。</p>
    </NoteSlide>

    <NoteSlide title="If + 主詞 + had 意思一樣，也用在口語">
      <div class="rows is-labeled">
        <div>
          <span class="term">If I had</span>
          <span
            ><NoteMark
              sentence="If I had known about the party, I would have gone."
              :marks="['If I had known']"
            /><span class="translation">要是我知道有派對，我就會去了。</span></span
          >
        </div>
        <div>
          <span class="term">If we hadn't</span>
          <span
            ><NoteMark
              sentence="If we hadn't taken a taxi, we would have been late."
              :marks="['If we hadn\'t taken']"
            /><span class="translation">要是我們沒搭計程車，就遲到了。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>If</code> 的句型可以縮寫成 <code>hadn't</code>。</p>
    </NoteSlide>

    <NoteSlide title="Were 的倒裝說未來，Had 的倒裝說過去">
      <div class="rows is-labeled">
        <div>
          <span class="term">Were ... to<br /><i>未來假設的事</i></span>
          <span
            ><NoteMark
              sentence="Were the train to arrive late, we would miss the concert."
              :marks="['Were']"
            /><span class="translation">萬一火車晚到，我們會錯過音樂會。</span></span
          >
        </div>
        <div>
          <span class="term">Had<br /><i>過去沒有發生的事</i></span>
          <span
            ><NoteMark
              sentence="Had the train arrived late, we would have missed the concert."
              :marks="['Had']"
            /><span class="translation">要是火車當時晚到，我們就錯過音樂會了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
