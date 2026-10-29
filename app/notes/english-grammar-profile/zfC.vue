<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-summarising-formal, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前一句寫原因，言談標記引出結論" mark="Consequently">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Zoos teach children about wild animals.', role: '前一句', kind: 'dim' },
          { t: 'Consequently,', role: '言談標記', kind: 'key' },
          { t: 'visiting zoos can help people learn about nature.', role: '結論' },
        ]"
      />
      <p class="translation">動物園教孩子認識野生動物。因此，參觀動物園可以幫助人們認識大自然。</p>
      <p class="remark">言談標記放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="therefore、thus、hence 和 as a result 也引出結論">
      <div class="rows is-labeled">
        <div>
          <span class="term">therefore</span>
          <span
            ><NoteMark
              sentence="The hall is small. Therefore, we can only invite fifty guests."
              :marks="['Therefore,']"
            /><span class="translation">會場很小。因此，我們只能邀請五十位客人。</span></span
          >
        </div>
        <div>
          <span class="term">thus</span>
          <span
            ><NoteMark
              sentence="The new road is shorter. Thus, the trip takes twenty minutes less."
              :marks="['Thus,']"
            /><span class="translation">新的路比較短。因此，路程少了二十分鐘。</span></span
          >
        </div>
        <div>
          <span class="term">hence</span>
          <span
            ><NoteMark
              sentence="The software is free. Hence, many schools use it."
              :marks="['Hence,']"
            /><span class="translation">這套軟體是免費的。因此，很多學校都用它。</span></span
          >
        </div>
        <div>
          <span class="term">as a result</span>
          <span
            ><NoteMark
              sentence="The factory closed. As a result, two hundred people lost their jobs."
              :marks="['As a result,']"
            /><span class="translation">工廠關了。結果，兩百個人失業。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="言談標記也可以放在主詞或助動詞後面" mark="Consequently">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="The results, therefore, are not reliable."
              :marks="['therefore,']"
            /><span class="translation">因此，這些結果並不可靠。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark
              sentence="We have therefore decided to change the date."
              :marks="['therefore']"
            /><span class="translation">因此，我們決定改日期。</span></span
          >
        </div>
      </div>
      <p class="remark">放在句中時，言談標記前後可以加逗號，也可以不加。</p>
    </NoteSlide>

    <NoteSlide title="分號後面的言談標記，後面加逗號" mark="Consequently">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The tickets sold out in an hour;', role: '分號', kind: 'dim' },
          { t: 'consequently,', role: '言談標記', kind: 'key' },
          { t: 'many fans could not get in.', role: '結論' },
        ]"
      />
      <p class="translation">票一小時就賣完了；因此，很多球迷進不了場。</p>
    </NoteSlide>

    <NoteSlide title="只有 hence 後面可以直接接名詞片語">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The hotel is next to the beach,', kind: 'dim' },
          { t: 'hence', role: '連接副詞', kind: 'key' },
          { t: 'the high prices.', role: '名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">這家飯店就在海邊，所以價格才這麼高。</p>
    </NoteSlide>

    <NoteSlide title="therefore 是副詞，兩個子句之間用分號或句號">
      <NoteFix
        wrong="The train was late, therefore we missed the meeting."
        right="The train was late; therefore, we missed the meeting."
        fix="late; therefore,"
      />
    </NoteSlide>

    <NoteSlide title="consequently 後面不接 of，名詞片語前面用 as a result of" mark="Consequently">
      <NoteFix
        wrong="Consequently of the strike, the trains stopped."
        right="As a result of the strike, the trains stopped."
        fix="As a result of"
      />
    </NoteSlide>

    <NoteSlide title="as a result 的 result 前面加 a">
      <NoteFix
        wrong="As result, we cancelled the meeting."
        right="As a result, we cancelled the meeting."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="so 是連接詞，可以用逗號連接兩個子句" mark="Consequently">
      <div class="rows is-labeled">
        <div>
          <span class="term">so<br /><i>連接詞</i></span>
          <span
            ><NoteMark
              sentence="It started to rain, so we finished our picnic in the car."
              :marks="['so']"
            /><span class="translation">開始下雨了，所以我們在車上把野餐吃完。</span></span
          >
        </div>
        <div>
          <span class="term">therefore<br /><i>副詞</i></span>
          <span
            ><NoteMark
              sentence="The train was late; therefore, we missed the meeting."
              :marks="['therefore,']"
            /><span class="translation">火車誤點；因此，我們錯過了會議。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as a result of 後面接原因，as a result 引出結果" mark="Consequently">
      <div class="rows is-labeled">
        <div>
          <span class="term">as a result of<br /><i>原因</i></span>
          <span
            ><NoteMark
              sentence="As a result of the storm, the school closed for two days."
              :marks="['As a result of the storm,']"
            /><span class="translation">因為暴風雨，學校停課兩天。</span></span
          >
        </div>
        <div>
          <span class="term">as a result<br /><i>結果</i></span>
          <span
            ><NoteMark
              sentence="The factory closed. As a result, two hundred people lost their jobs."
              :marks="['As a result,']"
            /><span class="translation">工廠關了。結果，兩百個人失業。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
