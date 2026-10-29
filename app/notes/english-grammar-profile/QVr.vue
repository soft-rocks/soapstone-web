<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-adverbs-stance, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="言談標記說出寫的人對整句話的看法" mark="Surprisingly,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Surprisingly,', role: '言談標記', kind: 'key' },
          { t: 'the suitcase was Lucy\'s.', role: '句子', kind: 'dim' },
        ]"
      />
      <p class="translation">沒想到那個行李箱是 Lucy 的。</p>
      <p class="remark">
        <code>Surprisingly</code> 表示寫的人沒料到行李箱的主人是
        Lucy。言談標記放在句首時，後面加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="常見的表示態度的言談標記">
      <div class="rows is-labeled">
        <div>
          <span class="term">感受</span>
          <span
            ><NoteMark
              sentence="Unfortunately, the swimming pool is closed for repairs this week."
              :marks="['Unfortunately,']"
            /><span class="translation">可惜游泳池這週整修，不開放。</span></span
          >
        </div>
        <div>
          <span class="term">確定程度</span>
          <span
            ><NoteMark
              sentence="Clearly, the old rules are no longer valid."
              :marks="['Clearly,']"
            /><span class="translation">很明顯，舊規定已經不適用了。</span></span
          >
        </div>
        <div>
          <span class="term">聽來的事</span>
          <span
            ><NoteMark
              sentence="Apparently, the new manager is quite disagreeable."
              :marks="['Apparently,']"
            /><span class="translation">聽說新經理很難相處。</span></span
          >
        </div>
        <div>
          <span class="term">說話態度</span>
          <span
            ><NoteMark
              sentence="Honestly, I'm ambivalent about moving to the city."
              :marks="['Honestly,']"
            /><span class="translation">老實說，要不要搬到城裡，我拿不定主意。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="言談標記也可以放在主詞、be 動詞或助動詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark sentence="She obviously enjoyed the trip." :marks="['obviously']" /><span
              class="translation"
              >她顯然很喜歡這趟旅行。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 動詞後面</span>
          <span
            ><NoteMark
              sentence="The new software is apparently very sluggish."
              :marks="['apparently']"
            /><span class="translation">聽說新軟體跑得很慢。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark sentence="Our neighbours have sadly moved away." :marks="['sadly']" /><span
              class="translation"
              >很可惜，我們的鄰居搬走了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">句中的言談標記前後可以不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="句尾的言談標記，前面加逗號">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The restaurant was closed,', role: '句子', kind: 'dim' },
          { t: 'unfortunately.', role: '言談標記', kind: 'key' },
        ]"
      />
      <p class="translation">可惜那家餐廳沒開。</p>
    </NoteSlide>

    <NoteSlide title="言談標記用副詞 surprisingly，不用形容詞 surprising" mark="Surprisingly,">
      <NoteFix
        wrong="Surprising, the test was easier than last year's."
        right="Surprisingly, the test was easier than last year's."
        fix="Surprisingly,"
      />
    </NoteSlide>

    <NoteSlide title="言談標記不放在動詞和受詞中間">
      <NoteFix
        wrong="I lost unfortunately my wallet on the bus."
        right="Unfortunately, I lost my wallet on the bus."
        fix="Unfortunately,"
      />
    </NoteSlide>

    <NoteSlide title="unfortunately 是副詞，兩個子句之間用句號或分號">
      <NoteFix
        wrong="It rained all day, unfortunately we had to cancel the picnic."
        right="It rained all day. Unfortunately, we had to cancel the picnic."
        fix="day. Unfortunately,"
      />
    </NoteSlide>

    <NoteSlide title="同一個副詞也可以修飾動詞，說明動作怎麼做">
      <div class="rows is-labeled">
        <div>
          <span class="term">Honestly,<br /><i>言談標記</i></span>
          <span
            ><NoteMark sentence="Honestly, I don't know the answer." :marks="['Honestly,']" /><span
              class="translation"
              >老實說，我不知道答案。</span
            ></span
          >
        </div>
        <div>
          <span class="term">honestly<br /><i>修飾動詞</i></span>
          <span
            ><NoteMark
              sentence="She answered all the questions honestly."
              :marks="['honestly']"
            /><span class="translation">她誠實地回答了所有問題。</span></span
          >
        </div>
        <div>
          <span class="term">Clearly,<br /><i>言談標記</i></span>
          <span
            ><NoteMark sentence="Clearly, he was tired." :marks="['Clearly,']" /><span
              class="translation"
              >很明顯，他累了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">clearly<br /><i>修飾動詞</i></span>
          <span
            ><NoteMark sentence="Please speak clearly." :marks="['clearly']" /><span
              class="translation"
              >請說清楚一點。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
