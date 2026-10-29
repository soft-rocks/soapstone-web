<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 044, as slides, in the order of notes/dragon-english-basic-100/044.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="so 加形容詞表示程度很高，that 子句表示結果" mark="so hot that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'it is', kind: 'dim' },
          { t: 'so', role: '程度很高', kind: 'key' },
          { t: 'hot', role: '形容詞', kind: 'key' },
          { t: 'that they don’t feel like doing anything.', role: 'that 子句：結果' },
        ]"
      />
      <p class="remark">天氣很熱，結果是人什麼都不想做。</p>
    </NoteSlide>

    <NoteSlide title="so 後面接形容詞或副詞" mark="so hot">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The soup was so hot that I couldn't eat it."
              :marks="['so hot']"
            /><span class="translation">湯太燙了，我沒辦法喝。</span></span
          >
        </div>
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="He spoke so fast that nobody understood him."
              :marks="['so fast']"
            /><span class="translation">他講得太快，沒有人聽得懂他。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="feel like 接動名詞，意思是想要做某件事" mark="feel like doing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'they', role: '主詞', kind: 'dim' },
          { t: 'don’t feel like', role: '不想做', kind: 'key' },
          { t: 'doing', role: '動名詞', kind: 'key', ring: true },
          { t: 'anything.', role: '受詞' },
        ]"
      />
      <p class="remark"><code>like</code> 在這裡是介系詞。</p>
    </NoteSlide>

    <NoteSlide title="feel like 後面也可以接名詞" mark="feel like">
      <div class="rows is-labeled">
        <div>
          <span class="term">動名詞</span>
          <span
            ><NoteMark
              sentence="I don't feel like going out tonight."
              :marks="['going out']"
            /><span class="translation">我今晚不想出門。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="Do you feel like a cup of tea?" :marks="['a cup of tea']" /><span
              class="translation"
              >你想來杯茶嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="However 放在第二個句子的開頭，連接意思相反的兩句" mark="However">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Many people like winter.', role: '句子', kind: 'dim' },
          { t: 'However,', role: '副詞 + 逗號', kind: 'key' },
          { t: 'I like summer better.', role: '意思相反的句子' },
        ]"
      />
      <p class="translation">很多人喜歡冬天。不過，我比較喜歡夏天。</p>
      <p class="remark"><code>however</code> 是副詞，意思是不過、但是。</p>
    </NoteSlide>
  </NoteDeck>
</template>
