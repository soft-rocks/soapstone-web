<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 019, as slides, in the order of notes/dragon-english-basic-100/019.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="被動語態的副詞放在 be 動詞和過去分詞中間" mark="is widely used">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The internet', role: '主詞' },
          { t: 'is', role: 'be 動詞', kind: 'key' },
          { t: 'widely', role: '副詞', kind: 'key', ring: true, alts: ['well', 'often', 'highly'] },
          { t: 'used,', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>widely</code> 表示範圍很廣。</p>
    </NoteSlide>

    <NoteSlide title="well、often、highly 也放在 be 動詞和過去分詞中間" mark="widely">
      <div class="rows is-labeled">
        <div>
          <span class="term">often</span>
          <span
            ><NoteMark sentence="This bridge is often used by students." :marks="['often']" /><span
              class="translation"
              >學生常走這座橋。</span
            ></span
          >
        </div>
        <div>
          <span class="term">well</span>
          <span
            ><NoteMark
              sentence="The new teacher is well liked by the students."
              :marks="['well']"
            /><span class="translation">新老師很受學生喜愛。</span></span
          >
        </div>
        <div>
          <span class="term">highly</span>
          <span
            ><NoteMark
              sentence="This doctor is highly respected in the village."
              :marks="['highly']"
            /><span class="translation">這位醫生在村子裡很受尊敬。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="現在完成進行式表示動作從過去一直持續到現在"
      mark="have been rapidly increasing"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'sales of personal computers', role: '主詞' },
          { t: 'have been', kind: 'key' },
          { t: 'rapidly', kind: 'dim' },
          { t: 'increasing', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark">原句表示銷售量這幾年一直在增加。這個動作可能還會繼續。</p>
    </NoteSlide>

    <NoteSlide title="現在完成進行式常跟 for 或 since 一起用" mark="have been rapidly increasing">
      <div class="rows is-labeled">
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark
              sentence="I have been studying English for six years."
              :marks="['have been studying', 'for six years']"
            /><span class="translation">我學英文已經學了六年。</span></span
          >
        </div>
        <div>
          <span class="term">since</span>
          <span
            ><NoteMark
              sentence="It has been snowing since last night."
              :marks="['has been snowing', 'since last night']"
            /><span class="translation">從昨晚開始一直在下雪。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="over the last 加時間，表示從過去到現在的這段期間"
      mark="over the last few years"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'over', role: '介系詞', kind: 'key' },
          { t: 'the last', kind: 'key', alts: ['the past'] },
          { t: 'few', role: '數字 / few', alts: ['two', 'ten'] },
          { t: 'years.', role: '時間單位' },
        ]"
      />
      <p class="remark"><code>last</code> 和 <code>past</code> 在這裡意思一樣。</p>
    </NoteSlide>

    <NoteSlide title="over the last 常跟現在完成式一起用" mark="over the last few years">
      <div class="rows is-labeled">
        <div>
          <span class="term">the last</span>
          <span
            ><NoteMark
              sentence="Prices have gone up over the last two years."
              :marks="['have gone up', 'over the last two years']"
            /><span class="translation">過去兩年物價上漲了。</span></span
          >
        </div>
        <div>
          <span class="term">the past</span>
          <span
            ><NoteMark
              sentence="The town has changed a lot over the past ten years."
              :marks="['has changed', 'over the past ten years']"
            /><span class="translation">過去十年這個小鎮改變了很多。</span></span
          >
        </div>
      </div>
      <p class="remark">現在完成進行式也常跟 <code>over the last</code> 一起用。</p>
    </NoteSlide>
  </NoteDeck>
</template>
