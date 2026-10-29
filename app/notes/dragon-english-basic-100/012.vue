<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 012, as slides, in the order of notes/dragon-english-basic-100/012.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="come 往說話的人或聽話的人那裡，go 往別的地方" mark="coming">
      <div class="rows is-labeled">
        <div>
          <span class="term">come</span>
          <span
            ><NoteMark
              sentence="Can you come to my party on Saturday?"
              :marks="['come to my party']"
            /><span class="translation">你星期六可以來我的派對嗎？</span></span
          >
        </div>
        <div>
          <span class="term">go</span>
          <span
            ><NoteMark
              sentence="I'm going to the library now."
              :marks="['going to the library']"
            /><span class="translation">我現在要去圖書館。</span></span
          >
        </div>
      </div>
      <p class="remark">原句裡 Tom 要走到媽媽那裡，所以用 <code>come</code>。</p>
    </NoteSlide>

    <NoteSlide title="bring 帶到說話的人或聽話的人那裡，take 帶到別的地方" mark="coming">
      <div class="rows is-labeled">
        <div>
          <span class="term">bring</span>
          <span
            ><NoteMark
              sentence="Can I bring my sister to the party?"
              :marks="['bring my sister']"
            /><span class="translation">我可以帶我妹妹來派對嗎？</span></span
          >
        </div>
        <div>
          <span class="term">take</span>
          <span
            ><NoteMark
              sentence="Take this letter to the post office."
              :marks="['Take this letter']"
            /><span class="translation">把這封信拿去郵局。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在進行式可以表示馬上就要做的事" mark="I’m coming">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'OK, Mom.', kind: 'dim' },
          { t: 'I’m', role: '主詞 + be', kind: 'key' },
          { t: 'coming.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark">原句的 <code>I’m coming</code> 表示我現在就過去。</p>
    </NoteSlide>

    <NoteSlide title="come、go、leave 常用現在進行式表示馬上要移動" mark="coming">
      <div class="rows is-labeled">
        <div>
          <span class="term">come</span>
          <span
            ><NoteMark sentence="Hurry up. The bus is coming." :marks="['is coming']" /><span
              class="translation"
              >快點，公車要來了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">go</span>
          <span
            ><NoteMark sentence="My sister is going out now." :marks="['is going']" /><span
              class="translation"
              >我姊姊現在要出門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">leave</span>
          <span
            ><NoteMark
              sentence="I'm leaving now. See you tomorrow."
              :marks="['I\'m leaving']"
            /><span class="translation">我現在要走了。明天見。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="東西當主詞時，be ready 表示東西可以用或可以吃了" mark="dinner is ready">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Tom,', kind: 'dim' },
          { t: 'dinner', role: '東西' },
          { t: 'is ready.', role: '可以吃了', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>ready</code> 是形容詞，意思是準備好了。</p>
    </NoteSlide>

    <NoteSlide title="人當主詞時，be ready 後面接 to 加動詞原形或 for 加名詞" mark="ready">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 動詞原形</span>
          <span
            ><NoteMark sentence="Are you ready to order?" :marks="['ready to order']" /><span
              class="translation"
              >你準備好點餐了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">for + 名詞</span>
          <span
            ><NoteMark sentence="We are ready for the trip." :marks="['ready for the trip']" /><span
              class="translation"
              >我們準備好去旅行了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be ready 是已經準備好，get ready 是去做準備" mark="is ready">
      <div class="rows is-labeled">
        <div>
          <span class="term">be ready</span>
          <span
            ><NoteMark
              sentence="The students are ready for the final exam."
              :marks="['are ready']"
            /><span class="translation">學生們準備好期末考了。</span></span
          >
        </div>
        <div>
          <span class="term">get ready</span>
          <span
            ><NoteMark
              sentence="The children are getting ready for school."
              :marks="['getting ready']"
            /><span class="translation">孩子們正在準備上學。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
