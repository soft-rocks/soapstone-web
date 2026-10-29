<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-808, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have 加 been 和動詞-ing" mark="have been thinking">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have been thinking', role: 'have + been + 動詞-ing', kind: 'key', ring: true },
          { t: 'about your letter.', role: '介系詞 + 受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我一直在想你信裡說的事。</p>
      <p class="remark">朋友寫信問要不要辭職出國念書，說話者回信。</p>
    </NoteSlide>

    <NoteSlide title="第三人稱單數用 has" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you / we / they</span>
          <span
            ><NoteMark
              sentence="Jenny is my oldest friend. We've been studying together since grade one."
              :marks="['We\'ve been']"
            /><span class="translation">珍妮是我最老的朋友。我們從一年級就一起念書。</span></span
          >
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span
            ><NoteMark
              sentence="My new neighbour is a teacher. She has been helping me with my English."
              :marks="['has been']"
            /><span class="translation">我的新鄰居是老師。她一直在幫我學英文。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 的拼法" mark="thinking">
      <div class="rows is-labeled">
        <div>
          <span class="term">加 -ing</span>
          <span>think → thinking、study → studying</span>
        </div>
        <div>
          <span class="term">去 e</span>
          <span>live → living、make → making</span>
        </div>
        <div>
          <span class="term">重複字尾</span>
          <span>run → running、sit → sitting</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 後面接 been" mark="been">
      <NoteFix
        wrong="I have be thinking about your offer of a job."
        right="I have been thinking about your offer of a job."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="第三人稱單數用 has" mark="have">
      <NoteFix
        wrong="My cousin have been working in a hotel in Dubai."
        right="My cousin has been working in a hotel in Dubai."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="been 後面接動詞-ing" mark="thinking">
      <NoteFix
        wrong="We've been played in the same team since primary school."
        right="We've been playing in the same team since primary school."
        fix="playing"
      />
    </NoteSlide>

    <NoteSlide title="run 要重複 n" mark="thinking">
      <NoteFix
        wrong="My aunt has been runing in the park before work."
        right="My aunt has been running in the park before work."
        fix="running"
      />
    </NoteSlide>

    <NoteSlide title="he's been 的 's 是 has" mark="have been">
      <div class="rows is-labeled">
        <div>
          <span class="term">he's been<br /><i>has</i></span>
          <span
            ><NoteMark
              sentence="Grandpa is having a rest now. He's been working in the garden."
              :marks="['He\'s been']"
            /><span class="translation">爺爺現在在休息。他剛剛一直在花園裡工作。</span></span
          >
        </div>
        <div>
          <span class="term">he's<br /><i>is</i></span>
          <span
            ><NoteMark
              sentence="Grandpa can't come to the phone. He's working in the garden."
              :marks="['He\'s']"
            /><span class="translation">爺爺沒辦法接電話。他正在花園裡工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在完成簡單式說活動做完了" mark="have been thinking">
      <div class="rows is-labeled">
        <div>
          <span class="term">進行式</span>
          <span
            ><NoteMark
              sentence="There's white paint on my shoes. I've been painting the fence."
              :marks="['been painting']"
            /><span class="translation">我的鞋子上有白色油漆。我剛剛一直在漆圍籬。</span></span
          >
        </div>
        <div>
          <span class="term">簡單式</span>
          <span
            ><NoteMark
              sentence="Come and see the garden. I've painted the fence."
              :marks="['painted']"
            /><span class="translation">來看看花園。我把圍籬漆好了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
