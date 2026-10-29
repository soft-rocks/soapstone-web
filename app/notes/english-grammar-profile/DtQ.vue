<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-inversion-with-not-only-but-also, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only 放在句首，did 移到主詞前面" mark="Not only did I find">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Not only', role: '句首', kind: 'key', ring: true },
          { t: 'did', role: '主詞前面', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'find', role: '原形動詞' },
          { t: 'high-technology companies,', kind: 'dim' },
        ]"
      />
      <p class="translation">我不但找到了高科技公司，</p>
      <p class="remark">說話者參觀商展後寫報告給經理。</p>
    </NoteSlide>

    <NoteSlide title="but ... also 接上第二件事，不倒裝" mark="but I also found">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'but', role: '第二件事' },
          { t: 'I', role: '主詞' },
          { t: 'also', role: '主詞後面', kind: 'key', ring: true },
          { t: 'found', role: '過去式' },
          { t: 'shoemakers and plane manufacturers.', kind: 'dim' },
        ]"
      />
      <p class="translation">也找到了做鞋子和造飛機的廠商。</p>
    </NoteSlide>

    <NoteSlide title="but also 後面可以只接名詞" mark="but I also found">
      <NoteMark
        sentence="Not only did we visit Rome, but also Florence and Venice."
        :marks="['but also']"
      />
      <p class="translation">我們不但去了羅馬，還去了佛羅倫斯和威尼斯。</p>
    </NoteSlide>

    <NoteSlide title="否定用 didn't，be 動詞直接移到前面" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't</span>
          <span
            ><NoteMark
              sentence="Not only didn't he apologise, but he also blamed me."
              :marks="['didn\'t he']"
            /><span class="translation">他不但沒道歉，還怪我。</span></span
          >
        </div>
        <div>
          <span class="term">was / were</span>
          <span
            ><NoteMark
              sentence="Not only was the hotel dirty, but it was also noisy."
              :marks="['was the hotel']"
            /><span class="translation">那家飯店不但髒，還很吵。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Not only 在句首，要倒裝" mark="did I">
      <NoteFix
        wrong="Not only I found high-technology companies, but I also found shoemakers."
        right="Not only did I find high-technology companies, but I also found shoemakers."
        fix="did I find"
      />
    </NoteSlide>

    <NoteSlide title="did 後面接原形動詞" mark="find">
      <NoteFix
        wrong="Not only did she wrote the report, but she also presented it."
        right="Not only did she write the report, but she also presented it."
        fix="write"
      />
    </NoteSlide>

    <NoteSlide title="but 後面的子句不倒裝" mark="but I also found">
      <NoteFix
        wrong="Not only did he lose his bag, but did he also miss the bus."
        right="Not only did he lose his bag, but he also missed the bus."
        fix="he also missed"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞不加 did" mark="did">
      <NoteFix
        wrong="Not only did the room be small, but it was also cold."
        right="Not only was the room small, but it was also cold."
        fix="was the room"
      />
    </NoteSlide>

    <NoteSlide title="not only 不在句首，不倒裝" mark="Not only">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞前面</span>
          <span
            ><NoteMark
              sentence="I not only found high-technology companies, but I also found shoemakers."
              :marks="['I not only found']"
          /></span>
        </div>
        <div>
          <span class="term">連接名詞</span>
          <span
            ><NoteMark
              sentence="I found not only high-technology companies but also shoemakers."
              :marks="['not only', 'but also']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在完成式用 have 倒裝" mark="did I">
      <NoteMark
        sentence="Not only have I visited the factory, but I have also met the staff."
        :marks="['have I']"
      />
      <p class="translation">我不但參觀過工廠，也見過員工了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
