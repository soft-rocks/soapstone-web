<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-sequencing, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="言談標記替要說的幾件事排順序" mark="First of all,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'First of all,', role: '言談標記', kind: 'key' },
          { t: 'we need a good teacher.', role: '一件事', kind: 'dim' },
          { t: 'Secondly,', role: '言談標記', kind: 'key' },
          { t: 'we need good materials.', role: '一件事', kind: 'dim' },
        ]"
      />
      <p class="translation">首先，我們需要一位好老師。第二，我們需要好的教材。</p>
      <p class="remark">言談標記放在句首時，後面常加逗號。</p>
    </NoteSlide>

    <NoteSlide title="第一件事用 first of all、firstly 或 first" mark="First of all,">
      <div class="rows is-labeled">
        <div>
          <span class="term">first of all</span>
          <span
            ><NoteMark
              sentence="First of all, I'd like to thank you for coming."
              :marks="['First of all,']"
            /><span class="translation">首先，我想謝謝大家來參加。</span></span
          >
        </div>
        <div>
          <span class="term">firstly</span>
          <span
            ><NoteMark
              sentence="Firstly, the flat is too far from the city centre."
              :marks="['Firstly,']"
            /><span class="translation">第一，這間公寓離市中心太遠了。</span></span
          >
        </div>
        <div>
          <span class="term">first</span>
          <span
            ><NoteMark sentence="First, wash your hands." :marks="['First,']" /><span
              class="translation"
              >首先，洗手。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="中間的論點用 secondly 和 thirdly">
      <div class="rows is-labeled">
        <div>
          <span class="term">secondly</span>
          <span
            ><NoteMark sentence="Secondly, the rent is far too high." :marks="['Secondly,']" /><span
              class="translation"
              >第二，房租實在太高了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">thirdly</span>
          <span
            ><NoteMark sentence="Thirdly, there's no parking." :marks="['Thirdly,']" /><span
              class="translation"
              >第三，那裡沒有停車位。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="中間的步驟用 next、then 和 after that">
      <div class="rows is-labeled">
        <div>
          <span class="term">next</span>
          <span
            ><NoteMark sentence="Next, add the eggs." :marks="['Next,']" /><span class="translation"
              >接著，加入蛋。</span
            ></span
          >
        </div>
        <div>
          <span class="term">then</span>
          <span
            ><NoteMark sentence="Then cook it for ten minutes." :marks="['Then']" /><span
              class="translation"
              >然後，煮十分鐘。</span
            ></span
          >
        </div>
        <div>
          <span class="term">after that</span>
          <span
            ><NoteMark sentence="After that, turn off the heat." :marks="['After that,']" /><span
              class="translation"
              >之後，把火關掉。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>then</code> 後面常不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="最後一件事用 finally 或 lastly">
      <div class="rows is-labeled">
        <div>
          <span class="term">finally</span>
          <span
            ><NoteMark
              sentence="Finally, I would be grateful if you could send me a timetable."
              :marks="['Finally,']"
            /><span class="translation">最後，如果您能寄一份時刻表給我，我會很感激。</span></span
          >
        </div>
        <div>
          <span class="term">lastly</span>
          <span
            ><NoteMark
              sentence="Lastly, please don't forget your passport."
              :marks="['Lastly,']"
            /><span class="translation">最後，請別忘了帶護照。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="排論點和排步驟用不同的言談標記">
      <div class="rows is-labeled">
        <div>
          <span class="term">論點和理由<br /><i>論說文、正式信件</i></span>
          <span>firstly、secondly、thirdly、lastly</span>
        </div>
        <div>
          <span class="term">步驟<br /><i>食譜、使用說明</i></span>
          <span>first、next、then、after that</span>
        </div>
        <div>
          <span class="term">兩種都可以</span>
          <span>first of all、finally</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：First of all 引出要說的第一件事" mark="First of all,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'First of all,', role: '言談標記', kind: 'key' },
          {
            t: 'I must tell you that it always depends on how badly you want to do something.',
            role: '一件事',
          },
        ]"
      />
      <p class="translation">首先，我必須告訴你，這始終要看你有多想做一件事。</p>
    </NoteSlide>

    <NoteSlide title="at first 的意思是一開始，不替幾件事排順序">
      <NoteFix
        wrong="At first, you need a passport. Secondly, you need a visa."
        right="First, you need a passport. Secondly, you need a visa."
        fix="First,"
      />
    </NoteSlide>

    <NoteSlide title="at last 的意思是等了很久終於，不排最後一件事">
      <NoteFix
        wrong="At last, I'd like to thank my parents for their support."
        right="Finally, I'd like to thank my parents for their support."
        fix="Finally,"
      />
    </NoteSlide>

    <NoteSlide title="固定說法是 first of all，first 不加 -ly" mark="First of all,">
      <NoteFix
        wrong="Firstly of all, let me introduce myself."
        right="First of all, let me introduce myself."
        fix="First of all,"
      />
    </NoteSlide>

    <NoteSlide title="at first、at last 和 in the end 不替幾件事排順序">
      <div class="rows is-labeled">
        <div>
          <span class="term">at first<br /><i>一開始</i></span>
          <span
            ><NoteMark
              sentence="At first, I didn't like my new school. Now I love it."
              :marks="['At first,']"
            /><span class="translation">一開始，我不喜歡新學校。現在我很愛它。</span></span
          >
        </div>
        <div>
          <span class="term">at last<br /><i>終於</i></span>
          <span
            ><NoteMark
              sentence="We waited for two hours. At last, the bus came."
              :marks="['At last,']"
            /><span class="translation">我們等了兩個小時。公車終於來了。</span></span
          >
        </div>
        <div>
          <span class="term">in the end<br /><i>結果</i></span>
          <span
            ><NoteMark
              sentence="We argued for hours. In the end, we stayed at home."
              :marks="['In the end,']"
            /><span class="translation">我們吵了好幾個小時。最後，我們待在家裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
