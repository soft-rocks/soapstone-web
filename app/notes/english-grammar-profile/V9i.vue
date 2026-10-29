<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-main-verbs, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞是第三人稱單數，兩個動詞都加 -s 或 -es">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'gets up', role: '第一個一般動詞', kind: 'key' },
          { t: 'at six o\'clock', role: '時間', kind: 'dim' },
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'goes', role: '第二個一般動詞', kind: 'key' },
          { t: 'to work.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">他六點起床，然後去上班。</p>
      <p class="remark">每天都做的事用現在簡單式。</p>
    </NoteSlide>

    <NoteSlide title="現在簡單式的動詞照主詞變化" mark="gets">
      <div class="rows is-labeled">
        <div>
          <span class="term">I、you、we、they<br /><i>原形</i></span>
          <span
            ><NoteMark sentence="I have very good friends." :marks="['have']" /><span
              class="translation"
              >我有很好的朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he、she、it<br /><i>加 -&#x2060;s</i></span>
          <span
            ><NoteMark sentence="She comes from India." :marks="['comes']" /><span
              class="translation"
              >她是印度人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第三人稱單數加 -s、-es，或把 y 改成 i 再加 -es" mark="goes">
      <div class="rows is-labeled">
        <div>
          <span class="term">加 -&#x2060;s</span>
          <span>gets、lives、works</span>
        </div>
        <div>
          <span class="term"
            >-&#x2060;o、-&#x2060;s、-&#x2060;sh、-&#x2060;ch、-&#x2060;x 加 -&#x2060;es</span
          >
          <span>goes、watches、fixes</span>
        </div>
        <div>
          <span class="term">子音 + y</span>
          <span>study → studies</span>
        </div>
        <div>
          <span class="term">have</span>
          <span>has</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去簡單式：規則動詞加 -ed，不規則動詞各有自己的過去式" mark="gets">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span
            ><NoteMark sentence="My grandmother lived in a village." :marks="['lived']" /><span
              class="translation"
              >我奶奶以前住在一個村子裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span
            ><NoteMark sentence="I often went there." :marks="['went']" /><span class="translation"
              >我常常去那裡。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">過去簡單式的動詞不照主詞變化。</p>
    </NoteSlide>

    <NoteSlide title="主詞是單數名詞，現在簡單式的動詞加 -s" mark="gets">
      <NoteFix wrong="My sister work in a bank." right="My sister works in a bank." fix="works" />
    </NoteSlide>

    <NoteSlide title="主詞是複數名詞，動詞用原形" mark="goes">
      <NoteFix wrong="My parents lives in Taipei." right="My parents live in Taipei." fix="live" />
    </NoteSlide>

    <NoteSlide title="go 的過去式是 went" mark="goes">
      <NoteFix
        wrong="Last summer we goed to the beach."
        right="Last summer we went to the beach."
        fix="went"
      />
    </NoteSlide>

    <NoteSlide title="have 的第三人稱單數現在式是 has">
      <NoteFix wrong="She haves long, dark hair." right="She has long, dark hair." fix="has" />
    </NoteSlide>

    <NoteSlide title="子音 + y 的動詞，把 y 改成 i 再加 -es">
      <NoteFix
        wrong="He studys English every evening."
        right="He studies English every evening."
        fix="studies"
      />
    </NoteSlide>

    <NoteSlide title="否定句的 doesn't 後面，一般動詞用原形" mark="gets">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'doesn\'t', role: 'doesn\'t', kind: 'key' },
          { t: 'like', role: '原形', kind: 'key', ring: true },
          { t: 'coffee.', kind: 'dim' },
        ]"
      />
      <p class="translation">她不喜歡咖啡。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
