<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 023, as slides, in the order of notes/dragon-english-basic-100/023.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="現在進行式講說話這個時候的情況" mark="not wearing glasses now">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’m not', role: 'am + not' },
          { t: 'wearing', role: '動詞-ing', kind: 'key' },
          { t: 'glasses', role: '受詞' },
          { t: 'now,', role: '現在', kind: 'key' },
        ]"
      />
      <p class="remark">說的人平常可能戴眼鏡，只是現在沒戴。</p>
    </NoteSlide>

    <NoteSlide title="現在式講平常的習慣，現在進行式講現在的情況" mark="not wearing">
      <div class="rows is-labeled">
        <div>
          <span class="term">wear</span>
          <span
            ><NoteMark
              sentence="I usually wear glasses, but I'm not wearing them now."
              :marks="['wear', 'not wearing']"
            /><span class="translation">我平常戴眼鏡，但現在沒戴。</span></span
          >
        </div>
        <div>
          <span class="term">eat</span>
          <span
            ><NoteMark
              sentence="We usually eat at home, but tonight we are eating out."
              :marks="['eat', 'are eating']"
            /><span class="translation">我們平常在家吃飯，但今晚我們在外面吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="間接問句用直述句的語序，主詞放在動詞前面" mark="what the sign says">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I can’t make out', kind: 'dim' },
          { t: 'what', role: '疑問詞', kind: 'key' },
          { t: 'the sign', role: '主詞', kind: 'key' },
          { t: 'says.', role: '動詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>what the sign says</code> 是 <code>make out</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="間接問句拿掉助動詞 does，動詞照主詞變化" mark="says">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'what', role: '疑問詞' },
          { t: 'does', role: '拿掉', kind: 'gone' },
          { t: 'the sign', role: '主詞' },
          { t: 'says', role: '動詞 + s', kind: 'key', ring: true },
        ]"
      />
      <p class="remark">
        問句 <code>What does the sign say?</code> 放進句子裡變成 <code>what the sign says</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="疑問詞本身是主詞時，後面直接接動詞" mark="what">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I can’t make out', kind: 'dim' },
          { t: 'who', role: '疑問詞\n當主詞', kind: 'key' },
          { t: 'is standing', role: '動詞', kind: 'key' },
          { t: 'over there.', kind: 'dim' },
        ]"
      />
      <p class="translation">我看不清楚站在那裡的是誰。</p>
    </NoteSlide>

    <NoteSlide title="間接問句可以當 make out、know、tell 的受詞" mark="make out">
      <div class="rows is-labeled">
        <div>
          <span class="term">make out</span>
          <span
            ><NoteMark
              sentence="Can you make out what she is saying?"
              :marks="['what she is saying']"
            /><span class="translation">你聽得清楚她在說什麼嗎？</span></span
          >
        </div>
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark
              sentence="Do you know what time the store opens?"
              :marks="['what time the store opens']"
            /><span class="translation">你知道那家店幾點開門嗎？</span></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark
              sentence="Please tell me what this word means."
              :marks="['what this word means']"
            /><span class="translation">請告訴我這個字是什麼意思。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>make out</code> 表示勉強看清楚或聽清楚。</p>
    </NoteSlide>
  </NoteDeck>
</template>
