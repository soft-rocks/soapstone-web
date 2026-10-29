<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-organising-contrasting, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前一句說一件事，言談標記引出和它對比的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The flat is very modern.', role: '前一句', kind: 'dim' },
          { t: 'However,', role: '言談標記', kind: 'key' },
          { t: 'it\'s a long way from the station.', role: '對比的資訊' },
        ]"
      />
      <p class="translation">這間公寓很新潮。不過，它離車站很遠。</p>
      <p class="remark">言談標記放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide
      title="on the one hand 和 on the other hand 比較一件事的兩面"
      mark="On the one hand,"
    >
      <NoteWords
        :size="22"
        :parts="[
          { t: 'On the one hand,', role: '言談標記', kind: 'key' },
          { t: 'the job pays well,', role: '第一個看法', kind: 'dim' },
          { t: 'but on the other hand,', role: '連接詞和言談標記', kind: 'key' },
          { t: 'the hours are long.', role: '第二個看法', kind: 'dim' },
        ]"
      />
      <p class="translation">一方面，這份工作薪水很好；但另一方面，工時很長。</p>
    </NoteSlide>

    <NoteSlide title="兩個看法也可以分成兩個句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">兩個句子</span>
          <span
            ><NoteMark
              sentence="On the one hand, the city has great museums. On the other hand, it's very expensive."
              :marks="['On the one hand,', 'On the other hand,']"
            /><span class="translation"
              >一方面，這座城市有很棒的博物館。另一方面，它的消費很高。</span
            ></span
          >
        </div>
        <div>
          <span class="term">單獨用</span>
          <span
            ><NoteMark
              sentence="I'd like to go to the party. On the other hand, I'm really tired."
              :marks="['On the other hand,']"
            /><span class="translation">我想去派對。可是話說回來，我真的很累。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>on the other hand</code> 前面不一定有 <code>on the one hand</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="however 可以放在句首、句中或句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="The test was difficult. However, most students passed."
              :marks="['However,']"
            /><span class="translation">考試很難。不過，大部分學生都過了。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="My brother loves sport. My sister, however, prefers reading."
              :marks="['however,']"
            /><span class="translation">我哥哥很愛運動。不過我姊姊比較喜歡看書。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="The hotel was lovely. The food was disappointing, however."
              :marks="['however.']"
            /><span class="translation">飯店很棒。不過，餐點令人失望。</span></span
          >
        </div>
      </div>
      <p class="remark">放在句中時，前後加逗號。放在句尾時，前面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="in contrast 和 by contrast 比較兩個不同的人、東西或時期">
      <div class="rows is-labeled">
        <div>
          <span class="term">in contrast</span>
          <span
            ><NoteMark
              sentence="The north of the country is dry. In contrast, the south gets a lot of rain."
              :marks="['In contrast,']"
            /><span class="translation">這個國家的北部很乾。相較之下，南部雨很多。</span></span
          >
        </div>
        <div>
          <span class="term">by contrast</span>
          <span
            ><NoteMark
              sentence="Tom is very outgoing. By contrast, his brother is quite reserved."
              :marks="['By contrast,']"
            /><span class="translation">Tom 很外向。相較之下，他弟弟相當拘謹。</span></span
          >
        </div>
      </div>
      <p class="remark">這兩個說法多用在正式的書面文字，像報告和論說文。</p>
    </NoteSlide>

    <NoteSlide title="on the contrary 表示前一句說的不對，事實正好相反">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句後面</span>
          <span
            ><NoteMark
              sentence="The film wasn't boring. On the contrary, it was fascinating."
              :marks="['On the contrary,']"
            /><span class="translation">那部電影不無聊。正好相反，它很精彩。</span></span
          >
        </div>
        <div>
          <span class="term">反駁對方</span>
          <span
            ><NoteMark
              sentence='"You must be tired." "On the contrary, I feel great."'
              :marks="['On the contrary,']"
            /><span class="translation">「你一定累了。」「才不呢，我覺得精神很好。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：比較大型學校和小型學校，各說一個好處" mark="on the other hand,">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'On the one hand,', role: '言談標記', kind: 'key' },
          { t: 'going to a large school is better for making friends,', role: '第一個看法' },
          { t: 'but on the other hand,', role: '連接詞和言談標記', kind: 'key' },
          { t: 'I think you can learn better in a small school.', role: '第二個看法' },
        ]"
      />
      <p class="translation">
        一方面，念大型學校比較容易交到朋友；但另一方面，我覺得在小型學校可以學得更好。
      </p>
    </NoteSlide>

    <NoteSlide title="固定說法是 on the other hand，介系詞用 on" mark="on the other hand,">
      <NoteFix
        wrong="The car is cheap. In the other hand, it uses a lot of fuel."
        right="The car is cheap. On the other hand, it uses a lot of fuel."
        fix="On the other hand,"
      />
    </NoteSlide>

    <NoteSlide title="比較兩個不同的人，不用 on the contrary">
      <NoteFix
        wrong="My old teacher was strict. On the contrary, my new teacher is very relaxed."
        right="My old teacher was strict. In contrast, my new teacher is very relaxed."
        fix="In contrast,"
      />
    </NoteSlide>

    <NoteSlide title="however 是副詞，兩個子句之間用句號或分號">
      <NoteFix
        wrong="The flat is nice, however it's too small for us."
        right="The flat is nice. However, it's too small for us."
        fix="nice. However,"
      />
      <p class="remark">
        用逗號時，改用連接詞 <code>but</code>：The flat is nice, but it's too small for us.
      </p>
    </NoteSlide>

    <NoteSlide title="in contrast to 後面接名詞片語時是介系詞片語">
      <div class="rows is-labeled">
        <div>
          <span class="term">in contrast to<br /><i>名詞片語</i></span>
          <span
            ><NoteMark
              sentence="In contrast to her sister, Anna is very quiet."
              :marks="['In contrast to her sister,']"
            /><span class="translation">和她姊姊相比，Anna 很安靜。</span></span
          >
        </div>
        <div>
          <span class="term">in contrast,<br /><i>言談標記</i></span>
          <span
            ><NoteMark
              sentence="Summers here are hot. In contrast, the winters are mild."
              :marks="['In contrast,']"
            /><span class="translation">這裡的夏天很熱。相較之下，冬天很溫和。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="however 後面直接接形容詞或副詞時，意思是不管多麼">
      <div class="rows is-labeled">
        <div>
          <span class="term">however hard<br /><i>不管多麼</i></span>
          <span
            ><NoteMark
              sentence="However hard he practises, he can't sing the high notes."
              :marks="['However hard']"
            /><span class="translation">不管他怎麼練習，就是唱不上高音。</span></span
          >
        </div>
        <div>
          <span class="term">However,<br /><i>言談標記</i></span>
          <span
            ><NoteMark
              sentence="We waited for an hour. However, nobody came."
              :marks="['However,']"
            /><span class="translation">我們等了一個小時。不過，沒有人來。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
