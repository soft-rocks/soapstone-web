<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 070, as slides, in the order of notes/dragon-english-basic-100/070.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="exchange 後面接交換的東西，with 後面接交換的對象"
      mark="exchange thoughts and ideas with"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'you can', kind: 'dim' },
          { t: 'exchange', role: '動詞', kind: 'key' },
          { t: 'thoughts and ideas', role: '交換的東西' },
          { t: 'with', role: '介系詞', kind: 'key' },
          { t: 'people all over the world,', role: '交換的對象' },
        ]"
      />
      <p class="remark">雙方互相給對方想法和意見。</p>
    </NoteSlide>

    <NoteSlide title="主詞已經包含交換的雙方時，不用 with" mark="with">
      <div class="rows is-labeled">
        <div>
          <span class="term">with + 人</span>
          <span
            ><NoteMark
              sentence="I exchanged phone numbers with Ann at the party."
              :marks="['with Ann']"
            /><span class="translation">我在派對上跟 Ann 交換了電話號碼。</span></span
          >
        </div>
        <div>
          <span class="term">主詞是雙方</span>
          <span
            ><NoteMark sentence="Tom and I exchanged seats." :marks="['Tom and I']" /><span
              class="translation"
              >Tom 和我換了座位。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="exchange A for B 表示拿 A 去換 B" mark="exchange">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Can I', kind: 'dim' },
          { t: 'exchange', role: '動詞', kind: 'key' },
          { t: 'this shirt', role: '東西 A' },
          { t: 'for', role: '介系詞', kind: 'key' },
          { t: 'a smaller one?', role: '東西 B' },
        ]"
      />
      <p class="translation">我可以把這件襯衫換成小一號的嗎？</p>
    </NoteSlide>

    <NoteSlide title="regardless of 表示後面的條件不影響結果" mark="regardless of">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'regardless of', role: '不管', kind: 'key' },
          { t: 'their age, sex, or nationality.', role: '不影響結果的條件' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="regardless of 後面接名詞或疑問詞帶出的子句" mark="regardless of">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="We will go regardless of the weather."
              :marks="['the weather']"
            /><span class="translation">不管天氣怎樣，我們都會去。</span></span
          >
        </div>
        <div>
          <span class="term">where 子句</span>
          <span
            ><NoteMark
              sentence="Everyone pays the same price regardless of where they sit."
              :marks="['where they sit']"
            /><span class="translation">不管坐在哪裡，每個人都付一樣的價錢。</span></span
          >
        </div>
        <div>
          <span class="term">how 子句</span>
          <span
            ><NoteMark
              sentence="Everyone is welcome, regardless of how well they can sing."
              :marks="['how well they can sing']"
            /><span class="translation">不管唱得好不好，每個人都歡迎。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="並列的名詞用逗號隔開，最後一個名詞前面加 and 或 or"
      mark="age, sex, or nationality"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'age,', role: '名詞' },
          { t: 'sex,', role: '名詞' },
          { t: 'or', role: '連接詞', kind: 'key', ring: true },
          { t: 'nationality.', role: '名詞' },
        ]"
      />
      <p class="remark">這些名詞都接在 <code>regardless of</code> 後面。</p>
    </NoteSlide>

    <NoteSlide title="and 或 or 前面的逗號可以省略" mark="sex, or">
      <div class="rows is-labeled">
        <div>
          <span class="term">有逗號</span>
          <span
            ><NoteMark sentence="Tom, Ann, and I went to the beach." :marks="['Ann, and']" /><span
              class="translation"
              >Tom、Ann 和我去了海邊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒有逗號</span>
          <span
            ><NoteMark
              sentence="We talked about music, movies and sports."
              :marks="['movies and']"
            /><span class="translation">我們聊了音樂、電影和運動。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
