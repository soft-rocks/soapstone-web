<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 024, as slides, in the order of notes/dragon-english-basic-100/024.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="一段時間放在 after 前面，表示兩件事中間隔了多久"
      mark="Less than twenty-four hours after"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Less than', alts: ['about', 'only'] },
          { t: 'twenty-four hours', role: '一段時間', kind: 'key' },
          { t: 'after', role: '連接詞', kind: 'key' },
          { t: 'I return to my hometown,', role: '主詞 + 動詞' },
        ]"
      />
      <p class="remark">原句表示回到家鄉之後不到二十四小時。</p>
    </NoteSlide>

    <NoteSlide title="一段時間也可以放在 before 前面" mark="after">
      <div class="rows is-labeled">
        <div>
          <span class="term">after</span>
          <span
            ><NoteMark
              sentence="Two days after I arrived in Paris, I lost my wallet."
              :marks="['Two days after']"
            /><span class="translation">我到巴黎兩天之後，弄丟了錢包。</span></span
          >
        </div>
        <div>
          <span class="term">before</span>
          <span
            ><NoteMark
              sentence="The bus left five minutes before we got to the stop."
              :marks="['five minutes before']"
            /><span class="translation">公車在我們到站前五分鐘開走了。</span></span
          >
        </div>
        <div>
          <span class="term">only</span>
          <span
            ><NoteMark
              sentence="Only a week after he started the job, he quit."
              :marks="['Only a week after']"
            /><span class="translation">他才做那份工作一個星期就辭職了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="without 是介系詞，後面接動詞-ing，表示沒有做某件事"
      mark="without realizing it"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'without', role: '介系詞', kind: 'key' },
          { t: 'realizing', role: '動詞-ing', kind: 'key' },
          { t: 'it,', role: '受詞' },
        ]"
      />
      <p class="remark">
        <code>without realizing it</code> 表示自己沒有發覺。<code>it</code> 指後面講的說方言這件事。
      </p>
    </NoteSlide>

    <NoteSlide title="start 後面接 to 不定詞或動詞-ing，意思一樣" mark="start to talk">
      <div class="rows is-labeled">
        <div>
          <span class="term">to 不定詞</span>
          <span
            ><NoteMark sentence="It started to rain." :marks="['started to rain']" /><span
              class="translation"
              >開始下雨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="She started learning Korean last year."
              :marks="['started learning']"
            /><span class="translation">她去年開始學韓文。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="begin 也可以接 to 不定詞或動詞-ing" mark="start">
      <div class="rows is-labeled">
        <div>
          <span class="term">to 不定詞</span>
          <span
            ><NoteMark sentence="Everyone began to laugh." :marks="['began to laugh']" /><span
              class="translation"
              >大家開始笑了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="We began walking toward the station."
              :marks="['began walking']"
            /><span class="translation">我們開始往車站走。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在式表示每次都會發生的事" :mark="['return', 'start']">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… after I', kind: 'dim' },
          { t: 'return', role: 'after 子句\n現在式', kind: 'key' },
          { t: '… I', kind: 'dim' },
          { t: 'start', role: '主要子句\n現在式', kind: 'key' },
          { t: 'to talk …', kind: 'dim' },
        ]"
      />
      <p class="remark">每次回到家鄉都會發生這件事。</p>
    </NoteSlide>

    <NoteSlide title="every time 和 when 子句講每次都發生的事，也用現在式" mark="return">
      <div class="rows is-labeled">
        <div>
          <span class="term">every time</span>
          <span
            ><NoteMark
              sentence="Every time I see this photo, I smile."
              :marks="['see', 'smile']"
            /><span class="translation">我每次看到這張照片都會微笑。</span></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="When I drink coffee at night, I can't sleep."
              :marks="['drink', 'can\'t sleep']"
            /><span class="translation">我晚上喝咖啡的話就睡不著。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
