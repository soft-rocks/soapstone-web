<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 014, as slides, in the order of notes/dragon-english-basic-100/014.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="if 子句的條件是未來的事，也用現在式，不用 will" mark="If you take">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'take', role: '現在式', kind: 'key', ring: true },
          { t: 'the train to Tokyo Disneyland from here,', kind: 'dim' },
          { t: 'you have to change three times.', role: '主要子句' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="if 句的主要子句可以用 will、have to、can 或祈使句" mark="have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="If it rains tomorrow, we will stay home."
              :marks="['will stay']"
            /><span class="translation">如果明天下雨，我們就待在家。</span></span
          >
        </div>
        <div>
          <span class="term">have to</span>
          <span
            ><NoteMark
              sentence="If you go by car, you have to pay for parking."
              :marks="['have to pay']"
            /><span class="translation">如果你開車去，就必須付停車費。</span></span
          >
        </div>
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="If we leave now, we can catch the eight o'clock bus."
              :marks="['can catch']"
            /><span class="translation">如果我們現在出發，就趕得上八點的公車。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark sentence="Call me if you get lost." :marks="['Call me']" /><span
              class="translation"
              >如果你迷路了，打電話給我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句可以放在句首或句尾，放在句首時加逗號" mark="If">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="If you are hungry, eat this sandwich."
              :marks="['If you are hungry']"
            /><span class="translation">如果你餓了，吃這個三明治吧。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="You can use my bike if you need it."
              :marks="['if you need it']"
            /><span class="translation">如果你需要，可以用我的腳踏車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have to 表示因為規定或情況，必須做某件事" mark="have to change">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'have to', role: '必須', kind: 'key' },
          { t: 'get up', role: '動詞原形', kind: 'key' },
          { t: 'at six tomorrow.', kind: 'dim' },
        ]"
      />
      <p class="translation">我明天必須六點起床。</p>
    </NoteSlide>

    <NoteSlide title="has to 用在第三人稱單數，had to 是過去式" mark="have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">第三人稱單數</span>
          <span
            ><NoteMark
              sentence="My brother has to wear a uniform at school."
              :marks="['has to']"
            /><span class="translation">我弟弟在學校必須穿制服。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="She had to wait for an hour." :marks="['had to']" /><span
              class="translation"
              >她只好等了一個小時。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不需要</span>
          <span
            ><NoteMark sentence="You don't have to bring lunch." :marks="['don\'t have to']" /><span
              class="translation"
              >你不用帶午餐。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>don't have to</code> 表示不需要做。</p>
    </NoteSlide>

    <NoteSlide title="take 加交通工具表示搭那個交通工具" mark="take the train to Tokyo Disneyland">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'take', role: '動詞', kind: 'key' },
          { t: 'the train', role: 'the + 交通工具', kind: 'key' },
          { t: 'to Tokyo Disneyland', role: 'to + 地方' },
          { t: 'from here,', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="by 加交通工具時，名詞前面不加 the、a 或 my" mark="take the train">
      <div class="rows is-labeled">
        <div>
          <span class="term">take</span>
          <span
            ><NoteMark sentence="I take the bus to school." :marks="['take the bus']" /><span
              class="translation"
              >我搭公車上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">by</span>
          <span
            ><NoteMark sentence="Grandpa came to Tokyo by plane." :marks="['by plane']" /><span
              class="translation"
              >爺爺搭飛機來東京。</span
            ></span
          >
        </div>
        <div>
          <span class="term">走路</span>
          <span
            ><NoteMark sentence="My sister goes to school on foot." :marks="['on foot']" /><span
              class="translation"
              >我妹妹走路上學。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">走路用 <code>on foot</code>，不用 <code>by foot</code>。</p>
    </NoteSlide>

    <NoteSlide title="在公車、火車、飛機上用 on，在汽車、計程車裡用 in" mark="the train">
      <div class="rows is-labeled">
        <div>
          <span class="term">on + 公車</span>
          <span
            ><NoteMark sentence="I left my umbrella on the bus." :marks="['on the bus']" /><span
              class="translation"
              >我把傘忘在公車上了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">on + 火車</span>
          <span
            ><NoteMark
              sentence="There were many students on the train."
              :marks="['on the train']"
            /><span class="translation">火車上有很多學生。</span></span
          >
        </div>
        <div>
          <span class="term">in + 計程車</span>
          <span
            ><NoteMark sentence="I left my bag in the taxi." :marks="['in the taxi']" /><span
              class="translation"
              >我把包包忘在計程車上了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in + 汽車</span>
          <span
            ><NoteMark
              sentence="We went to the beach in my uncle's car."
              :marks="['in my uncle\'s car']"
            /><span class="translation">我們坐我叔叔的車去海邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="換車說 change trains，名詞用複數" mark="change">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'changed', role: '動詞', kind: 'key' },
          { t: 'buses', role: '複數名詞', kind: 'key' },
          { t: 'twice on the way.', kind: 'dim' },
        ]"
      />
      <p class="translation">我在路上換了兩次公車。</p>
      <p class="remark">
        換車會用到兩班車，所以 <code>trains</code>、<code>buses</code>、<code>planes</code> 用複數。
      </p>
    </NoteSlide>

    <NoteSlide title="change 後面省略 trains，意思不變" mark="change three times">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'you have to', kind: 'dim' },
          { t: 'change', role: '動詞', kind: 'key' },
          { t: 'trains', role: '省略', kind: 'gone' },
          { t: 'three times.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="換車的地點用 at 加車站，或用 in 加城市" mark="change">
      <div class="rows is-labeled">
        <div>
          <span class="term">at + 車站</span>
          <span
            ><NoteMark
              sentence="You need to change trains at Tokyo Station."
              :marks="['at Tokyo Station']"
            /><span class="translation">你需要在東京車站換車。</span></span
          >
        </div>
        <div>
          <span class="term">in + 城市</span>
          <span
            ><NoteMark sentence="We changed planes in Seoul." :marks="['in Seoul']" /><span
              class="translation"
              >我們在首爾轉機。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個人互相做的動作用複數名詞，前面不加 a" mark="change">
      <div class="rows is-labeled">
        <div>
          <span class="term">握手</span>
          <span
            ><NoteMark
              sentence="The two players shook hands after the game."
              :marks="['shook hands']"
            /><span class="translation">兩個選手在比賽後握手。</span></span
          >
        </div>
        <div>
          <span class="term">交朋友</span>
          <span
            ><NoteMark
              sentence="Ken made friends with a boy from Korea."
              :marks="['made friends']"
            /><span class="translation">Ken 跟一個韓國男孩交了朋友。</span></span
          >
        </div>
        <div>
          <span class="term">換座位</span>
          <span
            ><NoteMark sentence="Can we change seats?" :marks="['change seats']" /><span
              class="translation"
              >我們可以換座位嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
