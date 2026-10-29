<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-prepositional-phrases-fronting, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞片語放在句首，主詞和動詞的順序不變">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In the morning,', role: '介系詞片語', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'go', role: '動詞' },
          { t: 'to the beach.', kind: 'dim' },
        ]"
      />
      <p class="translation">早上我會去海邊。</p>
    </NoteSlide>

    <NoteSlide title="句首的介系詞片語說出時間、地點、起點或看法的來源" mark="In the morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="After lunch, we usually go for a walk."
              :marks="['After lunch']"
            /><span class="translation">吃完午飯，我們通常會去散步。</span></span
          >
        </div>
        <div>
          <span class="term">地點</span>
          <span
            ><NoteMark
              sentence="In my country, people eat dinner very late."
              :marks="['In my country']"
            /><span class="translation">在我的國家，大家晚餐都吃得很晚。</span></span
          >
        </div>
        <div>
          <span class="term">起點</span>
          <span
            ><NoteMark
              sentence="From the station, take the number 12 bus."
              :marks="['From the station']"
            /><span class="translation">從車站搭 12 號公車。</span></span
          >
        </div>
        <div>
          <span class="term">看法的來源</span>
          <span
            ><NoteMark
              sentence="In my opinion, the first film was better."
              :marks="['In my opinion']"
            /><span class="translation">我覺得第一集比較好看。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在句首先說出地點，放在句尾先說出發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="In my country, rice is the most popular food."
              :marks="['In my country']"
            /><span class="translation">在我的國家，米飯是最受歡迎的食物。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="Rice is the most popular food in my country."
              :marks="['in my country']"
            /><span class="translation">米飯是我的國家最受歡迎的食物。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較兩個時間時，介系詞片語都放在句首">
      <div class="rows is-labeled">
        <div>
          <span class="term">夏天</span>
          <span
            ><NoteMark
              sentence="In the summer, we go to the beach."
              :marks="['In the summer']"
            /><span class="translation">夏天我們去海邊。</span></span
          >
        </div>
        <div>
          <span class="term">冬天</span>
          <span
            ><NoteMark sentence="In the winter, we go skiing." :marks="['In the winter']" /><span
              class="translation"
              >冬天我們去滑雪。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞片語說出時間時，前面要有介系詞" mark="In">
      <NoteFix
        wrong="The morning, I go to the beach."
        right="In the morning, I go to the beach."
        fix="In"
      />
    </NoteSlide>

    <NoteSlide title="介系詞片語不是主詞，後面要有主詞">
      <NoteFix
        wrong="In my country is very hot in August."
        right="In my country, it is very hot in August."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="介系詞片語放在句首時不倒裝" mark="I go">
      <NoteFix
        wrong="After school go we to the park."
        right="After school, we go to the park."
        fix="we go"
      />
    </NoteSlide>

    <NoteSlide title="一天裡的時段用 in" mark="In">
      <NoteFix
        wrong="On the evening, we have dinner together."
        right="In the evening, we have dinner together."
        fix="In"
      />
    </NoteSlide>

    <NoteSlide title="位置的動詞可以放在主詞前面，用在描寫和故事">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'On the hill', role: '介系詞片語' },
          { t: 'stood', role: '動詞', kind: 'key' },
          { t: 'an old castle.', role: '主詞', kind: 'key' },
        ]"
      />
      <p class="translation">山丘上矗立著一座古堡。</p>
    </NoteSlide>

    <NoteSlide title="Suddenly 是副詞，不是介系詞片語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Suddenly,', role: '副詞', kind: 'key' },
          { t: 'the door opened.', kind: 'dim' },
        ]"
      />
      <p class="translation">突然，門開了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
