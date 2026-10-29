<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 082, as slides, in the order of notes/dragon-english-basic-100/082.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="be located 後面接表示地點的片語" mark="is located">
      <div class="rows is-labeled">
        <div>
          <span class="term">near</span>
          <span
            ><NoteMark
              sentence="Our school is located near the station."
              :marks="['near the station']"
            /><span class="translation">我們學校位在車站附近。</span></span
          >
        </div>
        <div>
          <span class="term">on</span>
          <span
            ><NoteMark sentence="The hotel is located on a hill." :marks="['on a hill']" /><span
              class="translation"
              >那家飯店位在一座山丘上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">next to</span>
          <span
            ><NoteMark
              sentence="The library is located next to the park."
              :marks="['next to the park']"
            /><span class="translation">圖書館位在公園旁邊。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>be located</code> 表示一個地方或建築在哪裡。主詞是城市、建築、店這類不會移動的東西。
      </p>
    </NoteSlide>

    <NoteSlide title="說在某個地點的哪一邊，用方位詞加 of" mark="east of Lake Hamana">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Hamamatsu', role: '主詞', kind: 'dim' },
          { t: 'is located', role: '動詞' },
          { t: 'east', role: '方位詞', kind: 'key', alts: ['west', 'south', 'north'] },
          { t: 'of', role: '介系詞', kind: 'key' },
          { t: 'Lake Hamana,', role: '地點' },
        ]"
      />
      <p class="remark">方位詞前面不加 <code>the</code>。</p>
    </NoteSlide>

    <NoteSlide title="逗號後面的 which 子句補充說明前面的名詞" mark="which">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Lake Hamana,', role: '名詞', kind: 'key' },
          {
            t: 'which is famous for its beautiful scenery and delicious fish.',
            role: '補充說明',
            kind: 'key',
          },
        ]"
      />
      <p class="remark">拿掉這個子句，句子的意思還是完整的。這種子句不用 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="which 可以當子句的主詞或受詞" mark="which is">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞<br /><i>which + 動詞</i></span>
          <span
            ><NoteMark
              sentence="I visited Kyoto, which has many old temples."
              :marks="['which has']"
            /><span class="translation">我去了京都，那裡有很多古老的寺廟。</span></span
          >
        </div>
        <div>
          <span class="term">受詞<br /><i>which + 主詞 + 動詞</i></span>
          <span
            ><NoteMark
              sentence="I lost my umbrella, which I bought in Tokyo."
              :marks="['which I bought']"
            /><span class="translation">我弄丟了我的傘，那是我在東京買的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句在句子中間時，前後都加逗號" mark="which">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Mt. Fuji,', role: '名詞' },
          { t: 'which is the highest mountain in Japan,', role: '補充說明', kind: 'key' },
          { t: 'is very beautiful in winter.', kind: 'dim' },
        ]"
      />
      <p class="translation">富士山是日本最高的山，冬天非常美。</p>
    </NoteSlide>

    <NoteSlide title="be famous for 的 for 後面接讓它有名的東西" mark="famous for">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'which', role: '主詞', kind: 'dim' },
          { t: 'is famous for', role: '動詞', kind: 'key' },
          { t: 'its beautiful scenery and delicious fish.', role: '有名的東西' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be famous as 的 as 後面接身分" mark="famous for">
      <NoteFork
        stem="is famous"
        :branches="[
          { head: 'for', rest: 'its hot springs', meaning: '有名的東西', zh: '以溫泉聞名' },
          { head: 'as', rest: 'Japan\'s old capital', meaning: '身分', zh: '以日本的古都聞名' },
        ]"
      />
    </NoteSlide>
  </NoteDeck>
</template>
