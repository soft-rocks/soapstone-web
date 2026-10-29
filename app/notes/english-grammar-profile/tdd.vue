<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-politeness-after-if, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句用過去式，請求比較客氣" mark="if you sent">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'It would be great', role: '主句', kind: 'key' },
          { t: 'if', role: '請求' },
          { t: 'you', role: '子句的主詞' },
          { t: 'sent', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'me a free copy of the next edition.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果您能寄一本免費的下一期給我，那就太好了。</p>
      <p class="remark">說話者寫信給出版社。</p>
    </NoteSlide>

    <NoteSlide title="常見的主句" mark="It would be great">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark
              sentence="It would be helpful if you brought your passport."
              :marks="['It would be helpful']"
          /></span>
        </div>
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="I would be grateful if you gave me this job."
              :marks="['I would be grateful']"
          /></span>
        </div>
        <div>
          <span class="term">請對方同意</span>
          <span
            ><NoteMark
              sentence="Would you mind if I opened the window?"
              :marks="['Would you mind if I']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞用 were" mark="if you sent">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'It would be wonderful', role: '主句' },
          { t: 'if', role: '請求' },
          { t: 'you', role: '子句的主詞' },
          { t: 'were', role: 'be 動詞', kind: 'key', ring: true },
          { t: 'able to join us.', kind: 'dim' },
        ]"
      />
      <p class="translation">您要是能跟我們一起來，那就太好了。</p>
    </NoteSlide>

    <NoteSlide title="if 子句用過去式" mark="sent">
      <NoteFix
        wrong="I would be grateful if you send me a form."
        right="I would be grateful if you sent me a form."
        fix="sent"
      />
    </NoteSlide>

    <NoteSlide title="主句用 would" mark="It would be great">
      <NoteFix
        wrong="It will be helpful if you told me the price."
        right="It would be helpful if you told me the price."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="appreciate 後面接 it" mark="It would be great">
      <NoteFix
        wrong="I would appreciate if you replied by Friday."
        right="I would appreciate it if you replied by Friday."
        fix="appreciate it"
      />
    </NoteSlide>

    <NoteSlide title="直述句用句號" mark="It would be great">
      <NoteFix
        wrong="I would be grateful if you gave me this job?"
        right="I would be grateful if you gave me this job."
        fix="job."
      />
    </NoteSlide>

    <NoteSlide title="客氣的 if 和一般的條件句" mark="if you sent">
      <div class="rows is-labeled">
        <div>
          <span class="term">請求</span>
          <span
            ><NoteMark sentence="It would be great if you sent me a copy." :marks="['sent']" /><span
              class="translation"
              >如果您能寄一本給我，那就太好了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">條件</span>
          <span
            ><NoteMark
              sentence="If you send the form today, it will arrive on Friday."
              :marks="['send', 'will arrive']"
            /><span class="translation">如果你今天寄表格，星期五就會到。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去式和 could 意思一樣" mark="if you sent">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="I would be grateful if you sent me the details."
              :marks="['sent']"
            /><span class="translation">如果您能寄詳細資料給我，我會很感激。</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="I would be grateful if you could send me the details."
              :marks="['could send']"
            /><span class="translation">如果您可以寄詳細資料給我，我會很感激。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
