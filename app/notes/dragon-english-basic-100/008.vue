<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 008, as slides, in the order of notes/dragon-english-basic-100/008.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="be free to 表示主詞可以照自己的意思做某件事" mark="be free to decide">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Students', role: '主詞' },
          { t: 'are free to', kind: 'key' },
          { t: 'use', role: '動詞原形', kind: 'key' },
          { t: 'the computers in the library.', kind: 'dim' },
        ]"
      />
      <p class="translation">學生可以自由使用圖書館的電腦。</p>
      <p class="remark">沒有人限制主詞。</p>
    </NoteSlide>

    <NoteSlide title="feel free to 請對方不用客氣，直接做某件事" mark="free to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Feel free to', kind: 'key' },
          { t: 'ask', role: '動詞原形', kind: 'key' },
          { t: 'me any questions.', kind: 'dim' },
        ]"
      />
      <p class="translation">有任何問題都可以問我，不用客氣。</p>
    </NoteSlide>

    <NoteSlide title="疑問詞加 to 不定詞的作用跟名詞一樣" mark="when to get married">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We haven\'t', kind: 'dim' },
          { t: 'decided', role: '動詞' },
          { t: 'where to go', role: '受詞', kind: 'key' },
          { t: 'this summer.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們還沒決定今年夏天要去哪裡。</p>
      <p class="remark">
        它常放在 <code>decide</code>、<code>know</code>、<code>ask</code>、<code>tell</code>
        後面當受詞。
      </p>
    </NoteSlide>

    <NoteSlide title="疑問詞加 to 不定詞表示應該做的事" mark="when to get married">
      <div class="rows is-labeled">
        <div>
          <span class="term">what</span>
          <span
            ><NoteMark sentence="I don't know what to say." :marks="['what to say']" /><span
              class="translation"
              >我不知道要說什麼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">how</span>
          <span
            ><NoteMark
              sentence="Can you tell me how to get to the station?"
              :marks="['how to get']"
            /><span class="translation">你可以告訴我怎麼去車站嗎？</span></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="Please tell us when to start." :marks="['when to start']" /><span
              class="translation"
              >請告訴我們什麼時候開始。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">原句的 <code>when to get married</code> 是應該什麼時候結婚。</p>
    </NoteSlide>

    <NoteSlide title="whether to 表示要不要做某件事" mark="whether to have children">
      <div class="rows is-labeled">
        <div>
          <span class="term">or not</span>
          <span
            ><NoteMark
              sentence="I can't decide whether to go or not."
              :marks="['whether to go', 'or not']"
            /><span class="translation">我無法決定要不要去。</span></span
          >
        </div>
        <div>
          <span class="term">or + 另一個選擇</span>
          <span
            ><NoteMark
              sentence="She is thinking about whether to study in Japan or in Korea."
              :marks="['whether to study', 'or in Korea']"
            /><span class="translation">她在考慮要去日本還是韓國讀書。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>or not</code> 可以省略。<br /><code>if</code> 不接
        <code>to</code> 不定詞，這個位置只用 <code>whether</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="get married 是結婚的動作，be married 是已婚的狀態" mark="get married">
      <div class="rows is-labeled">
        <div>
          <span class="term">get married<br /><i>動作</i></span>
          <span
            ><NoteMark sentence="My sister got married last year." :marks="['got married']" /><span
              class="translation"
              >我姊姊去年結婚了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be married<br /><i>狀態</i></span>
          <span
            ><NoteMark
              sentence="My parents have been married for twenty years."
              :marks="['been married']"
            /><span class="translation">我爸媽結婚二十年了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>get married</code> 常跟過去式和時間一起用。<br /><code>be married</code> 常跟現在式或
        <code>for</code> 加一段時間一起用。
      </p>
    </NoteSlide>

    <NoteSlide title="get married 和 be married 用 to 接人，marry 直接接人" mark="get married">
      <div class="rows is-labeled">
        <div>
          <span class="term">get married to</span>
          <span
            ><NoteMark
              sentence="Ann got married to a Japanese man."
              :marks="['got married to']"
            /><span class="translation">Ann 嫁給了一個日本人。</span></span
          >
        </div>
        <div>
          <span class="term">be married to</span>
          <span
            ><NoteMark sentence="Ken is married to a nurse." :marks="['is married to']" /><span
              class="translation"
              >Ken 跟一位護理師結婚了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">marry</span>
          <span
            ><NoteMark sentence="He married a girl from Osaka." :marks="['married a girl']" /><span
              class="translation"
              >他跟一個大阪來的女孩結婚了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">跟誰結婚不用 <code>with</code>。</p>
    </NoteSlide>

    <NoteSlide title="訂婚和離婚也分成動作和狀態">
      <div class="rows is-labeled">
        <div>
          <span class="term">get engaged<br /><i>動作</i></span>
          <span
            ><NoteMark
              sentence="My brother got engaged last month."
              :marks="['got engaged']"
            /><span class="translation">我哥哥上個月訂婚了。</span></span
          >
        </div>
        <div>
          <span class="term">be engaged<br /><i>狀態</i></span>
          <span
            ><NoteMark
              sentence="My best friend is engaged to a doctor."
              :marks="['is engaged']"
            /><span class="translation">我最好的朋友跟一位醫生訂婚了。</span></span
          >
        </div>
        <div>
          <span class="term">get divorced<br /><i>動作</i></span>
          <span
            ><NoteMark
              sentence="My aunt and uncle got divorced last year."
              :marks="['got divorced']"
            /><span class="translation">我阿姨和姨丈去年離婚了。</span></span
          >
        </div>
        <div>
          <span class="term">be divorced<br /><i>狀態</i></span>
          <span
            ><NoteMark sentence="Her parents are divorced." :marks="['are divorced']" /><span
              class="translation"
              >她爸媽離婚了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
